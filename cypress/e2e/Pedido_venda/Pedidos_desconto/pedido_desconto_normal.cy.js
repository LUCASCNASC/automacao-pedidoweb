import { titulopagina } from '../../../support/para_todos';
import { saldodisponivel, escolherClientePedido, pedidoGerado, botaoFinalizarPedido, finalizandoPedido, clicarAdicionarProduto,
         tirarEntrega, botaoGerarParcelas, processoVendaPrincipal, avancarParaParcelas, modalServicosVinculados,
         okServicosVinculados, escolherProdutoPesquisa, escolherVoltagemProduto, avancarFinal, carregandoFormaPagamento,
         escolherFormaPagamentoPrincipal, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/gerais_pedidos';
import { produtoNormalPrimeiro } from '../../../support/para_pedidos/produtos_pedidos';
import { clicarBotaoDesconto, validarModalSubSobre, aplicarDescontoR$, aplicarDescontoPorcentagem, aplicarDescontoValorFixo } from '../../../support/para_pedidos/para_pedido_desconto';

describe('Gerar pedido de venda com desconto', () => {

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

        it('Pedido de venda: produto 1860 0 0 com desconto Sub (-) / R$', () => {
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM

            escolherVoltagemProduto()
         
            clicarAdicionarProduto()
    
            cy.wait(500)

            modalServicosVinculados()

            okServicosVinculados()

            clicarBotaoDesconto()

            validarModalSubSobre()

            aplicarDescontoR$()
    
            tirarEntrega()

            cy.wait(400)

            avancarParaParcelas()

            // tela de GERAR PARCELAS

            cy.wait(5000)

            botaoGerarParcelas()

            carregandoFormaPagamento()

            cy.wait(5000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(6000)
        })

        it('Pedido de venda: produto 1860 0 0 com desconto Sub (-) / % (Pocentagem)', () => {
    
            // // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM

            escolherVoltagemProduto()
         
            clicarAdicionarProduto()
    
            cy.wait(500)

            modalServicosVinculados()

            okServicosVinculados()

            clicarBotaoDesconto()

            validarModalSubSobre()

            aplicarDescontoPorcentagem()
    
            tirarEntrega()

            cy.wait(400)

            avancarParaParcelas()

            // tela de GERAR PARCELAS

            cy.wait(5000)

            botaoGerarParcelas()

            carregandoFormaPagamento()

            cy.wait(5000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(6000)
        })

        it('Pedido de venda: produto 1860 0 0 com desconto Sub (-) / VALOR FIXO', () => {
    
            // // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM

            escolherVoltagemProduto()
         
            clicarAdicionarProduto()
    
            cy.wait(500)

            modalServicosVinculados()

            okServicosVinculados()

            clicarBotaoDesconto()

            validarModalSubSobre()

            aplicarDescontoValorFixo()
    
            tirarEntrega()

            cy.wait(400)

            avancarParaParcelas()

            // tela de GERAR PARCELAS

            cy.wait(5000)

            botaoGerarParcelas()

            carregandoFormaPagamento()

            cy.wait(5000)

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
        cy.wait(7000)
        pedidoGerado()
      });
})