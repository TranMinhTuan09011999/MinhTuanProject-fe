import {Component, forwardRef, Inject, OnInit} from '@angular/core';
import {TableDataComponent} from "../table-data/table-data.component";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor(@Inject(forwardRef(() => TableDataComponent)) public dataTable: TableDataComponent) { }

  ngOnInit(): void {
  }

  makeArray(total: any, current: any): any[] {
    console.log(total);
    console.log(current);
    if (total === 0 || current === -1) {
      return [];
    }

    let finalRanges = [];
    /**
     * case total less than 6
     * [A] When the total number of pages is ＜less than 6＞, display up to existing page numbers. e.g ) 「1 2 3」
     */
    if (total < 6) {
      for (let index = 0; index < total; index++) {
        finalRanges.push(index);
      }
    } else {
      const marginLeft = 3;
      const marginRight = 3;
      let arrMarginLeft: string[] | ConcatArray<number> = [];
      let arrMarginRight: string[] | ConcatArray<number> = [];

      let arrLeft = [];
      let arrRight = [];
      const arrCenter = [];
      const arrPage = [...Array(total).keys()];

      // process left
      if (current < marginLeft) {
        arrLeft = arrPage.slice(0, marginLeft + 1);
        arrMarginLeft = ['...'];
      } else {
        arrLeft = [0];
      }
      // process right
      const indexMargeRight = (total - marginRight);
      if (current >= indexMargeRight && current >= marginLeft) {
        arrRight = arrPage.slice(indexMargeRight - 1, total);
        arrMarginRight = ['...'];
      } else {
        arrRight = [total - 1];
      }
      // process center
      if (current >= marginLeft && current < indexMargeRight) {
        arrCenter.push('...');
        arrCenter.push(current - 1);
        arrCenter.push(current);
        arrCenter.push(current + 1);
        arrCenter.push('...');
      }
      // @ts-ignore
      finalRanges = arrLeft.concat(arrMarginLeft).concat(arrCenter).concat(arrMarginRight).concat(arrRight);
    }
    console.log(finalRanges);
    return finalRanges;
  }

  isNumber(val: any) {
    return typeof val === 'number';
  }

  togo(p: number) {
    // block reload the same page.
    if (this.dataTable.currentPage === p) {
      return;
    }
    this.dataTable.updPage(p);
    this.dataTable.actionPage();
  }

}
