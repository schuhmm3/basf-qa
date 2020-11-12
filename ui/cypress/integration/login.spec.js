// type definitions for Cypress object "cy"
// <reference types="cypress" />
describe('Login Suite', () => {

    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('profile').then((profile) => {
            // "this" is still the test context object
            this.profile = profile
        })
    })

    it('Log in Q4 Site', function () {
        cy.setCookie('XSRF-TOKEN', '9a14e9f7-52fa-4778-b315-ac0b49dbd690')
        cy.setCookie('AUTHSESSIONID', 'D133BAA44D56135EE543A4CF6B55FD94')
        cy.visit('/')
        //cy.get('#username').type(this.profile.username)
        //cy.get('#password').type(this.profile.password)
        //cy.get('#kc-login').click();
        // Missing Step for Google Code Authenticator
        cy.contains('QKnows Terms of Use').should('exist');
    })
})

