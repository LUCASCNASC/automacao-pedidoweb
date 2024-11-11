import { titulopagina } from '../../../support/para_todos';
import { escolherTransportadora, saldodisponivel, escolherRota, escolherClientePedido, pedidoGerado, botaoFinalizarPedido, finalizandoPedido,
         clicarAdicionarProduto, botaoGerarParcelas, processoVendaPrincipal, avancarParaTransportadora, avancarParcelasEntrega, modalServicosVinculados,
         okServicosVinculados, escolherProdutoPesquisa, escolherVoltagemProduto, avancarFinal, trocarFilialFaturamento, modalInconsApenasRota,
         carregandoFormaPagamento, semSaldodisponivel, escolherFormaPagamentoPrincipal, escolherDuasParcelaPagamento} from '../../../support/para_pedidos/gerais_pedidos';
import { produtoNormalPrimeiro, produtoNormalSegundo, produtoRemotoComCD, produtoRemotoSemCD } from '../../../support/para_pedidos/produtos_pedidos';

describe('Remoto/processo 9860 - Regra de saldo Parâmetro 36 = 4 - Parâmetro 139 = 4 - Trial 653 não configurado', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login(); 
        titulopagina() 
    })
  
    context('Pedido de venda remotO normal', () => {

        it('Pedido de venda remota: produto 1860 0 0 - (Venda remota de produto com saldo na filial do faturamento )', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoNormalPrimeiro()

            saldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            cy.wait(400)

            trocarFilialFaturamento()

            clicarAdicionarProduto()

            cy.wait(500)

            modalServicosVinculados()

            okServicosVinculados()

            cy.wait(400)

            avancarParaTransportadora()

            // tela para ESCOLHER TRANSPORTADORA

            cy.wait(14000)

            modalInconsApenasRota()

            escolherTransportadora()
        
            escolherRota()

            avancarParcelasEntrega()
        
            cy.wait(10000)

            // tela de GERAR PARCELAS

            botaoGerarParcelas()

            carregandoFormaPagamento()

            cy.wait(8000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(9000)

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR
            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(7000)

            pedidoGerado()
        })

        it('Pedido de venda remota: produtos 1860 0 0 e 1870 0 0', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoNormalPrimeiro()

            saldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            cy.wait(400)

            trocarFilialFaturamento()

            clicarAdicionarProduto()

            cy.wait(500)

            modalServicosVinculados()

            okServicosVinculados()

            cy.wait(800)

            produtoNormalSegundo()

            saldodisponivel()

            escolherProdutoPesquisa()

            escolherVoltagemProduto()

            cy.wait(800)

            trocarFilialFaturamento()

            botãoAdicionar()

            cy.wait(1000)

            modalServicosVinculados()

            okServicosVinculados()

            cy.wait(400)

            avancarParaTransportadora()

            // tela para ESCOLHER TRANSPORTADORA

            cy.wait(14000)

            modalInconsApenasRota()

            escolherTransportadora()
        
            escolherRota()

            avancarParcelasEntrega()
        
            cy.wait(10000)

            // tela de GERAR PARCELAS

            botaoGerarParcelas()

            carregandoFormaPagamento()

            cy.wait(12000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(18000)

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR
            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(7000)

            pedidoGerado()
        })
        
        it('Pedido de venda remota: kit 1862 0 0', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoNormalPrimeiro()

            saldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            cy.wait(400)

            trocarFilialFaturamento()

            clicarAdicionarProduto()

            cy.wait(500)

            modalServicosVinculados()

            okServicosVinculados()

            cy.wait(400)

            avancarParaTransportadora()

            // tela para ESCOLHER TRANSPORTADORA

            cy.wait(14000)

            modalInconsApenasRota()

            escolherTransportadora()
        
            escolherRota()

            avancarParcelasEntrega()
        
            cy.wait(10000)

            // tela de GERAR PARCELAS

            botaoGerarParcelas()

            carregandoFormaPagamento()

            cy.wait(8000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(9000)

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR
            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(7000)

            pedidoGerado()
        })
    })
    
    context('Pedido de venda remoto sem saldo remoto, pegar CD', () => {

        it('Pedido de venda remoto - com saldo no CD (filial 1) - deve permitir fazer o pedido - (Venda remota de produto sem saldo na filial do faturamento, mas com saldo no CD do faturamento - com entrega)', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoRemotoComCD()

            semSaldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            cy.wait(400)

            trocarFilialFaturamento()

            clicarAdicionarProduto()

            cy.wait(500)

            modalServicosVinculados()

            okServicosVinculados()

            cy.wait(400)

            avancarParaTransportadora()

            // tela para ESCOLHER TRANSPORTADORA

            cy.wait(10000)

            modalInconsApenasRota()

            escolherTransportadora()
        
            escolherRota()

            avancarParcelasEntrega()
        
            cy.wait(6000)

            // tela de GERAR PARCELAS

            botaoGerarParcelas()

            carregandoFormaPagamento()

            cy.wait(5000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(6000)

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR
            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(7000)

            pedidoGerado()
        })    
        
        it('Pedido de venda remoto - SEM saldo no CD (filial 1) - NÃO deve permitir fazer o pedido - (Venda remota de produto sem saldo na filial do faturamento, sem saldo da CD do faturamento)', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoRemotoSemCD()

            semSaldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            cy.wait(400)

            trocarFilialFaturamento()

            //Validando mensagem "Este produto não possui saldo na filial selecionada."
            cy.get('[ng-if="semSaldoCD"][style=""] > p')
                .should('exist')
                .and('be.visible')
                .and('have.text','Este produto não possui saldo na filial selecionada.')
                .invoke('css', 'color') // Obtém a cor do elemento
                .should('equal', 'rgb(244, 67, 54)')

            //Validando mensagem "Este produto não possui saldo na filial selecionada, será permitido apenas a simulação da venda."
            cy.get('[ng-show="(itemGradeSelecionado && itemGradeSelecionado.valor > 0)"] > :nth-child(1) > .mensagem-erro-centralizada > p')
                .should('exist')
                .and('be.visible')
                .and('have.text','Este produto não possui saldo na filial selecionada, será permitido apenas a simulação da venda.')
                .invoke('css', 'color') // Obtém a cor do elemento
                .should('equal', 'rgb(244, 67, 54)')

            //Validando botão Adicionar para Simulação
            cy.get('.md-primary.btn-rounded.md-raised.btn-block')
                .should('exist')
                .and('not.be.disabled')
                .and('contain',' Adicionar para Simulação')
        })    
    })
})