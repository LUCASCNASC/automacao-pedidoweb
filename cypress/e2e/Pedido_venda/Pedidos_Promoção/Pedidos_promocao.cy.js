//Importando funções 
import { detalhevenda, detalhevendaclicar, titulopagina, saldodisponivel } from '../../../support/uiUtils';

describe('Gerar pedidos com promoção', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage(); 
    })
  
    context('Sem entrega', () => {

        it.skip('Usar promoção - Gerar pedido com promoção partida, processo 9860; um produto, produto 1868 0 0 (promoção 152) - caminho feliz', () => {

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
                .scrollTo('center')
    
            cy.wait(800)
    
            //selecionar processo de venda "9860"
            cy.get('#select_option_59 > .md-text')
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
                .type('1868')
           
            cy.wait(2500)
    
            //Preenchendo campo para pesquisar produto
            cy.contains('Cod: 1868')
    
            cy.wait(400)
    
            //Validando informações do produto após pesquisar
            saldodisponivel()
    
            //clicar para selecionar o produto; 
            cy.contains('Cod: 1868')
                .click({ force: true })
    
            cy.wait(1300)
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
    
            cy.wait(800)
                      
            //Selecionar a voltagem do produto
            cy.get('.padding-5 > :nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style')
                .click({ force: true })
    
            //Usar promoção, no card "Promoções"
            cy.get('.md-3-line > div.md-button > .md-no-style')
                .click()
    
            //Escolher uma forma de pagamento, no card de "Formas de pagamento"
            cy.get('#dialogContent_119 > .white > [style=""] > div.md-button > .md-no-style')
                .click()
    
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
    
            // tela de PAGAMENTO
    
            cy.wait(9000)
    
            //Botão "AVANÇAR"
            cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
                .click()
    
            cy.wait(8000)
    
            // RESUMO DO PEDIDO - ANTES DE FINALIZAR
    
            cy.wait(800)
    
            //Botão "FINALIZAR PEDIDO"
            cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
                .click()
    
            //Carregando a finalização do pedido
            cy.wait(7500)
    
             //Validar mensagem "Pedido gravado com sucesso!"
            cy.get('[ng-show="!editarPedido"]')
                .should('exist')
                .and('be.visible')
                .and('contain.text','Pedido gravado com sucesso!')
        })
    
        it.skip('Usar promoção - Gerar pedido com promoção a prazo com entrada, processo 9860; um produto, produto 1866 0 0 (promoção 150) - caminho feliz', () => {
    
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
                .scrollTo('center')
    
            cy.wait(800)
    
            //selecionar processo de venda "9860"
            cy.get('#select_option_59 > .md-text')
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
                .type('1866')
           
            cy.wait(2500)
    
            //Preenchendo campo para pesquisar produto
            cy.contains('Cod: 1866')
    
            cy.wait(400)
    
            //Validando informações do produto após pesquisar
            saldodisponivel()
    
            //clicar para selecionar o produto; 
            cy.contains('Cod: 1866')
                .click({ force: true })
    
            cy.wait(1300)
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
    
            cy.wait(800)
                      
            //Selecionar a voltagem do produto
            cy.get('.padding-5 > :nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style')
                .click({ force: true })
            
            cy.wait(400)
    
            //Clicar na promoção escolhida - Card de promoção
            cy.get('.md-3-line > div.md-button > .md-no-style')
                .click()
    
            //Card de Formas de pagamento - escolher forma de pagamento
            cy.get('#dialogContent_122 > .white > [style=""] > div.md-button > .md-no-style')
                .click()
    
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
    
            cy.wait(8500)
    
            //Abrir opções de processos a receber entrada
            cy.get('#select_215')
                .click
    
            //Escolher processo a receber de entrada
            cy.get('#select_option_227 > .md-text')
                .click({force:true})
    
            //Botão "GERAR PAGAMENTO"
            cy.get('.white > .layout-align-center-center > .md-primary')
                .click()
    
            cy.wait(400)
    
            //Botão "AVANÇAR"
            cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
                .scrollIntoView()
                .click()
    
            cy.wait(6000)
    
            // RESUMO DO PEDIDO - ANTES DE FINALIZAR
            
            //Texto "Consumidor Final"
            cy.get('.md-label')
                .scrollIntoView()
    
            cy.wait(800)
    
            //Cifrão do "Total financeiro"
            cy.get(':nth-child(3) > .md-default-theme > .md-2-line > .md-secondary-container > div > .ng-binding > sup')
                .scrollIntoView()
    
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
    
        it.skip('Usar promoção - Gerar pedido com promoção a prazo parcelado, processo 9860; um produto, produto 1867 0 0 (promoção 151) - caminho feliz', () => {
    
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
                .scrollTo('center')
    
            cy.wait(800)
    
            //selecionar processo de venda "9860"
            cy.get('#select_option_59 > .md-text')
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
                .type('1867')
           
            cy.wait(2500)
    
            //Preenchendo campo para pesquisar produto
            cy.contains('Cod: 1867')
    
            cy.wait(400)
    
            //Validando informações do produto após pesquisar
            saldodisponivel()
    
            //clicar para selecionar o produto; 
            cy.contains('Cod: 1867')
                .click({ force: true })
    
            cy.wait(1300)
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
    
            cy.wait(800)
                      
            //Selecionar a voltagem do produto
            cy.get('.padding-5 > :nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style')
                .click({ force: true })
    
            //Usar promoção, no card "Promoções"
            cy.get('.md-3-line > div.md-button > .md-no-style')
                .click()
    
            //Escolher uma forma de pagamento, no card de "Formas de pagamento"
            cy.get('#dialogContent_119 > .white > [style=""] > div.md-button > .md-no-style')
                .click()
    
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
    
            // tela de PAGAMENTO
    
            cy.wait(800)
    
            //Botão "AVANÇAR"
            cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
                .click()
    
            cy.wait(6000)
    
            // RESUMO DO PEDIDO - ANTES DE FINALIZAR
            
            //Texto "Consumidor Final"
            cy.get('.md-label')
                .scrollIntoView()
    
            cy.wait(800)
    
            //Botão "FINALIZAR PEDIDO"
            cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
                .click()
    
            //Carregando a finalização do pedido
            cy.wait(7500)
    
            //Validar mensagem "Pedido gravado com sucesso!"
            cy.get('[ng-show="!editarPedido"]')
                .should('exist')
                .and('be.visible')
                .and('contain.text','Pedido gravado com sucesso!')
        })

        it.skip('Usar promoção - Gerar pedido com promoção partida, processo 9860; produtos 1868 0 0 (promoção 152) e 1870 0 0 - caminho feliz', () => {

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
                .scrollTo('center')
    
            cy.wait(800)
    
            //selecionar processo de venda "9860"
            cy.get('#select_option_59 > .md-text')
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
                .type('1868')
           
            cy.wait(2500)
    
            //Preenchendo campo para pesquisar produto
            cy.contains('Cod: 1868')
    
            cy.wait(400)
    
            //Validando informações do produto após pesquisar
            saldodisponivel()
    
            //clicar para selecionar o produto; 
            cy.contains('Cod: 1868')
                .click({ force: true })
    
            cy.wait(1300)
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
    
            cy.wait(800)
                      
            //Selecionar a voltagem do produto
            cy.get('.padding-5 > :nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style')
                .click({ force: true })
    
            //Usar promoção, no card "Promoções"
            cy.get('.md-3-line > div.md-button > .md-no-style')
                .click()
    
            //Escolher uma forma de pagamento, no card de "Formas de pagamento"
            cy.get('#dialogContent_119 > .white > [style=""] > div.md-button > .md-no-style')
                .click()
    
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

            cy.wait(800)
    
            //Buscar segundo produto
            cy.get('#searchText')
                .clear()
                .type('1870')
    
            //Validando informações do segundo produto após pesquisar
            saldodisponivel()
    
            //clicar para selecionar o segundo produto; 
            cy.contains('Cod: 1870')
                .click({ force: true })
    
            cy.wait(800)
    
            //Escolhendo voltagem do segundo produto
            cy.get(':nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style')
                .click()
    
            //clicar no botão "ADICIONAR", para adicionar o segundo produto
            cy.get('[style="padding: 0px 5px;"] > .md-primary')
                .click()
    
            cy.wait(1300)
    
            //Desmarcar garantia - card "Serviços Vinculados" - segundo produto
            cy.get('#checkbox-141-2 > .md-container')
                .click()
    
            cy.wait(800)
    
            //Desmarcar Mão de Obra - card "Serviços Vinculados" - segundo produto
            cy.get('#checkbox-144-2 > .md-container')
                .click()
    
            cy.wait(400)
    
            //Botão "OK" - Serviços Vinculados - segundo produto
            cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar
    
            cy.wait(1300)
    
            //Botão de arrastar Retirada / Entrega
            cy.get(':nth-child(3) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
                .click({force:true}) //Clicar para tirar a entrega do pedido
    
            cy.wait(800)
    
            //Botão de arrastar Montagem
            cy.get(':nth-child(3) > .md-whiteframe-2dp > :nth-child(3) > .produto-nome > .valor > .md-auto-horizontal-margin > .md-label')
                .click({force:true}) //Clicar para tirar a montagem
    
            //rolagem para baixo
            cy.get('.containerSabium')
                .scrollTo("center")
    
            cy.wait(400)
    
            //Botão "AVANÇAR"
            cy.get('.flex-gt-sm-50 > .md-primary')
                .click() //Clicar para avançar para a próxima tela
    
            cy.wait(14000)


            //Tela de PARCELAS

            //Clicar em GERAR PARCELAS
            cy.get('.layout-wrap > [style="padding: 0 5px"] > .md-primary')
                .click({force:true})
            
            cy.wait(6500)

            //Escolher forma de pagemento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
                .click()

            cy.wait(400)

            //Escolher parcelamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
                .click()

            cy.wait(400)

            //Avançar para finalizar o pedido
            cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
                .click({force:true})

            cy.wait(9000)
            
            //Clicar para finalizar o pedido
            cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
                .click()

            cy.wait(10000)
    
            //Validar mensagem "Pedido gravado com sucesso!"
            cy.get('[ng-show="!editarPedido"]')
                .should('exist')
                .and('be.visible')
                .and('contain.text','Pedido gravado com sucesso!')
        })
    })

    context('Com entrega', () => {

        it.skip('Usar promoção - Gerar pedido com promoção partida, processo 9860; um produto, produto 1868 0 0 (promoção 152) - caminho feliz', () => {

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
                .scrollTo('center')
    
            cy.wait(800)
    
            //selecionar processo de venda "9860"
            cy.get('#select_option_59 > .md-text')
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
                .type('1868')
           
            cy.wait(2500)
    
            //Preenchendo campo para pesquisar produto
            cy.contains('Cod: 1868')
    
            cy.wait(400)
    
            //Validando informações do produto após pesquisar
            saldodisponivel()
    
            //clicar para selecionar o produto; 
            cy.contains('Cod: 1868')
                .click({ force: true })
    
            cy.wait(1300)
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
    
            cy.wait(800)
                      
            //Selecionar a voltagem do produto
            cy.get('.padding-5 > :nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style')
                .click({ force: true })
    
            //Usar promoção, no card "Promoções"
            cy.get('.md-3-line > div.md-button > .md-no-style')
                .click()
    
            //Escolher uma forma de pagamento, no card de "Formas de pagamento"
            cy.get('#dialogContent_119 > .white > [style=""] > div.md-button > .md-no-style')
                .click()
    
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
    
            cy.wait(12000)


            // tela para ESCOLHER TRANSPORTADORA


            //Card de inconsistencias - fechar
            cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button')
                .click()

            //Campo Transportadora - clicar para abrir as opções
            cy.get('#input-195')
                .click({force:true})

            cy.wait(800)

            //Selecionar a transportadora que queremos
            cy.get('#md-option-195-0')
                .click({force:true})
    
            //Lupa de pesquisa de rota - clicar para pesquisar
            cy.get('.rota-frete > .md-icon-right > .ng-binding')
                .scrollIntoView()
                .click()

            cy.wait(400)

            //Pesquisar rota
            cy.get('#txtBuscaRotaModal')
                .type('1')

            //Clicar na lupa para pesquisar rota depois de preencher campo
            cy.get('#dialogContent_901 > .layout-wrap > .md-icon-float > .ng-binding')
                .click()

            cy.wait(400)

            //Escolher rota após pesquisarmos
            cy.get('v-pane-header.ng-scope > div')
                .click() //clicar na rota 1

            cy.wait(400)

            //Escolher rota 2
            cy.get(':nth-child(4) > .padding-10-0')
                .click() //clicar na rota 1

            cy.wait(800)

            //Clicar para avançar para a tela de GERAR PARCELAS
            cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
                .click()
    
            cy.wait(13000)
    
            //Clicar no "GERAR PARCELAS"
            cy.get('.layout-wrap > [style="padding: 0 5px"] > .md-primary')
                .click({force:true})

            cy.wait(7500)

            //Escolher "Forma de pagamento"
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
                .click()

            cy.wait(800)

            //Escolher parcelamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
                .click()

            cy.wait(800)

            //Clicar para avançar para a tela de finalizar pedido
            cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
                .click()
            
            cy.wait(9000)

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR
    
    
            //Botão "FINALIZAR PEDIDO"
            cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
                .click({force:true})
    
            //Carregando a finalização do pedido
            cy.wait(9000)
    
            //Validar mensagem "Pedido gravado com sucesso!"
            cy.get('[ng-show="!editarPedido"]')
               .should('exist')
                .and('be.visible')
                .and('contain.text','Pedido gravado com sucesso!')
        })
    
        it.skip('Usar promoção - Gerar pedido com promoção a prazo com entrada, processo 9860; um produto, produto 1866 0 0 (promoção 150) - caminho feliz', () => {
    
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
                .scrollTo('center')
    
            cy.wait(800)
    
            //selecionar processo de venda "9860"
            cy.get('#select_option_59 > .md-text')
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
                .type('1866')
           
            cy.wait(2500)
    
            //Preenchendo campo para pesquisar produto
            cy.contains('Cod: 1866')
    
            cy.wait(400)
    
            //Validando informações do produto após pesquisar
            saldodisponivel()
    
            //clicar para selecionar o produto; 
            cy.contains('Cod: 1866')
                .click({ force: true })
    
            cy.wait(1300)
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
    
            cy.wait(800)
                      
            //Selecionar a voltagem do produto
            cy.get('.padding-5 > :nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style')
                .click({ force: true })
            
            cy.wait(400)
    
            //Clicar na promoção escolhida - Card de promoção
            cy.get('.md-3-line > div.md-button > .md-no-style')
                .click()
    
            //Card de Formas de pagamento - escolher forma de pagamento
            cy.get('#dialogContent_122 > .white > [style=""] > div.md-button > .md-no-style')
                .click()
    
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
    
            cy.wait(14000)

            // tela para ESCOLHER TRANSPORTADORA


            //Card de inconsistencias - fechar
            cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button')
                .click()

            //Campo Transportadora - clicar para abrir as opções
            cy.get('#input-198')
                .click({force:true})

            cy.wait(800)

            //Selecionar a transportadora que queremos
            cy.get('#md-option-198-0')
                .click({force:true})
    
            //Lupa de pesquisa de rota - clicar para pesquisar
            cy.get('.rota-frete > .md-icon-right > .ng-binding')
                .scrollIntoView()
                .click()

            cy.wait(400)

            //Pesquisar rota
            cy.get('#txtBuscaRotaModal')
                .type('1')

            //Clicar na lupa para pesquisar rota depois de preencher campo
            cy.get('#dialogContent_904 > .layout-wrap > .md-icon-float > .ng-binding')
                .click()

            cy.wait(400)

            //Escolher rota após pesquisarmos
            cy.get('v-pane-header.ng-scope > div')
                .click() //clicar na rota 1

            cy.wait(400)

            //Escolher rota 2
            cy.get(':nth-child(4) > .padding-10-0')
                .click() //clicar na rota 1

            cy.wait(800)

            //Clicar para avançar para a tela de GERAR PARCELAS
            cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
                .click()

            cy.wait(13000)

            // tela de GERAR PARCELAS


            //Escolher forma de pagamento na entrada
            cy.get('#select_929')
                .click({force:true})

            //Escolher o processo para a forma de pagamento de entrada
            cy.get('#select_option_941')
                .click()

            cy.wait(400)

            //Botão GERAR PAGAMENTO
            cy.get('.white > .layout-align-center-center > .md-primary')
                .click({force:true})


            //Clicar no "GERAR PARCELAS"
            cy.get('.layout-wrap > [style="padding: 0 5px"] > .md-primary')
                .click({force:true})

            cy.wait(7500)

            //Escolher "Forma de pagamento"
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
                .click()

            cy.wait(800)

            //Escolher parcelamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
                .click()

            cy.wait(800)

            //Clicar para avançar para a tela de finalizar pedido
            cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
                .click()
            
            cy.wait(9000)

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR
    
    
            //Botão "FINALIZAR PEDIDO"
            cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
                .click({force:true})
    
            //Carregando a finalização do pedido
            cy.wait(9000)
    
            //Validar mensagem "Pedido gravado com sucesso!"
            cy.get('[ng-show="!editarPedido"]')
               .should('exist')
                .and('be.visible')
                .and('contain.text','Pedido gravado com sucesso!')
        })

        it.skip('Usar promoção - Gerar pedido com promoção a prazo parcelado, processo 9860; um produto, produto 1867 0 0 (promoção 151) - caminho feliz', () => {
    
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
                .scrollTo('center')
    
            cy.wait(800)
    
            //selecionar processo de venda "9860"
            cy.get('#select_option_59 > .md-text')
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
                .type('1867')
           
            cy.wait(2500)
    
            //Preenchendo campo para pesquisar produto
            cy.contains('Cod: 1867')
    
            cy.wait(400)
    
            //Validando informações do produto após pesquisar
            saldodisponivel()
    
            //clicar para selecionar o produto; 
            cy.contains('Cod: 1867')
                .click({ force: true })
    
            cy.wait(1300)
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
    
            cy.wait(800)
                      
            //Selecionar a voltagem do produto
            cy.get('.padding-5 > :nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style')
                .click({ force: true })
    
            //Usar promoção, no card "Promoções"
            cy.get('.md-3-line > div.md-button > .md-no-style')
                .click()
    
            //Escolher uma forma de pagamento, no card de "Formas de pagamento"
            cy.get('#dialogContent_119 > .white > [style=""] > div.md-button > .md-no-style')
                .click()
    
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
    
            cy.wait(14000)


            // tela para ESCOLHER TRANSPORTADORA

            //Card de inconsistencias - fechar
            cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button')
                .click()

            //Campo Transportadora - clicar para abrir as opções
            cy.get('#input-195')
                .click({force:true})

            cy.wait(800)

            //Selecionar a transportadora que queremos
            cy.get('#md-option-195-0')
                .click({force:true})
    
            //Lupa de pesquisa de rota - clicar para pesquisar
            cy.get('.rota-frete > .md-icon-right > .ng-binding')
                .scrollIntoView()
                .click()

            cy.wait(400)

            //Pesquisar rota
            cy.get('#txtBuscaRotaModal')
                .type('1')

            //Clicar na lupa para pesquisar rota depois de preencher campo
            cy.get('#dialogContent_901 > .layout-wrap > .md-icon-float > .ng-binding')
                .click()

            cy.wait(400)

            //Escolher rota após pesquisarmos
            cy.get('v-pane-header.ng-scope > div')
                .click() //clicar na rota 1

            cy.wait(400)

            //Escolher rota 2
            cy.get(':nth-child(4) > .padding-10-0')
                .click() //clicar na rota 1

            cy.wait(800)

            //Clicar para avançar para a tela de GERAR PARCELAS
            cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
                .click()

            cy.wait(13000)


            // tela de GERAR PARCELAS


            //Clicar no botão GERAR PARCELAS
            cy.get('.layout-wrap > [style="padding: 0 5px"] > .md-primary')
                .click({force:true})

            cy.wait(8000)

            //Escolher a forma de pagamento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
                .click()

            cy.wait(800)

            //Escolher a forma de pagamento/parcelas
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
                .click()

            //Clicar no botão AVANÇAR, para ir para a última tela, para finalizar
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
        })

        it.skip('Usar promoção - Gerar pedido com promoção partida, processo 9860; produtos 1868 0 0 (promoção 152) e 1870 0 0 - caminho feliz', () => {

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
                .scrollTo('center')
    
            cy.wait(800)
    
            //selecionar processo de venda "9860"
            cy.get('#select_option_59 > .md-text')
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
                .type('1868')
           
            cy.wait(2500)
    
            //Preenchendo campo para pesquisar produto
            cy.contains('Cod: 1868')
    
            cy.wait(400)
    
            //Validando informações do produto após pesquisar
            saldodisponivel()
    
            //clicar para selecionar o produto; 
            cy.contains('Cod: 1868')
                .click({ force: true })
    
            cy.wait(1300)
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
    
            cy.wait(800)
                      
            //Selecionar a voltagem do produto
            cy.get('.padding-5 > :nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style')
                .click({ force: true })
    
            //Usar promoção, no card "Promoções"
            cy.get('.md-3-line > div.md-button > .md-no-style')
                .click()
    
            //Escolher uma forma de pagamento, no card de "Formas de pagamento"
            cy.get('#dialogContent_119 > .white > [style=""] > div.md-button > .md-no-style')
                .click()
    
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
    
            //Botão de arrastar Retirada / Entrega
            //cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
            //    .click() //Clicar para tirar a entrega do pedido
    
            cy.wait(800)
    
            //Botão de arrastar Montagem
            cy.get('[ng-show="itemAtual._permiteMontagem"] > .md-auto-horizontal-margin > .md-label')
                .click() //Clicar para tirar a montagem

            cy.wait(800)
    
            //Buscar segundo produto
            cy.get('#searchText')
                .clear()
                .type('1870')
    
            //Validando informações do segundo produto após pesquisar
            saldodisponivel()
    
            //clicar para selecionar o segundo produto; 
            cy.contains('Cod: 1870')
                .click({ force: true })
    
            cy.wait(800)
    
            //Escolhendo voltagem do segundo produto
            cy.get(':nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style')
                .click()
    
            //clicar no botão "ADICIONAR", para adicionar o segundo produto
            cy.get('[style="padding: 0px 5px;"] > .md-primary')
                .click()
    
            cy.wait(1300)
    
            //Desmarcar garantia - card "Serviços Vinculados" - segundo produto
            cy.get('#checkbox-141-2 > .md-container')
                .click()
    
            cy.wait(800)
    
            //Desmarcar Mão de Obra - card "Serviços Vinculados" - segundo produto
            cy.get('#checkbox-144-2 > .md-container')
                .click()
    
            cy.wait(400)
    
            //Botão "OK" - Serviços Vinculados - segundo produto
            cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar
    
            //Botão de arrastar Retirada / Entrega
            //cy.get(':nth-child(3) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
            //    .click({force:true}) //Clicar para tirar a entrega do pedido
    
            cy.wait(800)
    
            //Botão de arrastar Montagem
            cy.get(':nth-child(3) > .md-whiteframe-2dp > :nth-child(3) > .produto-nome > .valor > .md-auto-horizontal-margin > .md-label')
                .click({force:true}) //Clicar para tirar a montagem
    
            //rolagem para baixo
            cy.get('.containerSabium')
                .scrollTo("center")
    
            cy.wait(400)
    
            //Botão "AVANÇAR"
            cy.get('.flex-gt-sm-50 > .md-primary')
                .click() //Clicar para avançar para a próxima tela
    
            cy.wait(14000)


            // tela para ESCOLHER TRANSPORTADORA

            //Card de inconsistencias - fechar
            cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button')
                .click()

            //Campo Transportadora - clicar para abrir as opções
            cy.get('#input-349')
                .click({force:true})

            cy.wait(800)

            //Selecionar a transportadora que queremos
            cy.get('#md-option-349-0')
                .click({force:true})
    
            //Lupa de pesquisa de rota - clicar para pesquisar
            cy.get('.rota-frete > .md-icon-right > .ng-binding')
                .scrollIntoView()
                .click()

            cy.wait(400)

            //Pesquisar rota
            cy.get('#txtBuscaRotaModal')
                .type('1')

            //Clicar na lupa para pesquisar rota depois de preencher campo
            cy.get('#dialogContent_1055 > .layout-wrap > .md-icon-float > .ng-binding')
                .click()

            cy.wait(400)

            //Escolher rota após pesquisarmos
            cy.get('v-pane-header.ng-scope > div')
                .click() //clicar na rota 1

            cy.wait(400)

            //Escolher rota 2
            cy.get(':nth-child(4) > .padding-10-0')
                .click() //clicar na rota 1

            cy.wait(800)

            //Clicar para avançar para a tela de GERAR PARCELAS
            cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
                .click()

            cy.wait(13000)


            //Tela de PARCELAS

            //Clicar em GERAR PARCELAS
            cy.get('.layout-wrap > [style="padding: 0 5px"] > .md-primary')
                .click({force:true})
            
            cy.wait(6500)

            //Escolher forma de pagemento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
                .click()

            cy.wait(400)

            //Escolher parcelamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
                .click()

            cy.wait(400)

            //Avançar para finalizar o pedido
            cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
                .click({force:true})

            cy.wait(9000)
            
            //Clicar para finalizar o pedido
            cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
                .click()

            cy.wait(10000)
    
            //Validar mensagem "Pedido gravado com sucesso!"
            cy.get('[ng-show="!editarPedido"]')
                .should('exist')
                .and('be.visible')
                .and('contain.text','Pedido gravado com sucesso!')
        })
    }) 
})