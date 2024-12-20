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

        it('1-Pedido de venda: produto 1860 0 0', () => {
                      
            escolherVoltagemProduto() //PRODUTO
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas(); cy.wait(5000)
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento(); cy.wait(5500)
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal(); cy.wait(5000)
        })

        it('2-Pedido de venda: produtos 1860 0 0 e 1870 0 0', () => {
                      
            escolherVoltagemProduto() //PRODUTO
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            cy.wait(800)
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            cy.wait(800)
            escolherProdutoPesquisa()
            cy.wait(800)
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS - SEGUNDO PRODUTO
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            cy.wait(400)
            avancarParaParcelas();  cy.wait(7000)
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento(); cy.wait(5000)
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal(); cy.wait(7500)
        })
    })
    
    context('Com frete/ processo 9863 - caminho feliz', () => {

        it('3-Pedido de venda: produto 1860 0 0', () => {
                      
            escolherVoltagemProduto() //PRODUTO
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            cy.wait(400)
            avancarParaTransportadora(); cy.wait(12000)
            escolherRota() //ESCOLHER TRANSPORTADORA
            cy.wait(6000)
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento(); cy.wait(7000)
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal(); cy.wait(8000)
        })

        it('4-Pedido de venda: produtos 1860 0 0 e 1870 0 0', () => {
                      
            escolherVoltagemProduto() //PRODUTO
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            cy.wait(400)
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            cy.wait(800)
            escolherProdutoPesquisa()
            cy.wait(800)
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS - SEGUNDO PRODUTO
            okServicosVinculados()
            cy.wait(400)
            avancarParaTransportadora(); cy.wait(13000)
            escolherRota() //ESCOLHER TRANSPORTADORA
            cy.wait(7000)
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento(); cy.wait(6000)
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal(); cy.wait(8000)
        })
    })

    afterEach(() => {
        botaoFinalizarPedido() //RESUMO
        finalizandoPedido()
        cy.wait(9000)
        pedidoGerado()
      });
})