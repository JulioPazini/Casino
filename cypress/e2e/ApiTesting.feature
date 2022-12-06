@APITest
Feature: Valitadion for the api https://reqres.in/api

    Scenario Outline: Should return a list with all <list>
        Given I request a list of all the users from "https://reqres.in/api/<list>"
        Then it should return a list of "<list>"
        Examples:
        | list      |
        | users     |
        | resources |

    Scenario: Should return an existing user
        Given I send a "GET" request to fetch the user "1"
        Then it should return all the information of the user

    Scenario: Should not return invalid information from the user
        Given I send a "GET" request to fetch the user "1"
        Then it should not return invalid information
