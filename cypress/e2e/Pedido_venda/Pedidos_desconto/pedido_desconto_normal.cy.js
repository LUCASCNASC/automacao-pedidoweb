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

            escolherVoltagemProduto() //PRODUTO
            clicarAdicionarProduto()
            cy.wait(500)

            modalServicosVinculados() //SERVICOS
            okServicosVinculados()

            clicarBotaoDesconto() //DESCONTO
            validarModalSubSobre()
            aplicarDescontoR$()
    
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(5000)

            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            cy.wait(5000)
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            cy.wait(6000)
        })

        it('Pedido de venda: produto 1860 0 0 com desconto Sub (-) / % (Pocentagem)', () => {

            escolherVoltagemProduto() //PRODUTO
            clicarAdicionarProduto()
            cy.wait(500)

            modalServicosVinculados() //SERVICOS
            okServicosVinculados()

            clicarBotaoDesconto() //DESCONTO
            validarModalSubSobre()
            aplicarDescontoPorcentagem()
    
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(5000)

            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            cy.wait(5000)
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            cy.wait(6000)
        })

        it('Pedido de venda: produto 1860 0 0 com desconto Sub (-) / VALOR FIXO', () => {

            escolherVoltagemProduto() //PRODUTO
            clicarAdicionarProduto()
            cy.wait(500)

            modalServicosVinculados() //SERVICOS
            okServicosVinculados()

            clicarBotaoDesconto() //DESCONTO
            validarModalSubSobre()
            aplicarDescontoValorFixo()
    
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(5000)

            botaoGerarParcelas() //GERAR PARCELAS
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