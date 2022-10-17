import * as moment from 'moment';

export class DateUtil {

  /**
   * Input: date (Ex: new Date -> Fri Oct 14 2022 09:17:34 GMT+0700 (Giờ Đông Dương))
   *        format (Ex: "YYYY/MM/DD")
   * Output: 2022/10/14
   */
  public static parseDateToFormat(date: Date, format: string): string | null {
    if (!date || !format) {
      return null;
    }
    if (!moment(date).isValid()) {
      return null;
    }
    return moment(date).format(format);
  }

  /**
   * Input: date (Ex: new Date -> Fri Oct 14 2022 09:17:34 GMT+0700 (Giờ Đông Dương))
   *        amount (Ex: 1)
   * Output: Fri Oct 13 2022 09:17:34 GMT+0700 (Giờ Đông Dương)
   */
  public static subtractDateByDay(date: Date, amount: number) {
    return moment(new Date()).subtract(amount, 'day').toDate(); // date object
  }

  /**
   * Input: date (Ex: '2022/10/14 00:00:00')
   *        format (Ex: 'YYYY/MM/DD HH:mm:ss')
   * Output: Fri Oct 14 2022 00:00:00 GMT+0700 (Giờ Đông Dương)
   */
  public static stringToDate(dateStr: string, format: string) {
    const tmp = moment(dateStr, format);
    if (tmp.isValid()) {
      return tmp.toDate();
    }
    return null;
  }
}
