import { Injectable } from '@angular/core';
import {throwError} from "rxjs";
import * as $ from "jquery";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private model: any;
  private lstModal: Array<{modalId: string, modalRef: any}> = [];

  private defaultId = 'dlg-default';

  constructor() { }

  setModel = (modelRef: any) => {
    this.model = modelRef;
    console.log(this.model);
    let id = modelRef['id'];
    console.log(id);
    if (!id) {
      id = this.defaultId;
    }
    this.lstModal.push({modalId: id, modalRef: modelRef});
    console.log(this.lstModal);
  }

  open = (dlgId?: string) => {
    console.log(dlgId);
    if (dlgId !== undefined) {
      const tmpModal = this.getModal(dlgId);
      console.log(tmpModal);
      tmpModal.modalRef.open(dlgId);
    } else {
      this.model.open(dlgId);
    }
  }

  private getModal(dlgId: string): any {
    let tmpId = this.defaultId;
    if (dlgId) {
      tmpId = dlgId;
    }
    const modal = this.lstModal.find(m => m.modalId === tmpId);
    if (modal) {
      return modal;
    } else {
      throwError('can not get modal');
    }
  }
}
