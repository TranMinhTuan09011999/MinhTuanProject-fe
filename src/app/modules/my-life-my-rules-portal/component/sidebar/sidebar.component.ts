import { Component, OnInit } from '@angular/core';
import {RouterConstant} from "../../../../constant/router-constant";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToHome = () => {
    this.router.navigate([RouterConstant.MY_LIFE_MY_RULES.path, RouterConstant.MY_LIFE_MY_RULES_PORTAL_HOME_SCREEN.path]).then();
  }

  navigateToMyWallets = () => {
    this.router.navigate([RouterConstant.MY_LIFE_MY_RULES.path, RouterConstant.MY_LIFE_MY_RULES_PORTAL_WALLETS.path]).then();
  }

}
