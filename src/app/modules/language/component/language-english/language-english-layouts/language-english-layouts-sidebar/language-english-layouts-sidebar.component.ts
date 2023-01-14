import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LanguageRouterConstant} from "../../../../constant/language-router-constant";

@Component({
  selector: 'app-language-english-layouts-sidebar',
  templateUrl: './language-english-layouts-sidebar.component.html',
  styleUrls: ['./language-english-layouts-sidebar.component.css']
})
export class LanguageEnglishLayoutsSidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toLanguageCommunication() {
    this.router.navigate([LanguageRouterConstant.LANGUAGE.path, LanguageRouterConstant.LANGUAGE_ENGLISH.path, LanguageRouterConstant.LANGUAGE_COMMUNICATION.path]).then();
  }

}
