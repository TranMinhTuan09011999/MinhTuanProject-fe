import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RouterConstant} from "../../constant/router-constant";
import {TestComponent} from "./test.component";
import {Component1Component} from "./component/component1/component1.component";
import {Component2Component} from "./component/component2/component2.component";

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
