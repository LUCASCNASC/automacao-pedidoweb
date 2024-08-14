describe('Carregamento de pedido na página de mídia', () => {

   

   beforeEach(() => {
      cy.login()
    })

   it('Carregar pedido na página de mídia corretamente', () => {
      cy.findByTestId('Mídia').click();
      cy.findByTestId('Pedido').click();
      cy.findByTestId('open-filtro').click();
      cy.findByTestId('filtro-input').type('lucas {enter}');
      cy.get('[data-rowindex="0"]').click();
      cy.get('[data-testid="pesquisar"]').click();
      cy.get('[data-id="2106931"] > [data-field="ped_codigo"]').select(1);
      //cy.get('[data-testid="selecionar"]').click();


      // cy.visit('/cadastro/midia/pedidos')
      // cy.findByTestId('modal-container').should('not.exist');
   })

   
   // it('Carregar pedido pelo input', () => {

   
})