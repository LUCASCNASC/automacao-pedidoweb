describe('Logar e sair do pedido web', () => {

    beforeEach(() => {
        cy.visit('http://10.7.0.42:2800/');
    })
  
    it('Tentar logar e sair do pedido web - caminho feliz.', () => {
        cy.get('#txtusername')
            .type('lucas.camargo {downArrow}');

        cy.get('#txtpassword')
            .type('@Lcn1998 {downArrow}');

        cy.get('.test_btnSalvarCliente')
            .click();
        //necessário validar mensagem "Entrando no sistema"
        cy.wait(10000);

        cy.get('[aria-label="Menu de opções"] > .ng-binding')
            .click();

        cy.wait(3000);

        cy.get('.rodape > ._md-button-wrap > div.md-button > .md-no-style')
            .click();
    })
})