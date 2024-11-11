import { titulopagina } from '../../../support/para_todos';
import { escolherClientePedido, saldodisponivel, escolherProdutoPesquisa, escolherVoltagemProduto, 
         clicarAdicionarProduto, modalServicosVinculados, okServicosVinculados, tirarMontagem, tirarEntrega, semSaldodisponivel, 
         avancarParaTransportadora, modalInconsRotaTransp, escolherTransportadora, escolherRota, avancarParcelasEntrega, botaoGerarParcelas, 
         carregandoFormaPagamento, avancarFinal, trocarFilialFaturamento, botaoFinalizarPedido, finalizandoPedido, pedidoGerado, avancarParaParcelas, 
         escolherFormaPagamentoPrincipal, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/gerais_pedidos';
import { primeiroPrdNormalExclusiva, kitSemSaldoAgendamento, kitVolumes, produtoSaldoReceber, prdSaldoReceberDuasLinhas, aumentarQuantVendaCinco, 
         saldoRemotoAReceber, aumentarQuantVendaDez, processoVendaExclusiva } from '../../../support/para_pedidos/para_pedidos_exclusiva';

//Para testarmos esses cenários, é necessário mudar para a versão da exclusiva e criar um agendamento na filial que está sendo usada
describe('Pedidos Exclusiva - Parâmetro de empresa 1019 marcado', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        titulopagina()
    })

    context('Configuração de processo - Exclusiva: 36 = 2; 139 = 6; 552= 5 dias', () => {

        it.skip('Vender um produto normal (com saldo e com entrega, 15 dias) e um kit remoto (2 composições, sem saldo e sem a receber, 20 dias).', () => {
            
            processoVendaExclusiva()
    
            escolherClientePedido()
    
            cy.wait(500)

            primeiroPrdNormalExclusiva()

            saldodisponivel()
    
            escolherProdutoPesquisa()
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
    
            cy.wait(200)
                      
            escolherVoltagemProduto() 
            
            clicarAdicionarProduto()
    
            cy.wait(500)

            modalServicosVinculados()

            okServicosVinculados()
    
            cy.wait(400)

            kitSemSaldoAgendamento()

            semSaldodisponivel()

            cy.wait(800)

            escolherProdutoPesquisa()
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
    
            cy.wait(200)
                      
            escolherVoltagemProduto()

            cy.wait(400)

            trocarFilialFaturamento()

            clicarAdicionarProduto()

            cy.wait(500)

            avancarParaTransportadora()
    
            // tela para ESCOLHER TRANSPORTADORA

            cy.wait(12000)

            modalInconsRotaTransp()
    
            escolherTransportadora()
        
            escolherRota()

            avancarParcelasEntrega()
        
            cy.wait(7000)

            // tela de GERAR PARCELAS

            botaoGerarParcelas()

            carregandoFormaPagamento()

            cy.wait(7000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(10000)
        })

        it.skip('Vender um produto normal (com saldo e com entrega) e um kit com composição 6 volumes (data atual + parametro 552/ 5 dias).', () => {
            
            processoVendaExclusiva()
    
            escolherClientePedido()
    
            cy.wait(500)

            primeiroPrdNormalExclusiva()

            saldodisponivel()
    
            escolherProdutoPesquisa()
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
    
            cy.wait(200)
                      
            escolherVoltagemProduto() 
            
            clicarAdicionarProduto()
    
            cy.wait(500)

            modalServicosVinculados()

            okServicosVinculados()
    
            cy.wait(400)

            kitVolumes()

            saldodisponivel()

            cy.wait(800)
    
            escolherProdutoPesquisa()
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
    
            cy.wait(200)
                      
            escolherVoltagemProduto()

            cy.wait(400)

            clicarAdicionarProduto()

            cy.wait(500)

            avancarParaTransportadora()
    
            // tela para ESCOLHER TRANSPORTADORA

            cy.wait(12000)

            modalInconsRotaTransp()
    
            escolherTransportadora()
        
            escolherRota()

            avancarParcelasEntrega()
        
            cy.wait(7000)

            // tela de GERAR PARCELAS

            botaoGerarParcelas()

            carregandoFormaPagamento()

            cy.wait(7000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(10000)
        })
    })

    context('Configuração de processo - Exclusiva: 36 = 2; 139 = 6; 552= 5 dias', () => {

        it.skip('Vender um produto (sem saldo e com saldo a receber para 10 dias, e com entrega), e ter um agendamento para a data de previsão.', () => {
            
            processoVendaExclusiva()
    
            escolherClientePedido()
    
            cy.wait(500)

            produtoSaldoReceber()

            saldodisponivel()
    
            escolherProdutoPesquisa()
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
    
            cy.wait(200)
                      
            escolherVoltagemProduto() 
            
            clicarAdicionarProduto()
    
            cy.wait(500)

            modalServicosVinculados()

            okServicosVinculados()
    
            cy.wait(400)

            avancarParaTransportadora()
    
            // tela para ESCOLHER TRANSPORTADORA

            cy.wait(12000)

            modalInconsRotaTransp()
    
            escolherTransportadora()
        
            escolherRota()

            avancarParcelasEntrega()
        
            cy.wait(7000)

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

        //necessário esperar tarefa PVW-220
        it.skip('Vender um produto em duas linhas (um com 5 unidades a receber e 10 para solicitar compra), e ter um agendamento para a data de previsão para a receber.', () => {
            
            processoVendaExclusiva()
    
            escolherClientePedido()
    
            cy.wait(500)

            prdSaldoReceberDuasLinhas()

            saldoRemotoAReceber()
    
            escolherProdutoPesquisa()
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
    
            cy.wait(200)
                      
            escolherVoltagemProduto() 

            trocarFilialFaturamento()

            aumentarQuantVendaCinco()

            clicarAdicionarProduto()

            cy.wait(800)

            prdSaldoReceberDuasLinhas()

            saldoRemotoAReceber()

            cy.wait(800)

            escolherProdutoPesquisa()
                      
            escolherVoltagemProduto() 

            trocarFilialFaturamento()

            aumentarQuantVendaDez()
            
            
        })

        it.skip('Pedido de venda normal: produto 1896 0 0 (sem entrega)', () => {
            
            processoVendaExclusiva()
    
            escolherClientePedido()
    
            cy.wait(500)
    
            primeiroPrdNormalExclusiva()
    
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
    
            cy.wait(400)

            avancarParaParcelas()
    
            // tela de GERAR PARCELAS
    
            cy.wait(5500)

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
        cy.wait(8000)
        pedidoGerado()
      });
})