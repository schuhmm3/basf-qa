'use strict';

const { When } = require('cucumber');
const { exchangeService } = require('../../businessLogic');
const { expect } = require('../support/chai.wrapper');

When('exchange is calculated', async function () {
  const currencyFrom = this.allCurrencies[0];
  const currencyTo = this.allCurrencies[1];
  const amount = 10;

  const exchange = {
    currencyFromId: currencyFrom.id,
    currencyToId: currencyTo.id,
    amount
  }

  const expectedExchange = amount * currencyFrom.value / currencyTo.value;
  const calculatedExchange = await exchangeService.calculateExchange(exchange, this.userType);

  expect(calculatedExchange).to.be.equal(expectedExchange);
});