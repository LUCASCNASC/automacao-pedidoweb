describe('Contagem de balanço', () => {

    beforeEach(() => {
      cy.login()
    })
  
    it('Conseguir fazer a Contagem de balanço corretamente.', () => {
      cy.findByTestId('Contagem de balanço').click();
      

    })
  })