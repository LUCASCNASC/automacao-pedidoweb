import { titulopagina } from '../../../support/para_todos';
import { saldodisponivel, escolherRota, escolherClientePedido, pedidoGerado, botaoFinalizarPedido, finalizandoPedido,
         clicarAdicionarProduto, tirarEntrega, tirarEntregaSegundo, botaoGerarParcelas, processoFinanceiroBaixa,
         avancarParaParcelas, avancarParaTransportadora, avancarParcelasEntrega, modalServicosVinculados, okServicosVinculados,
         escolherProdutoPesquisa, escolherVoltagemProduto, avancarFinal, carregandoFormaPagamento, escolherFormaPagamentoPrincipal, 
         escolherDuasParcelaPagamento } from '../../../support/para_pedidos/gerais_pedidos';
import { produtoNormalPrimeiro, produtoNormalSegundo } from '../../../support/para_pedidos/produtos_pedidos';

describe('Gerar pedido com financeiro na baixa', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        titulopagina() 
        processoFinanceiroBaixa()
        escolherClientePedido()
        cy.wait(500)
        produtoNormalPrimeiro()
        saldodisponivel()
        escolherProdutoPesquisa()
        cy.wait(200)
    })
  
    context('Sem frete/ processo 9863 - caminho feliz', () => {

        it('Pedido de venda: produto 1860 0 0', () => {
                      
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(500)
    
            modalServicosVinculados()
            okServicosVinculados()
    
            tirarEntrega()
            cy.wait(400)
    
            avancarParaParcelas()
            cy.wait(5000)
    
            // tela de GERAR PARCELAS
    
            botaoGerarParcelas()
            carregandoFormaPagamento()
            cy.wait(5500)
    
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)

            avancarFinal()
            cy.wait(5000)
        })

        it('Pedido de venda: produtos 1860 0 0 e 1870 0 0', () => {
                      
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
            cy.wait(7000)
    
            // tela de GERAR PARCELAS
    
            botaoGerarParcelas()
            carregandoFormaPagamento()
            cy.wait(5000)
    
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)
    
            avancarFinal()
            cy.wait(7500)
        })
    })
    
    context('Com frete/ processo 9863 - caminho feliz', () => {

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

            escolherRota()
            cy.wait(6000)

            avancarParcelasEntrega()

            // tela de GERAR PARCELAS

            botaoGerarParcelas()
            carregandoFormaPagamento()
            cy.wait(7000)

            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)

            avancarFinal()
            cy.wait(8000)
        })

        it('Pedido de venda: produtos 1860 0 0 e 1870 0 0', () => {
                      
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(500)
    
            modalServicosVinculados()
            okServicosVinculados()
            cy.wait(400)
    
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
            cy.wait(13000)
    
            // tela para ESCOLHER TRANSPORTADORA
            escolherRota()
            cy.wait(7000)

            avancarParcelasEntrega()

            // tela de GERAR PARCELAS

            botaoGerarParcelas()
            carregandoFormaPagamento()
            cy.wait(6000)

            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)

            avancarFinal()
            cy.wait(8000)
        })
    })

    afterEach(() => {
        // RESUMO DO PEDIDO - ANTES DE FINALIZAR
        botaoFinalizarPedido()
        finalizandoPedido()
        cy.wait(9000)
        pedidoGerado()
      });
})