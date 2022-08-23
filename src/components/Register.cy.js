import Register from './Register'
import Login from './Login'

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
        cy.get("input[placeholder='Email']")
    })
    it('Password input is rendered', () => {
        cy.get("input[placeholder='Password']")
    })
    it('Confirm password input is rendered', () => {
        cy.get("input[placeholder='Confirm Password']")
    })
    it('Register button is rendered', () => {
        cy.get("[data-test='register']").contains('Register')
    })
})

describe('Register button functionality', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
    })
    it('Register button sends user info', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:5000/api/profile',
            body: {
                email: 'JohnDoe@jdmail.com',
                password: '123456',
                confirmPassword: '123456'
            }
        }).then( profile => {
            expect(profile.status).to.eq(200)
        })
    })
    
  })

