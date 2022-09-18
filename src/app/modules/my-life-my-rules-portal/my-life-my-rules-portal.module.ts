import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyLifeMyRulesPortalRoutingModule } from './my-life-my-rules-portal-routing.module';
import { MyLifeMyRulesPortalComponent } from './my-life-my-rules-portal.component';
import { MyLifeMyRulesHomeComponent } from './component/my-life-my-rules-home/my-life-my-rules-home.component';
import { HeaderComponent } from './component/header/header.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    MyLifeMyRulesPortalComponent,
    MyLifeMyRulesHomeComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MyLifeMyRulesPortalRoutingModule
  ]
})
export class MyLifeMyRulesPortalModule { }
