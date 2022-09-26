import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-life-my-rules-portal',
  templateUrl: './my-life-my-rules-portal.component.html',
  styleUrls: ['./my-life-my-rules-portal.component.css']
})
export class MyLifeMyRulesPortalComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
  }

}
