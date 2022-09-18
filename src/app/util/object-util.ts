export class ObjectUtil {
  public static nonNullAndNotEmpty(obj: any, trimmed: boolean = true): boolean {
    const isNotNullAndUndefined: boolean = this.nonNull(obj);
    if (isNotNullAndUndefined) {
      if (Array.isArray(obj)) {
        // @ts-ignore
        return obj.length && obj.indexOf(undefined) === -1;
      } else if (trimmed && typeof obj === 'string') {
        return !!obj.trim();
      } else if (typeof obj === 'object') {
        return Object.keys(obj).findIndex(key => this.nonNullAndNotEmpty(obj[key])) > -1;
      }
    }
    return isNotNullAndUndefined;
  }

  public static nonNull(obj: any): boolean {
    return obj !== undefined && obj !== null;
  }

}
