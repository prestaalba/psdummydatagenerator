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

use PrestaShop\PrestaShop\Adapter\SymfonyContainer;

class PsDummyDataGenerator extends Module
{
    public function __construct()
    {
        $this->name = 'psdummydatagenerator';
        $this->author = 'ExpertoPrestashop';
        $this->version = '1.0.0';
        $this->need_instance = 0;

        $this->bootstrap = true;
        parent::__construct();

        $this->displayName = $this->trans('PrestaShop dummy data generator', [], 'Modules.PsDummyDataGenerator.Admin');
        $this->description = $this->trans(
            'PrestaShop dummy data generator for testing.',
            [],
            'Modules.PsDummyDataGenerator.Admin'
        );

        $this->ps_versions_compliancy = ['min' => '1.7.8', 'max' => _PS_VERSION_];
    }

    public function getTabs()
    {
        return [
            [
                'class_name' => 'AdminPsDummyDataGenerator',
                'visible' => true,
                'name' => 'Dummy Data Generator',
                'parent_class_name' => 'CONFIGURE',
            ],
        ];
    }

    public function getContent()
    {
        $route = SymfonyContainer::getInstance()->get('router')->generate('psdummydatagenerator_configuration_form');
        Tools::redirectAdmin($route);
    }

    public function isUsingNewTranslationSystem()
    {
        return true;
    }
}
