import { Component, OnInit } from '@angular/core';
import {RouterConstant} from "../../../../../constant/router-constant";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToFormsElements = () => {
    this.router.navigate([RouterConstant.TEST.path, RouterConstant.FORMS_ELEMENTS.path]).then();
  }

  navigateToFormsLayouts = () => {
    this.router.navigate([RouterConstant.TEST.path, RouterConstant.FORMS_LAYOUTS.path]).then();
  }

  navigateToFormsEditors = () => {
    this.router.navigate([RouterConstant.TEST.path, RouterConstant.FORMS_EDITORS.path]).then();
  }

  navigateToExcelReport = () => {
    this.router.navigate([RouterConstant.TEST.path, RouterConstant.EXCEL_REPORT.path]).then();
  }

  navigateToTablesGeneral = () => {
    this.router.navigate([RouterConstant.TEST.path, RouterConstant.TABLES_GENERAL.path]).then();
  }

  navigateToTablesData = () => {
    this.router.navigate([RouterConstant.TEST.path, RouterConstant.TABLES_DATA.path]).then();
  }

}
