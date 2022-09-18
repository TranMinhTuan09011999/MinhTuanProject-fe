import { Injectable } from '@angular/core';
import { PortalType } from '../constant/portal-type.enum';
import {API} from "../modules/non-authenticate/services/api.interface";
import {StringUtil} from "../util/string-util";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpDaoWrapperService {

  private baseURI = '';
  private baseURINonAuth = 'auth/';
  private baseURLMLMRPortal = 'portal/my-life-my-rules';
  private baseURLSalesPortal = 'portal/sales/';
  private baseURITest = 'test/';
  private baseSession = 'session/';

  private headerApplicationJson = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  // use httpClient -> add HttpClientModule into NonAuthenticateModule
  constructor(private http: HttpClient) {
  }

  public doBuilderURLAPI(pathAPI: API, params?: {}) {
    let apiFull = environment.baseURL + this.baseURI;
    if (pathAPI.module === PortalType.NON_AUTH || pathAPI.module === PortalType.AUTHENTICATED) {
      apiFull += this.baseURINonAuth;
    } else if (pathAPI.module === PortalType.TEST) {
      apiFull += this.baseURITest;
    } else if (pathAPI.module === PortalType.MY_LIFE_MY_RULES) {
      apiFull += this.baseURLMLMRPortal;
    } else if (pathAPI.module === PortalType.SALES) {
      apiFull += this.baseURLSalesPortal;
    } else if (pathAPI.module === PortalType.SESSION) {
      apiFull += this.baseSession;
    }else if (pathAPI.module === PortalType.DIRECT_LINK) {
      // use direct link
      return pathAPI.uri;
    }
    let tmpURI = pathAPI.uri;
    if (params) {
      tmpURI = StringUtil.formatString(tmpURI, params);
    }
    return (apiFull + tmpURI);
  }

  doPost(pathAPI: API, body: any, params?: {}): Observable<any> {
    const href = this.doBuilderURLAPI(pathAPI, params);
    return this.http.post<any>(href, body, {headers: this.headerApplicationJson});
  }

  doPatch(pathAPI: API, body: any, params?: {}): Observable<any> {
    const href = this.doBuilderURLAPI(pathAPI, params);
    return this.http.patch<any>(href, body, {headers: this.headerApplicationJson});
  }

  doGetTextResponse(pathAPI: API, params?: {}): Observable<any> {
    const href = this.doBuilderURLAPI(pathAPI, params);
    return this.http.get<any>(href, {headers: this.headerApplicationJson, responseType: 'text' as 'json'});
  }

}
