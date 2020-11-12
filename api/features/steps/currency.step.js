'use strict';

const uuid = require('uuid/v4');
const { When, Then } = require('cucumber');

const { currencyService } = require('../../businessLogic');

const { expect } = require('../support/chai.wrapper');

When('a currency is created', async function () {
  this.currency = {
    code: uuid(),
    country: `Country:${uuid()}`,
    value: 1
  };

  this.createdCurrency = await currencyService.createCurrency(this.currency, this.userType)
});

Then('the currency can be retrieved', async function () {
  this.retrievedCurrency = await currencyService.getCurrency(this.createdCurrency.id, this.userType);
  expect(this.retrievedCurrency).to.have.property('id',this.createdCurrency.id);
  expect(this.retrievedCurrency).to.have.property('code',this.currency.code);
  expect(this.retrievedCurrency).to.have.property('country',this.currency.country);
  expect(this.retrievedCurrency).to.have.property('value',this.currency.value);
});

Then('all the currencies can be retrieved', async function () {
  this.allCurrencies = await currencyService.getCurrencies(this.userType);
  expect(this.allCurrencies.length).to.be.above(0);
})

Then('a currency is deleted', async function () {
  await currencyService.deleteCurrency(this.createdCurrency.id, this.userType);
})

Then('the currency can not be retrieved', async function () {
  try {
    await currencyService.getCurrency(this.createdCurrency.id, this.userType);
    throw new Error('Currency has been retrieved when it should be deleted');
  } catch (error) {
    expect(error.message).to.be.equal('Currency was not found. 404 Returned');
  }
})

Then('a currency can not be deleted', async function () {
  try {
    await currencyService.deleteCurrency(this.allCurrencies[0].id, this.userType);
    throw new Error('Currency has been deleted by an Standard User');
  } catch (error) {
    expect(error.message).to.be.equal('User Role is not authorized create a currency. 403 Returned');
  }
})

Then('a currency can not be created', async function () {
  try {
    this.currency = {
      code: uuid(),
      country: `Country:${uuid()}`,
      value: 1
    };
      await currencyService.createCurrency(this.currency, this.userType)
      throw new Error('Currency has been created by an Standard User');
  } catch (error) {
    expect(error.message).to.be.equal('User Role is not authorized create a currency. 403 Returned');
  }
})