import ProductBox from "./ProductBox";
// import Greytshirt from '../images/Greytshirt.png'

describe('ProductBox', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
    })
    it('Tshirt image is shown on render', () => {
        cy.mount(<ProductBox />)
        cy.get("[data-test='grey-tshirt-image']").should('be.visible')
    })
    it('Hoodie image is shown on render', () => {
        cy.mount(<ProductBox />)
        cy.get("[data-test='grey-hoodie-image']").should('be.visible')
    })
    
})