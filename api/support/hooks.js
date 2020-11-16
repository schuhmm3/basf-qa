'use strict';

const {
  BeforeAll,
  setWorldConstructor,
  setDefaultTimeout
} = require('cucumber');

const defaultTimeout = 10000; // Cucumber's default timeout
setDefaultTimeout(defaultTimeout);

BeforeAll(function () {
  function World({ attach, parameters }) {
    this.attach = attach
    this.parameters = parameters
  };
  setWorldConstructor(World);
});
