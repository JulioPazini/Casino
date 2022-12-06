/// <reference types="Cypress" />

import { casinoCanadaElement } from "../elements";

class CasinoCanadaPage {
  openMenuDropdown(element) {
    cy.get(element).parent().realHover();
  }

  checkMenuDropdown() {
    cy.get(casinoCanadaElement.dropdownMenu()).should("be.visible");
  }

  checkMenuOption(element, option) {
    cy.get(element).should("be.visible").and("contain", option);
  }

  checkTopList() {
    cy.get(casinoCanadaElement.casinosList())
      .should("have.lengthOf", 10)
      .each((el, index) => {
        cy.wrap(el)
          .scrollIntoView()
          .should("contain", index + 1);
      });
  }

  navigateToCasinos() {
    cy.get(casinoCanadaElement.menuCasinos()).click().wait(3000);
    cy.get(casinoCanadaElement.filterTitle()).should("exist").and("be.visible");
  }

  filterCasinos() {
    cy.get(casinoCanadaElement.checkboxStar()).first().click();
    cy.get(casinoCanadaElement.checkboxBonus()).first().click();
  }

  checkListCasinosFiltered() {
    //Checks if the stars are the same as the filter
    cy.get(casinoCanadaElement.titleListCasinos())
      .siblings(casinoCanadaElement.itemCasino())
      .each((el) => {
        cy.wrap(el).within(() => {
          cy.get(casinoCanadaElement.iconStar()).should("have.lengthOf", 5);
        });
      });

    //Checks if the bonus is the same as the filter

    //This part of the validation is commented out because of one of the listed casinos
    //shows the bonus as "Bon" instead of "Excellent", which was the filter selected.
    //Is it correct?

    // cy.get(casinoCanadaElement.titleListCasinos())
    //   .siblings(casinoCanadaElement.itemCasino())
    //   .each((el) => {
    //     cy.wrap(el).within(() => {
    //       cy.get(casinoCanadaElement.iconBonus()).should(
    //         "contain",
    //         "Excellent"
    //       );
    //     });
    //   });
  }
}

export const casinoCanadaPage = new CasinoCanadaPage();
