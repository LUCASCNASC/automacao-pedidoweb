describe('Gerar pedido', () => {

    beforeEach(() => {
        cy.visit('http://10.7.0.42:2800/');
        cy.clearAllSessionStorage();
    })
  
    it('Gerar pedido de venda normal com proposta, processo 3013', () => {

        //Passando login do usuário
        cy.get('#txtusername')
            .type('lucas.camargo {downArrow}');

        //Passando senha do usuário
        cy.get('#txtpassword')
            .type('@Lcn1998 {downArrow}');

        //Clicando no botão "Entrar", para logar
        cy.get('.test_btnSalvarCliente')
            .click();

        cy.wait(10000);
        //clicar em "INICIAR ATENDIMENTO"
        //cy.get('.hide-sm > :nth-child(2) > .md-raised')
        //    .click()

        //cy.wait(1500)

        //clicar para escolher o processo de venda
        cy.get('#select_value_label_4 > .md-select-icon')
            .click()

        //cy.get('.md-text ng-binding')
        cy.get('#select_option_57 > .md-text')
            .click()

        cy.wait(1500)
        
        //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
        cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
            .wait(2000)
            .type('10159687080 {downArrow}')  //verificar os Xs
        
        cy.wait(1500)
        
        //clicar na lupa de pesquisa de clientes
        cy.get('.md-block > .ng-binding')
            .click()

        cy.wait(2500)
        
        //após a pesquisa encontrar o cliente, vamos selecionar ele
        cy.get('.md-3-line > div.md-button > .md-no-style')
            .click()

        cy.wait(3000)
        //pesquisar pelo produto 5
        cy.get('#searchText')
            .type('5')

        cy.wait(5000)
        //clicar para selecionar o produto; 
        //usamos o { force: true } pois a tela estava indo para baixo e o produto 5 não aparecia,
        //não deixando selecionar ele;
        cy.contains('Cod: 5')
            .click({ force: true })

        cy.wait(2000)
        //Selecionar a voltagem do produto
        cy.get('.padding-5 > :nth-child(1) > md-list.md-default-theme > :nth-child(3) > div.md-button > .md-no-style')
            .click({ force: true })

        cy.wait(5000)

        //Marcar para não usar a promoção, mas apenas quando o produto apresenta promoção; produto selecionado não tem
        //cy.get('[style="padding: 0 5px"] > .md-primary')
        //    .click()

        //clicar para adicionar o produto e avançar
        cy.get('[style="padding: 0px 5px;"] > .md-primary')
            .click({ force: true })

        cy.wait(6000)
        
        //clicar para confirmar a adição de serviços
        cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
            .click()

        cy.wait(4000)

        //clicar para não entregar
        cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
            .click({ force: true })

        cy.wait(2000)

        cy.get('.flex-gt-sm-50 > .md-primary')
            .click({ force: true })

        cy.wait(12000)

        //clicar no botão "GERAR PARCELAS"
        cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
            .click({ force: true })

        cy.wait(25000)

        //selecionar a forma de pagamento(3013)
        cy.get(':nth-child(3) > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
            .click()

        cy.wait(2500)
        
        //selecionar a parcela que eu desejo (3X)
        cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(3) > div.ng-binding')
            .click()

        cy.wait(3000)
        //desmarcar seguro prestamista 
        //cy.get('#checkbox-91-0 > .md-container')
            //.click()


        //clicar em "OK" no card de seguro prestamista
        cy.get('md-dialog-actions.layout-row > .md-primary')
            .click()

        cy.wait(2000)

        //clicar em AVANÇAR (da tela de gerar parcelas para a tela de finalizar pedido)
        cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
            .click()
        
        cy.wait(15000)

        //cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
        //    .click()

        //cy.wait(20000)

        //Deseja enviar proposta #xxxx para análise de crédito= NÃO; caso o processo estiver marcado para enviar prosposta de crédito

    })
})

