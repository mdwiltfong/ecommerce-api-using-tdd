import Header from './Header'
import Login from './Login'
import App from '../App'
import Register from './Register'

describe('Header.js', () => {
  beforeEach(() => {
    cy.mount(<Header/>)
    // run these tests as if in a desktop
    // browser with a 1080p monitor
    cy.viewport(1920, 1080)
  })
  
  it('Header should contain h1 with title', () => {
    cy.get("[data-test='main-header']").contains('ShoesMcgees EStore')
  })
  it('Logo is rendered', () => {
    cy.get("[data-test='logo']").contains('S')
  })
  it('Cart image is rendered', () => {
    cy.get("[data-test='cart-image']").should('be.visible')
  })
  it('Cart counter circle should be visible', () => {
    cy.get("[data-test='cart-counter']").should('be.visible')
  })
  it('Cart counter is zero by default', () => {
    cy.get("[data-test='cart-counter-number']").contains('0')
  })
})

describe('Cart icon functionality', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
  })
  it('Cart counter is zero by default', () => {
    cy.mount(<Header />)
    cy.get("[data-test='cart-counter-number']").contains('0')
  })
})
