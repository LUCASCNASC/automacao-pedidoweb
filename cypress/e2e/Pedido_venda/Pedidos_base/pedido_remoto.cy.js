import { titulopagina } from '../../../support/para_todos';
import { escolherTransportadora, saldodisponivel, escolherRota, escolherClientePedido,  pedidoGerado, botaoFinalizarPedido,
    finalizandoPedido, botãoAdicionar, botaoGerarParcelas, processoVendaPrincipal, avancarParcelasEntrega, 
    modalServicosVinculados, okServicosVinculados, escolherProdutoPesquisa, escolherVoltagemProduto, avancarFinal } from '../../../support/para_pedidos/gerais_pedidos';
import { produtoNormalPrimeiro, produtoNormalSegundo } from '../../../support/para_pedidos/produtos_pedidos';

describe('Remoto/processo 9860 - caminho feliz', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
        titulopagina() //Validar título da aba carregada
    })
  
    it.only('Pedido de venda remota: produto 1860 0 0', () => {

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

        // //Clicar no botão de filial, para trocarmos a filial de emissão 
        // cy.get('[ng-click="openModalFilial(itemClicado.grade, false);"]')
        //     .click()

        // //Escolher a filial 6, de emissão, para venda remota
        // cy.get('.white > md-list.md-default-theme > :nth-child(2) > div.md-button > .md-no-style')
        //     .click()

        // //clicar no botão "ADICIONAR", para adicionar produto
        // botãoAdicionar()

        // cy.wait(500)

        // modalServicosVinculados()

        // okServicosVinculados()

        // cy.wait(400)

        // //Botão "AVANÇAR"
        // cy.get('.flex-gt-sm-50 > .md-primary')
        //     .click({force:true}) //Clicar para avançar para a próxima tela

        // // tela para ESCOLHER TRANSPORTADORA

        // cy.wait(13000)

        // //Card de inconsistencias - fechar
        // cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
        //     .click()

        // escolherTransportadora()
    
        // escolherRota()

        // avancarParcelasEntrega()
    
        // cy.wait(7000)

        // // tela de GERAR PARCELAS

        // botaoGerarParcelas()

        // cy.wait(7000)

        // //Selecionando forma de pagamento
        // cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
        //     .click()

        // //Selecionando parcela na forma de pagamento
        // cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
        //     .click()

        // cy.wait(400)

        // //Botão "AVANÇAR"
        // avancarFinal()

        // cy.wait(7500)

        // // RESUMO DO PEDIDO - ANTES DE FINALIZAR

        // botaoFinalizarPedido()

        // finalizandoPedido()

        // cy.wait(9000)

        // pedidoGerado()
    })
})