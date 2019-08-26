import {browser, by, element, ElementFinder} from 'protractor';
// import ProtractorApiWrapper from '../../protractor-api-wrapper';

export default class FeeCalculatorPage {

  url = 'https://ryanmewhorter.github.io/fee-calculator/calc';

  async navigateTo(): Promise<any> {
    browser.get(this.url);
  }

}

