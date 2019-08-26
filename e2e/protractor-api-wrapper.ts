import {browser, by, element, ElementFinder} from 'protractor';


export default class ProtractorApiWrapper {

  public static async navigate(destination: string, timeout?: number): Promise<any> {
    return browser.get(destination, timeout);
  }

  public static async getCurrentUrl(): Promise<string> {
    return browser.getCurrentUrl();
  }

  public static getElementById(id: string): ElementFinder {
    return element(by.id(id));
  }

}
