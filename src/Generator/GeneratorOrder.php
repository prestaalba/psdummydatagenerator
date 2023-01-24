<?php
/**
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 *
 * @author    ExpertoPrestashop <wilson_alba@rolige.com>
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 */

declare(strict_types=1);

namespace ExpertoPrestashop\Module\PsDummyDataGenerator\Generator;

use Address;
use BoOrderCore;
use Cart;
use Configuration;
use Country;
use Currency;
use Customer;
use Db;
use DbQuery;
use Exception;
use Language;
use PrestaShop\PrestaShop\Adapter\ContextStateManager;
use Shop;

class GeneratorOrder extends GeneratorBase
{
    /**
     * PrestaShop entity
     *
     * @var string
     */
    protected static $entity_class = 'Cart';
    /**
     * Entity vars values generation rules
     *
     * value: static value
     * lang: multilang field
     * faker: faker function
     * args: faker function additional arguments
     * method: get value by invoke special function
     *
     * @var array
     */
    protected static $entity_vars = [
        'id_currency' => ['method' => 'getRandomCurrencyId'],
        'id_customer' => ['method' => 'getConsecutiveCustomerId'],
        'id_lang' => ['method' => 'getRandomLangId'],
    ];

    /**
     * @var ContextStateManager
     */
    private $contextStateManager;

    /**
     * @param ContextStateManager $contextStateManager
     */
    public function __construct(ContextStateManager $contextStateManager)
    {
        parent::__construct();

        $this->contextStateManager = $contextStateManager;
    }

    public function getRandomCurrencyId()
    {
        static $currency_list = null;

        if ($currency_list === null) {
            $currency_list = \array_column(Currency::getCurrencies(), 'id_currency');
        }

        return $currency_list[\array_rand($currency_list)];
    }

    public function getRandomLangId()
    {
        static $lang_list = null;

        if ($lang_list === null) {
            $lang_list = Language::getIDs();
        }

        return $lang_list[\array_rand($lang_list)];
    }

    public function getConsecutiveCustomerId()
    {
        static $customer_list = null;
        if ($customer_list === null) {
            $customer_list = \array_column(Customer::getCustomers(true), 'id_customer');
        }

        static $position = -1;
        if ($position == -1) {
            $position = $this->step_variables['last_pos'] ?? 0;
        }
        if ($position + 1 > \count($customer_list)) {
            $position = 0;
        }

        return $customer_list[$this->step_variables['last_pos'] = $position++];
    }

    public function getTotalRelatedEntities()
    {
        return count(Customer::getCustomers(true));
    }

    private function getRandomProductId()
    {
        static $product_list_data = null;

        if ($product_list_data === null) {
            $sql = new DbQuery();
            $sql->select('p.id_product, s.quantity');
            $sql->from('product', 'p');
            $sql->leftJoin('stock_available', 's', 'p.id_product = s.id_product AND s.id_product_attribute = 0');
            $sql->where('p.active = 1');

            $product_list_data = Db::getInstance()->executeS($sql) ?? [];

            $product_list_data = \array_filter($product_list_data, function ($value) {
                return $value['quantity'];
            });
        }

        return $product_list_data[\array_rand($product_list_data)];
    }

    public function preSaveEntity($entity)
    {
        $entity->id_address_delivery = $entity->id_address_invoice = Address::getFirstCustomerAddressId($entity->id_customer);
    }

    public function postSaveEntity($entity)
    {
        $product_qty = \rand(1, 5);
        for ($i = 0; $i < $product_qty; ++$i) {
            $product_data = $this->getRandomProductId();
            $entity->updateQty(
                \rand(1, \min(5, $product_data['quantity'])),
                $product_data['id_product']
            );
        }

        $payment_module = new BoOrderCore();
        $cart = new Cart($entity->id);

        $this->contextStateManager
            ->saveCurrentContext()
            ->setCart($cart)
            ->setCustomer(new Customer($cart->id_customer))
            ->setCurrency(new Currency($cart->id_currency))
            ->setLanguage($cart->getAssociatedLanguage())
            ->setCountry($this->getCartTaxCountry($cart))
            ->setShop(new Shop($cart->id_shop))
        ;

        try {
            $payment_module->validateOrder(
                (int) $cart->id,
                (int) Configuration::get('PS_OS_PAYMENT'),
                $cart->getOrderTotal(),
                $payment_module->displayName,
                null,
                [],
                null,
                false,
                $cart->secure_key
            );
        } catch (Exception $e) {
            $this->warnings[] = $e->getMessage();
        } finally {
            $this->contextStateManager->restorePreviousContext();
        }
    }

    private function getCartTaxCountry(Cart $cart): Country
    {
        $taxAddressType = Configuration::get('PS_TAX_ADDRESS_TYPE');
        $taxAddressId = property_exists($cart, $taxAddressType) ? $cart->{$taxAddressType} : $cart->id_address_delivery;
        $taxAddress = new Address($taxAddressId);

        return new Country($taxAddress->id_country);
    }
}
