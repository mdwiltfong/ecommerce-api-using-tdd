import Register from './Register'
import { BrowserRouter as Router} from 'react-router-dom'


describe('Register Form', () => {
    beforeEach(() => {
        cy.mount(<Router>
                    <Register />
                 </Router>)
        cy.viewport(1920,1080)
    })

    it('Profile image is rendered', () => {
        cy.get("[data-test='profile-image']").should('be.visible')
    })
    it('Register account header is present', () => {
        cy.get("[data-test='header']").contains('Register a new account below!')
    })
    it('Username input is rendered', () => {
        cy.get("input[placeholder='E-mail']")
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
        cy.mount(<Router>
                    <Register />
                </Router>)
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

describe('Register component functionality', () => {
    beforeEach(() => {
        cy.viewport(1920,1080)
    })
    it('Rejects non-macthing passwords', () => {
        // const submitData = cy.stub()
        cy.mount(<Router>
                    <Register />
                </Router>)
        cy.get("[data-test='email']").type('JohnDoe@JDmail.com')
        cy.get("[data-test='password']").type('123456')
        cy.get("[data-test='confirmpassword']").type('234567')
        cy.get("[data-test='register-button']").click()
        cy.get("[data-test='password-warning']").contains('Please enter matching passwords')
    })
    it('Rejects improperly formatted E-mail', () => {
        cy.mount(<Router>
                    <Register />
                </Router>)
        cy.get("[data-test='email']").type('JohnDoeJDmail.com')
        cy.get("[data-test='password']").type('123456')
        cy.get("[data-test='confirmpassword']").type('123456')
        cy.get("[data-test='register-button']").click()
        cy.get("[data-test='email-warning']").contains('Please enter valid E-mail')
    })
    it('Rejects repeated E-mail', () => {
        cy.mount(<Router>
                    <Register />
                </Router>)
        cy.get("[data-test='email']").type('Cec@cmail.com')
        cy.get("[data-test='password']").type('123456')
        cy.get("[data-test='confirmpassword']").type('123456')
        cy.get("[data-test='register-button']").click()
        cy.get("[data-test='existing-email-warning']").contains('Please enter unique E-mail')
    })
})