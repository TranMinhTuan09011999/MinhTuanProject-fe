import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {ModalService} from "../../../../components/modal/modal.service";

@Component({
  selector: 'app-language-topic',
  templateUrl: './language-topic.component.html',
  styleUrls: ['./language-topic.component.css']
})
export class LanguageTopicComponent implements OnInit {

  public sentenceAdditionId = 'sentenceAdditionId';
  public header = 'More communication sentences!!!';

  constructor(@Inject(DOCUMENT) private document: Document,
              private modalService: ModalService) { }

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

  sentenceAdditionModal = () => {
    this.modalService.open(this.sentenceAdditionId);
  }

}
