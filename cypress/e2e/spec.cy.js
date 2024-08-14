describe('Login', () => {

  beforeEach(() => {
    cy.login()
  })

  it('teste se a tela inicial é a de dashboard', () => {
    // Ensure we are redirected to the login page
    cy.url().should('contains', '/dashboard');
  })
})

