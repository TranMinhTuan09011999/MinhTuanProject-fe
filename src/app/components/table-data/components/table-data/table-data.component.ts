import {Component, ContentChildren, Input, OnInit, QueryList} from '@angular/core';
import {ListData} from "../../model/list-data.interface";
import * as _ from 'underscore';
import {DataColumnDirective} from "../data-column.directive";
import {Params} from "../../model/params.interface";

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {

  @Input() set items(data: ListData) {
    this._items = data;
    this._params = {
      sortBy: this.items.sort,
      sortAsc: this.items.sortASC,
      isAsc: undefined,
      currentPage: this.items.currentPage,
      limit: this.items.limit
    };
  }

  get items() {
    return this._items;
  }

  @Input() pagination = true;
  @Input() isColumnStyle = true;
  @Input() horizontalScroll = false;

  @ContentChildren(DataColumnDirective) columns!: QueryList<DataColumnDirective>;

  private _items!: ListData

  private _params!: Params;

  public rowRenderred = [];

  constructor() { }

  ngOnInit(): void {
  }

  get hasPagination() {
    return this.pagination;
  }

  get isNoRecords() {
    return this.items.data == null || this.items.data.length === 0;
  }

  get fromPage() {
    return !_.isEmpty(this.items) ? this.items.fromPage : 0;
  }

  get toPage() {
    return !_.isEmpty(this.items) ? this.items.toPage : 0;
  }

  get totalElements() {
    return !_.isEmpty(this.items) ? this.items.totalElements : 0;
  }

  get limit() {
    return !_.isEmpty(this.items) ? this.items.limit : 0;
  }

  get dataProccessed() {
    if(!this.isColumnStyle) {
      return this.items.data;
    }
    if (this.items && this.items.data && _.isArray(this.items.data)) {
      // @ts-ignore
      return this.rowRenderred = this.processAutoPagging();
    }
    return this.items.data;
  }

  private processAutoPagging() {
    let originalData = this.items.data;
    if (this._params.limit) {
      this.items.limit = this._params.limit;
    }
    if (this._params.currentPage || this._params.currentPage === 0) {
      this.items.currentPage = this._params.currentPage;
    }
    this.items.totalElements = originalData.length;
    // @ts-ignore
    const numOfPage = Math.ceil(this.items.totalElements / this.limit);
    this.items.totalPages = numOfPage;
    const nextDuration = this.limit;

    // @ts-ignore
    const startIndex = this.items.currentPage * nextDuration;
    // @ts-ignore
    const endInext = startIndex + nextDuration;
    this.items.fromPage = startIndex + 1;
    // @ts-ignore
    this.items.toPage = Math.min((this.currentPage + 1) * nextDuration, this.items.totalElements);
    return originalData.slice(startIndex, endInext);
  }


  get last() {
    // @ts-ignore
    return this.isNoRecords || this.items.currentPage + 1 === this.items.totalPages;
  }

  get first() {
    return this.isNoRecords || this.items.currentPage === 0;
  }

  get currentPage() {
    return !_.isEmpty(this.items) ? this.items.currentPage : 0;
  }

  get totalPages() {
    return !_.isEmpty(this.items) ? this.items.totalPages : 0;
  }

  horizontalScrollClass() {
    return this.horizontalScroll ? 'contentsTable__box--horizontal-scroll' : '';
  }

  updPage = (newPage: number) => {
    console.log(newPage);
    this._params.currentPage = newPage;
  }

  actionPage = () => {
    this.processAutoPagging();
  }

}
