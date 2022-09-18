import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RouterConstant} from "../../constant/router-constant";
import {MyLifeMyRulesPortalComponent} from "./my-life-my-rules-portal.component";
import {MyLifeMyRulesHomeComponent} from "./component/my-life-my-rules-home/my-life-my-rules-home.component";

const routes: Routes = [
  {
    path: RouterConstant.MY_LIFE_MY_RULES.path,
    component: MyLifeMyRulesPortalComponent,
    children: [
      {
        path: RouterConstant.MY_LIFE_MY_RULES_PORTAL_HOME_SCREEN.path,
        component: MyLifeMyRulesHomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyLifeMyRulesPortalRoutingModule { }
