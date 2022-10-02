"use strict";
exports.__esModule = true;
exports.APIConstant = void 0;
var portal_type_enum_1 = require("./portal-type.enum");
var APIConstant = /** @class */ (function () {
    function APIConstant() {
    }
    // -------------- AUTH --------------
    APIConstant.API_NON_AUTH_LOGIN = {
        module: portal_type_enum_1.PortalType.NON_AUTH,
        uri: 'login'
    };
    APIConstant.API_NON_AUTH_CHANGE = {
        module: portal_type_enum_1.PortalType.NON_AUTH,
        uri: 'change-pwd'
    };
    // -------------- SESSION --------------
    APIConstant.API_SESSION_ATTR_GET = {
        module: portal_type_enum_1.PortalType.SESSION,
        uri: '{attrName}'
    };
    APIConstant.API_SESSION_ATTR_UPD = {
        module: portal_type_enum_1.PortalType.SESSION,
        uri: '{attrName}'
    };
    // -------------- TEST --------------
    APIConstant.API_TEST_EXCEL_EXPORT = {
        module: portal_type_enum_1.PortalType.TEST,
        uri: 'createExcelReportTest'
    };
    return APIConstant;
}());
exports.APIConstant = APIConstant;
