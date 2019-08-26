import {ProtractorApiWrapper} from '../protractor-api-wrapper';
import { browser, logging } from 'protractor';
import FeeCalculatorPage from '../pages/fee-calculator/fee-calculator.po';

console.log('FeeCalculatorPage =', FeeCalculatorPage);

describe('fee calculator e2e tests', () => {

  const feeCalculatorPage = new FeeCalculatorPage();

  beforeAll(async () => {
    console.log(browser.params);
    console.log('FeeCalculatorPage =', FeeCalculatorPage);
    console.log('ProtractorApiWrapper =', ProtractorApiWrapper);
    await feeCalculatorPage.navigateTo();
    // await feeCalculatorPage.navigateTo();
    await browser.sleep(1000);
  });

  it('url should equal baseUrl', async () => {
    expect(ProtractorApiWrapper.getCurrentUrl()).toEqual(browser.params.baseUrl);
  });

});
