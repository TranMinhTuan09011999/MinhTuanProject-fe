import * as _ from 'underscore';

export class CommonUtil {
  static getValueWithDefaultHyphen(object: any, property: string = '') {
    return this.getValueWithDefault(object, property, '-');
  }

  static getValueWithDefault(object: any, property: any, defaultValue: string | null) {
    if (object || _.isNumber(object) || _.isString(object)) {
      if (_.isNumber(object) || (_.isString(object) && !_.isEmpty(object))) {
        return object;
      } else if ((_.isString(object) && _.isEmpty(object))) {
        return defaultValue;
      }
      if (property.indexOf('.') !== -1) {
        const arrKey = property.split('.');
        let value;
        for (const iterator of arrKey) {
          if (value) {
            value = value[iterator];
          } else {
            value = object[iterator];
          }
        }
        return _.isUndefined(value) ? defaultValue : value;
      }
      return _.isUndefined(object[property]) ? defaultValue : object[property];
    }
    return defaultValue;
  }

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

  static isNull(value: any): boolean {
    return (_.isUndefined(value) || _.isNull(value));
  }

  public static convertBreakLineHtml(content: any) {
    if (content) {
      content = content.replace(/\\n/g, '<br/>');
      content = content.replace(/\n/g, '<br/>');
    }
    return content;
  }

}
