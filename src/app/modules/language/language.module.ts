import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguageRoutingModule } from './language-routing.module';
import {LanguageComponent} from "./language.component";
import { HomeComponent } from './component/language-home/home/home.component';
import { HomeHeaderComponent } from './component/language-home/home-header/home-header.component';
import { HomeSectionComponent } from './component/language-home/home-section/home-section.component';
import {SwiperModule} from "swiper/angular";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import { LanguageCommunicationComponent } from './component/language-communication/language-communication.component';
import { LanguageEnglishComponent } from './component/language-english/language-english.component';
import { LanguageTopicComponent } from './component/language-topic/language-topic.component';


@NgModule({
  declarations: [
    LanguageComponent,
    HomeComponent,
    HomeHeaderComponent,
    HomeSectionComponent,
    LanguageCommunicationComponent,
    LanguageEnglishComponent,
    LanguageTopicComponent
  ],
  imports: [
    CommonModule,
    LanguageRoutingModule,
    SwiperModule
  ]
})
export class LanguageModule { }
