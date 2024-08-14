describe('Consulta de produto', () => {

    beforeEach(() => {
      cy.login()
    })
  
    it('Conseguir pesquisar corretamente um cadastro de pessoa, selecioná-lo e entrar nele', () => {
      cy.findByTestId('Produtos').click();
      cy.get('[data-testid="Produtos"] > .menu-text').click();
      cy.get('#inputSearch').type('escada {enter}');
      cy.get('[data-rowindex="2"]').click();
      cy.get('.Mui-selected > [data-field="prd_codigo"] > a').click()
      

    })
  })