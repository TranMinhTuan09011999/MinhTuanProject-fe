import {Component, forwardRef, Inject, OnInit} from '@angular/core';
import {TableDataComponent} from "../table-data/table-data.component";

@Component({
  selector: 'app-result-range',
  templateUrl: './result-range.component.html',
  styleUrls: ['./result-range.component.css']
})
export class ResultRangeComponent implements OnInit {

  public from!: string;
  public to!: string;
  public total!: string;

  constructor(@Inject(forwardRef(() => TableDataComponent)) public dataTable: TableDataComponent) { }

  ngOnInit(): void {
  }

}
