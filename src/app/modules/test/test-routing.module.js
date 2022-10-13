"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TestRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_constant_1 = require("../../constant/router-constant");
var test_component_1 = require("./test.component");
var component1_component_1 = require("./component/component1/component1.component");
var component2_component_1 = require("./component/component2/component2.component");
var forms_elements_component_1 = require("./component/forms-elements/forms-elements.component");
var excel_report_component_1 = require("./component/excel-report/excel-report.component");
var forms_layouts_component_1 = require("./component/forms-layouts/forms-layouts.component");
var form_editors_component_1 = require("./component/form-editors/form-editors.component");
var tables_general_component_1 = require("./component/tables-general/tables-general.component");
var tables_data_component_1 = require("./component/tables-data/tables-data.component");
var ui1_component_1 = require("./component/ui1/ui1.component");
var modal_component_1 = require("./component/modal/modal.component");
var ui2_component_1 = require("./component/ui2/ui2.component");
var input_form_component_1 = require("./component/input-form/input-form.component");
var routes = [
    {
        path: router_constant_1.RouterConstant.TEST.path,
        component: test_component_1.TestComponent,
        children: [
            {
                path: router_constant_1.RouterConstant.COMPONENT_1.path,
                component: component1_component_1.Component1Component
            },
            {
                path: router_constant_1.RouterConstant.COMPONENT_2.path,
                component: component2_component_1.Component2Component
            },
            {
                path: router_constant_1.RouterConstant.FORMS_ELEMENTS.path,
                component: forms_elements_component_1.FormsElementsComponent
            },
            {
                path: router_constant_1.RouterConstant.FORMS_LAYOUTS.path,
                component: forms_layouts_component_1.FormsLayoutsComponent
            },
            {
                path: router_constant_1.RouterConstant.EXCEL_REPORT.path,
                component: excel_report_component_1.ExcelReportComponent
            },
            {
                path: router_constant_1.RouterConstant.FORMS_EDITORS.path,
                component: form_editors_component_1.FormEditorsComponent
            },
            {
                path: router_constant_1.RouterConstant.TABLES_GENERAL.path,
                component: tables_general_component_1.TablesGeneralComponent
            },
            {
                path: router_constant_1.RouterConstant.TABLES_DATA.path,
                component: tables_data_component_1.TablesDataComponent
            },
            {
                path: router_constant_1.RouterConstant.UI1.path,
                component: ui1_component_1.Ui1Component
            },
            {
                path: router_constant_1.RouterConstant.UI2.path,
                component: ui2_component_1.Ui2Component
            },
            {
                path: router_constant_1.RouterConstant.MODAL.path,
                component: modal_component_1.ModalComponent
            },
            {
                path: router_constant_1.RouterConstant.INPUT_FORM.path,
                component: input_form_component_1.InputFormComponent
            }
        ]
    }
];
var TestRoutingModule = /** @class */ (function () {
    function TestRoutingModule() {
    }
    TestRoutingModule = __decorate([
        (0, core_1.NgModule)({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], TestRoutingModule);
    return TestRoutingModule;
}());
exports.TestRoutingModule = TestRoutingModule;
