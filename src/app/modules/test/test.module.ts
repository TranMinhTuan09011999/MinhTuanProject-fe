import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { Component1Component } from './component/component1/component1.component';
import { Component2Component } from './component/component2/component2.component';
import {TestComponent} from "./test.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    TestComponent,
    Component1Component,
    Component2Component
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TestModule { }
