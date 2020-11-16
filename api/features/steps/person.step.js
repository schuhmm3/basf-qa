'use strict';

const { Given, When, Then } = require('cucumber');
const { personService } = require('../../businessLogic');
const { expect } = require('../../support/chai.wrapper');

Given('an existing person', async function () {
  this.defaultExistingPerson = {
    id: '5f8479a8581e7709ff3d64ab',
    firstName: 'Michael',
    lastName: 'Schuhmacher'
  }
});

Given('a created person', async function () {
  const firstName = 'Lucas';
  const lastName = 'Hartridge';
  const id = await personService.create({ firstName, lastName });
  this.defaultExistingPerson = {
    id,
    firstName,
    lastName
  };
});

Given('a non existing person', async function () {
  this.defaultExistingPerson = { id: 'IWILLNOTEXIST' };
});

When('requesting a list of persons', async function () {
  this.persons = await personService.get();
});

When('requesting a person by id', async function () {
  this.person = await personService.getById(this.defaultExistingPerson.id);
});

Then('persons are greather than zero', async function () {
  expect(this.persons.length).to.be.greaterThan(0);
  this.persons.forEach(person => {
    expect(person).to.have.property('firstName');
    expect(person).to.have.property('lastName');
    expect(person).to.have.property('id');
  });
});

Then('person is retrieved', async function () {
  expect(this.person.firstName).to.be.equal(this.defaultExistingPerson.firstName);
  expect(this.person.lastName).to.be.equal(this.defaultExistingPerson.lastName);
  expect(this.person.id).to.be.equal(this.defaultExistingPerson.id);
});

Then('person is not retrieved', async function () {
  expect(this.person).to.be.equal('Resource not found!')
});
