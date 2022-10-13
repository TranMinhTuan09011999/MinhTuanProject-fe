import { Injectable } from '@angular/core';
import {ScreenInfo} from "../models/screen-info";
import {ScreenCallerStackData} from "../models/screen-caller-stack-data";
import * as _ from 'lodash';
import {SessionService} from "./session.service";
import {SessionAttribute} from "../constant/session-attribute";
import {Router} from "@angular/router";
import {ObjectUtil} from "../util/object-util";
import {PortalTypeHelper} from "../util/portal-type-helper";
import {RouterConstant} from "../constant/router-constant";
import {CommonUtil} from "../shared/util/common-util";

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  // Hold back url for can deactive gard
  public backUrlHoder!: string;
  public currentUrl!: string;
  public returnUrl!: string;

  private _data: ScreenCallerStackData = new ScreenCallerStackData();
  private searchCondition: any;

  private _clonedData: ScreenCallerStackData = new ScreenCallerStackData();
  private overridingStateData = true;

  constructor(private sessionService: SessionService, private router: Router) { }

  /**
   * Navigate to the next screen.<br>
   *
   * @param nextScreenInfo The path and query params of the next screen.
   *        Can not be null.
   * @param currentScreenInfo The path and query params of the current screen.
   *        Can set to null if you don't want to go back to the current screen.
   * @param stateData State data you want to share across the screens (can be
   *   null).
   * @param removeDuplicated remove duplicated next screen flag.
   */
  public async navigateTo(nextScreenInfo: ScreenInfo, currentScreenInfo?: ScreenInfo, stateData?: any, removeDuplicated = true) {
    const options: any = {};
    this.setDataCurentScreen(currentScreenInfo);
    this.storeDataNextScreen(nextScreenInfo, stateData);
    this.removeDuplicatedPathPair();
    await this.setSessionData();
    if (nextScreenInfo.queryParams) {
      options.queryParams = nextScreenInfo.queryParams;
    }
    console.log(this._data);
    this.searchCondition = null;
    this.router.navigate(nextScreenInfo.path, options).then();
  }

  /**
   * Set data for the next screen.<br>
   *
   * @param currentScreenInfo The path and query params of the current screen.
   *        Can set to null if you don't want to go back to the current screen.
   * @param stateData State data you want to share across the screens (can be
   *   null).
   */
  private setDataCurentScreen(currentScreenInfo?: ScreenInfo) {
    if (currentScreenInfo) {
      if (!this._data.lastScreenInfoStack) {
        this._data.lastScreenInfoStack = [];
      }
      this._data.lastScreenInfoStack.push(currentScreenInfo);
    }
  }

  private storeDataNextScreen(nextScreenInfo?: ScreenInfo, stateData?: any) {
    if (nextScreenInfo) {
      if (!this._data.lastScreenInfoStack) {
        this._data.lastScreenInfoStack = [];
      }
      if (stateData) {
        nextScreenInfo.stateData = stateData;
      }
      this._data.lastScreenInfoStack.push(nextScreenInfo);
    }
    this._data.stateData = nextScreenInfo?.stateData;
  }

  private removeDuplicatedPathPair() {
    for (const screenInfo of this._data.lastScreenInfoStack) {
      const i = this._data.lastScreenInfoStack.indexOf(screenInfo);
      if ((i + 1) < this._data.lastScreenInfoStack.length) {
        const nextScreenInfo = this._data.lastScreenInfoStack[i + 1];
        if (_.isEqual(screenInfo.path, nextScreenInfo.path)) {
          this._data.lastScreenInfoStack.splice(i, 1);
        }
      }
    }
  }

  private async setSessionData() {
    await this.sessionService.setAttributeAsync(
      SessionAttribute.SCREEN_CALLER_STACK_DATA, this._data);
  }

  async findAndBackToPath(paths: string[], fn?: any): Promise<boolean> {
    if (!this._data) {
      await this.getData();
    }
    // for case path include: [path]/:[param]
    // for example:
    // path: 'general-examination-result-display/:receptioncontrolnumber',
    try {
      const cleanedPaths = paths.map(p => {
        const index = p.indexOf('/');
        return index > -1 ? p.substring(0, index) : p;
      });
      const currentPath = location.pathname;
      let currentScreenIndex = this._data.lastScreenInfoStack.length - 1;
      if (ObjectUtil.nonNullAndNotEmpty(this._data.lastScreenInfoStack)) {
        let latestIndex = -1;
        for (const [i, screenInfo] of this._data.lastScreenInfoStack.entries()) {
          for (const path of cleanedPaths) {
            if (screenInfo.path.indexOf(path) !== -1) {
              latestIndex = i;
            }
          }
          if (('/' + screenInfo.path.toString().replace(/,+/g, '/')).includes(currentPath)) {
            currentScreenIndex = i;
          }
        }
        this.navigateByUrl(...this._data.lastScreenInfoStack[latestIndex].path).then(async () => {
          this._data.lastScreenInfoStack.splice(currentScreenIndex, 1);
          await this.setSessionData();
        });
        return true;
      }
    } catch {
      // this.router.navigate(this.getPortalTopScreenPath()).then();
      return false;
    }
    return false;
  }

  private async getData() {
    this._data = await this.sessionService.getAttributeAsync(
      SessionAttribute.SCREEN_CALLER_STACK_DATA);
    console.log(this._data);
  }

  public async navigateByUrl( ... path: string[]) {
    const options: any = {};
    const url = '/' + path.join('/');
    const nextScreenInfo = await this.restoringNavigation(url);
    return new Promise(resolve => {
      if (nextScreenInfo) {
        if (nextScreenInfo.queryParams) {
          options.queryParams = nextScreenInfo.queryParams;
        }
        this.router.navigate(nextScreenInfo.path, options).then(() => resolve(0));
      } else {
        this.router.navigate(path).then(() => resolve(0));
      }
    });
  }

  // hande back/forward browser
  // format: /bsp/top-screen?abc=1&dev=2
  public async restoringNavigation(url: string): Promise<ScreenInfo | null> {
    this.backUrlHoder = url;
    this._clonedData = this._data;
    await this.getData();

    const screenInfo = this.findScreenInfo(url);
    if (screenInfo) {
      this.searchCondition = screenInfo.searchCondition;
      if (this.overridingStateData) {
        this._data.stateData = screenInfo.stateData;
      }
      await this.setSessionData();
    }
    this.overridingStateData = true;
    return screenInfo;
  }

  private findScreenInfo(url: string): ScreenInfo | null {
    url = this.trimUrl(url);
    console.log(this._data);
    if (this._data && this._data.lastScreenInfoStack && this._data.lastScreenInfoStack.length) {
      let lastIndex = -1;
      for (const [i, screenInfo] of this._data.lastScreenInfoStack.entries()) {
        if (CommonUtil.equals(url, '/' + screenInfo.path.join('/'))) {
          lastIndex = i;
        }
      }
      if (lastIndex !== -1) {
        return this._data.lastScreenInfoStack[lastIndex];
      }
    }
    return null;
  }

  private trimUrl(url: string): string {
    return url.split('?')[0];
  }

  public getSearchCondition() {
    const searchCondition = this.searchCondition;
    // reset data after init UI
    this.searchCondition = null;
    if (ObjectUtil.nonNullAndNotEmpty(searchCondition)) {
      return searchCondition;
    }
    return null;
  }

  public goToHomePage() {
    this.router.navigate(this.getHomePortalScreenPath()).then();
  }
  private getHomePortalScreenPath() {
    const paths: string[] = [PortalTypeHelper.getPathPortal()];
    console.log(paths);
    if (PortalTypeHelper.isMyLifeMyRulesPortal()) {
      paths.push(RouterConstant.MY_LIFE_MY_RULES_PORTAL_HOME_SCREEN.path);
    }
    console.log(paths);
    return paths;
  }

}
