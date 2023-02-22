import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { Component1Component } from './component/component1/component1.component';
import { Component2Component } from './component/component2/component2.component';
import {TestComponent} from "./test.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FooterComponent} from "./component/layouts/footer/footer.component";
import {HeaderComponent} from "./component/layouts/header/header.component";
import {SidebarComponent} from "./component/layouts/sidebar/sidebar.component";
import { FormsElementsComponent } from './component/forms-elements/forms-elements.component';
import { ExcelReportComponent } from './component/excel-report/excel-report.component';
import { FormsLayoutsComponent } from './component/forms-layouts/forms-layouts.component';
import { FormEditorsComponent } from './component/form-editors/form-editors.component';
import { TablesGeneralComponent } from './component/tables-general/tables-general.component';
import { TablesDataComponent } from './component/tables-data/tables-data.component';
import { Ui1Component } from './component/ui1/ui1.component';
import { ModalComponent } from './component/modal/modal.component';
import { Ui2Component } from './component/ui2/ui2.component';
import { InputFormComponent } from './component/input-form/input-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { NgSelectModule } from '@ng-select/ng-select';
import { TableComponent } from './component/table/table.component';
import {TabsModule} from "../../components/tabs/tabs.module";
import { Table1Component } from './component/table1/table1.component';
import { Table2Component } from './component/table2/table2.component';
import {SharedModule} from "../../shared/shared.module";
import {BrowserModule} from "@angular/platform-browser";
import {TableDataModule} from "../../components/table-data/table-data.module";
import { InputValidatorCheckComponent } from './component/input-validator-check/input-validator-check.component';

@NgModule({
  declarations: [
    TestComponent,
    Component1Component,
    Component2Component,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    FormsElementsComponent,
    ExcelReportComponent,
    FormsLayoutsComponent,
    FormEditorsComponent,
    TablesGeneralComponent,
    TablesDataComponent,
    Ui1Component,
    ModalComponent,
    Ui2Component,
    InputFormComponent,
    TableComponent,
    Table1Component,
    Table2Component,
    InputValidatorCheckComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgbModule, // Note: npm i @ng-bootstrap/ng-bootstrap,
    NgSelectModule,
    NgMultiSelectDropDownModule, // npm install ng-multiselect-dropdown
    TabsModule,
    TableDataModule
  ]
})
export class TestModule { }
