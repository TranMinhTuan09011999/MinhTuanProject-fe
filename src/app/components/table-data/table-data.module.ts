import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDataComponent } from './components/table-data/table-data.component';
import { DataColumnDirective } from './components/data-column.directive';
import { PaginationComponent } from './components/pagination/pagination.component';
import { DataColComponent } from './components/data-col/data-col.component';
import { DataRowComponent } from './components/data-row/data-row.component';
import { ResultRangeComponent } from './components/result-range/result-range.component';
import { PagesComponent } from './components/pages/pages.component';



@NgModule({
  declarations: [
    TableDataComponent,
    DataColumnDirective,
    PaginationComponent,
    DataColComponent,
    DataRowComponent,
    ResultRangeComponent,
    PagesComponent
  ],
  exports: [
    TableDataComponent,
    DataColumnDirective
  ],
  imports: [
    CommonModule
  ]
})
export class TableDataModule { }
