import ProductPage from "./ProductPage";

describe('Tshirt Page', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.mount(<ProductPage/>)
    })
    it('Tshirt image is rendered', () => {
        cy.get("[data-test='tshirt-image']").should('be.visible')
    })
    it('Item title renders', () => {
        cy.get("[data-test='title']").contains('Classic')
    })
    it('Price renders', () => {
        cy.get("[data-test='price']").contains('$35.00')
    })
    it('Item descriptions render', () => {
        cy.get("[data-test='p1']").contains('So classy it hurts.')
        cy.get("[data-test='p2']").contains('100% combed ring-spun cotton')
        cy.get("[data-test='p3']").contains('Printed on Next Level garment')
        cy.get("[data-test='p4']").contains('Pre-shrunk')
        cy.get("[data-test='p5']").contains('Tear-away label')
    })
    it('Size drop down is rendered', () => {
        cy.get("[data-test='size-drop-down']").should('be.visible')
    })
    it('Add to cart button is rendered', () => {
        cy.get("[data-test='add-to-cart']").should('be.visible')
    })
}) 