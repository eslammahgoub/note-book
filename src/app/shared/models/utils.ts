import * as uuid from 'uuid';

export class Utils {
  /**
   * getFormattedDate
   * @description get formatted date as YYYY-MM-DD
   * @param date Date
   * @returns string
   */
  static getFormattedDate(date: Date): string {
    return date ? date.toISOString().slice(0, 10) : new Date().toISOString().slice(0, 10);
  }

  static generateUUID(): string {
    return uuid.v4();
  }

  static getSortedObjectEntries(obj: object): string[] {
    return Object.keys(obj).sort((a: string, b: string) => obj[b] - obj[a]);
  }

  static getSortedObjValues(obj: object): any[] {
    return Object.values(obj).sort((a: any, b: any) => b - a);
  }
}
