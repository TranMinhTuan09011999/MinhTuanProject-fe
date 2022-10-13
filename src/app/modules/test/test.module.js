"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TestModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var test_routing_module_1 = require("./test-routing.module");
var component1_component_1 = require("./component/component1/component1.component");
var component2_component_1 = require("./component/component2/component2.component");
var test_component_1 = require("./test.component");
var forms_1 = require("@angular/forms");
var footer_component_1 = require("./component/layouts/footer/footer.component");
var header_component_1 = require("./component/layouts/header/header.component");
var sidebar_component_1 = require("./component/layouts/sidebar/sidebar.component");
var forms_elements_component_1 = require("./component/forms-elements/forms-elements.component");
var excel_report_component_1 = require("./component/excel-report/excel-report.component");
var forms_layouts_component_1 = require("./component/forms-layouts/forms-layouts.component");
var form_editors_component_1 = require("./component/form-editors/form-editors.component");
var tables_general_component_1 = require("./component/tables-general/tables-general.component");
var tables_data_component_1 = require("./component/tables-data/tables-data.component");
var ui1_component_1 = require("./component/ui1/ui1.component");
var modal_component_1 = require("./component/modal/modal.component");
var ui2_component_1 = require("./component/ui2/ui2.component");
var shared_module_1 = require("../shared/shared.module");
var input_form_component_1 = require("./component/input-form/input-form.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng_multiselect_dropdown_1 = require("ng-multiselect-dropdown");
var ng_select_1 = require("@ng-select/ng-select");
var TestModule = /** @class */ (function () {
    function TestModule() {
    }
    TestModule = __decorate([
        (0, core_1.NgModule)({
            declarations: [
                test_component_1.TestComponent,
                component1_component_1.Component1Component,
                component2_component_1.Component2Component,
                footer_component_1.FooterComponent,
                header_component_1.HeaderComponent,
                sidebar_component_1.SidebarComponent,
                forms_elements_component_1.FormsElementsComponent,
                excel_report_component_1.ExcelReportComponent,
                forms_layouts_component_1.FormsLayoutsComponent,
                form_editors_component_1.FormEditorsComponent,
                tables_general_component_1.TablesGeneralComponent,
                tables_data_component_1.TablesDataComponent,
                ui1_component_1.Ui1Component,
                modal_component_1.ModalComponent,
                ui2_component_1.Ui2Component,
                input_form_component_1.InputFormComponent
            ],
            imports: [
                common_1.CommonModule,
                test_routing_module_1.TestRoutingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                shared_module_1.SharedModule,
                ng_bootstrap_1.NgbModule,
                ng_select_1.NgSelectModule,
                ng_multiselect_dropdown_1.NgMultiSelectDropDownModule, // npm install ng-multiselect-dropdown
            ]
        })
    ], TestModule);
    return TestModule;
}());
exports.TestModule = TestModule;
