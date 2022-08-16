import TshirtPage from "./TshirtPage";

describe('Tshirt Page', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
    })
    it('Tshirt image is rendered', () => {
        cy.mount(<TshirtPage/>)
        cy.get("[data-test='tshirt-image']").should('be.visible')
    })
    it('Item title renders', () => {
        cy.mount(<TshirtPage/>)
        cy.get("[data-test='title']").contains('Classic')
    })
    it('Price renders', () => {
        cy.mount(<TshirtPage/>)
        cy.get("[data-test='price']").contains('$35.00')
    })
    it('Item descriptions render', () => {
        cy.mount(<TshirtPage/>)
        cy.get("[data-test='p1']").contains('So classy it hurts.')
        cy.get("[data-test='p2']").contains('100% combed ring-spun cotton')
        cy.get("[data-test='p3']").contains('Printed on Next Level garment')
        cy.get("[data-test='p4']").contains('Pre-shrunk')
        cy.get("[data-test='p5']").contains('Tear-away label')
    })
}) 