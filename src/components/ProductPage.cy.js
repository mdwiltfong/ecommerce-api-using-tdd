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

describe('Product Page', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.mount(<ProductPage/>)
    })
    it('Add to cart button sends user info', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:5000/api/cart/T-Shirt',
            body: {
                size: 'small',
                productName: 'T-Shirt'
            }
        }).then( profile => {
            expect(profile.status).to.eq(200)
        })
    })

    it('Item is added to cart', () => {
        cy.get("[data-test='add-to-cart']")
            .should('be.visible')
        cy.get("[data-test='add-to-cart']")
            .click()
        cy.get("[data-test='cart-counter-number']")
            .contains('1')
    })
    it('Size alert is presented when no size is chosen', () => {
        cy.get("[data-test='drop-down-menu']")
            .select('Small').should('have.value', 'small')
        cy.get("[data-test='add-to-cart']")
            .should('be.visible')
        cy.get("[data-test='add-to-cart']")
            .click()
        cy.get("[data-test='size-alert']")
            .contains('Please choose a size')
    })
    it('Out of stock alert is presented when chosen size is of 0 quantity in database', () => {
        cy.get("[data-test='drop-down-menu']")
            .select('Small').should('have.value', 'small')
        cy.get("[data-test='add-to-cart']")
            .should('be.visible')
        cy.get("[data-test='add-to-cart']")
            .click()
        cy.get("[data-test='cart-counter-number']")
            .contains('1')
    })
}) 
