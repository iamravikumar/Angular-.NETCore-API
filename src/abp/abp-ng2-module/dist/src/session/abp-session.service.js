import { Injectable } from '@angular/core';
var AbpSessionService = /** @class */ (function () {
    function AbpSessionService() {
    }
    Object.defineProperty(AbpSessionService.prototype, "userId", {
        get: function () {
            return abp.session.userId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbpSessionService.prototype, "tenantId", {
        get: function () {
            return abp.session.tenantId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbpSessionService.prototype, "impersonatorUserId", {
        get: function () {
            return abp.session.impersonatorUserId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbpSessionService.prototype, "impersonatorTenantId", {
        get: function () {
            return abp.session.impersonatorTenantId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbpSessionService.prototype, "multiTenancySide", {
        get: function () {
            return abp.session.multiTenancySide;
        },
        enumerable: true,
        configurable: true
    });
    AbpSessionService.decorators = [
        { type: Injectable },
    ];
    return AbpSessionService;
}());
export { AbpSessionService };
//# sourceMappingURL=abp-session.service.js.map