import {Component, forwardRef, Inject, OnInit} from '@angular/core';
import {TabComponent} from "../tab/tab.component";

@Component({
  selector: 'app-tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.css']
})
export class TabListComponent implements OnInit {

  constructor(@Inject(forwardRef(() => TabComponent)) public tab: TabComponent) { }

  ngOnInit(): void {
  }

}
