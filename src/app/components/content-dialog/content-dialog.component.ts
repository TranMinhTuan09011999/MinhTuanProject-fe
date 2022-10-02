import {Component, Input, OnInit, Output, EventEmitter, ViewContainerRef, ViewChild, TemplateRef} from '@angular/core';
import * as $ from 'jquery';
import {ContentDialogService} from "./content-dialog.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-content-dialog',
  templateUrl: './content-dialog.component.html',
  styleUrls: ['./content-dialog.component.css']
})
export class ContentDialogComponent implements OnInit {

  // To using this component into a modules, we create a shared module to call this component
  @Input() header!: string;
  @Input() headerTextAlign!: string;
  @Input() closeWhenOutside = true;
  @Input() isShowClose = true;
  @Input() id!: string;
  @Input() isCompletionModal = false;
  @Input() modalTriggerClose!: string;
  @Input() width: any;
  @Input() heightModelItem: any;
  @Input() scrollY!: boolean;
  @Input() body!: TemplateRef<any>;
  @Input() footer!: TemplateRef<any>;
  @Input() isSubmit!: boolean;

  @Output() eventOpen = new EventEmitter();
  @Output() clickClose = new EventEmitter();
  @Output() eventOutside = new EventEmitter();

  @ViewChild('bodyContainer', { read: ViewContainerRef, static: true }) bodyContainer!: ViewContainerRef;
  @ViewChild('footerContainer', { read: ViewContainerRef, static: true }) footerContainer!: ViewContainerRef;

  public contentId!: string;

  private isOpening = false;
  private isOpenById = false;

  constructor(private service: ContentDialogService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.modalTriggerClose = 'modalTrigger--close';
    this.bodyContainer.createEmbeddedView(this.body);
    this.footerContainer.createEmbeddedView(this.footer);
    const model = this;
    this.service.setModel(model);
    this.contentId = `${this.id}-content`;
    $(() => {
      (window as any).attentionTrigger(), (window as any).modalInteraction(), (window as any).pushInteraction();
    });
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
      this.isOpening = true;
      this.isOpenById = true;
      this.eventOpen.emit();
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
      this.isOpening = false;
      this.isOpenById = false;
      this.clickClose.emit();
    } else {
      if (cb && typeof cb === 'function') {
        cb();
      }
    }
  }

  setWidth() {
    let style = '';
    if (this.width) {
      style = style.concat('width: ' + this.width + ';');
    }
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }

  public classHeaderTextAlign = () => {
    if (this.headerTextAlign !== null && this.headerTextAlign !== undefined) {
      if (this.headerTextAlign === 'right') {
        return 'modal__ttl modal__ttl--text-align-right';
      } else if (this.headerTextAlign === 'left') {
        return 'modal__ttl modal__ttl--text-align-left';
      }
    }

    return 'modal__ttl';
  }

  setHeightModalItem() {
    let style = '';
    if (this.heightModelItem) {
      style = style.concat('height: ' + this.heightModelItem + ';');
    }
    if (this.heightModelItem && this.scrollY) {
      style = style.concat('overflow-y: auto;');
    }
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }

  clickOutside = (): any => {
    if (this.isOpenById && this.isOpening) {
      if (this.isSubmit) {
        return false;
      }
      $('#' + this.contentId).css({display: 'none'});
      this.isOpening = false;
      this.eventOutside.emit();
      return;
    }

    $(() => {
      (window as any).clearTabIndex();
    });
    this.eventOutside.emit();
  }


}
