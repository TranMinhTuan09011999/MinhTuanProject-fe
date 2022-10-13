import { FormBuilder, FormGroup, Validators, ValidationErrors, AbstractControl } from '@angular/forms';

export class ValidatorsCharacters {

    /**
     * @See https://codepen.io/KUROKUMO/post/japanese-forms-regex-cheatsheet
     */

  /**
   * Allow all characters that can be expressed in UTF-8
   * ※Do not perform the standard check for S-JIS, JIS Kanji Code.
   * ※Including all the other characters type.
   *
   * ⇒Full-width/ Half-width/ Symbol / Kanji / Alphabet/Simplified Chinese/ Traditional Chinese etc.... all of these are OK.
   *
   * Ex:
   * 「こんにちは～。」
   * 「コンニチハ~｡」
   * ”Ｈｅｌｌｏ．”
   * "Hello."
   * "你好"
   * "안녕하세요."　　　etc..
   */
  static FullWidth = Validators.pattern('.*');

    // Half-Width Katakana: ｱｲｳｴｵ (only kata)
    static HalfWidthKatakana = Validators.pattern('/^[ｧ-ﾝﾞﾟ]+$/');

  /**
   * Only for Katakana in UTF-8
   * ・Katakana
   * ・Some symbols (at right) :  。 、 .  －
   * ※ Because the other symbols and numbers need to be accurately understood how to be pronounced, enter them with KANA
   * e.g. 1 -> イチ、2 -> ニ、1 -> ワン、2 -> ツー、@ -> アット、etc...\
   * \uFF08 = （ (Full-width)
   * \uFF09 = ） (Full-width
   *
   * [Purpose of use]
   * ・Personnel Kana
   * ・Department name Kana e.g
   */
  static FullWidthKatakana = Validators.pattern('^[\u30A0-\u30FE\u3001\u3002\uFF0E\u3000\uFF08\uFF09]+$');

  // Katakana
  static Katakana = Validators.pattern('^[ｧ-ﾝﾞﾟ\u30A0-\u30FE\u3001\u3002\uFF0E\u3000\uFF08\uFF09]+$');

    // Half-Width Character: ABCXYZ...
    static HalfWidthCharacterOnly = Validators.pattern('^[a-zA-Z]+$');

  /**
   * Half-Width Character
   * Only for single byte character of UTF-8 (1 byte character).
   * ・Alphabet: A-Z a-z
   * ・Numeral: 0-9
   * ・Symbol, etc…: = ? @ / , , + % ~   　etc..
   *
   * [purpose of use]
   * ・Mail Address: A.bcd-Efgh@hikesiya.co.jp.
   * ・URL →　https://www.hike_siya.co.jp
   * etc…
   */
    static HalfWidthCharacter = Validators.pattern('^[\u0000-\u0024\u0025-\u007e]+$');

  // Full-Width Characters (Special 3)
    static FullWidthCharacter3 = Validators.pattern('^([^\t]*)$');

    // Half-Width Characters(Special 1)
    static HalfWidthCharacterSpecial1 = Validators.pattern('^[^\t][\u0020-\u007F]*$');

    // Email address format
    static EmailAddressFilterFormat = Validators.pattern('^[a-zA-Z0-9_.+-]*[a-zA-Z0-9_.@]+$');

  /**
   * Allow all characters that can be expressed in UTF-8
   * ※Do not perform the standard check for S-JIS, JIS Kanji Code.
   * ※Including all the other characters type.
   *
   * ⇒Full-width/ Half-width/ Symbol / Kanji / Alphabet/Simplified Chinese/ Traditional Chinese etc.... all of these are OK.
   *
   * Ex:
   * 「こんにちは～。」
   * 「コンニチハ~｡」
   * ”Ｈｅｌｌｏ．”
   * "Hello."
   * "你好"
   * "안녕하세요."　　　etc..
   */
    static FullWidthRegex = '.*';

    // Regex for Half-Width Katakana: ｱｲｳｴｵ (only kata)
    static HalfWidthKatakanaRegex = '^[ｧ-ﾝﾞﾟ]+$';

  /**
   * Half-Width Character
   * Only for single byte character of UTF-8 (1 byte character).
   * ・Alphabet: A-Z a-z
   * ・Numeral: 0-9
   * ・Symbol, etc…: = ? @ / , , + % ~   　etc..
   *
   * [purpose of use]
   * ・Mail Address: A.bcd-Efgh@hikesiya.co.jp.
   * ・URL →　https://www.hike_siya.co.jp
   * etc…
   */
    static HalfWidthCharacterRegex = '^[\u0020-\u007F]+$';

