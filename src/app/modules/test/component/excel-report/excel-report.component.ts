import { Component, OnInit } from '@angular/core';
import {PortalTypeHelper} from "../../../../util/portal-type-helper";
import {NonAuthenticateService} from "../../../non-authenticate/services/non-authenticate.service";
import {ExcelService} from "../../services/excel.service";
import {CommonUtil} from "../../../../util/common-util";

@Component({
  selector: 'app-excel-report',
  templateUrl: './excel-report.component.html',
  styleUrls: ['./excel-report.component.css']
})
export class ExcelReportComponent implements OnInit {

  constructor(private excelService: ExcelService) { }

  public data = {
    id: "A123",
    fullName: "Minh Tuan",
    grade: "12A11",
    resultList: [
        {
          idSub: 1,
          subjectName: "English",
          score1: 8,
          score2: 10,
          classification: "Good"
        },
        {
          idSub: 2,
          subjectName: "Math",
          score1: 8,
          score2: 10,
          classification: "Good"
        },
        {
          idSub: 3,
          subjectName: "Art",
          score1: 8,
          score2: 10,
          classification: "Good"
        },
        {
          idSub: 4,
          subjectName: "History",
          score1: 8,
          score2: 10,
          classification: "Good"
        },
        {
          idSub: 5,
          subjectName: "Chemistry",
          score1: 8,
          score2: 10,
          classification: "Good"
        }
      ]
  }

  ngOnInit(): void {
  }

  report = () => {
    this.excelService.report(this.data).subscribe()
  }

}
