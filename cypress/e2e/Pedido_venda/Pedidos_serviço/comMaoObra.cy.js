//Importando funções 
import { titulopagina, saldodisponivel, escolherTransportadora, escolherRota, escolherClientePedido } from '../../../support/uiUtils';

describe('Gerar pedidos com Mão de obra', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
    })
  
    context('Sem entrega/processo 9860 - caminho feliz', () => {

        it('Pedido de venda: produto 1860 0 0 (com Mão de Obra que Destaca e Não separa título', () => {

            cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
    
            //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
            titulopagina()
    
            cy.wait(800)
    
            //clicar para aparecer as opções de processo
            cy.get('#select_value_label_4 > .md-select-icon')
                .click()
    
            cy.wait(800)
            
            //rolar para o meio das opções de processo
            cy.get('#select_listbox_12')
                .scrollTo('center')
    
            cy.wait(800)
    
            //selecionar processo de venda "9860"
            cy.get('#select_option_60 > .md-text')
                .click({force: true})
    
            cy.wait(800)
    
            //Função para escolher cliente para pedido
            escolherClientePedido()
    
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
    
            cy.wait(400)
    
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
    
            //Desmarcar garantia que já veio automaticamente
            cy.get('#checkbox-141-2 > .md-container')
                .click()
    
            cy.wait(800)
    
            //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            cy.get('#checkbox-142-0 > .md-container')
                .click()
    
            cy.wait(400)
    
            //Botão "OK" - Serviços Vinculados
            cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar
    
            cy.wait(1300)
    
            //Botão de arrastar Retirada / Entrega
            cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
                .click({force:true}) //Clicar para tirar a entrega do pedido
    
            cy.wait(800)
    
            //Botão de arrastar Montagem
            cy.get('[ng-show="itemAtual._permiteMontagem"] > .md-auto-horizontal-margin > .md-label')
                .click({force:true}) //Clicar para tirar a montagem
    
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
    
            //Título "Formas de pagamento na Entrada"
            cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                .scrollIntoView()
    
            cy.wait(400)
    
            //Botão "GERAR PARCELAS"
            cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
                .click({force:true})
    
            cy.wait(7500)
    
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
    
            cy.wait(6000)
    
            // RESUMO DO PEDIDO - ANTES DE FINALIZAR
    
            //Botão "FINALIZAR PEDIDO"
            cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
                .click()
    
            //Carregando a finalização do pedido
            cy.wait(8000)
    
             //Validar mensagem "Pedido gravado com sucesso!"
            cy.get('[ng-show="!editarPedido"]')
                .should('exist')
                .and('be.visible')
                .and('contain.text','Pedido gravado com sucesso!')
        })

        it('Pedido de venda: produto 1860 0 0 (com Mão de Obra que Destaca e Não separa título) e produto 1870 0 0 (sem serviço)', () => {

            cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
    
            //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
            titulopagina()
    
            cy.wait(800)
    
            //clicar para aparecer as opções de processo
            cy.get('#select_value_label_4 > .md-select-icon')
                .click()
    
            cy.wait(800)
            
            //rolar para o meio das opções de processo
            cy.get('#select_listbox_12')
                .scrollTo('center')
    
            cy.wait(800)
    
            //selecionar processo de venda "9860"
            cy.get('#select_option_60 > .md-text')
                .click({force: true})
    
            cy.wait(800)
    
            //Função para escolher cliente para pedido
            escolherClientePedido()
    
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
    
            cy.wait(400)
    
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
    
            //Desmarcar garantia que já veio automaticamente
            cy.get('#checkbox-141-2 > .md-container')
                .click()
    
            cy.wait(800)
    
            //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            cy.get('#checkbox-142-0 > .md-container')
                .click()
    
            cy.wait(400)
    
            //Botão "OK" - Serviços Vinculados
            cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar
    
            cy.wait(1300)
    
            //Botão de arrastar Retirada / Entrega
            cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
                .click({force:true}) //Clicar para tirar a entrega do pedido
    
            cy.wait(800)
    
            //Botão de arrastar Montagem
            cy.get('[ng-show="itemAtual._permiteMontagem"] > .md-auto-horizontal-margin > .md-label')
                .click({force:true}) //Clicar para tirar a montagem
    
            cy.wait(400)

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
    
            //Título "Formas de pagamento na Entrada"
            cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                .scrollIntoView()
    
            cy.wait(400)
    
            //Botão "GERAR PARCELAS"
            cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
                .click({force:true})
    
            cy.wait(7500)
    
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
    
            cy.wait(6000)
    
            // RESUMO DO PEDIDO - ANTES DE FINALIZAR
    
            //Botão "FINALIZAR PEDIDO"
            cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
                .click()
    
            //Carregando a finalização do pedido
            cy.wait(8000)
    
             //Validar mensagem "Pedido gravado com sucesso!"
            cy.get('[ng-show="!editarPedido"]')
                .should('exist')
                .and('be.visible')
                .and('contain.text','Pedido gravado com sucesso!')
        })
    
        it('Pedido de venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título no Mesmo processo)', () => {
    
            cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
    
            //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
            titulopagina()
            
            cy.wait(800)
    
            //clicar para aparecer as opções de processo
            cy.get('#select_value_label_4 > .md-select-icon')
                .click()
    
            cy.wait(800)
            
            //rolar para o meio das opções de processo
            cy.get('#select_listbox_12')
                .scrollTo('center')
    
            cy.wait(800)
    
            //selecionar processo de venda "9860"
            cy.get('#select_option_60 > .md-text')
                .click({force: true})
    
            cy.wait(800)
    
            //Função para escolher cliente para pedido
            escolherClientePedido()
    
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
    
            cy.wait(400)
    
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
    
            //Desmarcar garantia que já veio automaticamente
            cy.get('#checkbox-141-2 > .md-container')
                .click()
    
            cy.wait(800)
    
            //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            cy.get('#checkbox-143-1 > .md-container')
                .click()
    
            cy.wait(400)
    
            //Botão "OK" - Serviços Vinculados
            cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar
    
            cy.wait(1300)
    
            //Botão de arrastar Retirada / Entrega
            cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
                .click({force:true}) //Clicar para tirar a entrega do pedido
    
            cy.wait(800)
    
            //Botão de arrastar Montagem
            cy.get('[ng-show="itemAtual._permiteMontagem"] > .md-auto-horizontal-margin > .md-label')
                .click({force:true}) //Clicar para tirar a montagem
    
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
    
            //Título "Formas de pagamento na Entrada"
            cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                .scrollIntoView()
    
            cy.wait(400)
    
            //Botão "GERAR PARCELAS"
            cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
                .click({force:true})
    
            cy.wait(7500)
    
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
            cy.wait(8000)
    
             //Validar mensagem "Pedido gravado com sucesso!"
            cy.get('[ng-show="!editarPedido"]')
                .should('exist')
                .and('be.visible')
                .and('contain.text','Pedido gravado com sucesso!')
        })

        it('Pedido de venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título no Mesmo processo) e produto 1870 0 0 (sem serviço)', () => {
    
            cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
    
            //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
            titulopagina()
            
            cy.wait(800)
    
            //clicar para aparecer as opções de processo
            cy.get('#select_value_label_4 > .md-select-icon')
                .click()
    
            cy.wait(800)
            
            //rolar para o meio das opções de processo
            cy.get('#select_listbox_12')
                .scrollTo('center')
    
            cy.wait(800)
    
            //selecionar processo de venda "9860"
            cy.get('#select_option_60 > .md-text')
                .click({force: true})
    
            cy.wait(800)
    
            //Função para escolher cliente para pedido
            escolherClientePedido()
    
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
    
            cy.wait(400)
    
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
    
            //Desmarcar garantia que já veio automaticamente
            cy.get('#checkbox-141-2 > .md-container')
                .click()
    
            cy.wait(800)
    
            //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            cy.get('#checkbox-143-1 > .md-container')
                .click()
    
            cy.wait(400)
    
            //Botão "OK" - Serviços Vinculados
            cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar
    
            cy.wait(1300)
    
            //Botão de arrastar Retirada / Entrega
            cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
                .click({force:true}) //Clicar para tirar a entrega do pedido
    
            cy.wait(800)
    
            //Botão de arrastar Montagem
            cy.get('[ng-show="itemAtual._permiteMontagem"] > .md-auto-horizontal-margin > .md-label')
                .click({force:true}) //Clicar para tirar a montagem
    
            cy.wait(400)

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
    
            //Título "Formas de pagamento na Entrada"
            cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                .scrollIntoView()
    
            cy.wait(400)
    
            //Botão "GERAR PARCELAS"
            cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
                .click({force:true})
    
            cy.wait(7500)
    
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
    
            cy.wait(7500)
    
            // RESUMO DO PEDIDO - ANTES DE FINALIZAR
    
            //Botão "FINALIZAR PEDIDO"
            cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
                .click()
    
            //Carregando a finalização do pedido
            cy.wait(8000)
    
             //Validar mensagem "Pedido gravado com sucesso!"
            cy.get('[ng-show="!editarPedido"]')
                .should('exist')
                .and('be.visible')
                .and('contain.text','Pedido gravado com sucesso!')
        })
    
        it('Pedido de venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título em processo Diferente)', () => {
    
            cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
    
            //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
            titulopagina()
            
            cy.wait(800)
    
            //clicar para aparecer as opções de processo
            cy.get('#select_value_label_4 > .md-select-icon')
                .click()
    
            cy.wait(800)
            
            //rolar para o meio das opções de processo
            cy.get('#select_listbox_12')
                .scrollTo('center')
    
            cy.wait(800)
    
            //selecionar processo de venda "9860"
            cy.get('#select_option_60 > .md-text')
                .click({force: true})
    
            cy.wait(800)
    
            //Função para escolher cliente para pedido
            escolherClientePedido()
    
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
    
            cy.wait(400)
    
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
    
            //Desmarcar garantia que já veio marcada automaticamente
            cy.get('#checkbox-141-2 > .md-container')
                .click()
    
            cy.wait(400)
    
            //Botão "OK" - Serviços Vinculados
            cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar
    
            cy.wait(1300)
    
            //Botão de arrastar Retirada / Entrega
            cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
                .click({force:true}) //Clicar para tirar a entrega do pedido
    
            cy.wait(800)
    
            //Botão de arrastar Montagem
            cy.get('[ng-show="itemAtual._permiteMontagem"] > .md-auto-horizontal-margin > .md-label')
                .click({force:true}) //Clicar para tirar a montagem
    
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
    
            //Título "Formas de pagamento na Entrada"
            cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                .scrollIntoView()
    
            cy.wait(400)
    
            //Botão "GERAR PARCELAS"
            cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
                .click({force:true})
    
            cy.wait(7500)
    
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
    
            cy.wait(6000)
    
            // RESUMO DO PEDIDO - ANTES DE FINALIZAR
    
            //Botão "FINALIZAR PEDIDO"
            cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
                .click()
    
            //Carregando a finalização do pedido
            cy.wait(8000)
    
             //Validar mensagem "Pedido gravado com sucesso!"
            cy.get('[ng-show="!editarPedido"]')
                .should('exist')
                .and('be.visible')
                .and('contain.text','Pedido gravado com sucesso!')
        })

        it('Pedido de venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título em processo Diferente) e produto 1870 0 0 (sem serviço)', () => {
    
            cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
    
            //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
            titulopagina()
            
            cy.wait(800)
    
            //clicar para aparecer as opções de processo
            cy.get('#select_value_label_4 > .md-select-icon')
                .click()
    
            cy.wait(800)
            
            //rolar para o meio das opções de processo
            cy.get('#select_listbox_12')
                .scrollTo('center')
    
            cy.wait(800)
    
            //selecionar processo de venda "9860"
            cy.get('#select_option_60 > .md-text')
                .click({force: true})
    
            cy.wait(800)
    
            //Função para escolher cliente para pedido
            escolherClientePedido()
    
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
    
            cy.wait(400)
    
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
    
            //Desmarcar garantia que já veio marcada automaticamente
            cy.get('#checkbox-141-2 > .md-container')
                .click()
    
            cy.wait(400)
    
            //Botão "OK" - Serviços Vinculados
            cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar
    
            cy.wait(1300)
    
            //Botão de arrastar Retirada / Entrega
            cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
                .click({force:true}) //Clicar para tirar a entrega do pedido
    
            cy.wait(800)
    
            //Botão de arrastar Montagem
            cy.get('[ng-show="itemAtual._permiteMontagem"] > .md-auto-horizontal-margin > .md-label')
                .click({force:true}) //Clicar para tirar a montagem
    
            cy.wait(400)

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
    
            //Título "Formas de pagamento na Entrada"
            cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                .scrollIntoView()
    
            cy.wait(400)
    
            //Botão "GERAR PARCELAS"
            cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
                .click({force:true})
    
            cy.wait(7500)
    
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
    
            cy.wait(6500)
    
            // RESUMO DO PEDIDO - ANTES DE FINALIZAR
    
            //Botão "FINALIZAR PEDIDO"
            cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
                .click()
    
            //Carregando a finalização do pedido
            cy.wait(8000)
    
             //Validar mensagem "Pedido gravado com sucesso!"
            cy.get('[ng-show="!editarPedido"]')
                .should('exist')
                .and('be.visible')
                .and('contain.text','Pedido gravado com sucesso!')
        })
    })

    context('Com entrega/processo 9860 - caminho feliz', () => {

        it('Pedido de venda: produto 1860 0 0 (com Mão de Obra que Destaca e Não separa título)', () => {

            cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
    
            //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
            titulopagina()
    
            cy.wait(800)
    
            //clicar para aparecer as opções de processo
            cy.get('#select_value_label_4 > .md-select-icon')
                .click()
    
            cy.wait(800)
            
            //rolar para o meio das opções de processo
            cy.get('#select_listbox_12')
                .scrollTo('center')
    
            cy.wait(800)
    
            //selecionar processo de venda "9860"
            cy.get('#select_option_60 > .md-text')
                .click({force: true})
    
            cy.wait(800)
    
            //Função para escolher cliente para pedido
            escolherClientePedido()
    
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
    
            cy.wait(400)
    
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
    
            //Desmarcar garantia que já veio automaticamente
            cy.get('#checkbox-141-2 > .md-container')
                .click()
    
            cy.wait(800)
    
            //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            cy.get('#checkbox-142-0 > .md-container')
                .click()
    
            cy.wait(400)
    
            //Botão "OK" - Serviços Vinculados
            cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar
    
            cy.wait(1300)
    
            //Botão de arrastar Retirada / Entrega
            //cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
            //    .click({force:true}) //Clicar para tirar a entrega do pedido
    
            //Botão de arrastar Montagem
            cy.get('[ng-show="itemAtual._permiteMontagem"] > .md-auto-horizontal-margin > .md-label')
                .click({force:true}) //Clicar para tirar a montagem
    
            cy.wait(400)
    
            //rolagem para baixo
            cy.get('.containerSabium')
                .scrollTo("center")
    
            cy.wait(400)
    
            //Botão "AVANÇAR"
            cy.get('.flex-gt-sm-50 > .md-primary')
                .click() //Clicar para avançar para a próxima tela


            // tela para ESCOLHER TRANSPORTADORA

            cy.wait(14000)

            //Card de inconsistencias - fechar
            cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                .click()

            //Campo Transportadora - clicar para abrir as opções
            cy.wait(14000)

            //Card de inconsistencias - fechar
            cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                .click()

            //Função criada para clicar no campo transportadora e escolher a trasportadora
            escolherTransportadora()
    
            escolherRota()
    
            cy.wait(10000)


            // tela de GERAR PARCELAS
    
            //Título "Formas de pagamento na Entrada"
            cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                .scrollIntoView()
    
            cy.wait(400)
    
            //Botão "GERAR PARCELAS"
            cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
                .click({force:true})
    
            cy.wait(7500)
    
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
    
            cy.wait(9000)
    
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
        
        it('Pedido de venda: produto 1860 0 0 (com Mão de Obra que Destaca e Não separa título) e produto 1870 0 0 (sem serviço)', () => {

            cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
    
            //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
            titulopagina()
    
            cy.wait(800)
    
            //clicar para aparecer as opções de processo
            cy.get('#select_value_label_4 > .md-select-icon')
                .click()
    
            cy.wait(800)
            
            //rolar para o meio das opções de processo
            cy.get('#select_listbox_12')
                .scrollTo('center')
    
            cy.wait(800)
    
            //selecionar processo de venda "9860"
            cy.get('#select_option_60 > .md-text')
                .click({force: true})
    
            cy.wait(800)
    
            //Função para escolher cliente para pedido
            escolherClientePedido()
    
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
    
            cy.wait(400)
    
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
    
            //Desmarcar garantia que já veio automaticamente
            cy.get('#checkbox-141-2 > .md-container')
                .click()
    
            cy.wait(800)
    
            //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            cy.get('#checkbox-142-0 > .md-container')
                .click()
    
            cy.wait(400)
    
            //Botão "OK" - Serviços Vinculados
            cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar
    
            cy.wait(1300)
    
            //Botão de arrastar Retirada / Entrega
            //cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
            //    .click({force:true}) //Clicar para tirar a entrega do pedido
    
            //Botão de arrastar Montagem
            cy.get('[ng-show="itemAtual._permiteMontagem"] > .md-auto-horizontal-margin > .md-label')
                .click({force:true}) //Clicar para tirar a montagem
    
            cy.wait(400)

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
    
            cy.wait(400)
    
            //rolagem para baixo
            cy.get('.containerSabium')
                .scrollTo("center")
    
            cy.wait(400)
    
            //Botão "AVANÇAR"
            cy.get('.flex-gt-sm-50 > .md-primary')
                .click() //Clicar para avançar para a próxima tela


            // tela para ESCOLHER TRANSPORTADORA

            cy.wait(14000)

            //Card de inconsistencias - fechar
            cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                .click()

            //Função criada para clicar no campo transportadora e escolher a trasportadora
            escolherTransportadora()
    
            escolherRota()
    
            cy.wait(10000)


            // tela de GERAR PARCELAS
    
            //Título "Formas de pagamento na Entrada"
            cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                .scrollIntoView()
    
            cy.wait(400)
    
            //Botão "GERAR PARCELAS"
            cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
                .click({force:true})
    
            cy.wait(8000)
    
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
    
            cy.wait(9000)
    
            // RESUMO DO PEDIDO - ANTES DE FINALIZAR
    
            //Botão "FINALIZAR PEDIDO"
            cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
                .click()
    
            //Carregando a finalização do pedido
            cy.wait(11000)
    
             //Validar mensagem "Pedido gravado com sucesso!"
            cy.get('[ng-show="!editarPedido"]')
                .should('exist')
                .and('be.visible')
                .and('contain.text','Pedido gravado com sucesso!')
        })

        it('Pedido de venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título no Mesmo processo)', () => {
    
            cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
    
            //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
            titulopagina()
            
            cy.wait(800)
    
            //clicar para aparecer as opções de processo
            cy.get('#select_value_label_4 > .md-select-icon')
                .click()
    
            cy.wait(800)
            
            //rolar para o meio das opções de processo
            cy.get('#select_listbox_12')
                .scrollTo('center')
    
            cy.wait(800)
    
            //selecionar processo de venda "9860"
            cy.get('#select_option_60 > .md-text')
                .click({force: true})
    
            cy.wait(800)
    
            //Função para escolher cliente para pedido
            escolherClientePedido()
    
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
    
            cy.wait(400)
    
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
    
            //Desmarcar garantia que já veio automaticamente
            cy.get('#checkbox-141-2 > .md-container')
                .click()
    
            cy.wait(800)
    
            //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            cy.get('#checkbox-143-1 > .md-container')
                .click()
    
            cy.wait(400)
    
            //Botão "OK" - Serviços Vinculados
            cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar
    
            cy.wait(1300)
    
            //Botão de arrastar Retirada / Entrega
            //cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
            //    .click({force:true}) //Clicar para tirar a entrega do pedido
    
            //Botão de arrastar Montagem
            cy.get('[ng-show="itemAtual._permiteMontagem"] > .md-auto-horizontal-margin > .md-label')
                .click({force:true}) //Clicar para tirar a montagem
    
            cy.wait(400)
    
            //rolagem para baixo
            cy.get('.containerSabium')
                .scrollTo("center")
    
            cy.wait(400)
    
            //Botão "AVANÇAR"
            cy.get('.flex-gt-sm-50 > .md-primary')
                .click() //Clicar para avançar para a próxima tela


            // tela para ESCOLHER TRANSPORTADORA

            cy.wait(14000)

            cy.wait(14000)

            //Card de inconsistencias - fechar
            cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                .click()

            //Função criada para clicar no campo transportadora e escolher a trasportadora
            escolherTransportadora()
    
            escolherRota()
    
            cy.wait(10000)

    
            // tela de GERAR PARCELAS
    
            cy.wait(2500)
    
            //Título "Formas de pagamento na Entrada"
            cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                .scrollIntoView()
    
            cy.wait(400)
    
            //Botão "GERAR PARCELAS"
            cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
                .click({force:true})
    
            cy.wait(9000)
    
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
    
            cy.wait(9000)
    
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

        it('Pedido de venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título no Mesmo processo) e produto 1870 0 0 (sem serviço)', () => {
    
            cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
    
            //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
            titulopagina()
            
            cy.wait(800)
    
            //clicar para aparecer as opções de processo
            cy.get('#select_value_label_4 > .md-select-icon')
                .click()
    
            cy.wait(800)
            
            //rolar para o meio das opções de processo
            cy.get('#select_listbox_12')
                .scrollTo('center')
    
            cy.wait(800)
    
            //selecionar processo de venda "9860"
            cy.get('#select_option_60 > .md-text')
                .click({force: true})
    
            cy.wait(800)
    
            //Função para escolher cliente para pedido
            escolherClientePedido()
    
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
    
            cy.wait(400)
    
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
    
            //Desmarcar garantia que já veio automaticamente
            cy.get('#checkbox-141-2 > .md-container')
                .click()
    
            cy.wait(800)
    
            //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            cy.get('#checkbox-143-1 > .md-container')
                .click()
    
            cy.wait(400)
    
            //Botão "OK" - Serviços Vinculados
            cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar
    
            //Botão de arrastar Retirada / Entrega
            //cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
            //    .click({force:true}) //Clicar para tirar a entrega do pedido
    
            cy.wait(800)
    
            //Botão de arrastar Montagem
            cy.get('[ng-show="itemAtual._permiteMontagem"] > .md-auto-horizontal-margin > .md-label')
                .click({force:true}) //Clicar para tirar a montagem
    
            cy.wait(400)

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
    
            cy.wait(400)
    
            //rolagem para baixo
            cy.get('.containerSabium')
                .scrollTo("center")
    
            cy.wait(400)
    
            //Botão "AVANÇAR"
            cy.get('.flex-gt-sm-50 > .md-primary')
                .click() //Clicar para avançar para a próxima tela

            
            // tela para ESCOLHER TRANSPORTADORA

            cy.wait(14000)

            //Card de inconsistencias - fechar
            cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                .click()

            //Função criada para clicar no campo transportadora e escolher a trasportadora
            escolherTransportadora()
    
            escolherRota()
    
            cy.wait(10000)

            
    
            // tela de GERAR PARCELAS
    
    
            //Título "Formas de pagamento na Entrada"
            cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                .scrollIntoView()
    
            cy.wait(400)
    
            //Botão "GERAR PARCELAS"
            cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
                .click({force:true})
    
            cy.wait(7500)
    
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
    
            cy.wait(8500)
    
            // RESUMO DO PEDIDO - ANTES DE FINALIZAR
    
            //Botão "FINALIZAR PEDIDO"
            cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
                .click()
    
            //Carregando a finalização do pedido
            cy.wait(11000)
    
             //Validar mensagem "Pedido gravado com sucesso!"
            cy.get('[ng-show="!editarPedido"]')
                .should('exist')
                .and('be.visible')
                .and('contain.text','Pedido gravado com sucesso!')
        })

        it('Pedido de venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título em processo Diferente)', () => {
    
            cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
    
            //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
            titulopagina()
            
            cy.wait(800)
    
            //clicar para aparecer as opções de processo
            cy.get('#select_value_label_4 > .md-select-icon')
                .click()
    
            cy.wait(800)
            
            //rolar para o meio das opções de processo
            cy.get('#select_listbox_12')
                .scrollTo('center')
    
            cy.wait(800)
    
            //selecionar processo de venda "9860"
            cy.get('#select_option_60 > .md-text')
                .click({force: true})
    
            cy.wait(800)
    
            //Função para escolher cliente para pedido
            escolherClientePedido()
    
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
    
            cy.wait(400)
    
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
    
            //Desmarcar garantia que já veio marcada automaticamente
            cy.get('#checkbox-141-2 > .md-container')
                .click()
    
            cy.wait(400)
    
            //Botão "OK" - Serviços Vinculados
            cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar
    
            cy.wait(1300)
    
            //Botão de arrastar Retirada / Entrega
            //cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
            //    .click({force:true}) //Clicar para tirar a entrega do pedido
    
            //Botão de arrastar Montagem
            cy.get('[ng-show="itemAtual._permiteMontagem"] > .md-auto-horizontal-margin > .md-label')
                .click({force:true}) //Clicar para tirar a montagem
    
            cy.wait(400)
    
            //rolagem para baixo
            cy.get('.containerSabium')
                .scrollTo("center")
    
            cy.wait(400)
    
            //Botão "AVANÇAR"
            cy.get('.flex-gt-sm-50 > .md-primary')
                .click() //Clicar para avançar para a próxima tela

                
            // tela para ESCOLHER TRANSPORTADORA

            cy.wait(14000)

            //Card de inconsistencias - fechar
            cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                .click()

            //Card de inconsistencias - fechar
            cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                .click()
    
            //Função criada para clicar no campo transportadora e escolher a trasportadora
            escolherTransportadora()
        
            escolherRota()
        
            cy.wait(10000)

    
            // tela de GERAR PARCELAS
    
            cy.wait(2500)
    
            //Título "Formas de pagamento na Entrada"
            cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                .scrollIntoView()
    
            cy.wait(400)
    
            //Botão "GERAR PARCELAS"
            cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
                .click({force:true})
    
            cy.wait(9000)
    
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
    
            cy.wait(9000)
    
            // RESUMO DO PEDIDO - ANTES DE FINALIZAR
    
            //Botão "FINALIZAR PEDIDO"
            cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
                .click()
    
            //Carregando a finalização do pedido
            cy.wait(13000)
    
             //Validar mensagem "Pedido gravado com sucesso!"
            cy.get('[ng-show="!editarPedido"]')
                .should('exist')
                .and('be.visible')
                .and('contain.text','Pedido gravado com sucesso!')
        })   

        it('Pedido de venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título em processo Diferente) e produto 1870 0 0 (sem serviço)', () => {
    
            cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
    
            //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
            titulopagina()
            
            cy.wait(800)
    
            //clicar para aparecer as opções de processo
            cy.get('#select_value_label_4 > .md-select-icon')
                .click()
    
            cy.wait(800)
            
            //rolar para o meio das opções de processo
            cy.get('#select_listbox_12')
                .scrollTo('center')
    
            cy.wait(800)
    
            //selecionar processo de venda "9860"
            cy.get('#select_option_60 > .md-text')
                .click({force: true})
    
            cy.wait(800)
    
            //Função para escolher cliente para pedido
            escolherClientePedido()
    
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
    
            cy.wait(400)
    
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
    
            //Desmarcar garantia que já veio marcada automaticamente
            cy.get('#checkbox-141-2 > .md-container')
                .click()
    
            cy.wait(400)
    
            //Botão "OK" - Serviços Vinculados
            cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar
    
            cy.wait(1300)
    
            //Botão de arrastar Retirada / Entrega
            cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
                .click({force:true}) //Clicar para tirar a entrega do pedido
    
            cy.wait(800)
    
            //Botão de arrastar Montagem
            cy.get('[ng-show="itemAtual._permiteMontagem"] > .md-auto-horizontal-margin > .md-label')
                .click({force:true}) //Clicar para tirar a montagem
    
            cy.wait(400)

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
    
            cy.wait(400)
    
            //rolagem para baixo
            cy.get('.containerSabium')
                .scrollTo("center")
    
            cy.wait(400)
    
            //Botão "AVANÇAR"
            cy.get('.flex-gt-sm-50 > .md-primary')
                .click() //Clicar para avançar para a próxima tela


            // tela para ESCOLHER TRANSPORTADORA

            cy.wait(14000)

            //Card de inconsistencias - fechar
            cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                .click()

            //Função criada para clicar no campo transportadora e escolher a trasportadora
            escolherTransportadora()
    
            escolherRota()
    
            cy.wait(10000)


            // tela de GERAR PARCELAS
    
            //Título "Formas de pagamento na Entrada"
            cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                .scrollIntoView()
    
            cy.wait(400)
    
            //Botão "GERAR PARCELAS"
            cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
                .click({force:true})
    
            cy.wait(8000)
    
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
    
            cy.wait(9000)
    
            // RESUMO DO PEDIDO - ANTES DE FINALIZAR
    
            //Botão "FINALIZAR PEDIDO"
            cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
                .click()
    
            //Carregando a finalização do pedido
            cy.wait(11000)
    
             //Validar mensagem "Pedido gravado com sucesso!"
            cy.get('[ng-show="!editarPedido"]')
                .should('exist')
                .and('be.visible')
                .and('contain.text','Pedido gravado com sucesso!')
        })
    })
})