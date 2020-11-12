'use strict';

const container = require('./container');

module.exports = {
  personService: container.resolve('personService'),
}
