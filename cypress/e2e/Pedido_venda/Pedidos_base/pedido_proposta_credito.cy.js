import { titulopagina } from '../../../support/para_todos';
import { saldodisponivel, escolherClientePedido, pedidoGerado, botaoFinalizarPedido, finalizandoPedido,
         clicarAdicionarProduto, tirarEntrega, botaoGerarParcelas, processoVendaPrincipal,
         avancarParaParcelas, modalServicosVinculados, okServicosVinculados,
         escolherProdutoPesquisa, escolherVoltagemProduto, avancarFinal, carregandoFormaPagamento,
         escolherFormaPagamentoPrincipal, escolherDuasParcelaPagamento, escolherFormaPagaPropCredito, 
         escolherUmaParcelaPagamento, propostaCreditoGerada} from '../../../support/para_pedidos/gerais_pedidos';
import { produtoNormalPrimeiro } from '../../../support/para_pedidos/produtos_pedidos';

describe('Gerar pedido com proposta de crédito', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        titulopagina()
        processoVendaPrincipal()
        escolherClientePedido()
        cy.wait(500)
        produtoNormalPrimeiro()
        saldodisponivel()
        escolherProdutoPesquisa()
        cy.wait(200)
    })

    context('Sem frete/ processo 9860 - caminho feliz', () => {

        it('Venda: produto 1860 0 0 - (Pedido de  venda sem entrega, com proposta de crédito.)', () => {

            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(500)

            modalServicosVinculados()
            okServicosVinculados()
    
            tirarEntrega()
            cy.wait(400)

            avancarParaParcelas()
    
            // tela de GERAR PARCELAS
    
            cy.wait(5500)

            botaoGerarParcelas()
            carregandoFormaPagamento()
            cy.wait(5000)
    
            escolherFormaPagaPropCredito()
            escolherUmaParcelaPagamento()
            cy.wait(400)
    
            avancarFinal()
            cy.wait(6000)
        })
    })

    afterEach(() => {
        // RESUMO DO PEDIDO - ANTES DE FINALIZAR
        botaoFinalizarPedido()
        finalizandoPedido()
        cy.wait(8000)
        propostaCreditoGerada()
        pedidoGerado()
      });
})