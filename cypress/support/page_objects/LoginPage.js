import { registrationPage } from "./RegistrationPage";
export class LoginPage {
  visit() {
    cy.visit("/login");
  }
  clickRegistrationLink() {
    cy.get("[data-test='no-account']").click();
    return registrationPage;
  }
}

export const loginPage = new LoginPage();
