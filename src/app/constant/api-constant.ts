import {API} from "../modules/non-authenticate/services/api.interface";
import {PortalType} from "./portal-type.enum";


export class APIConstant {
  // -------------- AUTH --------------
  public static API_NON_AUTH_LOGIN: API = {
    module: PortalType.NON_AUTH,
    uri: 'login'
  };

  public static API_NON_AUTH_CHANGE: API = {
    module: PortalType.NON_AUTH,
    uri: 'change-pwd'
  };

  // -------------- SESSION --------------
  public static API_SESSION_ATTR_UPD: API = {
    module: PortalType.SESSION,
    uri: '{attrName}'
  };

  public static API_SESSION_ATTR_GET: API = {
    module: PortalType.SESSION,
    uri: '{attrName}'
  };
}
