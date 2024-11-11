import { titulopagina } from '../../../support/para_todos';
import { escolherTransportadora, saldodisponivel, escolherRota, escolherClientePedido, pedidoGerado, botaoFinalizarPedido, finalizandoPedido,
        clicarAdicionarProduto, tirarEntrega, tirarMontagem, tirarEntregaSegundo, tirarMontagemSegundo, botaoGerarParcelas, processoVendaPrincipal,
         avancarParaParcelas, avancarParaTransportadora, avancarParcelasEntrega, modalServicosVinculados, okServicosVinculados,
         escolherProdutoPesquisa, escolherVoltagemProduto, avancarFinal, modalInconsRotaTransp, carregaAddProdutosServicos,
         carregandoFormaPagamento, escolherFormaPagamentoPrincipal, escolherDuasParcelaPagamento} from '../../../support/para_pedidos/gerais_pedidos';
import { produtoNormalPrimeiro } from '../../../support/para_pedidos/produtos_pedidos';
import { arrastarFormaPagamento, clicarAlterarValor, modalAlterarValor, alterarValorParaBaixo, alterarValorParaCima } from '../../../support/para_pedidos/para_pedido_desconto';

describe('Gerar pedido normal com desconto nos juros - parametros 243 e 244 definidos no processo de inclusão', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        titulopagina()
    })

    context('Sem frete/ processo 9860 - caminho feliz', () => {

        it('Pedido de venda: produto 1860 0 0 - arredondar para baixo', () => {
            
            processoVendaPrincipal()
    
            escolherClientePedido()
    
            cy.wait(500)
    
            produtoNormalPrimeiro()
    
            saldodisponivel()
    
            escolherProdutoPesquisa()
    
            cy.wait(200)
    
            // // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM

            escolherVoltagemProduto()
         
            clicarAdicionarProduto()
    
            cy.wait(500)

            modalServicosVinculados()

            okServicosVinculados()
    
            tirarEntrega()
    
            tirarMontagem()
    
            cy.wait(400)

            avancarParaParcelas()
    
            // tela de GERAR PARCELAS
    
            cy.wait(5000)

            botaoGerarParcelas()

            carregandoFormaPagamento()
    
            cy.wait(4000)
    
            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            arrastarFormaPagamento()

            clicarAlterarValor()

            modalAlterarValor()

            alterarValorParaBaixo()

            cy.wait(400)
    
            avancarFinal()
    
            cy.wait(6000)
        })

        it('Pedido de venda: produtos 1860 0 0 - arredondar para cima', () => {
    
            processoVendaPrincipal()
    
            escolherClientePedido()
    
            cy.wait(500)
    
            produtoNormalPrimeiro()
    
            saldodisponivel()
    
            escolherProdutoPesquisa()
    
            cy.wait(200)
    
            // // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM

            escolherVoltagemProduto()
         
            clicarAdicionarProduto()
    
            cy.wait(500)

            modalServicosVinculados()

            okServicosVinculados()
    
            tirarEntrega()
    
            tirarMontagem()
    
            cy.wait(400)

            avancarParaParcelas()
    
            // tela de GERAR PARCELAS
    
            cy.wait(5000)

            botaoGerarParcelas()

            carregandoFormaPagamento()
    
            cy.wait(4000)
    
            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            arrastarFormaPagamento()

            clicarAlterarValor()

            modalAlterarValor()

            alterarValorParaCima()

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