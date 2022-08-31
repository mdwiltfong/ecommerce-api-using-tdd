describe('Operations on user accounts', () => {
  it('Register for account', () => {
    cy.visit('http://localhost:3000')

    cy.get("[data-test='accounts-image']")
      .should('be.visible')

    cy.get('[data-test="accounts-image"]')
      .click();

    cy.get('[data-test="login"]')
      .contains('No account? Register here');

    cy.get('[data-test="no-account"]')
      .click();

    cy.get("[data-test='register']")
      .contains('Register')

    cy.get('[data-test="email"]')
      .type('JohnDoe@JDmail.com');

    cy.get('[data-test="password"]')
      .type('123456');

    cy.get('[data-test="confirmpassword"]')
      .type('123456');
    
    cy.get('[data-test="register-button"]')
      .click();
    
    cy.get('[data-test="login"]')
      .contains('Welcome');
  })
})
