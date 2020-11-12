/* eslint-disable no-process-env */
'use strict';

require('dotenv').config();

const {
  ENVIRONMENT
} = process.env;

const config = {
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  EXCHANGE_SERVICE: {
    URL: `${ENVIRONMENT}/api/v1/exchange/`,
  },
  CURRENCY_SERVICE: {
    URL: `${ENVIRONMENT}/api/v1/currencies/`,
  }
};

module.exports = config;
