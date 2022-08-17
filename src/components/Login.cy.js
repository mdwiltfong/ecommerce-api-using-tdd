import Login from "./Login";

describe('Login form', () => {
    beforeEach(() => {
        cy.mount(<Login/>)
        cy.viewport(1920,1080)
    })

    it('Profile image is rendered', () => {
        cy.get("[data-test='profile-image']").should('be.visible')
    })
    it('Welcome back header is present', () => {
        cy.get("[data-test='header']").contains('Welcome Back!')
    })
    it('Username input is rendered', () => {
        cy.get("input[placeholder='Username']")
    })
    it('Password input is rendered', () => {
        cy.get("input[placeholder='Password']")
    })
    it('Checkbox is rendered', () => {
        cy.get(":checkbox")
    })
    it('Login button is rendered', () => {
        cy.get("[data-test='login']").contains('Login')
    })
    it('No account link is present', () => {
        cy.get("[data-test='no-account']").contains('No account? Register here')
    })
})