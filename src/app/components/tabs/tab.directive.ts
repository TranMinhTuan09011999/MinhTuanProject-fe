import {ContentChild, Directive, Input} from '@angular/core';

@Directive({
  selector: 'tab'
})
export class TabDirective {

  // declare this directive into export in tab.module.ts because it is used in other component

  @Input() id!: string;
  @Input() name!: string;

  @ContentChild('tabContent', { static: false }) contentTamplate: any;

  constructor(
  ) { }

}
