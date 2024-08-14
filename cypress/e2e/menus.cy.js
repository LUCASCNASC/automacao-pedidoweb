describe('Entrando nos menus', () => {

    beforeEach(() => {
      cy.login()
    })
  
    it('Entrando em todas as telas', () => {
      cy.findByTestId('Produtos').click();
      cy.get('[data-testid="Pessoas"] > .menu-text').click();
      cy.get('[data-testid="Produtos"] > .menu-text').click();
      cy.get('[data-testid="Pedidos"] > .menu-text').click();
      cy.get('[data-testid="Kits"] > .menu-text').click();
      cy.get('[data-testid="Pessoa"] > .menu-text').click();
      cy.get('[data-testid="Pedido Simplificado"] > .menu-text').click();
      cy.get('[data-testid="Reclamação"] > .menu-text').click();
      cy.get('[data-testid="Dashboard"] > .menu-text').click();
      cy.get('[data-testid="Perfil de acesso"] > .menu-text').click();
      cy.get('[data-testid="Cadastro Nacional"] > .menu-text').click();
      cy.get('[data-testid="Mídia"] > .menu-text').click();
      cy.get('[data-testid="Pedido"] > .menu-text').click();
      cy.get('[data-testid="Usuário"] > .menu-text').click();
      cy.get('[data-testid="Status"] > .menu-text').click();
      cy.get('[data-testid="Usuário"] > .menu-text').click();
      cy.get('[data-testid="Classe"] > .menu-text').click();
      cy.get('[data-testid="Catálogo"] > .menu-text').click();
      cy.get('[data-testid="Categoria de produto"] > .menu-text').click();
      cy.get('[data-testid="Liberação de pedidos bloqueados"] > .menu-text').click();
      cy.get('[data-testid="Orçamento (INTERIX)"] > .menu-text').click();
      cy.get('[data-testid="Conferência/Separação"] > .menu-text').click();
      cy.get('[data-testid="Conferência de etiqueta"] > .menu-text').click();
      cy.get('[data-testid="Contagem de balanço"] > .menu-text').click();
      cy.get('[data-testid="Separar Manifesto"] > .menu-text').click();
      cy.get('[data-testid="Manifestos"] > .menu-text').click();
      cy.get('[data-testid="Pré-Inventário"] > .menu-text').click();
      cy.get('[data-testid="Transferências"] > .menu-text').click();
      cy.get('[data-testid="Transferência entre locais de estoque"] > .menu-text').click();
      cy.get('[data-testid="Transferências"] > .menu-text').click();
      cy.get('[data-testid="Confirmação de transferência"] > .menu-text').click();
      cy.get('[data-testid="Transferências"] > .menu-text').click();
      cy.get('[data-testid="Transferências Salvas"] > .menu-text').click();
      
    })
  })