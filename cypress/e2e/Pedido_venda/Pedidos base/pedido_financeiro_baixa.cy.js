//Importando funções 
import { detalhevenda, detalhevendaclicar, titulopagina, saldodisponivel } from '../../../support/uiUtils';

describe('Gerar pedido com financeiro na baixa', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
    })
  
    context('Sem entrega', () => {

        it.skip('Gerar pedido com financeiro na baixa, processo 9863; um produto, produto 1860 0 0 - caminho feliz', () => {

            cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
    
            //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
            titulopagina()
            
            cy.wait(800);
    
            //clicar para aparecer as opções de processo
            cy.get('#select_value_label_4 > .md-select-icon')
                .click()
    
            cy.wait(800)
            
            //rolar para o meio das opções de processo
            cy.get('#select_listbox_12')
                .scrollTo('bottom')
    
            cy.wait(800)
    
            //selecionar processo de venda "9863"
            cy.get('#select_option_62 > .md-text')
                .click({force: true})
    
            cy.wait(800)
    
            //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
            cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
                .wait(1300)
                .type('48976249089 {downArrow}') //Inserindo CPF no campo "INFORME O CLIENTE"
            
            cy.wait(800)
            
            //clicar na lupa de pesquisa de clientes
            cy.get('.md-block > .ng-binding')
                .should('exist') //Validando se a lupa existe
                .and('be.visible')//Validando se a lupa está visível
                .click()
    
            cy.wait(2000)
            
            //após a pesquisa encontrar o cliente, vamos selecionar ele
            cy.get('.md-3-line > div.md-button > .md-no-style')
                .should('exist') //Validando se o cliente existe
                .and('be.visible')//Validando se o cliente está visível
                .click()
    
            cy.wait(4000)
    
            //Campo "Buscar produtos"
            cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos
    
            cy.get('#searchText')
                .should('have.value', '') //Validando se o campo foi realmente limpo
                .wait(1300)
                .type('1860')
           
            cy.wait(2500)
    
            //Preenchendo campo para pesquisar produto
            cy.contains('Cod: 1860')
    
            cy.wait(100)
    
            //Validando informações do produto após pesquisar
            saldodisponivel()
    
            //clicar para selecionar o produto; 
            cy.contains('Cod: 1860')
                .click({ force: true })
    
            cy.wait(1300)
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM

    
            cy.wait(800)
                      
            //Selecionar a voltagem do produto
            cy.get('.padding-5 > :nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style')
                .click({ force: true })
            
            cy.wait(800)
    
            //clicar no botão "ADICIONAR", para adicionar produto
            cy.get('[style="padding: 0px 5px;"] > .md-primary')
                .click()
    
            cy.wait(2500)
    
            //Desmarcar garantia - card "Serviços Vinculados"
            cy.get('#checkbox-141-2 > .md-container')
                .click()
    
            cy.wait(800)
    
            //Desmarcar Mão de Obra - card "Serviços Vinculados"
            cy.get('#checkbox-144-2 > .md-container')
                .click()
    
            cy.wait(400)
    
            //Botão "OK" - Serviços Vinculados
            cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar
    
            cy.wait(1300)
    
            //Botão de arrastar Retirada / Entrega
            cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
                .click() //Clicar para tirar a entrega do pedido
    
            cy.wait(800)
    
            //Botão de arrastar Montagem
            cy.get('[ng-show="itemAtual._permiteMontagem"] > .md-auto-horizontal-margin > .md-label')
                .click() //Clicar para tirar a montagem
    
            cy.wait(400)
    
            //rolagem para baixo
            cy.get('.containerSabium')
                .scrollTo("center")
    
            cy.wait(400)
    
            //Botão "AVANÇAR"
            cy.get('.flex-gt-sm-50 > .md-primary')
                .click() //Clicar para avançar para a próxima tela
    
            // tela de GERAR PARCELAS
    
            cy.wait(6500)
    
            //Título "Formas de pagamento na Entrada"
            cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                .scrollIntoView()
    
            cy.wait(400)
    
            //Botão "GERAR PARCELAS"
            cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
                .click({force:true})
    
            cy.wait(7000)
    
            //Selecionando forma de pagamento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
                .click()
    
            //Selecionando parcela na forma de pagamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
                .click()
    
            cy.wait(800)
    
            //Botão "AVANÇAR"
            cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
                .click()
    
            cy.wait(5000)
    
            // RESUMO DO PEDIDO - ANTES DE FINALIZAR
    
    
            //Botão "FINALIZAR PEDIDO"
            cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
                .click()
    
            //Carregando a finalização do pedido
            cy.wait(10000)
    
            //Validar mensagem "Pedido gravado com sucesso!"
            cy.get('[ng-show="!editarPedido"]')
                .should('exist')
                .and('be.visible')
                .and('contain.text','Pedido gravado com sucesso!')
        })
    })
    
    context('Com entrega', () => {

        it.skip('Gerar pedido com financeiro na baixa, processo 9863; um produto, produto 1860 0 0 - caminho feliz', () => {

            cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
    
            //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
            titulopagina()
            
            cy.wait(800);
    
            //clicar para aparecer as opções de processo
            cy.get('#select_value_label_4 > .md-select-icon')
                .click()
    
            cy.wait(800)
            
            //rolar para o meio das opções de processo
            cy.get('#select_listbox_12')
                .scrollTo('bottom')
    
            cy.wait(800)
    
            //selecionar processo de venda "9863"
            cy.get('#select_option_62 > .md-text')
                .click({force: true})
    
            cy.wait(800)
    
            //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
            cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
                .wait(1300)
                .type('48976249089 {downArrow}') //Inserindo CPF no campo "INFORME O CLIENTE"
            
            cy.wait(800)
            
            //clicar na lupa de pesquisa de clientes
            cy.get('.md-block > .ng-binding')
                .should('exist') //Validando se a lupa existe
                .and('be.visible')//Validando se a lupa está visível
                .click()
    
            cy.wait(2000)
            
            //após a pesquisa encontrar o cliente, vamos selecionar ele
            cy.get('.md-3-line > div.md-button > .md-no-style')
                .should('exist') //Validando se o cliente existe
                .and('be.visible')//Validando se o cliente está visível
                .click()
    
            cy.wait(4000)
    
            //Campo "Buscar produtos"
            cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos
    
            cy.get('#searchText')
                .should('have.value', '') //Validando se o campo foi realmente limpo
                .wait(1300)
                .type('1860')
           
            cy.wait(2500)
    
            //Preenchendo campo para pesquisar produto
            cy.contains('Cod: 1860')
    
            cy.wait(100)
    
            //Validando informações do produto após pesquisar
            saldodisponivel()
    
            //clicar para selecionar o produto; 
            cy.contains('Cod: 1860')
                .click({ force: true })
    
            cy.wait(1300)
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM

    
            cy.wait(800)
                      
            //Selecionar a voltagem do produto
            cy.get('.padding-5 > :nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style')
                .click({ force: true })
            
            cy.wait(800)
    
            //clicar no botão "ADICIONAR", para adicionar produto
            cy.get('[style="padding: 0px 5px;"] > .md-primary')
                .click()
    
            cy.wait(2500)
    
            //Desmarcar garantia - card "Serviços Vinculados"
            cy.get('#checkbox-141-2 > .md-container')
                .click()
    
            cy.wait(800)
    
            //Desmarcar Mão de Obra - card "Serviços Vinculados"
            cy.get('#checkbox-144-2 > .md-container')
                .click()
    
            cy.wait(400)
    
            //Botão "OK" - Serviços Vinculados
            cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar
    
            cy.wait(1300)
    
            //Botão de arrastar Retirada / Entrega
            //cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
            //    .click() //Clicar para tirar a entrega do pedido
    
            cy.wait(800)
    
            //Botão de arrastar Montagem
            cy.get('[ng-show="itemAtual._permiteMontagem"] > .md-auto-horizontal-margin > .md-label')
                .click() //Clicar para tirar a montagem
    
            cy.wait(400)
    
            //rolagem para baixo
            cy.get('.containerSabium')
                .scrollTo("center")
    
            cy.wait(400)
    
            //Botão "AVANÇAR"
            cy.get('.flex-gt-sm-50 > .md-primary')
                .click() //Clicar para avançar para a próxima tela
    
            // tela para ESCOLHER TRANSPORTADORA


            cy.wait(12000)

            //Lupa de pesquisa de rota - clicar para pesquisar
            cy.get('.rota-frete > .md-icon-right > .ng-binding')
                .scrollIntoView()
                .click()

            cy.wait(400)

            //Pesquisar rota
            cy.get('#txtBuscaRotaModal')
                .type('1')

            cy.wait(400)

            //Clicar na lupa para pesquisar rota depois de preencher campo
            cy.get('#dialogContent_894 > .layout-wrap > .md-icon-float > .ng-binding')
                .click()

            cy.wait(400)

            //Escolher rota após pesquisarmos
            cy.get('v-pane-header.ng-scope > div')
                .click() //clicar na rota 1

            //Escolher rota 2
            cy.get(':nth-child(4) > .padding-10-0')
                .click() //clicar na rota 1

            cy.wait(800)

            //Clicar para avançar para a tela de GERAR PARCELAS
            cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
                .click()

            cy.wait(8000)


            // tela de GERAR PARCELAS


            //Título "Formas de pagamento na Entrada"
            cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                .scrollIntoView()

            cy.wait(400)

            //Botão "GERAR PARCELAS"
            cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
                .click({force:true})

            cy.wait(7000)

            //Selecionando forma de pagamento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
                .click()

            //Selecionando parcela na forma de pagamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
                .click()

            cy.wait(800)

            //Botão "AVANÇAR"
            cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
                .click()

            cy.wait(8000)

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            //Botão "FINALIZAR PEDIDO"
            cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
                .click()

            //Carregando a finalização do pedido
            cy.wait(9000)

            //Validar mensagem "Pedido gravado com sucesso!"
            cy.get('[ng-show="!editarPedido"]')
                .should('exist')
                .and('be.visible')
                .and('contain.text','Pedido gravado com sucesso!')

            //Após gerar pedido

            //Botão "OK"
            //cy.get('md-dialog-actions.layout-align-center-center > .md-primary')
            //    .click()
        })
    })
})