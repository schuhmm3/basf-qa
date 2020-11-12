'use strict';

const { Given } = require('cucumber');

Given('an Admin User', function () {
  this.userType = 'ADMIN';
});

Given('an Standard user', function () {
  this.userType = 'STANDARD';
});