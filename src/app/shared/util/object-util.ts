export class ObjectUtil {

  /**
   * Input:
   *      object1 = {id: 1, name: 'tuan'}
   *      object2= {id: 1, name: 'tuan'}
   * Output:
   *      true
   */
  public static checkCompareTwoObject(object1: any, object2: any) {
    if (JSON.stringify(object1 === JSON.stringify(object2))) {
      return true;
    }
    return false;
  }

  /**
   * Input:
   *      object = {id: 1, name: 'tuan', age: 21}
   * Output:
   *      [id, name, age]
   */
  public static getKeyList(object: any) {
    return Object.keys(object);
  }
}
