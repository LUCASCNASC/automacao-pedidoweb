describe('Perfil de acesso', () => {

    beforeEach(() => {
      cy.login()
    })
  
    it('Conseguir criar um novo perfil de acesso corretamente.', () => {
      cy.findByTestId('Perfil de acesso').click();
      cy.get('[data-testid="Perfil de acesso"] > .menu-text').click();
      cy.get('[href="/cadastro/perfilacesso/novo"] > .MuiButtonBase-root').click();
      cy.get('[codigo="simple-tab-1"]').click();
      cy.get('#augdescricao').type('Acesso teste {downArrow}');
      cy.get('.selectAll > .d-flex > :nth-child(1)').click();
      cy.get('.selectAll > .d-flex > :nth-child(3)').click();
      
      
    })
})