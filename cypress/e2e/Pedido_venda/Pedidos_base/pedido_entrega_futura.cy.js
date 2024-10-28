import { titulopagina } from '../../../support/para_todos';
import { escolherTransportadora, saldodisponivel, escolherRota, escolherClientePedido, pedidoGerado, botaoFinalizarPedido, 
    finalizandoPedido, botãoAdicionar, tirarEntrega, tirarMontagem, tirarEntregaSegundo, tirarMontagemSegundo, botaoGerarParcelas, 
    processoEntregaFutura, avancarParaParcelas, avancarParaTransportadora, avancarParcelasEntrega, 
    modalServicosVinculados, okServicosVinculados, escolherProdutoPesquisa, escolherVoltagemProduto, avancarFinal, modalInconsApenasTransp } from '../../../support/para_pedidos/gerais_pedidos';
import { produtoNormalPrimeiro, produtoNormalSegundo } from '../../../support/para_pedidos/produtos_pedidos';

describe('Gerar pedido de entrega futura', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
        titulopagina() //Validar título da aba carregada
    })

    context('Sem frete/ processo 9862 - caminho feliz', () => {

        it.skip('Pedido de venda: produto 1860 0 0', () => {
    
            processoEntregaFutura()
    
            escolherClientePedido()
    
            cy.wait(500)
    
            //Pesquisando produto
            produtoNormalPrimeiro()
    
            saldodisponivel()
    
            escolherProdutoPesquisa()
    
            cy.wait(200)
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                      
            escolherVoltagemProduto()
            
            //clicar no botão "ADICIONAR", para adicionar produto
            botãoAdicionar()
    
            cy.wait(500)
    
            modalServicosVinculados()

            okServicosVinculados()
    
            tirarEntrega()

            tirarMontagem()
    
            cy.wait(400)
    
            avancarParaParcelas()
    
            // tela de GERAR PARCELAS
    
            cy.wait(6500)
    
            botaoGerarParcelas()
    
            cy.wait(5500)
    
            //Selecionando forma de pagamento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
                .click()
    
            //Selecionando parcela na forma de pagamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
                .click()
    
            cy.wait(400)
    
            //Botão "AVANÇAR"
            avancarFinal()
    
            cy.wait(5500)
    
            // RESUMO DO PEDIDO - ANTES DE FINALIZAR
    
            botaoFinalizarPedido()

            finalizandoPedido()
    
            cy.wait(7500)
    
            pedidoGerado()
        })
        
        it.skip('Pedido de venda: produtos 1860 0 0 e 1870 0 0', () => {
    
            processoEntregaFutura()
    
            escolherClientePedido()
    
            cy.wait(500)
    
            //Pesquisando produto
            produtoNormalPrimeiro()
    
            saldodisponivel()
    
            escolherProdutoPesquisa()
    
            cy.wait(200)
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                      
            escolherVoltagemProduto()
            
            //clicar no botão "ADICIONAR", para adicionar produto
            botãoAdicionar()
    
            cy.wait(500)
    
            modalServicosVinculados()

            okServicosVinculados()
    
            tirarEntrega()

            tirarMontagem()

            cy.wait(800)
    
            //Pesquisando segundo produto
            produtoNormalSegundo()
    
            saldodisponivel()
    
            escolherProdutoPesquisa()
    
            cy.wait(800)
    
            escolherVoltagemProduto()
    
            //clicar no botão "ADICIONAR", para adicionar produto
            botãoAdicionar()
    
            cy.wait(500)
    
            modalServicosVinculados()

            okServicosVinculados()
                
            tirarEntregaSegundo()
    
            tirarMontagemSegundo()
    
            cy.wait(400)
    
            avancarParaParcelas()
    
            // tela de GERAR PARCELAS
    
            cy.wait(7000)
    
            botaoGerarParcelas()
    
            cy.wait(5000)
    
            //Selecionando forma de pagamento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
                .click()
    
            //Selecionando parcela na forma de pagamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
                .click()
    
            cy.wait(400)
    
            //Botão "AVANÇAR"
            avancarFinal()
    
            cy.wait(7500)
    
            // RESUMO DO PEDIDO - ANTES DE FINALIZAR
    
            botaoFinalizarPedido()

            finalizandoPedido()
    
            cy.wait(9000)
    
            pedidoGerado()
        })
    })
    
    context('Com frete/ processo 9862 - caminho feliz', () => {

        it.skip('Pedido de venda: produto 1860 0 0', () => {
    
            processoEntregaFutura()
    
            escolherClientePedido()
    
            cy.wait(500)
    
            //Pesquisando produto
            produtoNormalPrimeiro()
    
            saldodisponivel()
    
            escolherProdutoPesquisa()
    
            cy.wait(200)
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                      
            escolherVoltagemProduto()
            
            //clicar no botão "ADICIONAR", para adicionar produto
            botãoAdicionar()
    
            cy.wait(500)
    
            modalServicosVinculados()

            okServicosVinculados()
    
            cy.wait(400)
    
            avancarParaTransportadora()
    
            // tela para ESCOLHER TRANSPORTADORA

            cy.wait(13000)

            modalInconsApenasTransp()
    
            escolherTransportadora()
        
            escolherRota()

            avancarParcelasEntrega()
        
            cy.wait(7000)

            // tela de GERAR PARCELAS

            botaoGerarParcelas()

            cy.wait(5500)

            //Selecionando forma de pagamento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
                .click()

            //Selecionando parcela na forma de pagamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
                .click()

            cy.wait(400)

            //Botão "AVANÇAR"
            avancarFinal()

            cy.wait(6500)

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(8500)

            pedidoGerado()
        })    
        
        it.skip('Pedido de venda: produtos 1860 0 0 e 1870 0 0', () => {
    
            processoEntregaFutura()
    
            escolherClientePedido()
    
            cy.wait(500)
    
            //Pesquisando produto
            produtoNormalPrimeiro()

            saldodisponivel()
    
            escolherProdutoPesquisa()
    
            cy.wait(200)
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                      
            escolherVoltagemProduto()
            
            //clicar no botão "ADICIONAR", para adicionar produto
            botãoAdicionar()
    
            cy.wait(500)
    
            modalServicosVinculados()

            okServicosVinculados()
    
            cy.wait(800)
    
            //Pesquisando segundo produto
            produtoNormalSegundo()
    
            saldodisponivel()
    
            escolherProdutoPesquisa()
    
            cy.wait(800)
    
            escolherVoltagemProduto()
    
            //clicar no botão "ADICIONAR", para adicionar produto
            botãoAdicionar()
    
            cy.wait(500)
    
            modalServicosVinculados()

            okServicosVinculados()
    
            cy.wait(400)
    
            avancarParaTransportadora()
    
            // tela para ESCOLHER TRANSPORTADORA

            cy.wait(14000)

            modalInconsApenasTransp()
    
            escolherTransportadora()
        
            escolherRota()

            avancarParcelasEntrega()
        
            cy.wait(8000)

            // tela de GERAR PARCELAS

            botaoGerarParcelas()

            cy.wait(6500)

            //Selecionando forma de pagamento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
                .click()

            //Selecionando parcela na forma de pagamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
                .click()

            cy.wait(400)

            //Botão "AVANÇAR"
            avancarFinal()

            cy.wait(9000)

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(10000)

            pedidoGerado()
        })  
    })
})