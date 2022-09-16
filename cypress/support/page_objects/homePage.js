export class HomePage {
  visit() {
    cy.visit("/");
  }
  getSuccessfulLoginBanner() {
    return cy.get("[data-test='successful-login']");
  }
}

export const homePage = new HomePage();
