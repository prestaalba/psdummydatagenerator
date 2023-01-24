/**
 *
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

$(document).ready(function () {
    $(document).on('click', '.js-process-import', function (e) {
        $('.js-import-process-button').data('import_url', $('.js-import-process-button').data('import_url') + '&entity_choice=' + $('#form_entity_choice').val() + '&entity_quantity=' + $('#form_entity_quantity').val());
    });
});
