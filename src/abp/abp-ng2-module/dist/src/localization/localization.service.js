import { Injectable } from '@angular/core';
var LocalizationService = /** @class */ (function () {
    function LocalizationService() {
    }
    Object.defineProperty(LocalizationService.prototype, "languages", {
        get: function () {
            return abp.localization.languages;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationService.prototype, "currentLanguage", {
        get: function () {
            return abp.localization.currentLanguage;
        },
        enumerable: true,
        configurable: true
    });
    LocalizationService.prototype.localize = function (key, sourceName) {
        return abp.localization.localize(key, sourceName);
    };
    LocalizationService.prototype.getSource = function (sourceName) {
        return abp.localization.getSource(sourceName);
    };
    LocalizationService.decorators = [
        { type: Injectable },
    ];
    return LocalizationService;
}());
export { LocalizationService };
//# sourceMappingURL=localization.service.js.map