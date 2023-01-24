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

namespace ExpertoPrestashop\Module\PsDummyDataGenerator\Controller;

use PrestaShopBundle\Controller\Admin\FrameworkBundleAdminController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class DummydataConfigurationController extends FrameworkBundleAdminController
{
    public function index(Request $request): Response
    {
        $formDataHandler = $this->get('expertoprestashop.module.psdummydatagenerator.form.dummydata_configuration_form_data_handler');

        $form = $formDataHandler->getForm();

        return $this->render('@Modules/psdummydatagenerator/views/templates/admin/form.html.twig', [
            'ps_version_8' => version_compare(_PS_VERSION_, '8.0.0', '>='),
            'dummydataConfigurationForm' => $form->createView(),
        ]);
    }

    public function generateData(Request $request): Response
    {
        $entity = $request->get('entity_choice');
        $entity_data_generator = $this->get('expertoprestashop.module.psdummydatagenerator.generator.' . $entity . '_data_generator');
        
        $result = $entity_data_generator->generate($request->request->all() + $request->query->all());

        return $this->json($result);
    }
}
