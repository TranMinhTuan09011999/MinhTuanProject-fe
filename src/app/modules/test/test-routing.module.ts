import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RouterConstant} from "../../constant/router-constant";
import {TestComponent} from "./test.component";
import {Component1Component} from "./component/component1/component1.component";
import {Component2Component} from "./component/component2/component2.component";
import {FormsElementsComponent} from "./component/forms-elements/forms-elements.component";
import {ExcelReportComponent} from "./component/excel-report/excel-report.component";
import {FormsLayoutsComponent} from "./component/forms-layouts/forms-layouts.component";
import {FormEditorsComponent} from "./component/form-editors/form-editors.component";
import {TablesGeneralComponent} from "./component/tables-general/tables-general.component";
import {TablesDataComponent} from "./component/tables-data/tables-data.component";
import {Ui1Component} from "./component/ui1/ui1.component";
import {ModalComponent} from "./component/modal/modal.component";
import {Ui2Component} from "./component/ui2/ui2.component";

const routes: Routes = [
  {
    path: RouterConstant.TEST.path,
    component: TestComponent,
    children: [
      {
        path: RouterConstant.COMPONENT_1.path,
        component: Component1Component,
      },
      {
        path: RouterConstant.COMPONENT_2.path,
        component: Component2Component,
      },
      {
        path: RouterConstant.FORMS_ELEMENTS.path,
        component: FormsElementsComponent,
      },
      {
        path: RouterConstant.FORMS_LAYOUTS.path,
        component: FormsLayoutsComponent,
      },
      {
        path: RouterConstant.EXCEL_REPORT.path,
        component: ExcelReportComponent,
      },
      {
        path: RouterConstant.FORMS_EDITORS.path,
        component: FormEditorsComponent,
      },
      {
        path: RouterConstant.TABLES_GENERAL.path,
        component: TablesGeneralComponent,
      },
      {
        path: RouterConstant.TABLES_DATA.path,
        component: TablesDataComponent,
      },
      {
        path: RouterConstant.UI1.path,
        component: Ui1Component,
      },
      {
        path: RouterConstant.UI2.path,
        component: Ui2Component,
      },
      {
        path: RouterConstant.MODAL.path,
        component: ModalComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
