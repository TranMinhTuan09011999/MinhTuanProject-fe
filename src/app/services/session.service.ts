import { Injectable } from '@angular/core';
import { HttpDAOService } from './http-dao.service';
import {APIConstant} from "../constant/api-constant";
import {catchError, firstValueFrom, Observable} from 'rxjs';
import {ExceptionUtil} from "../util/exception-util";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpDAO: HttpDAOService) { }

  async setAttributeAsync(key: string, value: any) {
    await firstValueFrom(this.httpDAO.doPatch(APIConstant.API_SESSION_ATTR_UPD, value, {attrName: key.toLocaleUpperCase()}));
  }

  async getAttributeAsync(key: string) {
    return await firstValueFrom(this.httpDAO.doGetTextResponse(APIConstant.API_SESSION_ATTR_GET, {attrName: key})).then(resp => {
      try {
        if (resp == null) {
          return {};
        }
        return JSON.parse(resp);
      } catch (error) {
        return resp;
      }
    }).catch((error): any => {
      if (error.status === 404) {
        return {};
      } else {
        // need handle exception
      }
    });
  }

  /**
   * Circular dependency detected:
   */
  public getAttribute(key: string): Observable<any> {
    return this.httpDAO.doGetTextResponse(APIConstant.API_SESSION_ATTR_GET, {attrName: key}).pipe(
      catchError(ExceptionUtil.handleError)
    );
  }
}
