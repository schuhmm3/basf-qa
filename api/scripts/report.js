/* eslint-disable no-process-env */
'use strict'

const container = require('../businessLogic/container');
const reporter = container.resolve('cucumberHtmlReport');

const options = {
  theme: 'bootstrap',
  jsonFile: './reports/cucumber_report.json',
  output: './reports/cucumber_report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
};

reporter.generate(options);