  /**
   * Only for Katakana in UTF-8
   * ・Katakana
   * ・Some symbols (at right) :  。 、 .  －
   * ※ Because the other symbols and numbers need to be accurately understood how to be pronounced, enter them with KANA
   * e.g. 1 -> イチ、2 -> ニ、1 -> ワン、2 -> ツー、@ -> アット、etc...\
   * \uFF08 = （ (Full-width)
   * \uFF09 = ） (Full-width
   *
   * [Purpose of use]
   * ・Personnel Kana
   * ・Department name Kana e.g
   */
    static FullWidthKatakanaRegex = '^[\u30A0-\u30FE\u3001\u3002\uFF0E\u3000\uFF08\uFF09]+$';

    // Regex for All numbers ( half-width )
    static HalfWidthNumbersRegex = '^[0-9]+$';

    static RangePercent = '^((\\d{1,2}(\\.\\d{1,3})?)|((100)(\\.(0){1,2})?)|((0)\\d{1,2}(\\.\\d{1,2})?))$';
    // Regex for All Full Width numbers
    static FullWidthNumberRegex = '[０-９]';

    // All numbers
    static HalfWidthNumberOnly = '^([0-9])*$';

    // numeric only
    static NumericOnly = '^([0-9])$';

    // Halfwidth with comma string only
    static HalfWidthNumberWithCommaString = '^\\d{1,3}(,\\d{3})*$';

    static oneDecimalNumberWithCommasString = '^\\d{1,3}(,\\d{3})*(|(\\.)|.[0-9]){0,1}$';

    // Regex for All numbers ( half-width )
    static HalfWidthCharacterOnlyRegex = '^[a-zA-Z]+$';

  // Regex for ( half-width )
    static HalfWidthCharacterRegexOnly = '^[\u0000-\u0024\u0025-\u007e]+$';

    // Regex for Half-Width Characterc for email: ABCXYZ...
    static HalfWidthCharacterEmailRegex = '^[a-zA-Z0-9@.]+$';

    // Regex for percent number and it has 3 numbers after the comma
    static PercentNumber = '^(\\d+|\\d+[.]\\d{0,3})%?$';

    // All numbers ( half-width )
    static HalfWidthNumber = Validators.pattern('^[0-9]+$');

    static NumericalValue = Validators.pattern('^[+-]?[0-9]+$');

    // All numbers ( half-width ) with comma
    // 1,000
    // 1,000,000
    static HalfWidthNumberWithComma = Validators.pattern('^\\d{1,3}(,\\d{3})*$');

    // date format: dd/MM/yyyy
    // tslint:disable-next-line:max-line-length
    static Date = Validators.pattern('(^(((0[1-9]|1[0-9]|2[0-8])[\\/](0[1-9]|1[012]))|((29|30|31)[\\/](0[13578]|1[02]))|((29|30)[\\/](0[4,6,9]|11)))[\\/](19|[2-9][0-9])\\d\\d$)|(^29[\\/]02[\\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)');

    // Half-Width Alphanumeric
    static HalfWidthAlphanumeric = Validators.pattern('^[a-zA-Z0-9 ]+$');

    // Half-Width Alphanumeric ( only Uppercase letters )
    static HalfWidthAlphanumericOnlyUppepcase = Validators.pattern('^[A-Z0-9]+$');

  // Half-Width Alphanumeric
  static HalfWidthAlphanumericSpacePeriodComma = Validators.pattern('^[a-zA-Z0-9 .,]+$');

    // Regex for Date: yyyy-MM-dd
    // tslint:disable-next-line:max-line-length
    static DateRegex = Validators.pattern('/([12]\\d{3}/(0[1-9]|1[0-2])/(0[1-9]|[12]\\d|3[01]))/');
    static DateTime = Validators.pattern('[0-9]{4}/(0[1-9]|1[0-2])/(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]');

    static ASCIICharacters = Validators.pattern('^[\x20-\x7E]+$');

    // Chinese Characters
    static ChineseCharacters = Validators.pattern('^[一-龥]+$');

    // Phone numbers (including hyphen "-")
    static HalfWidthNumberWithHyphen = Validators.pattern('^[0-9\-]+$');

  /**
   * It is assumed that postal code is stored in database in the format in the example.
   * On the screen, each of the two text boxes is filled in with Half-Width Numeral and internally connected with a hyphen to make it a single value.
   * Ex: 231-0006
   */
  static PostalCode = Validators.pattern('/^[0-9]{3}[\\-][0-9]{4}$');

  /**
   * Used in the input form for email address.
   * Please use validatorEmailPattern('email')
   */
  // static MailAddress = Validators.pattern('^([a-zA-Z0-9][a-zA-Z0-9_\\-\\.]?)+@([a-zA-Z0-9_\\-\\.])+(?:\\.)+([a-zA-Z]{1,50})$');
  // static MailAddress = Validators.pattern('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$'); // TO-DO: Shin hotfix for mail incase son.ph01@g.softbank.co.jp

