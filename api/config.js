/* eslint-disable no-process-env */
'use strict';

require('dotenv').config();

const config = {
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  BASE_URL: process.env.ENVIRONMENT,
  PERSONS_SERVICE: {
    GET_ALL: '/api/person/all',
    GET: '/api/person/:personId',
    PUT: '/api/person/'
  },
  CREDENTIALS: {
    USERNAME: 'user',
    PASSWORD: 'pwd!'
  }
};

module.exports = config;
