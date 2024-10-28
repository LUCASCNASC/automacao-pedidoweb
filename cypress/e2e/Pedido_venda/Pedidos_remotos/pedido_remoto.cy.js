import { titulopagina } from '../../../support/para_todos';
import { escolherTransportadora, saldodisponivel, escolherRota, escolherClientePedido, pedidoGerado, botaoFinalizarPedido, 
    finalizandoPedido, botãoAdicionar, botaoGerarParcelas, processoVendaPrincipal, avancarParaTransportadora, avancarParcelasEntrega, 
    modalServicosVinculados, okServicosVinculados, escolherProdutoPesquisa, escolherVoltagemProduto, avancarFinal } from '../../../support/para_pedidos/gerais_pedidos';
import { produtoNormalPrimeiro, produtoNormalSegundo } from '../../../support/para_pedidos/produtos_pedidos';

describe('Remoto/processo 9860 - caminho feliz', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
        titulopagina() //Validar título da aba carregada
    })
  
    it.skip('Pedido de venda remota: produto 1860 0 0', () => {

        processoVendaPrincipal()

        escolherClientePedido()

        cy.wait(500)

        //Pesquisando produto
        produtoNormalPrimeiro()

        saldodisponivel()

        escolherProdutoPesquisa()

        cy.wait(200)

        // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                  
        escolherVoltagemProduto()
        
        cy.wait(800)

        //Clicar no botão de filial, para trocarmos a filial de emissão 
        cy.get('[ng-click="openModalFilial(itemClicado.grade, false);"]')
            .click()

        //Escolher a filial 6, de emissão, para venda remota
        cy.get('.white > md-list.md-default-theme > :nth-child(2) > div.md-button > .md-no-style')
            .click()

        //clicar no botão "ADICIONAR", para adicionar produto
        botãoAdicionar()

        cy.wait(500)

        modalServicosVinculados()

        okServicosVinculados()

        cy.wait(400)

        avancarParaTransportadora()

        // tela para ESCOLHER TRANSPORTADORA

        cy.wait(14000)

        //Card de inconsistencias - fechar
        cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
            .click()

        escolherTransportadora()
    
        escolherRota()

        avancarParcelasEntrega()
    
        cy.wait(10000)

        // tela de GERAR PARCELAS

        botaoGerarParcelas()

        cy.wait(8000)

        //Selecionando forma de pagamento
        cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
            .click()

        //Selecionando parcela na forma de pagamento
        cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
            .click()

        cy.wait(400)

        //Botão "AVANÇAR"
        avancarFinal()

        cy.wait(9000)

        // RESUMO DO PEDIDO - ANTES DE FINALIZAR

        botaoFinalizarPedido()

        finalizandoPedido()

        cy.wait(10000)

        pedidoGerado()
    })

    it.skip('Pedido de venda remota: produtos 1860 0 0 e 1870 0 0', () => {

        processoVendaPrincipal()

        escolherClientePedido()

        cy.wait(500)

        //Pesquisando produto
        produtoNormalPrimeiro()

        saldodisponivel()

        escolherProdutoPesquisa()

        cy.wait(200)

        // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                  
        escolherVoltagemProduto()
        
        cy.wait(800)

        //Clicar no botão de filial, para trocarmos a filial de emissão 
        cy.get('[ng-click="openModalFilial(itemClicado.grade, false);"]')
            .click()

        //Escolher a filial 6, de emissão, para venda remota
        cy.get('.white > md-list.md-default-theme > :nth-child(2) > div.md-button > .md-no-style')
            .click()

        //clicar no botão "ADICIONAR", para adicionar produto
        botãoAdicionar()

        cy.wait(500)

        modalServicosVinculados()

        okServicosVinculados()

        cy.wait(800)

        //Pesquisando segundo produto
        produtoNormalSegundo()

        saldodisponivel()

        escolherProdutoPesquisa()

        escolherVoltagemProduto()

        cy.wait(800)

        //Clicar no botão de filial, para trocarmos a filial de emissão 
        cy.get('[ng-click="openModalFilial(itemClicado.grade, false);"]')
            .click()

        //Escolher a filial 6, de emissão, para venda remota
        cy.get('.white > md-list.md-default-theme > :nth-child(2) > div.md-button > .md-no-style')
            .click()

        botãoAdicionar()

        cy.wait(1000)

        modalServicosVinculados()

        okServicosVinculados()

        cy.wait(400)

        avancarParaTransportadora()

        // tela para ESCOLHER TRANSPORTADORA

        cy.wait(14000)

        //Card de inconsistencias - fechar
        cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
            .click()

        escolherTransportadora()
    
        escolherRota()

        avancarParcelasEntrega()
    
        cy.wait(10000)

        // tela de GERAR PARCELAS

        botaoGerarParcelas()

        cy.wait(12000)

        //Selecionando forma de pagamento
        cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
            .click()

        //Selecionando parcela na forma de pagamento
        cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
            .click()

        cy.wait(400)

        //Botão "AVANÇAR"
        avancarFinal()

        cy.wait(18000)

        // RESUMO DO PEDIDO - ANTES DE FINALIZAR

        botaoFinalizarPedido()

        finalizandoPedido()

        cy.wait(21000)

        pedidoGerado()
    })
    
    it.skip('Pedido de venda remota: kit 1862 0 0', () => {

        processoVendaPrincipal()

        escolherClientePedido()

        cy.wait(500)

        //Pesquisando produto
        produtoNormalPrimeiro()

        saldodisponivel()

        escolherProdutoPesquisa()

        cy.wait(200)

        // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                  
        escolherVoltagemProduto()
        
        cy.wait(800)

        //Clicar no botão de filial, para trocarmos a filial de emissão 
        cy.get('[ng-click="openModalFilial(itemClicado.grade, false);"]')
            .click()

        //Escolher a filial 6, de emissão, para venda remota
        cy.get('.white > md-list.md-default-theme > :nth-child(2) > div.md-button > .md-no-style')
            .click()

        //clicar no botão "ADICIONAR", para adicionar produto
        botãoAdicionar()

        cy.wait(500)

        modalServicosVinculados()

        okServicosVinculados()

        cy.wait(400)

        avancarParaTransportadora()

        // tela para ESCOLHER TRANSPORTADORA

        cy.wait(14000)

        //Card de inconsistencias - fechar
        cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
            .click()

        escolherTransportadora()
    
        escolherRota()

        avancarParcelasEntrega()
    
        cy.wait(10000)

        // tela de GERAR PARCELAS

        botaoGerarParcelas()

        cy.wait(8000)

        //Selecionando forma de pagamento
        cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
            .click()

        //Selecionando parcela na forma de pagamento
        cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
            .click()

        cy.wait(400)

        //Botão "AVANÇAR"
        avancarFinal()

        cy.wait(9000)

        // RESUMO DO PEDIDO - ANTES DE FINALIZAR

        botaoFinalizarPedido()

        finalizandoPedido()

        cy.wait(10000)

        pedidoGerado()
    })
    //fazer - produto 1875 não está aparecendo
    it('Pedido de venda remota: kits 1862 0 0 e 1862 0 0 ', () => {

        processoVendaPrincipal()

        escolherClientePedido()

        cy.wait(500)

        //Pesquisando produto
        produtoNormalPrimeiro()

        saldodisponivel()

        escolherProdutoPesquisa()

        cy.wait(200)

        // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                  
        escolherVoltagemProduto()
        
        cy.wait(500)

        //Clicar no botão de filial, para trocarmos a filial de emissão 
        cy.get('[ng-click="openModalFilial(itemClicado.grade, false);"]')
            .click()

        //Escolher a filial 6, de emissão, para venda remota
        cy.get('.white > md-list.md-default-theme > :nth-child(2) > div.md-button > .md-no-style')
            .click()

        //clicar no botão "ADICIONAR", para adicionar produto
        botãoAdicionar()

        cy.wait(1000)

        //Botão "OK" - Serviços Vinculados
        cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
            .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

        cy.wait(800)

        //Buscar segundo produto
        cy.get('#searchText')
            .clear()
            .type('1875')

        saldodisponivel()

        //clicar para selecionar o segundo produto; 
        cy.contains('Cod: 1875')
            .click({ force: true })

        cy.wait(800)

        //Escolhendo voltagem do segundo produto
        cy.get(':nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style')
            .click()

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

        cy.wait(400)

        //Botão "AVANÇAR"
        cy.get('.flex-gt-sm-50 > .md-primary')
            .click({force:true}) //Clicar para avançar para a próxima tela

        // tela para ESCOLHER TRANSPORTADORA

        cy.wait(14000)

        //Card de inconsistencias - fechar
        cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
            .click()

        //Função criada para clicar no campo transportadora e escolher a trasportadora
        escolherTransportadora()
    
        escolherRota()

        avancarParcelasEntrega()
    
        cy.wait(10000)

        // tela de GERAR PARCELAS

        //Botão "GERAR PARCELAS"
        botaoGerarParcelas()

        cy.wait(12000)

        //Selecionando forma de pagamento
        cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
            .click()

        //Selecionando parcela na forma de pagamento
        cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
            .click()

        cy.wait(400)

        //Botão "AVANÇAR"
        avancarFinal()

        cy.wait(18000)

        // RESUMO DO PEDIDO - ANTES DE FINALIZAR

        botaoFinalizarPedido()

        //Carregamento de pedido
        finalizandoPedido()

        //Carregando a finalização do pedido
        cy.wait(21000)

         pedidoGerado()
    })
})