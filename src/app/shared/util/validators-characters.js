"use strict";
exports.__esModule = true;
exports.maxByteLength = exports.ValidatorsCharacters = void 0;
var forms_1 = require("@angular/forms");
var ValidatorsCharacters = /** @class */ (function () {
    function ValidatorsCharacters() {
    }
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
    ValidatorsCharacters.FullWidth = forms_1.Validators.pattern('.*');
    // Half-Width Katakana: ｱｲｳｴｵ (only kata)
    ValidatorsCharacters.HalfWidthKatakana = forms_1.Validators.pattern('/^[ｧ-ﾝﾞﾟ]+$/');
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
    ValidatorsCharacters.FullWidthKatakana = forms_1.Validators.pattern('^[\u30A0-\u30FE\u3001\u3002\uFF0E\u3000\uFF08\uFF09]+$');
    // Katakana
    ValidatorsCharacters.Katakana = forms_1.Validators.pattern('^[ｧ-ﾝﾞﾟ\u30A0-\u30FE\u3001\u3002\uFF0E\u3000\uFF08\uFF09]+$');
    // Half-Width Character: ABCXYZ...
    ValidatorsCharacters.HalfWidthCharacterOnly = forms_1.Validators.pattern('^[a-zA-Z]+$');
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
    ValidatorsCharacters.HalfWidthCharacter = forms_1.Validators.pattern('^[\u0000-\u0024\u0025-\u007e]+$');
    // Full-Width Characters (Special 3)
    ValidatorsCharacters.FullWidthCharacter3 = forms_1.Validators.pattern('^([^\t]*)$');
    // Half-Width Characters(Special 1)
    ValidatorsCharacters.HalfWidthCharacterSpecial1 = forms_1.Validators.pattern('^[^\t][\u0020-\u007F]*$');
    // Email address format
    ValidatorsCharacters.EmailAddressFilterFormat = forms_1.Validators.pattern('^[a-zA-Z0-9_.+-]*[a-zA-Z0-9_.@]+$');
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
    ValidatorsCharacters.FullWidthRegex = '.*';
    // Regex for Half-Width Katakana: ｱｲｳｴｵ (only kata)
    ValidatorsCharacters.HalfWidthKatakanaRegex = '^[ｧ-ﾝﾞﾟ]+$';
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
    ValidatorsCharacters.HalfWidthCharacterRegex = '^[\u0020-\u007F]+$';
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
    ValidatorsCharacters.FullWidthKatakanaRegex = '^[\u30A0-\u30FE\u3001\u3002\uFF0E\u3000\uFF08\uFF09]+$';
    // Regex for All numbers ( half-width )
    ValidatorsCharacters.HalfWidthNumbersRegex = '^[0-9]+$';
    ValidatorsCharacters.RangePercent = '^((\\d{1,2}(\\.\\d{1,3})?)|((100)(\\.(0){1,2})?)|((0)\\d{1,2}(\\.\\d{1,2})?))$';
    // Regex for All Full Width numbers
    ValidatorsCharacters.FullWidthNumberRegex = '[０-９]';
    // All numbers
    ValidatorsCharacters.HalfWidthNumberOnly = '^([0-9])*$';
    // numeric only
    ValidatorsCharacters.NumericOnly = '^([0-9])$';
    // Halfwidth with comma string only
    ValidatorsCharacters.HalfWidthNumberWithCommaString = '^\\d{1,3}(,\\d{3})*$';
    ValidatorsCharacters.oneDecimalNumberWithCommasString = '^\\d{1,3}(,\\d{3})*(|(\\.)|.[0-9]){0,1}$';
    // Regex for All numbers ( half-width )
    ValidatorsCharacters.HalfWidthCharacterOnlyRegex = '^[a-zA-Z]+$';
    // Regex for ( half-width )
    ValidatorsCharacters.HalfWidthCharacterRegexOnly = '^[\u0000-\u0024\u0025-\u007e]+$';
    // Regex for Half-Width Characterc for email: ABCXYZ...
    ValidatorsCharacters.HalfWidthCharacterEmailRegex = '^[a-zA-Z0-9@.]+$';
    // Regex for percent number and it has 3 numbers after the comma
    ValidatorsCharacters.PercentNumber = '^(\\d+|\\d+[.]\\d{0,3})%?$';
    // All numbers ( half-width )
    ValidatorsCharacters.HalfWidthNumber = forms_1.Validators.pattern('^[0-9]+$');
    ValidatorsCharacters.NumericalValue = forms_1.Validators.pattern('^[+-]?[0-9]+$');
    // All numbers ( half-width ) with comma
    // 1,000
    // 1,000,000
    ValidatorsCharacters.HalfWidthNumberWithComma = forms_1.Validators.pattern('^\\d{1,3}(,\\d{3})*$');
    // date format: dd/MM/yyyy
    // tslint:disable-next-line:max-line-length
    ValidatorsCharacters.Date = forms_1.Validators.pattern('(^(((0[1-9]|1[0-9]|2[0-8])[\\/](0[1-9]|1[012]))|((29|30|31)[\\/](0[13578]|1[02]))|((29|30)[\\/](0[4,6,9]|11)))[\\/](19|[2-9][0-9])\\d\\d$)|(^29[\\/]02[\\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)');
    // Half-Width Alphanumeric
    ValidatorsCharacters.HalfWidthAlphanumeric = forms_1.Validators.pattern('^[a-zA-Z0-9 ]+$');
    // Half-Width Alphanumeric ( only Uppercase letters )
    ValidatorsCharacters.HalfWidthAlphanumericOnlyUppepcase = forms_1.Validators.pattern('^[A-Z0-9]+$');
    // Half-Width Alphanumeric
    ValidatorsCharacters.HalfWidthAlphanumericSpacePeriodComma = forms_1.Validators.pattern('^[a-zA-Z0-9 .,]+$');
    // Regex for Date: yyyy-MM-dd
    // tslint:disable-next-line:max-line-length
    ValidatorsCharacters.DateRegex = forms_1.Validators.pattern('/([12]\\d{3}/(0[1-9]|1[0-2])/(0[1-9]|[12]\\d|3[01]))/');
    ValidatorsCharacters.DateTime = forms_1.Validators.pattern('[0-9]{4}/(0[1-9]|1[0-2])/(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]');
    ValidatorsCharacters.ASCIICharacters = forms_1.Validators.pattern('^[\x20-\x7E]+$');
    // Chinese Characters
    ValidatorsCharacters.ChineseCharacters = forms_1.Validators.pattern('^[一-龥]+$');
    // Phone numbers (including hyphen "-")
    ValidatorsCharacters.HalfWidthNumberWithHyphen = forms_1.Validators.pattern('^[0-9\-]+$');
    /**
     * It is assumed that postal code is stored in database in the format in the example.
     * On the screen, each of the two text boxes is filled in with Half-Width Numeral and internally connected with a hyphen to make it a single value.
     * Ex: 231-0006
     */
    ValidatorsCharacters.PostalCode = forms_1.Validators.pattern('/^[0-9]{3}[\\-][0-9]{4}$');
    /**
     * Used in the input form for email address.
     * Please use validatorEmailPattern('email')
     */
    // static MailAddress = Validators.pattern('^([a-zA-Z0-9][a-zA-Z0-9_\\-\\.]?)+@([a-zA-Z0-9_\\-\\.])+(?:\\.)+([a-zA-Z]{1,50})$');
    // static MailAddress = Validators.pattern('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$'); // TO-DO: Shin hotfix for mail incase son.ph01@g.softbank.co.jp
    ValidatorsCharacters.UrlRegexp = forms_1.Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');
    ValidatorsCharacters.HalfWidthCharacterUrlRegexp = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
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
    ValidatorsCharacters.DateFormat = forms_1.Validators.pattern('/^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$/');
    // static firstPhoneFax = Validators.pattern('^(0[1-9][0-9][0-9][0-9])|^(0[1-9]0[0-9][0-9])|^(0[1-9][0-9][0-9])|^(0[1-9]0[0-9])|^(0[1-9][0-9]?)$');
    ValidatorsCharacters.firstPhoneFax = forms_1.Validators.pattern('^0[0-9]*$');
    ValidatorsCharacters.PhoneFaxValidator = forms_1.Validators.pattern('^((0(\\d{1}[-(]?\\d{4}|\\d{2}[-(]?\\d{3}|\\d{3}[-(]?\\d{2}|\\d{4}[-(]?\\d{1}|[5789]0[-(]?\\d{4})[-)]?)|\\d{1,4}\\-?)\\d{4}$');
    /**
     * (1) Character Type: "Full-width Characters"
     * (2) Special validation condition: Only allow certain characters.
     * This pattern use for 2 field "Street address Kana" and "Building name Kana"
     * ⇒ Full-width Katakana / Full-width Numeral / Full-width Hyphen / Half-width Numeral / Half-width Hyphen / Full-width Hyphen / UTF-8: E28091 Hyphen.
     */
    ValidatorsCharacters.FullWidthCharacter = forms_1.Validators.pattern('^[\u30A0-\u30FE０-９\u30FC0-9\u002D\u2010\u2011]+$');
    ValidatorsCharacters.FullWidthCharacter2 = forms_1.Validators.pattern('^[０-９Ａ-Ｚ\u30A2-\u30F3\u30F4\uFFE5\u300C\u300D\uFF0C\uFF0E\uFF08\uFF09\uFF0D\uFF0F]+$');
    // Number 5 digit
    ValidatorsCharacters.Number5Digit = forms_1.Validators.pattern('\\d{5}$');
    // number 3 digit
    ValidatorsCharacters.Number3Digit = forms_1.Validators.pattern('^\\d{3}$');
    // number 0 or 1
    ValidatorsCharacters.Number0Or1 = forms_1.Validators.pattern('^[01]+$');
    // Half width nubmer 1 to 5
    ValidatorsCharacters.HalfWidthNumber1To5 = forms_1.Validators.pattern('^[1-5]+$');
    // hiragana (only hiragana)
    ValidatorsCharacters.Hiragana = forms_1.Validators.pattern('^[\u3040-\u309F－]+$');
    // half width character and hyphen
    ValidatorsCharacters.HalfWidthCharacterAndHyphen = forms_1.Validators.pattern('^[0-9a-zA-Z\\-]+$');
    // half width number 1
    ValidatorsCharacters.HalfWidthNumber1 = forms_1.Validators.pattern('\\d+$');
    // marchant number
    ValidatorsCharacters.MarchantNumber = forms_1.Validators.pattern('^[0-9a-zA-Z \r\n\t\\-]+$');
    // email address
    ValidatorsCharacters.EmailAddress = forms_1.Validators.pattern('[\\w\\-\\._]+@[\\w\\-\\._]+\\.[A-Za-z]+');
    // url
    ValidatorsCharacters.Url = forms_1.Validators.pattern('https?://[\\w!\\?/\\+\\-_~=;\\.,\\*&@#\\$%\\(\\)\'\\[\\]]+');
    // not allow all space
    ValidatorsCharacters.Space = forms_1.Validators.pattern('.*\\S.*[a-zA-z0-9 ]');
    return ValidatorsCharacters;
}());
exports.ValidatorsCharacters = ValidatorsCharacters;
function maxByteLength(max) {
    // @ts-ignore
    return function (control) {
        if (control && control.value) {
            // set error on controlName if validation fails
            if (control.value.length > max) {
                return { maxlength: { actualLength: control.value.length, requiredLength: max } };
            }
            else {
                return null;
            }
        }
    };
}
exports.maxByteLength = maxByteLength;
