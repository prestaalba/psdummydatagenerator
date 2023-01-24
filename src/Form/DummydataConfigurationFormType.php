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

namespace ExpertoPrestashop\Module\PsDummyDataGenerator\Form;

use PrestaShopBundle\Form\Admin\Type\TranslatorAwareType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\FormBuilderInterface;

class DummydataConfigurationFormType extends TranslatorAwareType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add(
                'entity_choice',
                ChoiceType::class,
                [
                    'label' => $this->trans('Entity', 'Modules.PsDummyDataGenerator.Admin'),
                    'required' => true,
                    'choice_translation_domain' => 'Modules.PsDummyDataGenerator.Admin',
                    'choices' => [
                        'Catalog' => [
                            'Category' => 'category',
                            'Manufacturer' => 'manufacturer',
                            'Product' => 'product',
                            'Images by product' => 'image',
                            'Combination by product' => 'combination',
                        ],
                        'Sales' => [
                            'Customer' => 'customer',
                            'Addresses by customer' => 'address',
                            'Order by customer' => 'order',
                        ],
                    ],
                ]
            )
            ->add('entity_quantity', IntegerType::class, [
                'label' => $this->trans('Quantity', 'Modules.PsDummyDataGenerator.Admin'),
                'help' => 'Number of units to be generated from the selected entity.',
            ]);
    }
}
