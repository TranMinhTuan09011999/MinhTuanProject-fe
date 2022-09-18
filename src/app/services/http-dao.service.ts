import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {API} from "../modules/non-authenticate/services/api.interface";
import {AuthorizeService} from "./authenticate-service/authorize.service";
import {HttpDaoWrapperService} from "./http-dao-wrapper.service";


@Injectable({
  providedIn: 'root'
})
export class HttpDAOService {

  constructor(private authorizeService: AuthorizeService, private httpDaoWrapperService: HttpDaoWrapperService) {
  }

  doPost(pathAPI: API, body: any, params?: {}): Observable<any> {
    this.authorizeService.hasPermitAPI(pathAPI).then();
    return this.httpDaoWrapperService.doPost(pathAPI, body, params);
  }

  doPatch(pathAPI: API, body: any, params?: {}): Observable<any> {
    this.authorizeService.hasPermitAPI(pathAPI).then();
    return this.httpDaoWrapperService.doPatch(pathAPI, body, params);
  }

  doGetTextResponse(pathAPI: API, params?: {}): Observable<any> {
    this.authorizeService.hasPermitAPI(pathAPI).then();
    return this.httpDaoWrapperService.doGetTextResponse(pathAPI, params);
  }



}
