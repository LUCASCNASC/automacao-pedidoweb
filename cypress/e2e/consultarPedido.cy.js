describe('Consulta de pedido', () => {

    beforeEach(() => {
      cy.login()
    })
  
    it('Conseguir pesquisar corretamente um pedido, selecioná-lo e entrar nele', () => {
      cy.findByTestId('Pedidos').click();
      cy.get('[data-testid="Pedidos"] > .menu-text').click();
      cy.get('[data-testid="filtro-input"]').type('lucas {enter}');
      cy.get('[data-rowindex="3"]').click();
      cy.get('.Mui-selected > [data-field="ped_codigo"] > a').click()
      

    })
  })