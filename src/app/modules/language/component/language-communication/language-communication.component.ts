import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LanguageRouterConstant} from "../../constant/language-router-constant";

@Component({
  selector: 'app-language-communication',
  templateUrl: './language-communication.component.html',
  styleUrls: ['./language-communication.component.css']
})
export class LanguageCommunicationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toLanguageTopic() {
    this.router.navigate([LanguageRouterConstant.LANGUAGE.path, LanguageRouterConstant.LANGUAGE_ENGLISH.path, LanguageRouterConstant.LANGUAGE_COMMUNICATION_TOPIC.path], {
      queryParams: {
        topic: 'Office'
      }
    }).then();
  }

}
