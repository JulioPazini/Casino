@AddHeader
Feature: Valitadion for the website https://casinoscanada.com

    @UITesting
    Scenario: Open headers menu
        Given I open the website "casinoscanada"
        When I go to the menu Bonus
        Then a dropdown menu should open
            And should show the Bonus options

    @UITesting
    Scenario: Should show a list of Top 10 casinos
        Given I open the website "casinoscanada"
        Then it should show a list of the Top 10 casinos

    @FunctionalTesting
    Scenario: Show the result of filtering casinos
        Given I open the website "casinoscanada"
        When the filters are selected
        Then the result should a list of casinos with the same filters selected
