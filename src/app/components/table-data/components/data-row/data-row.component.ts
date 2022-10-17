import {Component, forwardRef, Inject, Input, OnInit} from '@angular/core';
import {CommonUtil} from "../../../../shared/util/common-util";
import {TableDataComponent} from "../table-data/table-data.component";

@Component({
  selector: '[dataRow]',
  templateUrl: './data-row.component.html',
  styleUrls: ['./data-row.component.css']
})
export class DataRowComponent implements OnInit {

  @Input() row: any;
  public commonUtil = CommonUtil;

  constructor(@Inject(forwardRef(() => TableDataComponent)) public dataTable: TableDataComponent) { }

  ngOnInit() {
  }

}
