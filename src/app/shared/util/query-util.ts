import * as $ from 'jquery';
export class QueryUtil {

  /**
   * Add Class Name into element by tr#Id
   */
  public static addClassNameById(id: any, className: any) {
    $(`tr#${id}`).addClass(className);
  }

  /**
   * Remove Class Name into element by tr#Id
   */
  public static RemoveClassNameById(id: any, className: any) {
    $(`tr#${id}`).removeClass(className);
  }

  /**
   * get Height Value With Same Class Name
   */
  public static getHeightValueListWithSameClassName (className: string) {
    const list: (number | undefined)[] = [];
    // tslint:disable-next-line:only-arrow-functions
    $.each($(className), function (key, value) {
      list.push($(value).height());
    });
    return list;
  }


}
