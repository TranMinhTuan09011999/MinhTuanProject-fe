import { Injectable } from '@angular/core';
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContentDialogService {

  private model: any;

  private defaultId = 'dlg-default';
  private lstModal: Array<{modalId: string, modalRef: any}> = [];

  constructor() { }

  setModel = (modelRef: any) => {
    this.model = modelRef;
    let id = modelRef['id'];
    if (!id) {
      id = this.defaultId;
    }
    this.lstModal.push({modalId: id, modalRef: modelRef});
  }

  open = (dlgId?: string) => {
    if (dlgId !== undefined) {
      const tmpModal = this.getModal(dlgId);
      console.log(tmpModal);
      tmpModal.modalRef.open(dlgId);
    } else {
      this.model.open(dlgId);
    }
    $(() => {
      (window as any).preventTabIndexOutside();
    });
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
