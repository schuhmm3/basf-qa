describe('Search Suite', () => {
    ['water', 'propylen',].forEach((word) => {
        it(`the word: ${word} should appear on top 3 results`, () => {
            cy.setCookie('XSRF-TOKEN', '9a14e9f7-52fa-4778-b315-ac0b49dbd690');
            cy.setCookie('AUTHSESSIONID', 'D133BAA44D56135EE543A4CF6B55FD94');
            cy.visit('/');
            cy.get('div.checkbox-box').click({ multiple: true });
            cy.get('div.button-text').click();
            cy.get('#searchbar-activeinput').type(word, { force: true });
            cy.get('#searchbar-magnifier').click();
            cy.get('[name="result-list-entry-0"] div.search-result div.search-result-abstract', { timeout: 15000 }).contains(word)
            cy.get('[name="result-list-entry-1"] div.search-result div.search-result-abstract', { timeout: 15000 }).contains(word)
            cy.get('[name="result-list-entry-2"] div.search-result div.search-result-abstract', { timeout: 15000 }).contains(word)
        })
    })
})

