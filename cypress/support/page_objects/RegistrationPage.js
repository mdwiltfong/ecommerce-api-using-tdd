class RegistrationPage {
  visit() {
    cy.visit("/register");
  }
  registerTestUser() {
    cy.get('[data-test="email"]').type("JohnDoe@JDmail.com");
    cy.get('[data-test="password"]').type("123456");
    cy.get('[data-test="confirmpassword"]').type("123456");
    cy.get('[data-test="register-button"]').click();
  }
}

export const registrationPage = new RegistrationPage();
