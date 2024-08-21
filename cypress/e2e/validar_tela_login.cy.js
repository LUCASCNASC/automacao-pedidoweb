describe('teste login', () => {
    it('acessar tela do pedido web', () => {
        cy.visit('http://10.7.0.42:2800/');

        cy.title()
            .should('be.equal', 'SBX Mobile') //valida todo o título
            .and('contain', 'SBX') //valida se essa parte consta no título
    })

    it.only('acessar tela do pedido web', () => {
        cy.visit('http://10.7.0.42:2800/');

        cy.get('[ng-click="clienteStatsOpen()"]')
            .click()
            //preciso validar se aparecer o card com as informações da resolução disponível
        
        //cy.get('#dialogContent_4')
        //    .should('not.exist')

        cy.get('[style="color:#333;font-size:110%;margin:0"]')
        .should('have.text', 'Resolução Disponível', 'Sistema Operacional', 'Navegador', 'Acesso ao Serviço REST')
        
        cy.get('#dialogContent_4 > .layout-align-center-center > .md-raised')
            .should('have.class', 'md-raised md-primary md-button md-ink-ripple')
            //.should('contain', 'ok')

    })
})