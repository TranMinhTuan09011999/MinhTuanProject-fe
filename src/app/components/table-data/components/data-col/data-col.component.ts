import {Component, forwardRef, Inject, Input, OnInit} from '@angular/core';
import { CommonUtil } from 'src/app/shared/util/common-util';
import {TableDataComponent} from "../table-data/table-data.component";

@Component({
  selector: '[dataCol]',
  templateUrl: './data-col.component.html',
  styleUrls: ['./data-col.component.css']
})
export class DataColComponent implements OnInit {

  @Input() row: any;
  public commonUtil = CommonUtil;

  constructor(@Inject(forwardRef(() => TableDataComponent)) public dataTable: TableDataComponent) { }

  ngOnInit() {
  }

}
