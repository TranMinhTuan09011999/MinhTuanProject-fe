"use strict";
exports.__esModule = true;
exports.PortalTypeHelper = void 0;
var portal_type_enum_1 = require("src/app/constant/portal-type.enum");
var router_constant_1 = require("../constant/router-constant");
var common_util_1 = require("../shared/util/common-util");
var PortalTypeHelper = /** @class */ (function () {
    function PortalTypeHelper() {
    }
    PortalTypeHelper.getPortalType = function (activatedRoute) {
        var route = activatedRoute.root;
        console.log(route);
        var portalType;
        if (route.routeConfig && route.routeConfig.data && route.routeConfig.data['portalType']) {
            portalType = route.routeConfig.data['portalType'];
            console.log(portalType);
        }
        else {
            portalType = this.getCurrentPortal();
            console.log(portalType);
        }
        if (!route.routeConfig) {
            console.log(activatedRoute);
            // activatedRoute.routeConfig.data.portalType is get from data of NonAuthenticateRoutingModule
            // data: { breadcrumb: RouterConstant.NON_AUTHENTICATE_LOGIN.label, portalType: PortalType.MY_LIFE_MY_RULES }
            // @ts-ignore
            portalType = activatedRoute.routeConfig.data.portalType;
            console.log(portalType);
        }
        return portalType;
    };
    PortalTypeHelper.getCurrentPortal = function () {
        var currentPath = location.pathname;
        console.log(currentPath);
        // const hostname = location.hostname;
        var portal;
        if (currentPath.startsWith('/my-life-my-rules/') || common_util_1.CommonUtil.equals(currentPath, '/my-life-my-rules')) {
            portal = portal_type_enum_1.PortalType.MY_LIFE_MY_RULES;
        }
        else if (currentPath.startsWith('/sale/') || common_util_1.CommonUtil.equals(currentPath, '/sale')) {
            portal = portal_type_enum_1.PortalType.SALES;
        }
        // @ts-ignore
        return portal;
    };
    PortalTypeHelper.getPathPortal = function () {
        var path = '';
        switch (this.getCurrentPortal()) {
            case portal_type_enum_1.PortalType.MY_LIFE_MY_RULES:
                return router_constant_1.RouterConstant.MY_LIFE_MY_RULES.path;
            case portal_type_enum_1.PortalType.TEST:
                return router_constant_1.RouterConstant.TEST.path;
            default:
                return '';
        }
    };
    PortalTypeHelper.isMyLifeMyRulesPortal = function () {
        var currentPortal = this.getCurrentPortal();
        if (currentPortal === portal_type_enum_1.PortalType.MY_LIFE_MY_RULES) {
            return true;
        }
        return false;
    };
    return PortalTypeHelper;
}());
exports.PortalTypeHelper = PortalTypeHelper;
