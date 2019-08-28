import ProtractorApiWrapper from '../protractor-api-wrapper';
import FeeCalculatorPage from '../pages/fee-calculator.po';
import {browser, ElementArrayFinder, ElementFinder, logging} from 'protractor';

describe('fee calculator e2e tests', () => {

  const testInputs: string[] = ['5.25', '34', '687', '4521', '54012'];

  beforeAll(async () => {
    await ProtractorApiWrapper.navigate(browser.params.baseUrl);
    await browser.sleep(1000);
  });

  it('url should equal baseUrl', async () => {
    expect(ProtractorApiWrapper.getCurrentUrl()).toEqual(browser.params.baseUrl);
  });

  it('should find inputs', () => {
    expect(FeeCalculatorPage.getFeeSettingDropdown()).toBeDefined();
    expect(FeeCalculatorPage.getBuyerPays()).toBeDefined();
    expect(FeeCalculatorPage.getSellerReceives()).toBeDefined();
  });

  it('should update current fee setting display when setting is selected', () => {
    FeeCalculatorPage.getEnabledFeeSettingOptions().then((options: ElementFinder[]) => {
      for (const option of options) {
        option.click().then(() => {
          FeeCalculatorPage.getCurrentFeeSettingDisplay().getText().then(displayText => {
            option.getText().then(settingText => {
              expect(settingText).toEqual(displayText);
            });
          });
        });
      }
    });
  });

  it('should have at least one fee entry for every fee setting', () => {
    FeeCalculatorPage.getEnabledFeeSettingOptions().then((options: ElementFinder[]) => {
      for (const option of options) {
        option.click().then(() => {
          expect(FeeCalculatorPage.getFeeList().count()).toBeGreaterThan(0);
        });
      }
    });
  });

  fdescribe('last modified input value should remain the same when fee settings change', () => {

    const testValue = '22';

    const expectInputToRemainTheSameForEveryFeeSetting = (input: ElementFinder) => {
      ProtractorApiWrapper.navigate(browser.params.baseUrl).then(() => {
        input.clear().then(() => {
          input.sendKeys(testValue);
          FeeCalculatorPage.getEnabledFeeSettingOptions().then((options: ElementFinder[]) => {
            for (const option of options) {
              option.click().then(() => {
                expect(input.getAttribute('value')).toEqual(testValue);
              });
            }
          });
        });
      });
    };

    it('buyer pays should keep its value when fee settings change', () => {
      expectInputToRemainTheSameForEveryFeeSetting(FeeCalculatorPage.getBuyerPays());
    });

    it('seller receives should keep its value when fee settings change', () => {
      expectInputToRemainTheSameForEveryFeeSetting(FeeCalculatorPage.getSellerReceives());
    });

  });

  describe('inputs should update each other correctly when their value changes', () => {

    it('buyer pays should update seller receives correctly for every fee setting', () => {
      FeeCalculatorPage.getEnabledFeeSettingOptions().then((options: ElementFinder[]) => {
        for (const option of options) {
          option.click().then(() => {
            // Set buyer pays input and make sure seller receives updates correctly
            for (const testInput of testInputs) {
              const buyerPays = FeeCalculatorPage.getBuyerPays();
              buyerPays.clear().then(() => buyerPays.sendKeys(testInput)).then(() => {
                FeeCalculatorPage.getFeeAmount().getText().then(feeAmountText => {
                  const feeAmount = Math.abs(parseFloat(feeAmountText.replace(/[^0-9\.\-]/g, '')));
                  const expectedValue = (parseFloat(testInput) - feeAmount).toFixed(2);
                  FeeCalculatorPage.getSellerReceives().getAttribute('value').then(async sellerReceives => {
                    // console.log(
                    //   await option.getText(), ': Testing buyer pays ', testInput, '. ' +
                    //   'Expecting seller receives (', sellerReceives, ') to equal expected value ', expectedValue, '.'
                    // );
                    expect(parseFloat(sellerReceives).toFixed(2)).toEqual(expectedValue);
                  });
                });
              });
            }
          });
        }
      });
    });

    it('seller receives should update buyer pays correctly for every fee setting', () => {
      FeeCalculatorPage.getEnabledFeeSettingOptions().then((options: ElementFinder[]) => {
        for (const option of options) {
          option.click().then(() => {
            // Set buyer pays input and make sure seller receives updates correctly
            for (const testInput of testInputs) {
              const sellerReceives = FeeCalculatorPage.getSellerReceives();
              sellerReceives.clear().then(() => sellerReceives.sendKeys(testInput)).then(() => {
                FeeCalculatorPage.getFeeAmount().getText().then(feeAmountText => {
                  const feeAmount = Math.abs(parseFloat(feeAmountText.replace(/[^0-9\.\-]/g, '')));
                  const expectedValue = (parseFloat(testInput) + feeAmount).toFixed(2);
                  FeeCalculatorPage.getBuyerPays().getAttribute('value').then(async buyerPays => {
                    // console.log(
                    //   await option.getText(), ': Testing buyer pays ', testInput, '. ' +
                    //   'Expecting seller receives (', buyerPays, ') to equal expected value ', expectedValue, '.'
                    // );
                    expect(parseFloat(buyerPays).toFixed(2)).toEqual(expectedValue);
                  });
                });
              });
            }
          });
        }
      });
    });

  });

  it('should show error if either input is changed when no fee setting is selected', () => {
    ProtractorApiWrapper.navigate(browser.params.baseUrl).then(() => {
      browser.sleep(1000);
      FeeCalculatorPage.setBuyerPays('22').then(() => {
        expect(FeeCalculatorPage.getErrorList().count()).toBeGreaterThan(0);
      });
    });
    ProtractorApiWrapper.navigate(browser.params.baseUrl).then(() => {
      browser.sleep(1000);
      FeeCalculatorPage.setSellerReceives('22').then(() => {
        expect(FeeCalculatorPage.getErrorList().count()).toBeGreaterThan(0);
      });
    });
  });
});
