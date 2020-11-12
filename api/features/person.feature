Feature: Person

    As a company
    I want to have a person api
    So I can create manage persons

    Scenario: An Admin User can create a new Currency
        Given an Admin User
        When a currency is created
        Then the currency can be retrieved

    Scenario: An Admin User can get all the currencies
        Given an Admin User
        Then all the currencies can be retrieved

    @smoke
    Scenario: An Admin user can delete a currency
        Given an Admin User
        When a currency is created
        Then the currency can be retrieved
        And a currency is deleted
        And the currency can not be retrieved


    Scenario: An Standard User can get all the currencies
        Given an Standard user
        Then all the currencies can be retrieved

    @smoke
    Scenario: An Standard user can not delete a currency
        Given an Standard user
        When all the currencies can be retrieved
        Then a currency can not be deleted

    @smoke
    Scenario: An Standard User can not create a new Currency
        Given an Standard user
        Then a currency can not be created