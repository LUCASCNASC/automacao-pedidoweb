import { titulopagina } from '../../../support/para_todos';
import { escolherTransportadora, saldodisponivel, escolherRota, escolherClientePedido, pedidoGerado, botaoFinalizarPedido, finalizandoPedido,
         clicarAdicionarProduto, tirarEntrega, tirarEntregaSegundo, botaoGerarParcelas, processoEntregaFutura,
         avancarParaParcelas, avancarParaTransportadora, avancarParcelasEntrega, modalServicosVinculados, okServicosVinculados,
         escolherProdutoPesquisa, escolherVoltagemProduto, avancarFinal, modalInconsApenasTransp, carregandoFormaPagamento, escolherFormaPagamentoPrincipal, 
         escolherDuasParcelaPagamento } from '../../../support/para_pedidos/gerais_pedidos';
import { produtoNormalPrimeiro, produtoNormalSegundo } from '../../../support/para_pedidos/produtos_pedidos';

describe('Gerar pedido de entrega futura', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        titulopagina()
        processoEntregaFutura()
        escolherClientePedido()
        cy.wait(500)
        produtoNormalPrimeiro()
        saldodisponivel()
        escolherProdutoPesquisa()
        cy.wait(200)
    })

    context('Sem frete/ processo 9862 - caminho feliz', () => {

        it('Pedido de venda: produto 1860 0 0', () => {
                      
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(500)
    
            modalServicosVinculados()
            okServicosVinculados()
    
            tirarEntrega()
            cy.wait(400)
    
            avancarParaParcelas()
            cy.wait(6000)
    
            // tela de GERAR PARCELAS
    
            botaoGerarParcelas()
            carregandoFormaPagamento()
            cy.wait(5500)
    
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)

            avancarFinal()
            cy.wait(5500)
        })
        
        it('Pedido de venda: produtos 1860 0 0 e 1870 0 0', () => {
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                      
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(500)
    
            modalServicosVinculados()
            okServicosVinculados()
    
            tirarEntrega()
            cy.wait(800)
    
            produtoNormalSegundo()
    
            saldodisponivel()
            cy.wait(800)
    
            escolherProdutoPesquisa()
            cy.wait(800)
    
            escolherVoltagemProduto()
            clicarAdicionarProduto()
    
            cy.wait(500)
    
            modalServicosVinculados()
            okServicosVinculados()
                
            tirarEntregaSegundo()
            cy.wait(400)
    
            avancarParaParcelas()
            cy.wait(6500)
    
            // tela de GERAR PARCELAS
    
            botaoGerarParcelas()
            carregandoFormaPagamento()
            cy.wait(5000)
    
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)
    
            avancarFinal()
            cy.wait(5500)
        })
    })
    
    context('Com frete/ processo 9862 - caminho feliz', () => {

        it('Pedido de venda: produto 1860 0 0', () => {
                      
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(500)
    
            modalServicosVinculados()
            okServicosVinculados()
            cy.wait(400)
    
            avancarParaTransportadora()
            cy.wait(12000)
    
            // tela para ESCOLHER TRANSPORTADORA

            modalInconsApenasTransp()
            escolherTransportadora()
            escolherRota()

            avancarParcelasEntrega()
            cy.wait(650)

            // tela de GERAR PARCELAS

            botaoGerarParcelas()
            carregandoFormaPagamento()
            cy.wait(5500)

            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)

            avancarFinal()
            cy.wait(5500)
        })    
        
        it('Pedido de venda: produtos 1860 0 0 e 1870 0 0', () => {
                      
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(500)
    
            modalServicosVinculados()
            okServicosVinculados()
            cy.wait(800)
    
            produtoNormalSegundo()
            saldodisponivel()
            cy.wait(800)
    
            escolherProdutoPesquisa()
            cy.wait(800)
    
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(500)
    
            modalServicosVinculados()
            okServicosVinculados()
            cy.wait(400)
    
            avancarParaTransportadora()
            cy.wait(12000)
    
            // tela para ESCOLHER TRANSPORTADORA

            modalInconsApenasTransp()
            escolherTransportadora()
            escolherRota()

            avancarParcelasEntrega()
            cy.wait(7000)

            // tela de GERAR PARCELAS

            botaoGerarParcelas()
            carregandoFormaPagamento()
            cy.wait(6000)

            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
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
        pedidoGerado()
      });
})