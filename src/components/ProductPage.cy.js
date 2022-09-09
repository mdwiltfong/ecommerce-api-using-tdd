import ProductPage from "./ProductPage";

describe('Product Page', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.mount(<ProductPage/>)
    })
    it('Product image is rendered', () => {
        cy.get("[data-test='tshirt-image']").should('be.visible')
    })
    it('Item title renders', () => {
        cy.get("[data-test='title']").should('be.visible')
    })
    it('Price renders', () => {
        cy.get("[data-test='price']").should('be.visible')
    })
    it('Item descriptions render', () => {
        cy.get("[data-test='p1']").should('be.visible')
        cy.get("[data-test='p2']").should('be.visible')
        cy.get("[data-test='p3']").should('be.visible')
        cy.get("[data-test='p4']").should('be.visible')
        cy.get("[data-test='p5']").should('be.visible')
    })
    it('Size drop down is rendered', () => {
        cy.get("[data-test='size-drop-down']").should('be.visible')
    })
    it('Add to cart button is rendered', () => {
        cy.get("[data-test='add-to-cart']").should('be.visible')
    })
}) 

