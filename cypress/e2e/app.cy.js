import { loginPage } from "../support/page_objects/LoginPage";
import { registrationPage } from "../support/page_objects/RegistrationPage";
import { homePage } from "../support/page_objects/homePage";
describe("Operations on user accounts", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("User can navigate to registration page from loginPage", () => {
    loginPage.visit();
    loginPage.clickRegistrationLink();
    cy.get("h2").should("have.text", "Register a new  account below!");
  });
  it("User can register on registration page", () => {
    registrationPage.visit();
    cy.get("h2").should("have.text", "Register a new  account below!");
    registrationPage.registerTestUser();
    const banner = homePage.getSuccessfulLoginBanner();
    banner.should("be.visible");
  });

  it.skip("User can navigate to registration page from LoginPage and register", () => {
    cy.visit("http://localhost:3000");

    cy.get("[data-test='accounts-image']").should("be.visible");

    cy.get('[data-test="accounts-image"]').click();

    cy.get('[data-test="login"]').contains("No account? Register here");

    cy.get('[data-test="no-account"]').click();

    cy.get("[data-test='register']").contains("Register");

    cy.get('[data-test="email"]').type("JohnDoe@JDmail.com");
  });
});
