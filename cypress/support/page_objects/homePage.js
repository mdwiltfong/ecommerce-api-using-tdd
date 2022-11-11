export class HomePage {
  visit() {
    cy.visit("/");
  }
  getSuccessfulLoginBanner() {
    return cy.get("[data-test='successful-login']");
  }
  clickThroughProduct() {
    cy.get("[data-test='grey-tshirt-image']")
  }
}

export const homePage = new HomePage();
