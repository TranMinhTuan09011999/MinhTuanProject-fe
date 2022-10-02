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
import {SharedModule} from "../shared/shared.module";


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
    Ui2Component
  ],
    imports: [
        CommonModule,
        TestRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class TestModule { }
