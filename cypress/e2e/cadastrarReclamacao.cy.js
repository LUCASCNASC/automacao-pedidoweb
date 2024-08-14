describe('Cadastro de Reclamação', () => {

    beforeEach(() => {
      cy.login()
    })
  
    it('Conseguir cadastrar reclamação corretamente.', () => {
      cy.findByTestId('Reclamação').click();
      cy.get('[data-testid="open-filtro"]').click();
      cy.get('.input-group > .input-group-append > .MuiButtonBase-root > .icon').click();
      cy.get(':nth-child(1) > .border > .MuiList-root > :nth-child(1) > .MuiListItemButton-root > .MuiListItemIcon-root').click();
      cy.get('.aside-arrow').click();
      cy.get('[data-testid="filtro-input"]').type('149715{enter}');
      cy.get('.even-table > [data-field="cad_razao"]').click();
      cy.get('[data-testid="selecionar"]').click();
      cy.get('#tipo').select('2');
      cy.get('.flex-grow-1 > .input-group-append > .btn').click();
      cy.get('[data-id="1"] > .MuiDataGrid-cell--withRenderer').click();
      cy.get('.modal-footer > .btn').click();
      cy.get(':nth-child(3) > :nth-child(1) > .form-control').type('1 {enter}');
      //cy.get(':nth-child(4) > :nth-child(1) > .form-control').type('31/12/2023 {enter}');
      cy.get('[rows="1"]').type('Testando campo de descrição do problema. {downArrow}');
      cy.get('.btn-primary').click()

    })
  })