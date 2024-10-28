import { titulopagina } from '../../../support/para_todos';
import { escolherTransportadora, saldodisponivel, escolherRota, escolherClientePedido,  pedidoGerado, botaoFinalizarPedido,
    finalizandoPedido, botãoAdicionar, botaoGerarParcelas, processoVendaPrincipal, avancarParcelasEntrega, 
    modalServicosVinculados, okServicosVinculados, escolherProdutoPesquisa, escolherVoltagemProduto, avancarFinal, 
    trocarFilialFaturamento, avancarParaTransportadora, modalInconsApenasRota} from '../../../support/para_pedidos/gerais_pedidos';
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
        
        cy.wait(400)

        trocarFilialFaturamento()

        //clicar no botão "ADICIONAR", para adicionar produto
        botãoAdicionar()

        cy.wait(500)

        modalServicosVinculados()

        okServicosVinculados()

        cy.wait(400)

        avancarParaTransportadora()

        // tela para ESCOLHER TRANSPORTADORA

        cy.wait(13000)

        modalInconsApenasRota()

        escolherTransportadora()
    
        escolherRota()

        avancarParcelasEntrega()
    
        cy.wait(7000)

        // tela de GERAR PARCELAS

        botaoGerarParcelas()

        cy.wait(7000)

        //Selecionando forma de pagamento
        cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
            .click()

        //Selecionando parcela na forma de pagamento
        cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
            .click()

        cy.wait(400)

        //Botão "AVANÇAR"
        avancarFinal()

        cy.wait(7500)

        // RESUMO DO PEDIDO - ANTES DE FINALIZAR

        botaoFinalizarPedido()

        finalizandoPedido()

        cy.wait(9000)

        pedidoGerado()
    })
})