beforeEach(function () {
    // "this" points at the test context object
    cy.fixture('profile').then((profile) => {
        // "this" is still the test context object
        this.profile = profile
    })
})

describe('Login Suite', () => {
    it('Log in Q4 Site', function () {
        cy.setCookie('XSRF-TOKEN', this.profile.XSRF_TOKEN)
        cy.setCookie('AUTHSESSIONID', this.profile.AUTHSESSIONID)
        cy.visit('/')
        //cy.get('#username').type(this.profile.username)
        //cy.get('#password').type(this.profile.password)
        //cy.get('#kc-login').click();
        // Missing Step for Google Code Authenticator
        cy.contains('QKnows Terms of Use').should('exist');
    })
})

