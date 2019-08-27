import ProtractorApiWrapper from '../protractor-api-wrapper';
import FeeCalculatorPage from '../pages/fee-calculator.po';
import { browser, logging } from 'protractor';

console.log('FeeCalculatorPage =', FeeCalculatorPage);

describe('fee calculator e2e tests', () => {

  beforeAll(async () => {
    await ProtractorApiWrapper.navigate(browser.params.baseUrl);
    await browser.sleep(1000);
  });

  it('url should equal baseUrl', async () => {
    expect(ProtractorApiWrapper.getCurrentUrl()).toEqual(browser.params.baseUrl);
  });

  it('should find inputs', () => {
    expect(FeeCalculatorPage.getFeeSetting()).toBeDefined();
    expect(FeeCalculatorPage.getBuyerPays()).toBeDefined();
    expect(FeeCalculatorPage.getSellerReceives()).toBeDefined();
  });

});
