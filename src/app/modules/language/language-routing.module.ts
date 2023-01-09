import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RouterConstant} from "./constant/router-constant";
import {LanguageComponent} from "./language.component";
import {HomeComponent} from "./component/language-home/home/home.component";

const routes: Routes = [
  {
    path: RouterConstant.LANGUAGE.path,
    component: LanguageComponent,
    children: [
      {
        path: RouterConstant.LANGUAGE_HOME.path,
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LanguageRoutingModule { }
