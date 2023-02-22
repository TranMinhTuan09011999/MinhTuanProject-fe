import {Component, Input, OnInit} from '@angular/core';
import {ModalService} from "./modal.service";
import * as $ from "jquery";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() id!: string;
  @Input() isCompletionModal = false;

  public contentId!: string;
  private isOpening = false;

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    const model = this;
    this.modalService.setModel(model);
    this.contentId = `${this.id}-content`;
  }

  open = (dlgId: string) => {
    console.log(dlgId);
    this.close(() => {
      if (dlgId === undefined) {
        dlgId = this.id;
      }
      // @ts-ignore
      document.getElementById(`${dlgId}`).click();
      if (this.isCompletionModal) {
        $('[autofocus]').focus();
      }
    });
  }

  close = (cb: any) => {
    // close all modal
    const elements: any = document.getElementsByClassName('m-modal-content');
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = 'none';
    }
    this.onClose(cb);
  }

  onClose = (cb?: any) => {
    if (this.isOpening) {
      (window as any).$('.m-modal-content').css('display', 'none');
      // Note: Add node_modules/jquery/dist/jquery.min.js into angular.json
      $(() => {
        // (window as any).$('.modalTrigger--close').click();
        // $('.m-modal').fadeOut();
        (window as any).clearTabIndex();
        // Note:
        // if (cb && 'function' === typeof cb) { // check cb has value + cb is a function or not
        //   cb(data); // call cb function -> bc function in line 45 / close()
        // }
        if (cb && typeof cb === 'function') {
          cb();
        }
      });
    } else {
      if (cb && typeof cb === 'function') {
        cb();
      }
    }
  }

}
