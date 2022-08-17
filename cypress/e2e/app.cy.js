describe('Operations on user accounts', () => {
  it('Register for account', () => {
    cy.visit('http://localhost:3000')

    cy.get("[data-test='accounts-image']")
      .should('be.visible')

    cy.get('[data-test="accounts-image"]')
      .click();

    cy.get('[data-test="login"]')
      .contains('No account? Register here');

    cy.get('[data-test="register-link"]')
      .click();

    cy.get('[data-test="username-input"]')
      .type('JohnDoe');

    cy.get('[data-test="password-input"]')
      .type('123456');

    cy.get('[data-test="confirm-password-input"]')
      .type('123456');
    
    cy.get('[data-test="register-button"]')
      .click();
    
    cy.get('[data-test="login"]')
      .contains('Welcome');
  })
})
