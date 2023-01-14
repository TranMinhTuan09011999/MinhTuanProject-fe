import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-language-english-layouts-header',
  templateUrl: './language-english-layouts-header.component.html',
  styleUrls: ['./language-english-layouts-header.component.css']
})
export class LanguageEnglishLayoutsHeaderComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  sidebarToggle() {
    //toggle sidebar function
    this.document.body.classList.toggle('toggle-sidebar');
  }

}
