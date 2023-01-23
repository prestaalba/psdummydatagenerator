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

use Configuration;
use Image;
use ImageManager;
use ImageType;
use Product;
use Tools;

class GeneratorImage extends GeneratorBase
{
    /**
     * PrestaShop entity
     *
     * @var string
     */
    protected static $entity_class = 'Image';
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
        'id_product' => ['method' => 'getConsecutiveProductId'],
    ];

    public function getConsecutiveProductId()
    {
        static $product_list = null;
        if ($product_list === null) {
            $product_list = \array_column(Product::getSimpleProducts((int) Configuration::get('PS_LANG_DEFAULT')), 'id_product');
        }

        static $position = -1;
        if ($position == -1) {
            $position = $this->step_variables['last_pos'] ?? 0;
        }
        if ($position + 1 > \count($product_list)) {
            $position = 0;
        }

        return $product_list[$this->step_variables['last_pos'] = $position++];
    }

    public function getTotalRelatedEntities()
    {
        return count(Product::getSimpleProducts((int) Configuration::get('PS_LANG_DEFAULT')));
    }

    public function preSaveEntity($entity)
    {
        $entity->cover = Image::getImagesTotal((int) $entity->id_product) ? false : true;
    }

    public function postSaveEntity($cart)
    {
        if (!$this->copyImg($cart)) {
            $cart->delete();
        }
    }

    private function copyImg($entity)
    {
        $tmpfile = tempnam(_PS_TMP_IMG_DIR_, 'dummy_data_image');

        $path = $entity->getPathForCreation();
        $url = $this->faker->imageUrl();

        if (Tools::copy($url, $tmpfile)) {
            ImageManager::resize($tmpfile, $path . '.jpg');

            $images_types = ImageType::getImagesTypes('products');
            foreach ($images_types as $image_type) {
                ImageManager::resize($tmpfile, $path . '-' . Tools::stripslashes($image_type['name']) . '.jpg', $image_type['width'], $image_type['height']);
            }
        } else {
            unlink($tmpfile);

            return false;
        }
        unlink($tmpfile);

        return true;
    }
}
