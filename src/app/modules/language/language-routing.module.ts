import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LanguageRouterConstant} from "./constant/language-router-constant";
import {LanguageComponent} from "./language.component";
import {HomeComponent} from "./component/language-home/home/home.component";
import {LanguageEnglishComponent} from "./component/language-english/language-english.component";

const routes: Routes = [
  {
    path: LanguageRouterConstant.LANGUAGE.path,
    component: LanguageComponent,
    children: [
      {
        path: LanguageRouterConstant.LANGUAGE_HOME.path,
        component: HomeComponent
      },
      {
        path: LanguageRouterConstant.LANGUAGE_ENGLISH.path,
        component: LanguageEnglishComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LanguageRoutingModule { }
