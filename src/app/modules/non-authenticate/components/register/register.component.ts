import { Component, OnInit } from '@angular/core';
import {RouterConstant} from "../../../../constant/router-constant";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  userLogin = () => {
    this.router.navigate([RouterConstant.MY_LIFE_MY_RULES.path, RouterConstant.NON_AUTHENTICATE_LOGIN.path]).then();
  }

}
