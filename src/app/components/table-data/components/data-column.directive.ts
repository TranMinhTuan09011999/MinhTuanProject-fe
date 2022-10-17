import {Directive, Input} from '@angular/core';

@Directive({
  selector: 'data-column'
})
export class DataColumnDirective {

  @Input() header!: string;
  @Input() property!: string;

  constructor() { }

}
