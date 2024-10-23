import { titulopagina, saldodisponivel } from '../../../support/para_todos';
import { escolherTransportadora, escolherRota, escolherClientePedido, pedidoGerado, botaoFinalizarPedido, finalizandoPedido } from '../../../support/para_pedidos';

describe('Remoto/processo 9860 - caminho feliz', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
        titulopagina() //Validar título da aba carregada
    })
  
    it('Pedido de venda remota: produto 1860 0 0', () => {

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

        //Clicar no botão de filial, para trocarmos a filial de emissão 
        cy.get('[ng-click="openModalFilial(itemClicado.grade, false);"]')
            .click()

        //Escolher a filial 6, de emissão, para venda remota
        cy.get('.white > md-list.md-default-theme > :nth-child(2) > div.md-button > .md-no-style')
            .click()

        //clicar no botão "ADICIONAR", para adicionar produto
        cy.get('[style="padding: 0px 5px;"] > .md-primary')
            .click()

        cy.wait(1000)

        //Botão "OK" - Serviços Vinculados
        cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
            .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

        cy.wait(1300)

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
        botaoFinalizarPedido()

        //Carregamento de pedido
        finalizandoPedido()

        //Carregando a finalização do pedido
        cy.wait(10000)

        //Validar mensagem "Pedido gravado com sucesso!"
        pedidoGerado()
    })
})