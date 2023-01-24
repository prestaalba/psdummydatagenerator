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

use Category;
use Configuration;
use Manufacturer;
use StockAvailable;

class GeneratorProduct extends GeneratorBase
{
    /**
     * PrestaShop entity
     *
     * @var string
     */
    protected static $entity_class = 'Product';
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
        'name' => ['lang' => true, 'faker' => 'words', 'args' => [3, true]],
        'description_short' => ['lang' => true, 'faker' => 'paragraph'],
        'description' => ['lang' => true, 'faker' => 'paragraphs', 'args' => [3, true]],
        'reference' => ['faker' => 'ean13'],
        'ean13' => ['faker' => 'ean13'],
        'id_manufacturer' => ['method' => 'getRandomManufacturerId'],
        'id_category_default' => ['method' => 'getRandomCategoryId'],
        'price' => ['faker' => 'randomFloat'],
    ];

    public function getRandomCategoryId()
    {
        static $category_list = null;

        if ($category_list === null) {
            $category_list = \array_column(Category::getSimpleCategories((int) Configuration::get('PS_LANG_DEFAULT')), 'id_category');
        }

        return $category_list[\array_rand($category_list)];
    }

    public function getRandomManufacturerId()
    {
        static $manufacturer_list = null;

        if ($manufacturer_list === null) {
            $manufacturer_list = \array_column(Manufacturer::getLiteManufacturersList(), 'id');
        }

        return $manufacturer_list[\array_rand($manufacturer_list)];
    }

    public function preSaveEntity($entity)
    {
        $entity->modifierWsLinkRewrite();
    }

    public function postSaveEntity($cart)
    {
        $cart->addToCategories([$cart->id_category_default]);
        StockAvailable::setQuantity($cart->id, 0, \rand(5, 1000));
    }
}
