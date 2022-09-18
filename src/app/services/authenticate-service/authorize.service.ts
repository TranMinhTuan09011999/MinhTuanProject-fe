import { Injectable } from '@angular/core';
import {API} from "../../modules/non-authenticate/services/api.interface";
import {APIConstant} from "../../constant/api-constant";
import {SessionAttribute} from "../../constant/session-attribute";
import {SessionService} from "../session.service";
import {ParserUtil} from "../../util/parser-util";
import {PortalTypeHelper} from "../../util/portal-type-helper";
@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  private durationCacheExpiry = 60; // cache 60m

  private authAuthorities!: { loginstate: number, portal: number, authorities: [], expiry: Date , authorities_proxy ?: []};

  constructor() {
    console.log(this.authAuthorities);
    if (!this.authAuthorities) {
      this.checkAuthority().then();
    }
  }

  async hasPermitAPI(api: API) {
    switch (api) {
      case APIConstant.API_NON_AUTH_LOGIN:
      case APIConstant.API_NON_AUTH_CHANGE:
        return;
    }
    if (!(await this.hasLogged())) {
      return;
    }
    // if (PortalTypeHelper.getCurrentPortal() !== this.authAuthorities.portal) {
    //   this.errorService.forbidden();
    //   return;
    // }
  }

  private async checkAuthority() {
    return new Promise<void>(async (resovle, reject) => {
      if (!this.authAuthorities || this.authAuthorities == null || !this.authAuthorities.loginstate || !this.checkCache()) {
        // const resp = await this.sessionService.getAttributeAsync([SessionAttribute.LOGGED_STATE, SessionAttribute.AUTHORITIES,
        //   SessionAttribute.LOGGED_PORTAL, SessionAttribute.AUTHORITIES_PROXY].join(','));
        // if (resp) {
        //   this.authAuthorities = {
        //     loginstate: resp[SessionAttribute.LOGGED_STATE],
        //     authorities: resp[SessionAttribute.AUTHORITIES],
        //     expiry: this.cacheExpiry(this.durationCacheExpiry),
        //     portal: ParserUtil.parseNumber(resp[SessionAttribute.LOGGED_PORTAL]),
        //     authorities_proxy: resp[SessionAttribute.AUTHORITIES_PROXY]
        //   };
        //   if (this.authAuthorities && this.authAuthorities.authorities_proxy) {
        //     delete this.authAuthorities.authorities_proxy;
        //   }
        // }
      }
      resovle();
    });
  }

  private checkCache(): boolean {
    return (this.authAuthorities.expiry.valueOf() > (new Date()).valueOf());
  }

  private cacheExpiry(min: any): Date {
    const current = new Date();
    const expiryDate = new Date();
    expiryDate.setTime(current.getTime() + (min * 60 * 1000));
    return expiryDate;
  }

  public async hasLogged(): Promise<boolean> {
    return new Promise(async (res, rej) => {
      await this.checkAuthority();
      res(false);
    });
  }

}
