import { Component, OnInit } from '@angular/core';
import {RouterConstant} from "../../../../constant/router-constant";
import {ScreenService} from "../../../../services/screen.service";

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor(private screenService: ScreenService) { }

  ngOnInit(): void {
  }

  back = () => {
    debugger
    this.screenService.findAndBackToPath([
      RouterConstant.COMPONENT_1.path
    ]).catch(this.handleError);
  }

  public handleError = (error: any) => {

  }
}
