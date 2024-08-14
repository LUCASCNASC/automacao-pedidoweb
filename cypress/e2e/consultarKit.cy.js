describe('Consulta de Kit', () => {

    beforeEach(() => {
      cy.login()
    })
  
    it('Conseguir pesquisar corretamente por um kit, selecioná-lo e entrar nele', () => {
      cy.findByTestId('Kits').click();
      cy.get('[data-testid="Kits"] > .menu-text').click();
      cy.get('[data-id="1"] > [data-field="itensView"] > .MuiButtonBase-root').click();
      cy.get('.aside-arrow').click();
      cy.get('.MuiDataGrid-row--lastVisible > [data-field="itensView"] > .MuiButtonBase-root').click();
      cy.get('.aside-arrow').click();

    })
  })