  static UrlRegexp  = Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');

  static HalfWidthCharacterUrlRegexp = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  /**
   * Used where users put a date (year / month / day).
   * Available input character = Half-Width Characters
   * ＜Condition of checking＞
   * Date character type is being as below.
   * ・10-digit character string
   * ・4 digits number + "/" + 2 digits number + "/" + 2 digits number (yyyy/MM/dd)
   * ・Valid date (The invalid date example are "0000" year, "2/31", etc.)
   * Date:
   * 2019/10/24
   * or
   * 2019/01/24
   */
  static DateFormat = Validators.pattern('/^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$/');

  // static firstPhoneFax = Validators.pattern('^(0[1-9][0-9][0-9][0-9])|^(0[1-9]0[0-9][0-9])|^(0[1-9][0-9][0-9])|^(0[1-9]0[0-9])|^(0[1-9][0-9]?)$');
  static firstPhoneFax = Validators.pattern('^0[0-9]*$');

  static PhoneFaxValidator = Validators.pattern('^((0(\\d{1}[-(]?\\d{4}|\\d{2}[-(]?\\d{3}|\\d{3}[-(]?\\d{2}|\\d{4}[-(]?\\d{1}|[5789]0[-(]?\\d{4})[-)]?)|\\d{1,4}\\-?)\\d{4}$');
  /**
   * (1) Character Type: "Full-width Characters"
   * (2) Special validation condition: Only allow certain characters.
   * This pattern use for 2 field "Street address Kana" and "Building name Kana"
   * ⇒ Full-width Katakana / Full-width Numeral / Full-width Hyphen / Half-width Numeral / Half-width Hyphen / Full-width Hyphen / UTF-8: E28091 Hyphen.
   */
  static FullWidthCharacter = Validators.pattern('^[\u30A0-\u30FE０-９\u30FC0-9\u002D\u2010\u2011]+$');

  // Number 5 digit
  static Number5Digit = Validators.pattern('\\d{5}$');

  // number 3 digit
  static Number3Digit = Validators.pattern('^\\d{3}$');

  // number 0 or 1
  static Number0Or1 = Validators.pattern('^[01]+$');

  // Half width nubmer 1 to 5
  static HalfWidthNumber1To5 = Validators.pattern('^[1-5]+$');

  // hiragana (only hiragana)
  static Hiragana = Validators.pattern('^[\u3040-\u309F－]+$');

  // half width character and hyphen
  static HalfWidthCharacterAndHyphen = Validators.pattern('^[0-9a-zA-Z\\-]+$');

  // half width number 1
  static HalfWidthNumber1 = Validators.pattern('\\d+$');

  // marchant number
  static MarchantNumber = Validators.pattern('^[0-9a-zA-Z \r\n\t\\-]+$');

  // email address
  static EmailAddress = Validators.pattern('[\\w\\-\\._]+@[\\w\\-\\._]+\\.[A-Za-z]+');

  // url
  static Url = Validators.pattern('https?://[\\w!\\?/\\+\\-_~=;\\.,\\*&@#\\$%\\(\\)\'\\[\\]]+');

  // not allow all space
  static Space = Validators.pattern('.*\\S.*[a-zA-z0-9 ]');

  static FullWidthCharacter2 = Validators.pattern('^[' +
    '0-9０-９' + // Number
    'ａ-ｚa-z' + // Lower-Alphabet
    'A-ZＡ-Ｚ' + // Upper-Alphabet
    '\u30A1-\u30F4\uFF66-\uFF9D' + // Kana, Kana2
    '\u309B\u309C\uFF9E\uFF9F' + // Voiced / semi-voiced sound
    '\uFFE5\u300C\u300D\u005C\u005C\uFF62\uFF63\u00A5\uFF3C' + // Sign1 - \u005C\u005C: "\" (Highlinght this character)
    '\uFF0C\uFF0E\uFF08\uFF09\uFF70\uFF0D\u2212\uFF0F\u002C\u002D\u002E\u002F\u0028\u0029\uFF70\u30FC' + // Sign2
    '\u3000\u0020' + // Space
    ']+$');

  static Aaaa = Validators.pattern('^[\\\\]+$')
}

export function maxByteLength(max: number) {
  // @ts-ignore
  return (control: AbstractControl) => {
    if (control && control.value) {
      // set error on controlName if validation fails
      if (control.value.length > max) {
        return {maxlength: {actualLength: control.value.length, requiredLength: max }};
      } else {
        return null;
      }
    }
  };
}
