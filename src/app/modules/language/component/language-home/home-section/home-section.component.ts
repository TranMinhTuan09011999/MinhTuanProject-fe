import {Component, OnInit, ViewEncapsulation} from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import {Router} from "@angular/router";
import {LanguageRouterConstant} from "../../../constant/language-router-constant";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeSectionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toLanguageEnglish() {
    this.router.navigate([LanguageRouterConstant.LANGUAGE.path, LanguageRouterConstant.LANGUAGE_ENGLISH.path]).then();
  }

}
