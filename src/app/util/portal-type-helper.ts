import { PortalType } from 'src/app/constant/portal-type.enum';
import { ActivatedRoute  } from '@angular/router';
import {RouterConstant} from "../constant/router-constant";
import {CommonUtil} from "../shared/util/common-util";

export class PortalTypeHelper {
  static getPortalType(activatedRoute: ActivatedRoute): PortalType {
    const route = activatedRoute.root;
    console.log(route);
    let portalType;
    if (route.routeConfig && route.routeConfig.data && route.routeConfig.data['portalType']) {
      portalType = route.routeConfig.data['portalType'];
      console.log(portalType);
    } else {
      portalType = this.getCurrentPortal();
      console.log(portalType);
    }
    if (!route.routeConfig) {
      console.log(activatedRoute);
      // activatedRoute.routeConfig.data.portalType is get from data of NonAuthenticateRoutingModule
      // data: { breadcrumb: RouterConstant.NON_AUTHENTICATE_LOGIN.label, portalType: PortalType.MY_LIFE_MY_RULES }
      // @ts-ignore
      portalType = activatedRoute.routeConfig.data.portalType;
      console.log(portalType);
    }
    return portalType;
  }

  static getCurrentPortal(): PortalType {
    const currentPath = location.pathname;
    console.log(currentPath);
    // const hostname = location.hostname;
    let portal: PortalType;
    if (currentPath.startsWith('/my-life-my-rules/') || CommonUtil.equals(currentPath, '/my-life-my-rules')) {
      portal = PortalType.MY_LIFE_MY_RULES;
    } else if (currentPath.startsWith('/sale/') || CommonUtil.equals(currentPath, '/sale')) {
      portal = PortalType.SALES;
    }
    // @ts-ignore
    return portal;
  }

  static getPathPortal() {
    let path = '';
    switch (this.getCurrentPortal()) {
      case PortalType.MY_LIFE_MY_RULES:
        return RouterConstant.MY_LIFE_MY_RULES.path;
      case PortalType.TEST:
        return RouterConstant.TEST.path;
      default:
        return '';
    }
  }

  static isMyLifeMyRulesPortal(): boolean {
    const currentPortal = this.getCurrentPortal();
    if (currentPortal === PortalType.MY_LIFE_MY_RULES) {
      return true;
    }
    return false;
  }
}
