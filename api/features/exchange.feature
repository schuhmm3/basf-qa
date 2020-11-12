# Bug Reported: 500 Internal Server Error is returned when Exchange is calculated
@skip 
Feature: Exchange

  As a merchant
  I want to have an exchange api
  So I can calculate the exchange of different currencies

Scenario: An Admin User can Calculate an exchange
    Given an Admin User
    When all the currencies can be retrieved
    Then exchange is calculated


@smoke
Scenario: An Standard User can Calculate an exchange
    Given an Standard user
    When all the currencies can be retrieved
    Then exchange is calculated