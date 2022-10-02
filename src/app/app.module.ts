import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NonAuthenticateModule} from "./modules/non-authenticate/non-authenticate.module";
import {UserModule} from "./modules/user/user.module";
import {AdminModule} from "./modules/admin/admin.module";
import {TestModule} from "./modules/test/test.module";
import {MyLifeMyRulesPortalModule} from "./modules/my-life-my-rules-portal/my-life-my-rules-portal.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NonAuthenticateModule,
        UserModule,
        AdminModule,
        TestModule,
        MyLifeMyRulesPortalModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
