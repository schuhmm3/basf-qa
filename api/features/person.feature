Feature: Person

    As a company
    I want to have a persons api
    So I can manage persons

    @smoke
    Scenario: All the persons can be retrieved
        When requesting a list of persons
        Then persons are greather than zero

    Scenario: Existing person can be retrieved
        Given an existing person
        When requesting a person by id
        Then person is retrieved

    Scenario: Non Existing person can not be retrieved
        Given a non existing person
        When requesting a person by id
        Then person is not retrieved

    @smoke
    Scenario: A person can be created
        Given a created person
        When requesting a person by id
        Then person is retrieved