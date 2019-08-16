import {browser, by, element, ElementFinder} from 'protractor';
import ProtractorApiWrapper from '../../protractor-api-wrapper';

const pageData = require('./fee-calculator.json');

export class FeeCalculatorPage {

  constructor() {}

  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getFeeSettings(): ElementFinder {
    return ProtractorApiWrapper.getElementById(pageData.feeSettingsId);
  }

  getBuyerPays(): ElementFinder {
    return ProtractorApiWrapper.getElementById(pageData.buyerPaysId);
  }

  getSellerReceivesId(): ElementFinder {
    return ProtractorApiWrapper.getElementById(pageData.sellerReceivesId);
  }
}
