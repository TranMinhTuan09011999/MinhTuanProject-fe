import {Component, ContentChild, ContentChildren, Input, OnInit, QueryList} from '@angular/core';
import {TabDirective} from "../tab.directive";

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  // declare this component into export in tab.module.ts because it is used in other component

  @Input() selected!: string;

  @ContentChildren(TabDirective) tabs!: QueryList<TabDirective>;
  @ContentChild('tabContent', { static: false }) contentTamplate: any;

  private tmpSelectedId!: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.tabs);
  }

  selectItem = (id: string) => {
    if (id === this.selected) {
      console.log(id);
      return;
    }
    this.selected = id;
  }

  isSelected(id: string): boolean {
    return this.selected === id ? true : false;
  }

}
