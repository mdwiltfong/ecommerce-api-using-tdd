import ShoppingCart from "./ShoppingCart";

describe('Cart page', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.mount(<ShoppingCart />)
    })
    it('when increment button is pressed, the counter is incremented', () => {
        cy.get("[data-test='incrementer']").click();
        cy.get("[data-test='item-counter']").should('have.text', '2')
    })
    it('when decrement button is pressed, the counter is decremented', () => {
        cy.get("[data-test='decrementer']").click();
        cy.get("[data-test='item-counter']").should('have.text', '1')
    })
})

