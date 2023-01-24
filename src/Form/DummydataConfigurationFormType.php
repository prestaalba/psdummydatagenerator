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
                    'label' => $this->trans('Entity', 'Modules.Psdummydatagenerator.Admin'),
                    'required' => true,
                    'choices' => [
                        $this->trans('Catalog', 'Modules.Psdummydatagenerator.Admin') => [
                            $this->trans('Category', 'Modules.Psdummydatagenerator.Admin') => 'category',
                            $this->trans('Manufacturer', 'Modules.Psdummydatagenerator.Admin') => 'manufacturer',
                            $this->trans('Product', 'Modules.Psdummydatagenerator.Admin') => 'product',
                            $this->trans('Images by product', 'Modules.Psdummydatagenerator.Admin') => 'image',
                            $this->trans('Combination by product', 'Modules.Psdummydatagenerator.Admin') => 'combination',
                        ],
                        $this->trans('Sales', 'Modules.Psdummydatagenerator.Admin') => [
                            $this->trans('Customer', 'Modules.Psdummydatagenerator.Admin') => 'customer',
                            $this->trans('Addresses by customer', 'Modules.Psdummydatagenerator.Admin') => 'address',
                            $this->trans('Order by customer', 'Modules.Psdummydatagenerator.Admin') => 'order',
                        ],
                    ],
                ]
            )
            ->add('entity_quantity', IntegerType::class, [
                'label' => $this->trans('Quantity', 'Modules.Psdummydatagenerator.Admin'),
                'help' => $this->trans('Number of units to be generated from the selected entity.', 'Modules.Psdummydatagenerator.Admin'),
            ]);
    }
}
