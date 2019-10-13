import { Injectable } from '@angular/core';
var FeatureCheckerService = /** @class */ (function () {
    function FeatureCheckerService() {
    }
    FeatureCheckerService.prototype.get = function (featureName) {
        return abp.features.get(featureName);
    };
    FeatureCheckerService.prototype.getValue = function (featureName) {
        return abp.features.getValue(featureName);
    };
    FeatureCheckerService.prototype.isEnabled = function (featureName) {
        return abp.features.isEnabled(featureName);
    };
    FeatureCheckerService.decorators = [
        { type: Injectable },
    ];
    return FeatureCheckerService;
}());
export { FeatureCheckerService };
//# sourceMappingURL=feature-checker.service.js.map