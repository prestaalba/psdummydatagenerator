(()=>{var t={7286:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s(r(9663)),n=s(r(2600));function s(t){return t&&t.__esModule?t:{default:t}}
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */var i=window.$,a=function(){function t(){(0,o.default)(this,t)}return(0,n.default)(t,null,[{key:"validate",value:function(){return i(".js-validation-error").addClass("d-none"),this.checkDuplicateSelectedValues()&&this.checkRequiredFields()}},{key:"checkDuplicateSelectedValues",value:function(){var t=[],e=!0;return i(".js-entity-field select").each((function(){var r=i(this).val();if("no"!==r)return-1!==i.inArray(r,t)?(e=!1,void i(".js-duplicate-columns-warning").removeClass("d-none")):void t.push(r)})),e}},{key:"checkRequiredFields",value:function(){var t=i(".js-import-data-table").data("required-fields");for(var e in t)if(0===i('option[value="'+t[e]+'"]:selected').length)return i(".js-missing-column-warning").removeClass("d-none"),i(".js-missing-column").text(i('option[value="'+t[e]+'"]:first').text()),!1;return!0}}]),t}();e.default=a},1254:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s(r(9663)),n=s(r(2600));function s(t){return t&&t.__esModule?t:{default:t}}
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */var i=function(){function t(){(0,o.default)(this,t),this.targetExecutionTime=5e3,this.maxAcceleration=4,this.minBatchSize=5,this.maxBatchSize=100}return(0,n.default)(t,[{key:"markImportStart",value:function(){this.importStartTime=(new Date).getTime()}},{key:"markImportEnd",value:function(){this.actualExecutionTime=(new Date).getTime()-this.importStartTime}},{key:"calculateAcceleration",value:function(){return Math.min(this.maxAcceleration,this.targetExecutionTime/this.actualExecutionTime)}},{key:"calculateBatchSize",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!this.importStartTime)throw new Error("Import start is not marked.");if(!this.actualExecutionTime)throw new Error("Import end is not marked.");var r=[this.maxBatchSize,Math.max(this.minBatchSize,Math.floor(t*this.calculateAcceleration()))];return e>0&&r.push(e),Math.min.apply(Math,r)}}]),t}();e.default=i},262:(t,e,r)=>{"use strict";var o=r(3609);Object.defineProperty(e,"__esModule",{value:!0});var n=c(r(9663)),s=c(r(2600)),i=c(r(3465)),a=c(r(5689)),u=c(r(7286)),l=c(r(3147));function c(t){return t&&t.__esModule?t:{default:t}}
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */var f=function(){function t(){var e=this;(0,n.default)(this,t),new i.default,new a.default,this.importer=new l.default,o(document).on("click",".js-process-import",(function(t){return e.importHandler(t)})),o(document).on("click",".js-abort-import",(function(){return e.importer.requestCancelImport()})),o(document).on("click",".js-close-modal",(function(){return e.importer.progressModal.hide()})),o(document).on("click",".js-continue-import",(function(){return e.importer.continueImport()}))}return(0,s.default)(t,[{key:"importHandler",value:function(t){if(t.preventDefault(),u.default.validate()){var e={};o(".import-data-configuration-form").find("#skip, select[name^=type_value], #csv, #iso_lang, #entity,#truncate, #match_ref, #regenerate, #forceIDs, #sendemail,#separator, #multiple_value_separator").each((function(t,r){e[o(r).attr("name")]=o(r).val()})),this.importer.import(o(".js-import-process-button").data("import_url"),e)}}}]),t}();e.default=f},5689:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(r(5425)),n=i(r(9663)),s=i(r(2600));function i(t){return t&&t.__esModule?t:{default:t}}
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */var a=window.$,u=a(".js-import-data-table"),l="forward",c="backward",f=function(){function t(){var e=this;(0,n.default)(this,t),this.numberOfColumnsPerPage=this.getNumberOfVisibleColumns(),this.totalNumberOfColumns=this.getTotalNumberOfColumns(),a(".js-import-next-page").on("click",(function(){return e.importNextPageHandler()})),a(".js-import-previous-page").on("click",(function(){return e.importPreviousPageHandler()}))}return(0,s.default)(t,[{key:"importNextPageHandler",value:function(){this.importPaginationHandler(l)}},{key:"importPreviousPageHandler",value:function(){this.importPaginationHandler(c)}},{key:"importPaginationHandler",value:function(t){var e=u.find("th:visible,td:visible"),r=a(t===l?".js-import-next-page":".js-import-previous-page"),n=!1,s=0,i=u.find("th");for(var f in t===c&&(i=a(i.toArray().reverse())),i){if((0,o.default)(f)){this.hide(r);break}if(a(i[f]).is(":visible"))n=!0;else if(n){var d=t===c?this.totalNumberOfColumns-1-f:f;if(this.showTableColumnByIndex(d),(s+=1)>=this.numberOfColumnsPerPage){this.hide(r);break}}}this.hide(e),u.find("th:first").is(":visible")||this.show(a(".js-import-previous-page")),u.find("th:last").is(":visible")||this.show(a(".js-import-next-page"))}},{key:"getNumberOfVisibleColumns",value:function(){return u.find("th:visible").length}},{key:"getTotalNumberOfColumns",value:function(){return u.find("th").length}},{key:"hide",value:function(t){t.addClass("d-none")}},{key:"show",value:function(t){t.removeClass("d-none")}},{key:"showTableColumnByIndex",value:function(t){var e=t+1;this.show(u.find("th:nth-child("+e+")")),this.show(u.find("tbody > tr").find("td:nth-child("+e+")"))}}]),t}();e.default=f},3465:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(r(8902)),n=a(r(7518)),s=a(r(9663)),i=a(r(2600));function a(t){return t&&t.__esModule?t:{default:t}}
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */var u=window.$,l=function(){function t(){(0,s.default)(this,t),this.loadEvents()}return(0,i.default)(t,[{key:"loadEvents",value:function(){var t=this;u(document).on("click",".js-save-import-match",(function(e){return t.save(e)})),u(document).on("click",".js-load-import-match",(function(e){return t.load(e)})),u(document).on("click",".js-delete-import-match",(function(e){return t.delete(e)}))}},{key:"save",value:function(t){var e=this;t.preventDefault();var r=u(".js-save-import-match").attr("data-url"),o=u(".import-data-configuration-form").serialize();u.ajax({type:"POST",url:r,data:o}).then((function(t){if(void 0!==t.errors&&t.errors.length)e.showErrorPopUp(t.errors);else if(t.matches.length>0){var r=e.matchesDropdown;(0,n.default)(t.matches).forEach((function(t){r.find("option[value="+t.id_import_match+"]").length>0||e.appendOptionToDropdown(r,t.name,t.id_import_match)}))}}))}},{key:"load",value:function(t){var e=this;t.preventDefault();var r=u(".js-load-import-match").attr("data-url");u.ajax({type:"GET",url:r,data:{import_match_id:this.matchesDropdown.val()}}).then((function(t){if(t){e.rowsSkipInput.val(t.skip);var r=t.match.split("|");(0,o.default)(r).forEach((function(t){u("#type_value_"+t).val(r[t])}))}}))}},{key:"delete",value:function(t){t.preventDefault();var e=u(".js-delete-import-match").attr("data-url"),r=this.matchesDropdown,o=r.val();u.ajax({type:"DELETE",url:e,data:{import_match_id:o}}).then((function(){r.find("option[value="+o+"]").remove()}))}},{key:"appendOptionToDropdown",value:function(t,e,r){var o=u("<option>");o.attr("value",r),o.text(e),t.append(o)}},{key:"showErrorPopUp",value:function(t){alert(t)}},{key:"matchesDropdown",get:function(){return u("#matches")}},{key:"rowsSkipInput",get:function(){return u("#skip")}}]),t}();e.default=l},782:(t,e,r)=>{"use strict";var o=r(3609);Object.defineProperty(e,"__esModule",{value:!0});var n=a(r(7518)),s=a(r(9663)),i=a(r(2600));function a(t){return t&&t.__esModule?t:{default:t}}
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */var u=function(){function t(){(0,s.default)(this,t)}return(0,i.default)(t,[{key:"show",value:function(){this.progressModal.modal("show")}},{key:"hide",value:function(){this.progressModal.modal("hide")}},{key:"updateProgress",value:function(t,e){var r=parseInt(t,10),o=parseInt(e,10),n=this.progressBar,s=r/o*100;n.css("width",s+"%"),n.find("> span").text(r+"/"+o)}},{key:"updateProgressLabel",value:function(t){this.progressLabel.text(t)}},{key:"setImportingProgressLabel",value:function(){this.updateProgressLabel(this.progressModal.find(".modal-body").data("importing-label"))}},{key:"setImportedProgressLabel",value:function(){this.updateProgressLabel(this.progressModal.find(".modal-body").data("imported-label"))}},{key:"showInfoMessages",value:function(t){this.showMessages(this.infoMessageBlock,t)}},{key:"showWarningMessages",value:function(t){this.showMessages(this.warningMessageBlock,t)}},{key:"showErrorMessages",value:function(t){this.showMessages(this.errorMessageBlock,t)}},{key:"showSuccessMessage",value:function(){this.successMessageBlock.removeClass("d-none")}},{key:"showPostLimitMessage",value:function(t){this.postLimitMessage.find("#post_limit_value").text(t),this.postLimitMessage.removeClass("d-none")}},{key:"showMessages",value:function(t,e){var r=!1;(0,n.default)(e).forEach((function(e){r=!0;var n=o("<div>");n.text(e),n.addClass("message"),t.append(n)})),r&&t.removeClass("d-none")}},{key:"showContinueImportButton",value:function(){this.continueImportButton.removeClass("d-none")}},{key:"hideContinueImportButton",value:function(){this.continueImportButton.addClass("d-none")}},{key:"showAbortImportButton",value:function(){this.abortImportButton.removeClass("d-none")}},{key:"hideAbortImportButton",value:function(){this.abortImportButton.addClass("d-none")}},{key:"showCloseModalButton",value:function(){this.closeModalButton.removeClass("d-none")}},{key:"hideCloseModalButton",value:function(){this.closeModalButton.addClass("d-none")}},{key:"clearWarningMessages",value:function(){this.warningMessageBlock.addClass("d-none").find(".message").remove()}},{key:"reset",value:function(){this.updateProgress(0,0),this.updateProgressLabel(this.progressLabel.attr("default-value")),this.continueImportButton.addClass("d-none"),this.abortImportButton.addClass("d-none"),this.closeModalButton.addClass("d-none"),this.successMessageBlock.addClass("d-none"),this.infoMessageBlock.addClass("d-none").find(".message").remove(),this.errorMessageBlock.addClass("d-none").find(".message").remove(),this.postLimitMessage.addClass("d-none"),this.clearWarningMessages()}},{key:"progressModal",get:function(){return o("#import_progress_modal")}},{key:"progressBar",get:function(){return this.progressModal.find(".progress-bar")}},{key:"infoMessageBlock",get:function(){return o(".js-import-info")}},{key:"errorMessageBlock",get:function(){return o(".js-import-errors")}},{key:"warningMessageBlock",get:function(){return o(".js-import-warnings")}},{key:"successMessageBlock",get:function(){return o(".js-import-success")}},{key:"postLimitMessage",get:function(){return o(".js-post-limit-warning")}},{key:"continueImportButton",get:function(){return o(".js-continue-import")}},{key:"abortImportButton",get:function(){return o(".js-abort-import")}},{key:"closeModalButton",get:function(){return o(".js-close-modal")}},{key:"progressLabel",get:function(){return o("#import_progress_bar").find(".progress-details-text")}}]),t}();e.default=u},3147:(t,e,r)=>{"use strict";var o=r(3609);Object.defineProperty(e,"__esModule",{value:!0});var n=f(r(8239)),s=f(r(3239)),i=f(r(9663)),a=f(r(2600)),u=f(r(782)),l=f(r(1254)),c=f(r(7690));function f(t){return t&&t.__esModule?t:{default:t}}var d=function(){function t(){(0,i.default)(this,t),this.configuration={},this.progressModal=new u.default,this.batchSizeCalculator=new l.default,this.postSizeChecker=new c.default,this.defaultBatchSize=5}return(0,a.default)(t,[{key:"import",value:function(t,e){this.mergeConfiguration(e),this.importUrl=t,this.totalRowsCount=0,this.hasWarnings=!1,this.hasErrors=!1,this.progressModal.reset(),this.progressModal.show(),this.ajaxImport(0,this.defaultBatchSize)}},{key:"ajaxImport",value:function(t,e){var r=this,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};this.mergeConfiguration({offset:t,limit:e,validateOnly:n?1:0,crossStepsVars:(0,s.default)(i)}),this.onImportStart(),o.post({url:this.importUrl,dataType:"json",data:this.configuration,success:function(o){if(r.importCancelRequested)return r.cancelImport(),!1;var s=o.errors&&o.errors.length,i=o.warnings&&o.warnings.length,a=o.notices&&o.notices.length;if(void 0!==o.totalCount&&o.totalCount&&(r.totalRowsCount=o.totalCount),r.progressModal.updateProgress(o.doneCount,r.totalRowsCount),n||r.progressModal.setImportingProgressLabel(),!n&&a&&r.progressModal.showInfoMessages(o.notices),s){if(r.hasErrors=!0,r.progressModal.showErrorMessages(o.errors),!n)return r.onImportStop(),!1}else i&&(r.hasWarnings=!0,r.progressModal.showWarningMessages(o.warnings));if(!o.isFinished){r.batchSizeCalculator.markImportEnd();var u=t+e,l=r.batchSizeCalculator.calculateBatchSize(e,r.totalRowsCount);return r.postSizeChecker.isReachingPostSizeLimit(o.postSizeLimit,o.nextPostSize)&&r.progressModal.showPostLimitMessage(r.postSizeChecker.getRequiredPostSizeInMegabytes(o.nextPostSize)),r.ajaxImport(u,l,n,o.crossStepsVariables)}return n?r.hasErrors?(r.onImportStop(),!1):r.hasWarnings?(r.progressModal.showContinueImportButton(),r.onImportStop(),!1):(r.progressModal.updateProgress(r.totalRowsCount,r.totalRowsCount),r.ajaxImport(0,r.defaultBatchSize,!1)):r.onImportFinish()},error:function(t,e){var o=e;"parsererror"===o&&(o="Technical error: Unexpected response returned by server. Import stopped."),r.onImportStop(),r.progressModal.showErrorMessages([o])}})}},{key:"continueImport",value:function(){if(!this.configuration)throw new Error("Missing import configuration. Make sure the import had started before continuing.");this.progressModal.hideContinueImportButton(),this.progressModal.hideCloseModalButton(),this.progressModal.clearWarningMessages(),this.ajaxImport(0,this.defaultBatchSize,!1)}},{key:"requestCancelImport",value:function(){this.importCancelRequested=!0}},{key:"mergeConfiguration",value:function(t){this.importConfiguration=(0,n.default)({},this.importConfiguration,t)}},{key:"cancelImport",value:function(){this.progressModal.hide(),this.importCancelRequested=!1}},{key:"onImportStop",value:function(){this.progressModal.showCloseModalButton(),this.progressModal.hideAbortImportButton()}},{key:"onImportFinish",value:function(){this.onImportStop(),this.progressModal.showSuccessMessage(),this.progressModal.setImportedProgressLabel(),this.progressModal.updateProgress(this.totalRowsCount,this.totalRowsCount)}},{key:"onImportStart",value:function(){this.batchSizeCalculator.markImportStart(),this.progressModal.showAbortImportButton()}},{key:"configuration",set:function(t){this.importConfiguration=t},get:function(){return this.importConfiguration}},{key:"progressModal",set:function(t){this.modal=t},get:function(){return this.modal}}]),t}();
/**
      * Copyright since 2007 PrestaShop SA and Contributors
      * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
      *
      * NOTICE OF LICENSE
      *
      * This source file is subject to the Open Software License (OSL 3.0)
      * that is bundled with this package in the file LICENSE.md.
      * It is also available through the world-wide-web at this URL:
      * https://opensource.org/licenses/OSL-3.0
      * If you did not receive a copy of the license and are unable to
      * obtain it through the world-wide-web, please send an email
      * to license@prestashop.com so we can send you a copy immediately.
      *
      * DISCLAIMER
      *
      * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
      * versions in the future. If you wish to customize PrestaShop for your
      * needs please refer to https://devdocs.prestashop.com/ for more information.
      *
      * @author    PrestaShop SA and Contributors <contact@prestashop.com>
      * @copyright Since 2007 PrestaShop SA and Contributors
      * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
      */e.default=d},7690:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s(r(9663)),n=s(r(2600));function s(t){return t&&t.__esModule?t:{default:t}}
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */var i=function(){function t(){(0,o.default)(this,t),this.postSizeLimitThreshold=.9}return(0,n.default)(t,[{key:"isReachingPostSizeLimit",value:function(t,e){return e>=t*this.postSizeLimitThreshold}},{key:"getRequiredPostSizeInMegabytes",value:function(t){return parseInt(t/1048576,10)}}]),t}();e.default=i},3239:(t,e,r)=>{t.exports={default:r(2742),__esModule:!0}},5425:(t,e,r)=>{t.exports={default:r(4334),__esModule:!0}},2945:(t,e,r)=>{t.exports={default:r(6981),__esModule:!0}},2242:(t,e,r)=>{t.exports={default:r(3391),__esModule:!0}},8902:(t,e,r)=>{t.exports={default:r(8613),__esModule:!0}},7518:(t,e,r)=>{t.exports={default:r(8056),__esModule:!0}},9663:(t,e)=>{"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},2600:(t,e,r)=>{"use strict";e.__esModule=!0;var o,n=r(2242),s=(o=n)&&o.__esModule?o:{default:o};e.default=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,s.default)(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}()},8239:(t,e,r)=>{"use strict";e.__esModule=!0;var o,n=r(2945),s=(o=n)&&o.__esModule?o:{default:o};e.default=s.default||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t}},2742:(t,e,r)=>{var o=r(4579),n=o.JSON||(o.JSON={stringify:JSON.stringify});t.exports=function(t){return n.stringify.apply(n,arguments)}},4334:(t,e,r)=>{r(2960),t.exports=r(4579).Number.isNaN},6981:(t,e,r)=>{r(2699),t.exports=r(4579).Object.assign},3391:(t,e,r)=>{r(1477);var o=r(4579).Object;t.exports=function(t,e,r){return o.defineProperty(t,e,r)}},8613:(t,e,r)=>{r(961),t.exports=r(4579).Object.keys},8056:(t,e,r)=>{r(1013),t.exports=r(4579).Object.values},5663:t=>{t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},2159:(t,e,r)=>{var o=r(6727);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},7428:(t,e,r)=>{var o=r(7932),n=r(8728),s=r(6531);t.exports=function(t){return function(e,r,i){var a,u=o(e),l=n(u.length),c=s(i,l);if(t&&r!=r){for(;l>c;)if((a=u[c++])!=a)return!0}else for(;l>c;c++)if((t||c in u)&&u[c]===r)return t||c||0;return!t&&-1}}},2894:t=>{var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},4579:t=>{var e=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e)},9216:(t,e,r)=>{var o=r(5663);t.exports=function(t,e,r){if(o(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,o){return t.call(e,r,o)};case 3:return function(r,o,n){return t.call(e,r,o,n)}}return function(){return t.apply(e,arguments)}}},8333:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},9666:(t,e,r)=>{t.exports=!r(7929)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},7467:(t,e,r)=>{var o=r(6727),n=r(3938).document,s=o(n)&&o(n.createElement);t.exports=function(t){return s?n.createElement(t):{}}},3338:t=>{t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},3856:(t,e,r)=>{var o=r(3938),n=r(4579),s=r(9216),i=r(1818),a=r(7069),u=function(t,e,r){var l,c,f,d=t&u.F,p=t&u.G,h=t&u.S,m=t&u.P,v=t&u.B,g=t&u.W,y=p?n:n[e]||(n[e]={}),k=y.prototype,M=p?o:h?o[e]:(o[e]||{}).prototype;for(l in p&&(r=e),r)(c=!d&&M&&void 0!==M[l])&&a(y,l)||(f=c?M[l]:r[l],y[l]=p&&"function"!=typeof M[l]?r[l]:v&&c?s(f,o):g&&M[l]==f?function(t){var e=function(e,r,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,r)}return new t(e,r,o)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):m&&"function"==typeof f?s(Function.call,f):f,m&&((y.virtual||(y.virtual={}))[l]=f,t&u.R&&k&&!k[l]&&i(k,l,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},7929:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},3938:t=>{var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},7069:t=>{var e={}.hasOwnProperty;t.exports=function(t,r){return e.call(t,r)}},1818:(t,e,r)=>{var o=r(4743),n=r(3101);t.exports=r(9666)?function(t,e,r){return o.f(t,e,n(1,r))}:function(t,e,r){return t[e]=r,t}},3758:(t,e,r)=>{t.exports=!r(9666)&&!r(7929)((function(){return 7!=Object.defineProperty(r(7467)("div"),"a",{get:function(){return 7}}).a}))},799:(t,e,r)=>{var o=r(2894);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},6727:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},6227:t=>{t.exports=!0},8082:(t,e,r)=>{"use strict";var o=r(9666),n=r(6162),s=r(8195),i=r(6274),a=r(6530),u=r(799),l=Object.assign;t.exports=!l||r(7929)((function(){var t={},e={},r=Symbol(),o="abcdefghijklmnopqrst";return t[r]=7,o.split("").forEach((function(t){e[t]=t})),7!=l({},t)[r]||Object.keys(l({},e)).join("")!=o}))?function(t,e){for(var r=a(t),l=arguments.length,c=1,f=s.f,d=i.f;l>c;)for(var p,h=u(arguments[c++]),m=f?n(h).concat(f(h)):n(h),v=m.length,g=0;v>g;)p=m[g++],o&&!d.call(h,p)||(r[p]=h[p]);return r}:l},4743:(t,e,r)=>{var o=r(2159),n=r(3758),s=r(3206),i=Object.defineProperty;e.f=r(9666)?Object.defineProperty:function(t,e,r){if(o(t),e=s(e,!0),o(r),n)try{return i(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},8195:(t,e)=>{e.f=Object.getOwnPropertySymbols},2963:(t,e,r)=>{var o=r(7069),n=r(7932),s=r(7428)(!1),i=r(8989)("IE_PROTO");t.exports=function(t,e){var r,a=n(t),u=0,l=[];for(r in a)r!=i&&o(a,r)&&l.push(r);for(;e.length>u;)o(a,r=e[u++])&&(~s(l,r)||l.push(r));return l}},6162:(t,e,r)=>{var o=r(2963),n=r(3338);t.exports=Object.keys||function(t){return o(t,n)}},6274:(t,e)=>{e.f={}.propertyIsEnumerable},2584:(t,e,r)=>{var o=r(3856),n=r(4579),s=r(7929);t.exports=function(t,e){var r=(n.Object||{})[t]||Object[t],i={};i[t]=e(r),o(o.S+o.F*s((function(){r(1)})),"Object",i)}},2050:(t,e,r)=>{var o=r(9666),n=r(6162),s=r(7932),i=r(6274).f;t.exports=function(t){return function(e){for(var r,a=s(e),u=n(a),l=u.length,c=0,f=[];l>c;)r=u[c++],o&&!i.call(a,r)||f.push(t?[r,a[r]]:a[r]);return f}}},3101:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8989:(t,e,r)=>{var o=r(250)("keys"),n=r(5730);t.exports=function(t){return o[t]||(o[t]=n(t))}},250:(t,e,r)=>{var o=r(4579),n=r(3938),s="__core-js_shared__",i=n[s]||(n[s]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:o.version,mode:r(6227)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},6531:(t,e,r)=>{var o=r(1052),n=Math.max,s=Math.min;t.exports=function(t,e){return(t=o(t))<0?n(t+e,0):s(t,e)}},1052:t=>{var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},7932:(t,e,r)=>{var o=r(799),n=r(8333);t.exports=function(t){return o(n(t))}},8728:(t,e,r)=>{var o=r(1052),n=Math.min;t.exports=function(t){return t>0?n(o(t),9007199254740991):0}},6530:(t,e,r)=>{var o=r(8333);t.exports=function(t){return Object(o(t))}},3206:(t,e,r)=>{var o=r(6727);t.exports=function(t,e){if(!o(t))return t;var r,n;if(e&&"function"==typeof(r=t.toString)&&!o(n=r.call(t)))return n;if("function"==typeof(r=t.valueOf)&&!o(n=r.call(t)))return n;if(!e&&"function"==typeof(r=t.toString)&&!o(n=r.call(t)))return n;throw TypeError("Can't convert object to primitive value")}},5730:t=>{var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},2960:(t,e,r)=>{var o=r(3856);o(o.S,"Number",{isNaN:function(t){return t!=t}})},2699:(t,e,r)=>{var o=r(3856);o(o.S+o.F,"Object",{assign:r(8082)})},1477:(t,e,r)=>{var o=r(3856);o(o.S+o.F*!r(9666),"Object",{defineProperty:r(4743).f})},961:(t,e,r)=>{var o=r(6530),n=r(6162);r(2584)("keys",(function(){return function(t){return n(o(t))}}))},1013:(t,e,r)=>{var o=r(3856),n=r(2050)(!1);o(o.S,"Object",{values:function(t){return n(t)}})},3609:t=>{"use strict";t.exports=window.jQuery}},e={};function r(o){var n=e[o];if(void 0!==n)return n.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,r),s.exports}(()=>{"use strict";var t,e=r(262),o=(t=e)&&t.__esModule?t:{default:t};
/**
                    * Copyright since 2007 PrestaShop SA and Contributors
                    * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
                    *
                    * NOTICE OF LICENSE
                    *
                    * This source file is subject to the Open Software License (OSL 3.0)
                    * that is bundled with this package in the file LICENSE.md.
                    * It is also available through the world-wide-web at this URL:
                    * https://opensource.org/licenses/OSL-3.0
                    * If you did not receive a copy of the license and are unable to
                    * obtain it through the world-wide-web, please send an email
                    * to license@prestashop.com so we can send you a copy immediately.
                    *
                    * DISCLAIMER
                    *
                    * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
                    * versions in the future. If you wish to customize PrestaShop for your
                    * needs please refer to https://devdocs.prestashop.com/ for more information.
                    *
                    * @author    PrestaShop SA and Contributors <contact@prestashop.com>
                    * @copyright Since 2007 PrestaShop SA and Contributors
                    * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
                    */
(0,window.$)((function(){new o.default}))})(),window.import_data={}})();