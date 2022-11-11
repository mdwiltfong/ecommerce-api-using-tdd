class ShoppingCartPage {
    visit() {
      cy.visit("/shoppingcart");
    }
    clickCheckout() {
      cy.get('[data-test="checkout"]').click();
    }
  }
  
  export const shoppingCartPage = new ShoppingCartPage();