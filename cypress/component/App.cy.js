import App from '../../src/App'

describe('App component', () => {
  it('Renders Header component', () => {
    cy.viewport(1920, 1080)
    cy.mount(<App/>)
    
  })
})