import {browser, by, element, ElementFinder} from 'protractor';
import ProtractorApiWrapper from '../protractor-api-wrapper';

const pageData = require('./data/fee-calculator.po.json');

export default class FeeCalculatorPage {

  static getFeeSetting(): ElementFinder {
    return ProtractorApiWrapper.getElementById(pageData.feeSettingId);
  }

  static getBuyerPays(): ElementFinder {
    return ProtractorApiWrapper.getElementById(pageData.buyerPaysId);
  }

  static getSellerReceives(): ElementFinder {
    return ProtractorApiWrapper.getElementById(pageData.sellerReceivesId);
  }

}

