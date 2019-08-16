

export default class Utils {

  static sanitizeFloat(input: string): string {
    return input.replace(/[^0-9\\.]/g, '');
  }

  static parseFloat(input: any): number {
    if (Utils.isNumber(input)) {
      return parseFloat(input + '');
    } else {
      return null;
    }
  }

  static sanitizeInt(input: string): string {
    return input.replace(/[^0-9]/g, '');
  }

  static parseInt(input: any): number {
    if (Utils.isNumber(input)) {
      return parseInt(input + '', 10);
    } else {
      return null;
    }
  }

  static isNumber(input: any) {
    return input !== null && !isNaN(input);
  }

  static round(n, digits = 2) {
    const multiplier = Math.pow(10, digits);
    return Math.round(n * multiplier) / multiplier;
  }
}
