import {Component, forwardRef, Inject, OnInit} from '@angular/core';
import {TableDataComponent} from "../table-data/table-data.component";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  constructor(@Inject(forwardRef(() => TableDataComponent)) public dataTable: TableDataComponent) { }

  ngOnInit(): void {
  }

  changeLimit = (newLimit?: number) => {

  }

}
