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

use Language;

class GeneratorBase
{
    protected static $entity_class;
    protected static $entity_vars;
    protected $step_variables = [];
    protected $warnings = [];
    protected $faker;

    public function __construct()
    {
        $this->faker = \Faker\Factory::create();
    }

    public function generate(array $data)
    {
        $total_quantity = $data['entity_quantity'] * $this->getTotalRelatedEntities();

        if ($data['validateOnly']) {
            return [
                'crossStepsVariables' => [],
                'doneCount' => $total_quantity,
                'isFinished' => true,
                'totalCount' => $total_quantity,
                'notices' => [],
                'warnings' => [],
                'errors' => [],
            ];
        }

        $this->step_variables = \json_decode($data['crossStepsVars'], true);

        static $language_list = null;
        if ($language_list === null) {
            $language_list = Language::getIDs(false);
        }

        $quantity = 0;
        $to_generate = \min($data['limit'], $total_quantity - $data['offset']);

        for ($i = 0; $i < $to_generate; ++$i) {
            $entity = new static::$entity_class();
            foreach (static::$entity_vars as $property => $value_type) {
                if (isset($value_type['value'])) {
                    $value = $value_type['value'];
                } elseif (isset($value_type['method'])) {
                    $value = \call_user_func([$this, $value_type['method']]);
                } else {
                    $value = \call_user_func_array([$this->faker, $value_type['faker']], isset($value_type['args']) ? $value_type['args'] : []);
                }

                if (isset($value_type['lang']) && $value_type['lang']) {
                    foreach ($language_list as $lang) {
                        $entity->{$property}[$lang] = $value;
                    }
                } else {
                    $entity->{$property} = $value;
                }
            }

            $this->preSaveEntity($entity);

            if (($error = $entity->validateFields(false, true)) !== true) {
                $this->warnings[] = $error;
            } else {
                $entity->save();
                ++$quantity;
            }

            $this->postSaveEntity($entity);
        }

        $processed = $data['offset'] + $quantity;

        return [
            'crossStepsVariables' => $this->step_variables,
            'doneCount' => $processed,
            'isFinished' => ($processed >= $total_quantity),
            'totalCount' => $total_quantity,
            'notices' => [],
            'warnings' => $this->warnings,
            'errors' => [],
        ];
    }

    public function getTotalRelatedEntities()
    {
        return 1;
    }

    public function preSaveEntity($entity)
    {
    }

    public function postSaveEntity($cart)
    {
    }
}
