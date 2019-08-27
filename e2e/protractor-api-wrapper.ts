import {browser, by, element, ElementArrayFinder, ElementFinder} from 'protractor';


export default class ProtractorApiWrapper {

  static async navigate(destination: string, timeout?: number): Promise<any> {
    return browser.get(destination, timeout);
  }

  static async getCurrentUrl(): Promise<string> {
    return browser.getCurrentUrl();
  }

  static getElementById(id: string): ElementFinder {
    return element(by.id(id));
  }

  static async setTextInputValue(input: ElementFinder, value: string): Promise<void> {
    return input.clear().then(() => {
      input.sendKeys(value);
    });
  }

  static getElementByTypeAndText(type: string, text: string): ElementFinder {
    return ProtractorApiWrapper.getElementByXpath(`//${type}[text()="${text}"]`);
  }

  static getAllElementsByCss(selector: string): ElementArrayFinder {
    return element.all(by.css(selector));
  }

  static getElementByCss(selector: string): ElementFinder {
    return element(by.css(selector));
  }

  static getAllElementsByXpath(xpath: string): ElementArrayFinder {
    return element.all(by.xpath(xpath));
  }

  static getElementByXpath(xpath: string): ElementFinder {
    return element(by.xpath(xpath));
  }

}
