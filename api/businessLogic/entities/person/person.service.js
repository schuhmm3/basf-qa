/* eslint-disable max-len */
'use strict';

const personModel = require('./person.model');

module.exports = ({ config, requestService, httpStatus }) => {
  return {
    async get() {
      const response = await requestService.get({
        url: {
          path: config.PERSONS_SERVICE.GET_ALL
        }
      });

      if (response.status === httpStatus.OK) {
        return response.data.map(person => personModel(person));
      } else {
        throw new Error(
          `Persons could not be retrieved because the following error:
          ${response.data.error.message}`);
      }
    },
    async getById(id) {
      const response = await requestService.get({
        url: {
          path: config.PERSONS_SERVICE.GET,
          replacements: {
            ':personId': id
          }
        }
      });

      if (response.status === httpStatus.OK) {
        return personModel(response.data);
      } else if (response.status === httpStatus.NOT_FOUND) {
        return 'Resource not found!';
      } else {
        throw new Error(
          `Person could not be retrieved by id because the following error:
          ${response.data.error.message}`);
      }
    },
    async create({ firstName, lastName }) {
      const response = await requestService.put({
        url: {
          path: config.PERSONS_SERVICE.PUT,
        },
        payload: {
          firstName,
          lastName
        }
      });

      if (response.status === httpStatus.OK) {
        return response.data.id;
      } else {
        throw new Error(
          `Persons could not be created because the following error:
          ${response.data.error.message}`);
      }
    }
  }
}
