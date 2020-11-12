'use strict';

module.exports = data =>({
  currencyId: data.currencyToId,
  currencyFromId: data.currencyFromId,
  amount: data.amount
})