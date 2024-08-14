describe('Conferência/Separação', () => {

    beforeEach(() => {
      cy.login()
    })
  
    it('Conseguir fazer a Conferência/Separação corretamente.', () => {
      cy.findByTestId('Conferência/Separação').click();
      

    })
  })