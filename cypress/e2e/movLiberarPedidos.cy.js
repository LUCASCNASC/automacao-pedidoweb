describe('Liberação de pedidos bloqueados', () => {

    beforeEach(() => {
      cy.login()
    })
  
    it('Fazer a liberação de pedidos', () => {
      cy.findByTestId('Liberação de pedidos bloqueados').click();
      cy.get('.css-l3asds > :nth-child(1)').click();
      cy.get('[data-testid="cardBloqueio"]').click();
      cy.get('[data-testid="cardBloqueio"]').click();
      cy.get('[data-testid="botaoSelecionar"]').click();
      cy.get('[data-testid="botaoDesloquear"]').click();
      cy.get('.btn-secondary').click();
      cy.get('[data-testid="botaoDesloquear"]').click();
      cy.get('.css-mg7oh > .btn-primary').click();
      cy.get('.ncs-dialog > .f > .btn').click();
      cy.get('[data-testid="inputDepesquisa"]').type('a{downArrow}');
      cy.get('[data-testid="botaoDepesquisa"]').click();
      cy.get('[data-testid="inputDepesquisa"]').clear();
      cy.get('[data-testid="botaoAtualizar"]').click();
      cy.get('#dropdown-toggle-top').click();
      cy.get(':nth-child(1) > .navi-link > [data-testid="grupoPedido"] > input').click();
      cy.get(':nth-child(2) > .navi-link > [data-testid="grupoPedido"] > input').click();
      cy.get(':nth-child(3) > .navi-link > [data-testid="grupoPedido"] > input').click();
      cy.get(':nth-child(4) > .navi-link > [data-testid="grupoPedido"] > input').click();
      cy.get(':nth-child(5) > .navi-link > [data-testid="grupoPedido"] > input').click();
      cy.get(':nth-child(1) > .navi-link > [data-testid="grupoPedido"] > input').click();
      cy.get(':nth-child(2) > .navi-link > [data-testid="grupoPedido"] > input').click();
      cy.get(':nth-child(3) > .navi-link > [data-testid="grupoPedido"] > input').click();
      cy.get(':nth-child(4) > .navi-link > [data-testid="grupoPedido"] > input').click();
      cy.get(':nth-child(5) > .navi-link > [data-testid="grupoPedido"] > input').click();
      cy.get('.brand-logo > img').click();

    })
  })