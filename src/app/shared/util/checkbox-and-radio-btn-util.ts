import * as $ from 'jquery';
export class CheckboxAndRadioBtnUtil {

  /**
   * Return true if id of checkBox is being checked
   */
  public static checkedCheckBox(id: any) {
   if ($(`tr#${id}`).is(':checked')) {
     return true;
   }
   return false;
  }

  /**
   * CheckBox will be checked if status = true
   * CheckBox will be not checked if status = false
   */
  public static checkCheckBoxById(id: any, status: boolean) {
    $(`tr#${id}`).prop('checked', status);
  }

  /**
   * Get id of element From className With Event
   */
  public static getIdFromClassNameWithEvent(event: any, className: string) {
    return event.target.closest(`.${className}`).id;
  }

  /**
   * Return true if CheckBox Or Radio is checked
   * Return false if CheckBox Or Radio is not checked
   */
  public static checkOrNotCheckEvent(event: any) {
    if (event.target.checked) {
      return true;
    } else {
      return false;
    }
  }
}
