import { Config, browser } from 'protractor';
import {SpecReporter} from 'jasmine-spec-reporter';

// Instantiate the console spec reporter object
const specReporter = new SpecReporter({
  suite: {
    displayNumber: true
  },
  spec: {
    displayErrorMessages: true,
    displayStacktrace: true,
    displayFailed: true,
    displayDuration: true
  },
  summary: {
    displayFailed: true
  }
});

export let config: Config = {
  allScriptsTimeout: 11000,
  specs: [
    './specs/fee-calculator.e2e-spec.js'
  ],
  capabilities: {
    browserName: 'chrome',
    platform: 'windows',
    version: 'ANY',
    chromeOptions: {
      args: []
    },
    // shardTestFiles: true
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  params: {
    baseUrl: 'https://ryanmewhorter.github.io/fee-calculator/calc'
  },
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 240000,
    print() {}
  },

  onPrepare() {
    jasmine.getEnv().addReporter(specReporter);
    browser.manage().window().maximize();
  },
};
