describe('Consulta de pessoa', () => {

    beforeEach(() => {
      cy.login()
    })
  
    it('Conseguir pesquisar corretamente um cadastro de pessoa, selecioná-lo e entrar nele', () => {
      cy.findByTestId('Pessoas').click();
      cy.get('[data-testid="Pessoas"] > .menu-text').click();
      cy.get('[data-testid="filtro-input"]').type('lucas {enter}');
      cy.get('[data-rowindex="1"]').click();
      cy.get('.Mui-selected > [data-field="cad_codigo"] > a').click()


    })
  })