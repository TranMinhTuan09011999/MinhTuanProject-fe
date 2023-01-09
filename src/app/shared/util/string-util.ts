import * as $ from "jquery";

export class StringUtil {
  /**
   * Input:
   *    value: '123,234,345'
   * Output:
   *    [123,234,345]
   */
  public static convertStringToArray(value: any) {
    if (value.toString().includes(',')) {
      return value.split(',').map(Number);
    }
  }
}
