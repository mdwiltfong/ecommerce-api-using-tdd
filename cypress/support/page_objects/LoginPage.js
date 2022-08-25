import { registrationPage } from "./RegistrationPage";
export class LoginPage {
  visit() {
    cy.visit("/");
  }
  visitRegistration() {
    cy.get("[data-test='accounts-image']").click();
    return registrationPage;
  }
}

export const loginPage = new LoginPage();
