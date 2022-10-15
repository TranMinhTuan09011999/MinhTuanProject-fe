import {Component, forwardRef, Inject, OnInit} from '@angular/core';
import {TabComponent} from "../tab/tab.component";

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.css']
})
export class TabContentComponent implements OnInit {

  constructor(@Inject(forwardRef(() => TabComponent)) public tab: TabComponent) { }

  ngOnInit(): void {

  }

}
