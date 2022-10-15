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

  navigateToUI1 = () => {
    this.router.navigate([RouterConstant.TEST.path, RouterConstant.UI1.path]).then();
  }

  navigateToUI2 = () => {
    this.router.navigate([RouterConstant.TEST.path, RouterConstant.UI2.path]).then();
  }

  navigateToModal = () => {
    this.router.navigate([RouterConstant.TEST.path, RouterConstant.MODAL.path]).then();
  }

  navigateToInputForm = () => {
    this.router.navigate([RouterConstant.TEST.path, RouterConstant.INPUT_FORM.path]).then();
  }

  navigateToTable = () => {
    this.router.navigate([RouterConstant.TEST.path, RouterConstant.TABLE.path]).then();
  }

}
