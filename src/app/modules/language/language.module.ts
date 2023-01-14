import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguageRoutingModule } from './language-routing.module';
import {LanguageComponent} from "./language.component";
import { HomeComponent } from './component/language-home/home/home.component';
import { HomeHeaderComponent } from './component/language-home/home-header/home-header.component';
import { HomeSectionComponent } from './component/language-home/home-section/home-section.component';
import {SwiperModule} from "swiper/angular";
import { LanguageCommunicationComponent } from './component/language-communication/language-communication.component';
import { LanguageTopicComponent } from './component/language-topic/language-topic.component';
import { LanguageEnglishLayoutsHeaderComponent } from './component/language-english/language-english-layouts/language-english-layouts-header/language-english-layouts-header.component';
import { LanguageEnglishLayoutsSidebarComponent } from './component/language-english/language-english-layouts/language-english-layouts-sidebar/language-english-layouts-sidebar.component';
import { LanguageEnglishLayoutsFooterComponent } from './component/language-english/language-english-layouts/language-english-layouts-footer/language-english-layouts-footer.component';
import { LanguageEnglishComponent } from './component/language-english/language-english/language-english.component';


@NgModule({
  declarations: [
    LanguageComponent,
    HomeComponent,
    HomeHeaderComponent,
    HomeSectionComponent,
    LanguageCommunicationComponent,
    LanguageTopicComponent,
    LanguageEnglishLayoutsHeaderComponent,
    LanguageEnglishLayoutsSidebarComponent,
    LanguageEnglishLayoutsFooterComponent,
    LanguageEnglishComponent
  ],
  imports: [
    CommonModule,
    LanguageRoutingModule,
    SwiperModule
  ]
})
export class LanguageModule { }
