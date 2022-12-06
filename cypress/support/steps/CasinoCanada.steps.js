import { Before } from "cypress-cucumber-preprocessor/steps";
import { casinoCanadaPage } from "../pages";
import { casinoCanadaElement } from "../elements";

Before({ tags: "@AddHeader" }, () => {
  cy.intercept(`${Cypress.config("baseUrl")}**`, (req) => {
    req.headers["user-agent"] = "KFR-tests";
  });

  //Resets hover position
  cy.get("body").realHover({ position: "topLeft" });
});

Given(/^I open the website "casinoscanada"$/, () => {
  cy.visit(Cypress.config("baseUrl"));
});

When(/^I go to the menu Bonus$/, () => {
  casinoCanadaPage.openMenuDropdown(casinoCanadaElement.menuBonus());
});

Then(/^a dropdown menu should open$/, () => {
  casinoCanadaPage.checkMenuDropdown();
});

Then(/^should show the Bonus options$/, () => {
  casinoCanadaPage.checkMenuOption(
    casinoCanadaElement.optionMenu(0),
    "Bonus sans dépôt"
  );
  casinoCanadaPage.checkMenuOption(
    casinoCanadaElement.optionMenu(1),
    "Bonus de bienvenue"
  );
  casinoCanadaPage.checkMenuOption(
    casinoCanadaElement.optionMenu(2),
    "Tours gratuits"
  );
  casinoCanadaPage.checkMenuOption(
    casinoCanadaElement.optionMenu(3),
    "Bonus cashback"
  );
});

Then(/^it should show a list of the Top 10 casinos$/, () => {
  casinoCanadaPage.checkTopList();
});

When(/^the filters are selected$/, () => {
  casinoCanadaPage.navigateToCasinos();
  casinoCanadaPage.filterCasinos();
});

Then(
  /^the result should a list of casinos with the same filters selected$/,
  () => {
    casinoCanadaPage.checkListCasinosFiltered();
  }
);
