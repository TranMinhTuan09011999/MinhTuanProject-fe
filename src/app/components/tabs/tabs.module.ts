import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab/tab.component';
import { TabListComponent } from './tab-list/tab-list.component';
import { TabDirective } from './tab.directive';
import { TabContentComponent } from './tab-content/tab-content.component';
import {SharedModule} from "../../shared/shared.module";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
    TabComponent,
    TabListComponent,
    TabDirective,
    TabContentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule
  ],
  exports: [
    // Use export to use this component, directive in a other module
    TabComponent,
    TabDirective
  ]
})
export class TabsModule { }
