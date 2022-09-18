import {IRoute} from "../models/route.interface";

export class RouterConstant {
  // *---------------------------- My Life My Rules -------------------------------------*
  public static MY_LIFE_MY_RULES: IRoute = {
    path: 'my-life-my-rules',
    label: 'my-life-my-rules',
  };

  public static MY_LIFE_MY_RULES_PORTAL_HOME_SCREEN: IRoute = {
    path: 'home',
    label: 'my-life-my-rules-home',
  };
  // *----------------------------Non Authenticate-------------------------------------*
  public static NON_AUTHENTICATE_LOGIN: IRoute = {
    path: 'login',
    label: 'login',
  };

  public static NON_AUTHENTICATE_REGISTER: IRoute = {
    path: 'register',
    label: 'register',
  };

  // *--------------------------------------- Test --------------------------------------*
  public static TEST: IRoute = {
    path: 'test',
    label: 'test',
  };

  public static COMPONENT_1: IRoute = {
    path: 'component1',
    label: 'component1',
  };

  public static COMPONENT_2: IRoute = {
    path: 'component2',
    label: 'component2',
  };

}
