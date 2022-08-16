import ProductBox from "./ProductBox";

describe('ProductBox', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
    })
    it('Tshirt image is shown on render', () => {
        cy.mount(<ProductBox/>)
        cy.get("[data-test='grey-tshirt-image']").should('be.visible')
    })
    it('Hoodie image is shown on render', () => {
        cy.mount(<ProductBox/>)
        cy.get("[data-test='grey-hoodie-image']").should('be.visible')
    })
})