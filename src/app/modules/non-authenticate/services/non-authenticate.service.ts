import { Injectable } from '@angular/core';
import {catchError, Observable} from "rxjs";
import {HttpDAOService} from "../../../services/http-dao.service";
import {APIConstant} from "../../../constant/api-constant";
import {ExceptionUtil} from "../../../util/exception-util";

@Injectable({
  providedIn: 'root'
})
export class NonAuthenticateService {

  constructor(private httpDAO: HttpDAOService) { }

  login(credentials: any): Observable<any> {
    return this.httpDAO.doPost(APIConstant.API_NON_AUTH_LOGIN, credentials)
      .pipe(
        catchError(ExceptionUtil.handleError)
      );
  }
}
