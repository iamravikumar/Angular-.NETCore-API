import { Injectable } from '@angular/core';
var SettingService = /** @class */ (function () {
    function SettingService() {
    }
    SettingService.prototype.get = function (name) {
        return abp.setting.get(name);
    };
    SettingService.prototype.getBoolean = function (name) {
        return abp.setting.getBoolean(name);
    };
    SettingService.prototype.getInt = function (name) {
        return abp.setting.getInt(name);
    };
    SettingService.decorators = [
        { type: Injectable },
    ];
    return SettingService;
}());
export { SettingService };
//# sourceMappingURL=setting.service.js.map