import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {CommonUtil} from "../../../../shared/util/common-util";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-language-topic',
  templateUrl: './language-topic.component.html',
  styleUrls: ['./language-topic.component.css']
})
export class LanguageTopicComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  toLanguageTopic() {

  }

  showMenu() {
    const add = document.querySelector('.edit-add');
    add?.classList.toggle('active');
    const edit = document.querySelector('.edit-edit');
    edit?.classList.toggle('active');
    const del = document.querySelector('.edit-delete');
    del?.classList.toggle('active');
  }

}
