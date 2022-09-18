import {ScreenInfo} from "./screen-info";

export class ScreenCallerStackData {
  lastScreenInfoStack: ScreenInfo[] = [];
  stateData: any;

  constructor() {
    this.lastScreenInfoStack = [];
    this.stateData = null;
  }
}
