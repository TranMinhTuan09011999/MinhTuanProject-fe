import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NonAuthenticateRoutingModule } from './non-authenticate-routing.module';
import { LoginComponent } from './components/login/login.component';
import {NonAuthenticateComponent} from "./non-authenticate.component";


@NgModule({
  declarations: [
    NonAuthenticateComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    NonAuthenticateRoutingModule
  ]
})
export class NonAuthenticateModule { }
