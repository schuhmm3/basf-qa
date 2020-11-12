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

const baseUrl = "http://devboxurl.com";
const cookie = true;
const clientHeaders = { Authorization: 'Bearer asdas2123asdq34' }
const requestService = require('lh-http-request').create({ baseUrl, cookie, clientHeaders });

// Config
const config = require('../config');

// Services
const requestService = require('./services/request.service');

const personService = require('./entities/person/person.service');

container.register({
  // Init
  config: asValue(config),

  // Libraries
  httpStatus: asValue(httpStatus),

  // Services
  requestService: asValue(requestService),

  // Entities - Services
  personService: asFunction(personService).singleton(),
});

module.exports = container;
