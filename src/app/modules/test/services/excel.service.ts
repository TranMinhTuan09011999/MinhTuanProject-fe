import { Injectable } from '@angular/core';
import {HttpDAOService} from "../../../services/http-dao.service";
import {catchError, Observable} from "rxjs";
import {APIConstant} from "../../../constant/api-constant";
import {ExceptionUtil} from "../../../util/exception-util";

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor(private httpDAO: HttpDAOService) { }

  report(data: any): Observable<any> {
    return this.httpDAO.doPost(APIConstant.API_TEST_EXCEL_EXPORT, data)
      .pipe(
        catchError(ExceptionUtil.handleError)
      );
  }
}
