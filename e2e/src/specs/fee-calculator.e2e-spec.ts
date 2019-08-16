import { FeeCalculatorPage } from '../pages/fee-calculator/fee-calculator.po';
import ProtractorApiWrapper from '../protractor-api-wrapper';
import { browser, logging } from 'protractor';

describe('fee calculator e2e tests', () => {
  let page: FeeCalculatorPage;

  beforeEach(() => {
    page = new FeeCalculatorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    ProtractorApiWrapper.getCurrentUrl().then(url => {
      console.log('url = ', url);
    });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
