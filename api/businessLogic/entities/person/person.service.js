'use strict';

const personModel = require('./person.model');

module.exports = ({ config, requestService, httpStatus, userService }) => {
  const DOMAIN = config.EXCHANGE_SERVICE.URL;

  return {
    async get(exchange, userType) {
      const PATH = `${DOMAIN}`

      const response = await requestService.post({
        url: PATH,
        options: {
          headers: { Authorization: `${userService.getAPIToken(userType)}` }
        },
        payload: exchange
      });

      if (response.status === httpStatus.OK) {
        return personModel(response.data);
      }
      else {
        throw new Error(
          `Exchange could not be created because the following error:
          ${response.data.error.message}`);
      }
    }
  }
}