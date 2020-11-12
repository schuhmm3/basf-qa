beforeEach(function () {
    // "this" points at the test context object
    cy.fixture('profile').then((profile) => {
        // "this" is still the test context object
        this.profile = profile
    })
})


describe('Search Suite', () => {
    ['water', 'propylen'].forEach((word) => {
        it(`the word: ${word} should appear on top 3 results`, function () {
            cy.setCookie('XSRF-TOKEN', this.profile.XSRF_TOKEN)
            cy.setCookie('AUTHSESSIONID', this.profile.AUTHSESSIONID)
            cy.visit('/');
            cy.get('div.checkbox-box').click({ multiple: true });
            cy.get('div.button-text').click();
            cy.get('#searchbar-activeinput').type(word, { force: true });
            cy.get('#searchbar-magnifier').click();
            cy.get('[name="result-list-entry-0"] div.search-result div.search-result-abstract').contains(word)
            cy.get('[name="result-list-entry-1"] div.search-result div.search-result-abstract').contains(word)
            cy.get('[name="result-list-entry-2"] div.search-result div.search-result-abstract').contains(word)
        })
    })
})

