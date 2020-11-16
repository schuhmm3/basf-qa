'use strict';

const awilix = require('awilix');

const {
  createContainer,
  asValue,
  asFunction,
} = awilix;

const container = createContainer();

// Libraries
const httpStatus = require('http-status');
const cucumberHtmlReport = require('cucumber-html-reporter');

// Config
const config = require('../config');

// Services
const personService = require('./entities/person/person.service');

const baseUrl = config.BASE_URL
const cookie = true;
const username = config.CREDENTIALS.USERNAME;
const password = config.CREDENTIALS.PASSWORD;

const clientHeaders = {
  Authorization: 'Basic ' + Buffer.from(username + ':' + password).toString('base64'),
  Accept: 'application/json, text/plain, */*'
}
const requestService = require('lh-http-request').create({ baseUrl, cookie, clientHeaders });

container.register({
  // Init
  config: asValue(config),

  // Libraries
  httpStatus: asValue(httpStatus),
  cucumberHtmlReport: asValue(cucumberHtmlReport),

  // Services
  requestService: asValue(requestService),

  // Entities - Services
  personService: asFunction(personService).singleton(),

});

module.exports = container;
