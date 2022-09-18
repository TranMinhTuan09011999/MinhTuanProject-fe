export class ParserUtil {
    static parseBoolean = (str: any) => {
        if (str === 1 || str === 'true' || str === true) {
            return true;
        }
        return false;
    }

    static parseNumber = (str: any): number => {
        try {
            return Number.parseInt(str, 0);
        } catch (error) {
            return 0;
        }
    }

    static parseJSon = (str: string): any => {
        try {
            return JSON.parse(str);
        } catch (error) {
            return str;
        }
    }

    static parseString = (value: any): string => {
        if (value) {
            return value + '';
        }
        return '';
    }
}
