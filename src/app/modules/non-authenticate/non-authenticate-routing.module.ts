import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RouterConstant} from "../../constant/router-constant";
import {NonAuthenticateComponent} from "./non-authenticate.component";
import {RegisterComponent} from "./components/register/register.component";
import {PortalType} from "../../constant/portal-type.enum";

const routes: Routes = [
  {
    path: RouterConstant.MY_LIFE_MY_RULES.path,
    component: NonAuthenticateComponent,
    children: [
        {
          path: RouterConstant.NON_AUTHENTICATE_LOGIN.path,
          component: LoginComponent,
          data: { breadcrumb: RouterConstant.NON_AUTHENTICATE_LOGIN.label, portalType: PortalType.MY_LIFE_MY_RULES } // data is used to get for activatedRoute
        },
      {
        path: RouterConstant.NON_AUTHENTICATE_REGISTER.path,
        component: RegisterComponent
      }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NonAuthenticateRoutingModule { }
