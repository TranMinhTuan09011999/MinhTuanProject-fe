import {IRoute} from "../../../models/route.interface";

export class RouterConstant {
  // *---------------------------- Language -------------------------------------*
  public static LANGUAGE: IRoute = {
    path: 'language',
    label: 'language'
  };

  public static LANGUAGE_HOME: IRoute = {
    path: 'home',
    label: 'home'
  };
}
