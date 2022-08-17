import Register from './Register'

describe('Register Form', () => {
    beforeEach(() => {
        cy.mount(<Register/>)
        cy.viewport(1920,1080)
    })

    it('Profile image is rendered', () => {
        cy.get("[data-test='profile-image']").should('be.visible')
    })
    it('Register account header is present', () => {
        cy.get("[data-test='header']").contains('Register a new account below!')
    })
    it('Username input is rendered', () => {
        cy.get("input[placeholder='Username']")
    })
    it('Password input is rendered', () => {
        cy.get("input[placeholder='Password']")
    })
    it('Confirm password input is rendered', () => {
        cy.get("input[placeholder='Confirm Password']")
    })
    it('Checkbox is rendered', () => {
        cy.get(":checkbox")
    })
    it('Register button is rendered', () => {
        cy.get("[data-test='register']").contains('Register')
    })
})