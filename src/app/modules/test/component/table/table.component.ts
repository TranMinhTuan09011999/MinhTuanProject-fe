import {Component, ContentChild, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @ContentChild('temp2') temp2!: TemplateRef<any>;

  @ContentChild('tabContent', { static: false }) contentTamplate: any;

  public tab1: { name: string, lbl: string } = {
    name: 'tab1',
    lbl: 'tab1',
  };

  public tab2: { name: string, lbl: string } = {
    name: 'tab2',
    lbl: 'tab2',
  };

  public tabSelected = this.tab2.name;

  constructor() { }

  ngOnInit(): void {

  }

  ite = () => {
    console.log(this.temp2);
  }

}
