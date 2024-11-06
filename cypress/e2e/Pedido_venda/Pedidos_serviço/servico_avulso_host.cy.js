import { titulopagina } from '../../../support/para_todos';
import { processoVendaServicoAvulso, escolherClientePedido, clicarServicosMenu, clicarCarrinhoCompras, botaoAvancarPedido,
         produtoServicoHost, saldoDisponivelServico, escolherServicoPesquisa, escolherValorRecarga } from '../../../support/para_pedidos/para_servicos_avulsos';
import { botaoGerarParcelas, avancarFinal, botaoFinalizarPedido, finalizandoPedido, pedidoGerado, carregandoFormaPagamento  } from '../../../support/para_pedidos/gerais_pedidos';
import { iconeMenuOpcoes } from '../../../support/para_layout/para_menu_opcoes';

//Para este cenário, é necessário fazer update na coluna dataultimaatualizacao, da tabela glb.servicofaixavalorfixo
describe('Venda de serviço avulso Host - 104', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
        titulopagina() //Validar título da aba carregada
    })

    context('Processo 9888 - caminho feliz', () => {

        it.skip('Venda de Mão de obra - 144 (T.A. MO Não Destaca e Separa Processo Diferente)', () => {
            
            processoVendaServicoAvulso() 
            
            escolherClientePedido()

            cy.wait(200)

            iconeMenuOpcoes()

            clicarServicosMenu()

            cy.wait(400)

            produtoServicoHost()

            saldoDisponivelServico()
    
            escolherServicoPesquisa()
    
            cy.wait(200)

            escolherValorRecarga()

            cy.wait(200)

            clicarCarrinhoCompras()

            botaoAvancarPedido()

            cy.wait(3000)

            botaoGerarParcelas()

            carregandoFormaPagamento()

            cy.wait(2000)
    
            //Selecionando forma de pagamento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
                .click()
    
            //Selecionando parcela na forma de pagamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
                .click()

            cy.wait(400)

            avancarFinal()

            cy.wait(4000) 
        })
    })

    afterEach(() => {
        // RESUMO DO PEDIDO - ANTES DE FINALIZAR
        botaoFinalizarPedido()
        finalizandoPedido()
        cy.wait(4000)
        pedidoGerado()
      });
})