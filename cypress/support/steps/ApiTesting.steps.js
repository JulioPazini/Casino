import { context } from '../../fixtures';

Given(/^I request a list of all the users from "([^"]*)"$/, (url) => {
  cy.api({
    method: "GET",
    url: url,
  }).as("response");
});

Then(/^it should return a list of "([^"]*)"$/, (list) => {
  switch (list) {
    case "users":
      cy.get("@response").should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data).lengthOf(6);
        expect(response.body.data[0]).to.have.all.keys(
          "id",
          "email",
          "first_name",
          "last_name",
          "avatar"
        );
      });
      break;
    case "resources":
      cy.get("@response").should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data).lengthOf(6);
        expect(response.body.data[0]).to.have.all.keys(
          "id",
          "name",
          "year",
          "color",
          "pantone_value"
        );
      });
      break;
  }
});

Given(
  /^I send a "([^"]*)" request to fetch the user "([^"]*)"$/,
  (method, id) => {
    cy.api({
      method: method,
      url: `https://reqres.in/api/users/${id}`,
    }).as("response");
  }
);

Then(/^it should return all the information of the user$/, () => {
  cy.get("@response").should((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.data).to.have.all.keys(
      "id",
      "email",
      "first_name",
      "last_name",
      "avatar"
    );
    expect(response.body.data).has.property("id", context.user.id);
    expect(response.body.data).has.property("email", context.user.email);
    expect(response.body.data).has.property("first_name", context.user.first_name);
    expect(response.body.data).has.property("last_name", context.user.last_name);
    expect(response.body.data).has.property("avatar", context.user.avatar);
  });
});


Then(/^it should not return invalid information$/, () => {
  cy.get("@response").should((response) => {
    expect(response.body.data).to.not.have.all.keys(
      "name",
      "year",
      "color",
      "pantone_value"
    );
  });
});
