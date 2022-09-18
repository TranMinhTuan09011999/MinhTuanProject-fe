import * as _ from 'underscore';

export class CommonUtil {

  public static equals(obj1: any, obj2: any): boolean {
    return String(obj1).toLocaleUpperCase() === String(obj2).toLocaleUpperCase();
  }

  public static getMessageError(error: any): string {
    let message = '';

    if (error && error.status !== 0 && error.error) {
      if (error.error.message) {
        message = error.error.message;
      } else if (error.error.errorMessage) {
        message = error.error.errorMessage;
      } else if (error.error.errorMsg) {
        message = error.error.errorMsg;
      } else if (error.error.error) {
        message = error.error.error;
      } else if (error.error) {
        const errorJson = this.isJSON(error.error);
        if (errorJson) {
          if (errorJson.errorMsg) {
            message = errorJson.errorMsg;
          } else if (errorJson.error) {
            message = errorJson.error;
          }
        } else if (_.isString(error.error)) {
          message = error.error;
        }
      }
    }

    return message;
  }

  public static isJSON(data: any) {
    try {
      return JSON.parse(data);
    } catch (e) {
      return false;
    }
  }

}
