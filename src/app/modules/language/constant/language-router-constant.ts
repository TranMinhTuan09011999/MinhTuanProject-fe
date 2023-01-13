import {IRoute} from "../../../models/route.interface";

export class LanguageRouterConstant {
  // *---------------------------- Language -------------------------------------*
  public static LANGUAGE: IRoute = {
    path: 'language',
    label: 'language'
  };

  public static LANGUAGE_HOME: IRoute = {
    path: 'home',
    label: 'home'
  };

  public static LANGUAGE_ENGLISH: IRoute = {
    path: 'english',
    label: 'english'
  };

  public static LANGUAGE_TOPIC: IRoute = {
    path: 'topic',
    label: 'topic'
  };
}
