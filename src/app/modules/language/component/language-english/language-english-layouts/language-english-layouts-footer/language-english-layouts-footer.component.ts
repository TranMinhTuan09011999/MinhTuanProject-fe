import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language-english-layouts-footer',
  templateUrl: './language-english-layouts-footer.component.html',
  styleUrls: ['./language-english-layouts-footer.component.css']
})
export class LanguageEnglishLayoutsFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
