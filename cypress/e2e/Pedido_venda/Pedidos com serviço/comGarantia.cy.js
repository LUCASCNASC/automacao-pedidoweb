//Importando funções 
import { detalhevenda, detalhevendaclicar, titulopagina } from '../../../support/uiUtils';

describe('Gerar pedidos com Garantia', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
    })   

    context('Sem entrega', () => {

        it.skip('Gerar pedido de venda com Garantia que separa título no mesmo processo, processo 9860; um produto, produto 1860 0 0 - caminho feliz', () => {

    
            cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login

            //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
            titulopagina()
    
            cy.wait(1000)
    
            //clicar para aparecer as opções de processo
            cy.get('#select_value_label_4 > .md-select-icon')
                .click()
    
            cy.wait(1000)
            
            //rolar para o meio das opções de processo
            cy.get('#select_listbox_12')
                .scrollTo('center')
    
            cy.wait(1000)
    
            //selecionar processo de venda "9860"
            cy.get('#select_option_59 > .md-text')
                .click({force: true})
    
            cy.wait(1000)
    
            //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
            cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
                .wait(1500)
                .type('48976249089 {downArrow}') //Inserindo CPF no campo "INFORME O CLIENTE"
            
            cy.wait(1000)
            
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
                .wait(1500)
                .type('1860')
           
            cy.wait(2500)
    
            //Preenchendo campo para pesquisar produto
            cy.contains('Cod: 1860')
    
            cy.wait(500)
    
            //Validando informações do produto após pesquisar
            cy.get('.md-list-item-text > .ng-scope')
                .should('exist') //Validando existencia do "Saldo disponível"
                .and('be.visible') //Validando se elemento "Saldo disponível" está visível
                .and('have.text','Saldo disponivel') //Verificando texto
                .invoke('css', 'color') // Obtém a cor do elemento
                .should('equal', 'rgb(255, 255, 255)'); // Verifica a cor (RGB)
    
            //clicar para selecionar o produto; 
            cy.contains('Cod: 1860')
                .click({ force: true })
    
            cy.wait(1500)
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
    
            
            //Função criada para clicar no botão detalher venda, que baixa o PDF
            detalhevendaclicar()
    
            cy.wait(1000)
                      
            //Selecionar a voltagem do produto
            cy.get('.padding-5 > :nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style')
                .click({ force: true })
            
            cy.wait(1000)
    
            //clicar no botão "ADICIONAR", para adicionar produto
            cy.get('[style="padding: 0px 5px;"] > .md-primary')
                .click()
    
            cy.wait(3500)
    
            //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.get('#checkbox-139-0 > .md-container')
                .click()
    
            cy.wait(700)
    
            //Desmarcar Mão de Obra - card "Serviços Vinculados"
            cy.get('#checkbox-144-2 > .md-container')
                .click()
    
            cy.wait(500)
    
            //Botão "OK" - Serviços Vinculados
            cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar
    
            cy.wait(1500)
    
            //Botão de arrastar Retirada / Entrega
            cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
                .click() //Clicar para tirar a entrega do pedido
    
            cy.wait(1000)
    
            //Botão de arrastar Montagem
            cy.get('[ng-show="itemAtual._permiteMontagem"] > .md-auto-horizontal-margin > .md-label')
                .click() //Clicar para tirar a montagem
    
            cy.wait(500)
    
            //rolagem para baixo
            cy.get('.containerSabium')
                .scrollTo("center")
    
            cy.wait(500)
    
            //Botão "AVANÇAR"
            cy.get('.flex-gt-sm-50 > .md-primary')
                .click() //Clicar para avançar para a próxima tela
    
            // tela de GERAR PARCELAS
    
            cy.wait(8500)
    
            //Título "Formas de pagamento na Entrada"
            cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                .scrollIntoView()
    
            cy.wait(500)
    
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
    
            cy.wait(1000)
    
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
    
            //Após gerar pedido
    
            //Botão "OK"
            //cy.get('md-dialog-actions.layout-align-center-center > .md-primary')
            //    .click()
    
        })
    
        it.skip('Gerar pedido de venda com Garantia que não separa título, processo 9860; um produto, produto 1860 0 0 - caminho feliz', () => {
    
            cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
    
            //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
            titulopagina()
    
            cy.wait(1000)
    
            //clicar para aparecer as opções de processo
            cy.get('#select_value_label_4 > .md-select-icon')
                .click()
    
            cy.wait(1000)
            
            //rolar para o meio das opções de processo
            cy.get('#select_listbox_12')
                .scrollTo('center')
    
            cy.wait(1000)
    
            //selecionar processo de venda "9860"
            cy.get('#select_option_59 > .md-text')
                .click({force: true})
    
            cy.wait(1000)
    
            //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
            cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
                .wait(1500)
                .type('48976249089 {downArrow}') //Inserindo CPF no campo "INFORME O CLIENTE"
            
            cy.wait(1000)
            
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
                .wait(1500)
                .type('1860')
           
            cy.wait(2500)
    
            //Preenchendo campo para pesquisar produto
            cy.contains('Cod: 1860')
    
            cy.wait(500)
    
            //Validando informações do produto após pesquisar
            cy.get('.md-list-item-text > .ng-scope')
                .should('exist') //Validando existencia do "Saldo disponível"
                .and('be.visible') //Validando se elemento "Saldo disponível" está visível
                .and('have.text','Saldo disponivel') //Verificando texto
                .invoke('css', 'color') // Obtém a cor do elemento
                .should('equal', 'rgb(255, 255, 255)'); // Verifica a cor (RGB)
    
            //clicar para selecionar o produto; 
            cy.contains('Cod: 1860')
                .click({ force: true })
    
            cy.wait(1500)
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
    
            
            //Função criada para clicar no botão detalher venda, que baixa o PDF
            detalhevendaclicar()
    
            cy.wait(1000)
                      
            //Selecionar a voltagem do produto
            cy.get('.padding-5 > :nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style')
                .click({ force: true })
            
            cy.wait(1000)
    
            //clicar no botão "ADICIONAR", para adicionar produto
            cy.get('[style="padding: 0px 5px;"] > .md-primary')
                .click()
    
            cy.wait(2500)
    
            //Marcar garantia "T.A. Garantia Não Separa"
            cy.get('#checkbox-140-1 > .md-container')
                .click()
    
            cy.wait(700)
    
            //Desmarcar Mão de Obra - card "Serviços Vinculados"
            cy.get('#checkbox-144-2 > .md-container')
                .click()
    
            cy.wait(500)
    
            //Botão "OK" - Serviços Vinculados
            cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar
    
            cy.wait(1500)
    
            //Botão de arrastar Retirada / Entrega
            cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
                .click() //Clicar para tirar a entrega do pedido
    
            cy.wait(1000)
    
            //Botão de arrastar Montagem
            cy.get('[ng-show="itemAtual._permiteMontagem"] > .md-auto-horizontal-margin > .md-label')
                .click() //Clicar para tirar a montagem
    
            cy.wait(500)
    
            //rolagem para baixo
            cy.get('.containerSabium')
                .scrollTo("center")
    
            cy.wait(500)
    
            //Botão "AVANÇAR"
            cy.get('.flex-gt-sm-50 > .md-primary')
                .click() //Clicar para avançar para a próxima tela
    
            // tela de GERAR PARCELAS
    
            cy.wait(8500)
    
            //Título "Formas de pagamento na Entrada"
            cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                .scrollIntoView()
    
            cy.wait(500)
    
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
    
            cy.wait(1000)
    
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
    
            //Após gerar pedido
    
            //Botão "OK"
            //cy.get('md-dialog-actions.layout-align-center-center > .md-primary')
            //    .click()
    
        })
    
        it.skip('Gerar pedido de venda com Garantia que separa título em um processo diferente, processo 9860; um produto, produto 1860 0 0 - caminho feliz', () => {
    
            cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
    
            //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
            titulopagina()
    
            cy.wait(1000)
    
            //clicar para aparecer as opções de processo
            cy.get('#select_value_label_4 > .md-select-icon')
                .click()
    
            cy.wait(1000)
            
            //rolar para o meio das opções de processo
            cy.get('#select_listbox_12')
                .scrollTo('center')
    
            cy.wait(1000)
    
            //selecionar processo de venda "9860"
            cy.get('#select_option_59 > .md-text')
                .click({force: true})
    
            cy.wait(1000)
    
            //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
            cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
                .wait(1500)
                .type('48976249089 {downArrow}') //Inserindo CPF no campo "INFORME O CLIENTE"
            
            cy.wait(1000)
            
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
                .wait(1500)
                .type('1860')
           
            cy.wait(2500)
    
            //Preenchendo campo para pesquisar produto
            cy.contains('Cod: 1860')
    
            cy.wait(500)
    
            //Validando informações do produto após pesquisar
            cy.get('.md-list-item-text > .ng-scope')
                .should('exist') //Validando existencia do "Saldo disponível"
                .and('be.visible') //Validando se elemento "Saldo disponível" está visível
                .and('have.text','Saldo disponivel') //Verificando texto
                .invoke('css', 'color') // Obtém a cor do elemento
                .should('equal', 'rgb(255, 255, 255)'); // Verifica a cor (RGB)
    
            //clicar para selecionar o produto; 
            cy.contains('Cod: 1860')
                .click({ force: true })
    
            cy.wait(1500)
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
    
            
            //Função criada para clicar no botão detalher venda, que baixa o PDF
            detalhevendaclicar()
    
            cy.wait(1000)
                      
            //Selecionar a voltagem do produto
            cy.get('.padding-5 > :nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style')
                .click({ force: true })
            
            cy.wait(1000)
    
            //clicar no botão "ADICIONAR", para adicionar produto
            cy.get('[style="padding: 0px 5px;"] > .md-primary')
                .click()
    
            cy.wait(2500)
    
            //Desmarcar Mão de Obra - card "Serviços Vinculados"
            cy.get('#checkbox-144-2 > .md-container')
                .click()
    
            cy.wait(500)
    
            //Botão "OK" - Serviços Vinculados
            cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar
    
            cy.wait(1500)
    
            //Botão de arrastar Retirada / Entrega
            cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
                .click() //Clicar para tirar a entrega do pedido
    
            cy.wait(1000)
    
            //Botão de arrastar Montagem
            cy.get('[ng-show="itemAtual._permiteMontagem"] > .md-auto-horizontal-margin > .md-label')
                .click() //Clicar para tirar a montagem
    
            cy.wait(500)
    
            //rolagem para baixo
            cy.get('.containerSabium')
                .scrollTo("center")
    
            cy.wait(500)
    
            //Botão "AVANÇAR"
            cy.get('.flex-gt-sm-50 > .md-primary')
                .click() //Clicar para avançar para a próxima tela
    
            // tela de GERAR PARCELAS
    
            cy.wait(8500)
    
            //Título "Formas de pagamento na Entrada"
            cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                .scrollIntoView()
    
            cy.wait(500)
    
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
    
            cy.wait(1000)
    
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
    
            //Após gerar pedido
    
            //Botão "OK"
            //cy.get('md-dialog-actions.layout-align-center-center > .md-primary')
            //    .click()
    
        })
    })

    context('Com entrega', () => {

        it.skip('Gerar pedido de venda com Garantia que separa título no mesmo processo, processo 9860; um produto, produto 1860 0 0 - caminho feliz', () => {

            cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
    
            //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
            titulopagina()
    
            cy.wait(1000)
    
            //clicar para aparecer as opções de processo
            cy.get('#select_value_label_4 > .md-select-icon')
                .click()
    
            cy.wait(1000)
            
            //rolar para o meio das opções de processo
            cy.get('#select_listbox_12')
                .scrollTo('center')
    
            cy.wait(1000)
    
            //selecionar processo de venda "9860"
            cy.get('#select_option_59 > .md-text')
                .click({force: true})
    
            cy.wait(1000)
    
            //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
            cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
                .wait(1500)
                .type('48976249089 {downArrow}') //Inserindo CPF no campo "INFORME O CLIENTE"
            
            cy.wait(1000)
            
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
                .wait(1500)
                .type('1860')
           
            cy.wait(2500)
    
            //Preenchendo campo para pesquisar produto
            cy.contains('Cod: 1860')
    
            cy.wait(500)
    
            //Validando informações do produto após pesquisar
            cy.get('.md-list-item-text > .ng-scope')
                .should('exist') //Validando existencia do "Saldo disponível"
                .and('be.visible') //Validando se elemento "Saldo disponível" está visível
                .and('have.text','Saldo disponivel') //Verificando texto
                .invoke('css', 'color') // Obtém a cor do elemento
                .should('equal', 'rgb(255, 255, 255)'); // Verifica a cor (RGB)
    
            //clicar para selecionar o produto; 
            cy.contains('Cod: 1860')
                .click({ force: true })
    
            cy.wait(1500)
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
    
            
            //Função criada para clicar no botão detalher venda, que baixa o PDF
            detalhevendaclicar()
    
            cy.wait(1000)
                      
            //Selecionar a voltagem do produto
            cy.get('.padding-5 > :nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style')
                .click({ force: true })
            
            cy.wait(1000)
    
            //clicar no botão "ADICIONAR", para adicionar produto
            cy.get('[style="padding: 0px 5px;"] > .md-primary')
                .click()
    
            cy.wait(2500)
    
            //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.get('#checkbox-139-0 > .md-container')
                .click()
    
            cy.wait(700)
    
            //Desmarcar Mão de Obra - card "Serviços Vinculados"
            cy.get('#checkbox-144-2 > .md-container')
                .click()
    
            cy.wait(500)
    
            //Botão "OK" - Serviços Vinculados
            cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar
    
            cy.wait(1500)
    
            //Botão de arrastar Retirada / Entrega
            //cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
            //    .click() //Clicar para tirar a entrega do pedido
    
            cy.wait(1000)
    
            //Botão de arrastar Montagem
            cy.get('[ng-show="itemAtual._permiteMontagem"] > .md-auto-horizontal-margin > .md-label')
                .click() //Clicar para tirar a montagem
    
            cy.wait(500)
    
            //rolagem para baixo
            cy.get('.containerSabium')
                .scrollTo("center")
    
            cy.wait(500)
    
            //Botão "AVANÇAR"
            cy.get('.flex-gt-sm-50 > .md-primary')
                .click() //Clicar para avançar para a próxima tela

    
            // tela para ESCOLHER TRANSPORTADORA

    
            cy.wait(15000)

            //Card de inconsistencias - fechar
            cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                .click()

            //Campo Transportadora - clicar para abrir as opções
            cy.get('#input-194')
                .click({force:true})

            cy.wait(1000)

            //Selecionar a transportadora que queremos
            cy.get('#md-option-194-0')
                .click({force:true})
    
            //Lupa de pesquisa de rota - clicar para pesquisar
            cy.get('.rota-frete > .md-icon-right > .ng-binding')
                .scrollIntoView()
                .click()

            cy.wait(500)

            //Pesquisar rota
            cy.get('#txtBuscaRotaModal')
                .type('1')

            //Clicar na lupa de pesquisa de rota
            cy.get('#dialogContent_900 > .layout-wrap > .md-icon-float > .ng-binding')
                .click()

            //Escolher rota após pesquisarmos
            cy.get('v-pane-header.ng-scope > div')
                .click() //clicar na rota 1

            //Escolher rota 2
            cy.get(':nth-child(4) > .padding-10-0')
                .click() //clicar na rota 1

            cy.wait(1000)

            //Clicar para avançar para a tela de GERAR PARCELAS
            cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
                .click()
    
            cy.wait(10000)


            // tela de GERAR PARCELAS
    
            //Botão "GERAR PARCELAS"
            cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
                .click({force:true})
    
            cy.wait(8500)
    
            //Selecionando forma de pagamento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
                .click()
    
            //Selecionando parcela na forma de pagamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
                .click()
    
            cy.wait(1000)
    
            //Botão "AVANÇAR"
            cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
                .click()
    
            cy.wait(10000)
    
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
    
            //Após gerar pedido
    
            //Botão "OK"
            //cy.get('md-dialog-actions.layout-align-center-center > .md-primary')
            //    .click()
    
        })

        it.skip('Gerar pedido de venda com Garantia que não separa título, processo 9860; um produto, produto 1860 0 0 - caminho feliz', () => {
    
            cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
    
            //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
            titulopagina()

            cy.wait(1000)
    
            //clicar para aparecer as opções de processo
            cy.get('#select_value_label_4 > .md-select-icon')
                .click()
    
            cy.wait(1000)
            
            //rolar para o meio das opções de processo
            cy.get('#select_listbox_12')
                .scrollTo('center')
    
            cy.wait(1000)
    
            //selecionar processo de venda "9860"
            cy.get('#select_option_59 > .md-text')
                .click({force: true})
    
            cy.wait(1000)
    
            //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
            cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
                .wait(1500)
                .type('48976249089 {downArrow}') //Inserindo CPF no campo "INFORME O CLIENTE"
            
            cy.wait(1000)
            
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
                .wait(1500)
                .type('1860')
           
            cy.wait(2500)
    
            //Preenchendo campo para pesquisar produto
            cy.contains('Cod: 1860')
    
            cy.wait(500)
    
            //Validando informações do produto após pesquisar
            cy.get('.md-list-item-text > .ng-scope')
                .should('exist') //Validando existencia do "Saldo disponível"
                .and('be.visible') //Validando se elemento "Saldo disponível" está visível
                .and('have.text','Saldo disponivel') //Verificando texto
                .invoke('css', 'color') // Obtém a cor do elemento
                .should('equal', 'rgb(255, 255, 255)'); // Verifica a cor (RGB)
    
            //clicar para selecionar o produto; 
            cy.contains('Cod: 1860')
                .click({ force: true })
    
            cy.wait(1500)
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
    
            
            //Função criada para clicar no botão detalher venda, que baixa o PDF
            detalhevendaclicar()
    
            cy.wait(1000)
                      
            //Selecionar a voltagem do produto
            cy.get('.padding-5 > :nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style')
                .click({ force: true })
            
            cy.wait(1000)
    
            //clicar no botão "ADICIONAR", para adicionar produto
            cy.get('[style="padding: 0px 5px;"] > .md-primary')
                .click()
    
            cy.wait(2500)
    
            //Marcar garantia "T.A. Garantia Não Separa"
            cy.get('#checkbox-140-1 > .md-container')
                .click()
    
            cy.wait(700)
    
            //Desmarcar Mão de Obra - card "Serviços Vinculados"
            cy.get('#checkbox-144-2 > .md-container')
                .click()
    
            cy.wait(500)
    
            //Botão "OK" - Serviços Vinculados
            cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar
    
            cy.wait(1500)
    
            //Botão de arrastar Retirada / Entrega
            //cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
            //    .click() //Clicar para tirar a entrega do pedido
    
            cy.wait(1000)
    
            //Botão de arrastar Montagem
            cy.get('[ng-show="itemAtual._permiteMontagem"] > .md-auto-horizontal-margin > .md-label')
                .click() //Clicar para tirar a montagem
    
            cy.wait(500)
    
            //rolagem para baixo
            cy.get('.containerSabium')
                .scrollTo("center")
    
            cy.wait(500)
    
            //Botão "AVANÇAR"
            cy.get('.flex-gt-sm-50 > .md-primary')
                .click() //Clicar para avançar para a próxima tela
    
            // tela para ESCOLHER TRANSPORTADORA

    
            cy.wait(16000)

            //Card de inconsistencias - fechar
            cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                .click()

            //Campo Transportadora - clicar para abrir as opções
            cy.get('#input-194')
                .click({force:true})

            cy.wait(1000)

            //Selecionar a transportadora que queremos
            cy.get('#md-option-194-0')
                .click({force:true})
    
            //Lupa de pesquisa de rota - clicar para pesquisar
            cy.get('.rota-frete > .md-icon-right > .ng-binding')
                .scrollIntoView()
                .click()

            cy.wait(500)

            //Pesquisar rota
            cy.get('#txtBuscaRotaModal')
                .type('1')

            //Clicar na lupa para pesquisar rota depois de preencher campo
            cy.get('#dialogContent_900 > .layout-wrap > .md-icon-float > .ng-binding')
                .click()

            cy.wait(500)

            //Escolher rota após pesquisarmos
            cy.get('v-pane-header.ng-scope > div')
                .click() //clicar na rota 1

            //Escolher rota 2
            cy.get(':nth-child(4) > .padding-10-0')
                .click() //clicar na rota 1

            cy.wait(1000)

            //Clicar para avançar para a tela de GERAR PARCELAS
            cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
                .click()
    
            cy.wait(11000)


            // tela de GERAR PARCELAS
    
            //Botão "GERAR PARCELAS"
            cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
                .click({force:true})
    
            cy.wait(8500)
    
            //Selecionando forma de pagamento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
                .click()
    
            //Selecionando parcela na forma de pagamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
                .click()
    
            cy.wait(1000)
    
            //Botão "AVANÇAR"
            cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
                .click()
    
            cy.wait(10000)
    
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
    
            //Após gerar pedido
    
            //Botão "OK"
            //cy.get('md-dialog-actions.layout-align-center-center > .md-primary')
            //    .click()
    
        })

        it.skip('Gerar pedido de venda com Garantia que separa título em um processo diferente, processo 9860; um produto, produto 1860 0 0 - caminho feliz', () => {
    
            cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
    
            //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
            titulopagina()
            
            cy.wait(1000)
    
            //clicar para aparecer as opções de processo
            cy.get('#select_value_label_4 > .md-select-icon')
                .click()
    
            cy.wait(1000)
            
            //rolar para o meio das opções de processo
            cy.get('#select_listbox_12')
                .scrollTo('center')
    
            cy.wait(1000)
    
            //selecionar processo de venda "9860"
            cy.get('#select_option_59 > .md-text')
                .click({force: true})
    
            cy.wait(1000)
    
            //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
            cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
                .wait(1500)
                .type('48976249089 {downArrow}') //Inserindo CPF no campo "INFORME O CLIENTE"
            
            cy.wait(1000)
            
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
                .wait(1500)
                .type('1860')
           
            cy.wait(2500)
    
            //Preenchendo campo para pesquisar produto
            cy.contains('Cod: 1860')
    
            cy.wait(500)
    
            //Validando informações do produto após pesquisar
            cy.get('.md-list-item-text > .ng-scope')
                .should('exist') //Validando existencia do "Saldo disponível"
                .and('be.visible') //Validando se elemento "Saldo disponível" está visível
                .and('have.text','Saldo disponivel') //Verificando texto
                .invoke('css', 'color') // Obtém a cor do elemento
                .should('equal', 'rgb(255, 255, 255)'); // Verifica a cor (RGB)
    
            //clicar para selecionar o produto; 
            cy.contains('Cod: 1860')
                .click({ force: true })
    
            cy.wait(1500)
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
    
            
            //Função criada para clicar no botão detalher venda, que baixa o PDF
            detalhevendaclicar()
    
            cy.wait(1000)
                      
            //Selecionar a voltagem do produto
            cy.get('.padding-5 > :nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style')
                .click({ force: true })
            
            cy.wait(1000)
    
            //clicar no botão "ADICIONAR", para adicionar produto
            cy.get('[style="padding: 0px 5px;"] > .md-primary')
                .click()
    
            cy.wait(2500)
    
            //Desmarcar Mão de Obra - card "Serviços Vinculados"
            cy.get('#checkbox-144-2 > .md-container')
                .click()
    
            cy.wait(500)
    
            //Botão "OK" - Serviços Vinculados
            cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar
    
            cy.wait(1500)
    
            //Botão de arrastar Retirada / Entrega
            //cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
            //    .click() //Clicar para tirar a entrega do pedido
    
            cy.wait(1000)
    
            //Botão de arrastar Montagem
            cy.get('[ng-show="itemAtual._permiteMontagem"] > .md-auto-horizontal-margin > .md-label')
                .click() //Clicar para tirar a montagem
    
            cy.wait(500)
    
            //rolagem para baixo
            cy.get('.containerSabium')
                .scrollTo("center")
    
            cy.wait(500)
    
            //Botão "AVANÇAR"
            cy.get('.flex-gt-sm-50 > .md-primary')
                .click() //Clicar para avançar para a próxima tela
    
            // tela para ESCOLHER TRANSPORTADORA

    
            cy.wait(16000)

            //Card de inconsistencias - fechar
            cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                .click()

            //Campo Transportadora - clicar para abrir as opções
            cy.get('#input-194')
                .click({force:true})

            cy.wait(1000)

            //Selecionar a transportadora que queremos
            cy.get('#md-option-194-0')
                .click({force:true})
    
            //Lupa de pesquisa de rota - clicar para pesquisar
            cy.get('.rota-frete > .md-icon-right > .ng-binding')
                .scrollIntoView()
                .click()

            cy.wait(500)

            //Pesquisar rota
            cy.get('#txtBuscaRotaModal')
                .type('1')

            //Clicar na lupa para pesquisar rota depois de preencher campo
            cy.get('#dialogContent_900 > .layout-wrap > .md-icon-float > .ng-binding')
                .click()

            cy.wait(500)

            //Escolher rota após pesquisarmos
            cy.get('v-pane-header.ng-scope > div')
                .click() //clicar na rota 1

            //Escolher rota 2
            cy.get(':nth-child(4) > .padding-10-0')
                .click() //clicar na rota 1

            cy.wait(1000)

            //Clicar para avançar para a tela de GERAR PARCELAS
            cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
                .click()
    
            cy.wait(11000)


            // tela de GERAR PARCELAS
    
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
    
            cy.wait(1000)
    
            //Botão "AVANÇAR"
            cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
                .click()
    
            cy.wait(10000)
    
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
    
            //Após gerar pedido
    
            //Botão "OK"
            //cy.get('md-dialog-actions.layout-align-center-center > .md-primary')
            //    .click()
    
        })
    })
})