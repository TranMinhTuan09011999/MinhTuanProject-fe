import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LanguageRouterConstant} from "./constant/language-router-constant";
import {LanguageComponent} from "./language.component";
import {HomeComponent} from "./component/language-home/home/home.component";
import {LanguageTopicComponent} from "./component/language-topic/language-topic.component";
import {LanguageEnglishComponent} from "./component/language-english/language-english/language-english.component";
import {LanguageCommunicationComponent} from "./component/language-communication/language-communication.component";

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
        component: LanguageEnglishComponent,
        children: [
          {
            path: LanguageRouterConstant.LANGUAGE_COMMUNICATION.path,
            component: LanguageCommunicationComponent
          },
          {
            path: LanguageRouterConstant.LANGUAGE_COMMUNICATION_TOPIC.path,
            component: LanguageTopicComponent
          }
        ]
      },
      {
        path: LanguageRouterConstant.LANGUAGE_TOPIC.path,
        component: LanguageTopicComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LanguageRoutingModule { }
