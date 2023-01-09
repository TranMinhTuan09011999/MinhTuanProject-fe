export class ArrayUtil {

  /**
   * Input:
   *      Array = [
   *        {id: 1, name: 'tuan'},
   *        {id: 2, name: 'tai'},
   *        {id: 1, name: 'tuan'},
   *        {id: 2, name: 'tai'}
   *      ]
   *      property: id
   * Output:
   *      [
   *        {id: 1, name: 'tuan'},
   *        {id: 2, name: 'tai'}
   *      ]
   */
  public static distinctObjectArray(array: any[], property: string) {
    const distinctReceptionControlNumList = new Array();
    for (const item of array) {
      let flag = true;
      for (const item1 of distinctReceptionControlNumList) {
        // If compare 2 Object
        // JSON.stringify(item1) === JSON.stringify(item)
        if (item1[property] === item[property]) {
          flag = false;
          break;
        }
      }
      if (flag === true) {
        distinctReceptionControlNumList.push(item);
      }
    }
    return distinctReceptionControlNumList;
  }

}
