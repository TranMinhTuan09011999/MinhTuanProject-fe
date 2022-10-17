import {Component, ContentChild, OnInit, TemplateRef} from '@angular/core';
import {ListData} from "../../../../components/table-data/model/list-data.interface";

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})
export class Table1Component implements OnInit {

  public tableData!: ListData;

  constructor() { }

  ngOnInit(): void {
    this.initListData();
  }

  private initListData = () => {
    this.tableData = {
      data: [
        {
          header1: "aaaaa1",
          header2: "aaaaa2",
          header3: "aaaaa3",
          header4: "aaaaa4",
          header5: "aaaaa5",
          header6: "aaaaa6",
          header7: "aaaaa7",
          header8: "aaaaa8",
          header9: "aaaaa9",
          header10: "aaaaa10",
        },
        {
          header1: "bbbbb1",
          header2: "bbbbb2",
          header3: "bbbbb3",
          header4: "bbbbb4",
          header5: "bbbbb5",
          header6: "bbbbb6",
          header7: "bbbbb7",
          header8: "bbbbb8",
          header9: "bbbbb9",
          header10: "bbbbb10",
        },
        {
          header1: "ccccc1",
          header2: "ccccc2",
          header3: "ccccc3",
          header4: "ccccc4",
          header5: "ccccc5",
          header6: "ccccc6",
          header7: "ccccc7",
          header8: "ccccc8",
          header9: "ccccc9",
          header10: "ccccc10",
        },
        {
          header1: "ddddd1",
          header2: "ddddd2",
          header3: "ddddd3",
          header4: "ddddd4",
          header5: "ddddd5",
          header6: "ddddd6",
          header7: "ddddd7",
          header8: "ddddd8",
          header9: "ddddd9",
          header10: "ddddd10",
        },
        {
          header1: "eeeee1",
          header2: "eeeee2",
          header3: "eeeee3",
          header4: "eeeee4",
          header5: "eeeee5",
          header6: "eeeee6",
          header7: "eeeee7",
          header8: "eeeee8",
          header9: "eeeee9",
          header10: "eeeee10",
        },
        {
          header1: "fffff1",
          header2: "fffff2",
          header3: "fffff3",
          header4: "fffff4",
          header5: "fffff5",
          header6: "fffff6",
          header7: "fffff7",
          header8: "fffff8",
          header9: "fffff9",
          header10: "fffff10",
        },
        {
          header1: "ggggg1",
          header2: "ggggg2",
          header3: "ggggg3",
          header4: "ggggg4",
          header5: "ggggg5",
          header6: "ggggg6",
          header7: "ggggg7",
          header8: "ggggg8",
          header9: "ggggg9",
          header10: "ggggg10",
        },
        {
          header1: "hhhhh1",
          header2: "hhhhh2",
          header3: "hhhhh3",
          header4: "hhhhh4",
          header5: "hhhhh5",
          header6: "hhhhh6",
          header7: "hhhhh7",
          header8: "hhhhh8",
          header9: "hhhhh9",
          header10: "hhhhh10",
        }
      ],
      totalElements: 0,
      currentPage: 0,
      fromPage: 0,
      limit: 0,
      query: null,
      sort: null,
      sortASC: null,
      toPage: 0,
      totalPages: 0
    };
  }

}
