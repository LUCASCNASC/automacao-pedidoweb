describe('Consulta de Obras', () => {

    beforeEach(() => {
      cy.login()
    })
  
    it('Conseguir pesquisar corretamente na tela de Consulta de Obras', () => {
      cy.findByTestId('Consulta de Obras').click();
      cy.get('[data-testid="abrirFiltro"]').click();
      cy.get('#select-Estado').select('Paraná');
      cy.get('.btn-primary').click();
      cy.get('[data-id="107"] > [data-field="Mapaview"] > [data-testid="mapa"]').click();
      cy.get('.fa').click();
      cy.get('[data-testid="abrirFiltro"]').click();
      cy.get('.card-footer > .btn-secondary').click();
      cy.get('.card-footer > .btn-primary').click();

      
    })
  })