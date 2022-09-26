import {IRoute} from "../models/route.interface";

export class RouterConstant {
  // *---------------------------- My Life My Rules -------------------------------------*
  public static MY_LIFE_MY_RULES: IRoute = {
    path: 'my-life-my-rules',
    label: 'my-life-my-rules',
  };

  public static MY_LIFE_MY_RULES_PORTAL_HOME_SCREEN: IRoute = {
    path: 'home',
    label: 'home',
  };

  public static MY_LIFE_MY_RULES_PORTAL_WALLETS: IRoute = {
    path: 'wallets',
    label: 'wallets',
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

  public static FORMS_ELEMENTS: IRoute = {
    path: 'forms-elements',
    label: 'forms-elements',
  };

  public static FORMS_LAYOUTS: IRoute = {
    path: 'forms-layouts',
    label: 'forms-layouts',
  };

  public static FORMS_EDITORS: IRoute = {
    path: 'forms-editors',
    label: 'forms-editors',
  };

  public static TABLES_GENERAL: IRoute = {
    path: 'tables-general',
    label: 'tables-general',
  };

  public static TABLES_DATA: IRoute = {
    path: 'tables-data',
    label: 'tables-data',
  };

  public static EXCEL_REPORT: IRoute = {
    path: 'excel-report',
    label: 'excel-report',
  };
}
