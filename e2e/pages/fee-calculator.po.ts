import {browser, by, element, ElementArrayFinder, ElementFinder} from 'protractor';
import ProtractorApiWrapper from '../protractor-api-wrapper';

const pageData = require('./data/fee-calculator.po.json');

export default class FeeCalculatorPage {

  static getFeeSettingDropdown(): ElementFinder {
    return ProtractorApiWrapper.getElementById(pageData.feeSettingId);
  }

  static getEnabledFeeSettingOptions(): ElementArrayFinder {
    return ProtractorApiWrapper.getAllElementsByCss(
      `#${pageData.feeSettingId} option:enabled`
    );
  }

  static getFeeList(): ElementArrayFinder {
    return ProtractorApiWrapper.getAllElementsByCss(
      `.${pageData.feeDescriptionClass} ol li`
    );
  }

  static getErrorList(): ElementArrayFinder {
    return ProtractorApiWrapper.getAllElementsByCss(
      '.errors ul li'
    );
  }

  static getBuyerPays(): ElementFinder {
    return ProtractorApiWrapper.getElementById(pageData.buyerPaysId);
  }

  static async setBuyerPays(value: string): Promise<void> {
    return ProtractorApiWrapper.setTextInputValue(
      FeeCalculatorPage.getBuyerPays(), value
    );
  }

  static getSellerReceives(): ElementFinder {
    return ProtractorApiWrapper.getElementById(pageData.sellerReceivesId);
  }

  static async setSellerReceives(value: string): Promise<void> {
    return ProtractorApiWrapper.setTextInputValue(
      FeeCalculatorPage.getSellerReceives(), value
    );
  }

  static getCurrentFeeSettingDisplay(): ElementFinder {
    return ProtractorApiWrapper.getElementById(pageData.currentFeeSettingsId);
  }

  static getFeeAmount(): ElementFinder {
    return ProtractorApiWrapper.getElementById(pageData.feeAmountId);
  }

}

