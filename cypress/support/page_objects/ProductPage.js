class ProductPage {
    visit() {
      cy.visit("/products/Hoodie");
    }
    addItemSizeToCart() {
      cy.get('[data-test="size-drop-down"]').select('small');
      cy.get('[data-test="size-drop-down"]').should("have.value", 'small');
      cy.get('[data-test="add-to-cart"]').click();
    }
  }
  
  export const productPage = new ProductPage();