import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NonAuthenticateRoutingModule } from './non-authenticate-routing.module';
import { LoginComponent } from './components/login/login.component';
import { NonAuthenticateComponent } from './non-authenticate.component';
import { RegisterComponent } from './components/register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    NonAuthenticateComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    NonAuthenticateRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NonAuthenticateModule { }
