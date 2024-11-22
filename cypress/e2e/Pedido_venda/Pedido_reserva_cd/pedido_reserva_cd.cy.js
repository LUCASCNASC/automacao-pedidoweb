import { titulopagina } from '../../../support/para_todos';
import { escolherTransportadora, saldodisponivel, escolherRota, escolherClientePedido, pedidoGerado, botaoFinalizarPedido, finalizandoPedido,
         clicarAdicionarProduto, tirarEntrega, tirarMontagem, tirarEntregaSegundo, tirarMontagemSegundo, botaoGerarParcelas, processoVendaPrincipal,
         avancarParaParcelas, avancarParaTransportadora, avancarParcelasEntrega, modalServicosVinculados, okServicosVinculados,
         escolherProdutoPesquisa, escolherVoltagemProduto, avancarFinal, modalInconsRotaTransp, carregandoFormaPagamento, 
         saldoCDDisponivel, escolherFormaPagamentoPrincipal, escolherDuasParcelaPagamento} from '../../../support/para_pedidos/gerais_pedidos';
import { produtoCDPrimeiro, produtoNormalSegundo} from '../../../support/para_pedidos/produtos_pedidos';

describe('Gerar pedido com reserva no CD - Regra de saldo Parâmetro 36 = 4 - Parâmetro 139 = 4 - Trial 653 não configurado', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        titulopagina() 
        processoVendaPrincipal()
        escolherClientePedido()
        cy.wait(500)
    })

    context('Sem frete/ processo 9860 - caminho feliz', () => {

        it('Venda: produto 1880 0 0 - (Venda local de produto com saldo só no CD - sem entrega)', () => {

            produtoCDPrimeiro()
            saldoCDDisponivel()
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
            cy.wait(6500)
    
            // tela de GERAR PARCELAS

            botaoGerarParcelas()
            carregandoFormaPagamento()
    
            cy.wait(5000)
    
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)
    
            avancarFinal()
            cy.wait(6000) 
        })

        it('Venda: produtos 1880 0 0 (reserva CD) e 1870 0 0 (saldo local) - (Venda local de 1 produto com saldo local + 1 produto com saldo no CD - sem entrega)', () => {

            produtoCDPrimeiro()
            saldoCDDisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)
                     
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM

            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(500)

            modalServicosVinculados()
            okServicosVinculados()
    
            tirarEntrega()
            tirarMontagem()
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
            tirarMontagemSegundo()
            cy.wait(400)
    
            avancarParaParcelas()
            cy.wait(6500)
    
            // tela de GERAR PARCELAS
    
            botaoGerarParcelas()
            carregandoFormaPagamento()
            cy.wait(6000)
    
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)
    
            avancarFinal()
            cy.wait(7000)
        })
    })

    context('Com frete/ processo 9860 - caminho feliz', () => {

        it('Venda: produto 1880 0 0 - (Venda local de produto com saldo só no CD - com entrega)', () => {
            
            produtoCDPrimeiro()
            saldoCDDisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                      
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(500)

            modalServicosVinculados()
            okServicosVinculados()
    
            tirarMontagem()
            cy.wait(400)
    
            avancarParaTransportadora()
            cy.wait(12000)
    
            // tela para ESCOLHER TRANSPORTADORA

            modalInconsRotaTransp()
            escolherTransportadora()
            escolherRota()

            avancarParcelasEntrega()
            cy.wait(7500)

            // tela de GERAR PARCELAS

            botaoGerarParcelas()
            carregandoFormaPagamento()
            cy.wait(6500)

            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)

            avancarFinal()
            cy.wait(7000)
        })

        it('Venda: produtos 1880 0 0 (reserva CD) e 1870 0 0 (saldo local) - (Venda local de 1 produto com saldo local + 1 produto com saldo no CD - com entrega)', () => {
            
            produtoCDPrimeiro()
            saldoCDDisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                      
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
            cy.wait(1000)
    
            avancarParaTransportadora()
            cy.wait(14000)
    
            // tela para ESCOLHER TRANSPORTADORA

            modalInconsRotaTransp()
            escolherTransportadora()
            escolherRota()

            avancarParcelasEntrega()
            cy.wait(8000)

            // tela de GERAR PARCELAS

            botaoGerarParcelas()
            carregandoFormaPagamento()
            cy.wait(7000)

            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)

            avancarFinal()
            cy.wait(9000)
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