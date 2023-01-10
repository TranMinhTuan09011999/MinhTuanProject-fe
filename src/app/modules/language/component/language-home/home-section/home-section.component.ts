import {Component, OnInit, ViewEncapsulation} from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
