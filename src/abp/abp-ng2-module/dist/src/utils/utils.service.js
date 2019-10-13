import { Injectable } from '@angular/core';
var UtilsService = /** @class */ (function () {
    function UtilsService() {
    }
    UtilsService.prototype.getCookieValue = function (key) {
        return abp.utils.getCookieValue(key);
    };
    UtilsService.prototype.setCookieValue = function (key, value, expireDate, path) {
        abp.utils.setCookieValue(key, value, expireDate, path);
    };
    UtilsService.prototype.deleteCookie = function (key, path) {
        abp.utils.deleteCookie(key, path);
    };
    UtilsService.decorators = [
        { type: Injectable },
    ];
    return UtilsService;
}());
export { UtilsService };
//# sourceMappingURL=utils.service.js.map