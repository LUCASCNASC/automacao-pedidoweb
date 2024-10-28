import { titulopagina } from '../../../support/para_todos';
import { escolherTransportadora, saldodisponivel, escolherRota, escolherClientePedido, pedidoGerado, botaoFinalizarPedido, 
    finalizandoPedido, botãoAdicionar, tirarEntrega, tirarMontagem, tirarEntregaSegundo, tirarMontagemSegundo, botaoGerarParcelas, processoVendaPrincipal, avancarParaParcelas, avancarParaTransportadora, avancarParcelasEntrega, 
    modalServicosVinculados, okServicosVinculados, escolherProdutoPesquisa, escolherVoltagemProduto, avancarFinal } from '../../../support/para_pedidos/gerais_pedidos'
import { produtoNormalSegundo, produtoPromoPartida, produtoPromoPrazoEntrada, produtoPromoPrazoParcelado } from '../../../support/para_pedidos/produtos_pedidos';

describe('Gerar pedidos com promoção', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
        titulopagina() //Validar título da aba carregada
    })
  
    context('Sem entrega/ com promoção/ processo 9860 - caminho feliz', () => {

        it.skip('Pedido com promoção partida (promoção 152): produto 1868 0 0', () => {
    
            processoVendaPrincipal()
    
            escolherClientePedido()
    
            cy.wait(500)
    
            produtoPromoPartida()
    
            saldodisponivel()
    
            escolherProdutoPesquisa()
    
            cy.wait(200)
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                      
            escolherVoltagemProduto()
    
            //Usar promoção, no card "Promoções"
            cy.get('.md-3-line > div.md-button > .md-no-style')
                .click()
    
            //Escolher uma forma de pagamento, no card de "Formas de pagamento"
            cy.get('#dialogContent_121 > .white > [style=""] > div.md-button > .md-no-style')
                .click()
    
            //clicar no botão "ADICIONAR", para adicionar produto
            botãoAdicionar()
    
            cy.wait(500)
    
            modalServicosVinculados()

            okServicosVinculados()
    
            tirarEntrega()

            tirarMontagem()
    
            cy.wait(400)
    
            avancarParaParcelas()
    
            // tela de PAGAMENTO
    
            cy.wait(9000)
    
            //Botão "AVANÇAR"
            avancarFinal()
    
            cy.wait(8000)
    
            // RESUMO DO PEDIDO - ANTES DE FINALIZAR
    
            botaoFinalizarPedido()

            finalizandoPedido()
    
            cy.wait(7500)
    
            pedidoGerado()
        })
    
        it.skip('Pedido com promoção a prazo com entrada (promoção 150): produto 1866 0 0', () => {
    
            processoVendaPrincipal()
    
            escolherClientePedido()
    
            cy.wait(500)
    
            produtoPromoPrazoEntrada()
    
            saldodisponivel()
    
            escolherProdutoPesquisa()
    
            cy.wait(200)
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                      
            escolherVoltagemProduto()
            
            cy.wait(400)
    
            //Clicar na promoção escolhida - Card de promoção
            cy.get('.md-3-line > div.md-button > .md-no-style')
                .click()
    
            //Card de Formas de pagamento - escolher forma de pagamento
            cy.get('#dialogContent_124 > .white > [style=""] > div.md-button > .md-no-style')
                .click()
    
            //clicar no botão "ADICIONAR", para adicionar produto
            botãoAdicionar()
    
            cy.wait(500)
    
            modalServicosVinculados()

            okServicosVinculados()
    
            tirarEntrega()

            tirarMontagem()
    
            cy.wait(400)
    
            avancarParaParcelas()

            cy.wait(7500)
    
            // tela de GERAR PARCELAS
    
            //Abrir opções de processos a receber entrada
            cy.get('#select_191')
                .click
    
            //Escolher processo a receber de entrada
            cy.get('#select_option_203 > .md-text')
                .click({force:true})
    
            //Botão "GERAR PAGAMENTO"
            cy.get('.white > .layout-align-center-center > .md-primary')
                .click()
    
            cy.wait(400)
    
            //Botão "AVANÇAR"
            avancarFinal()
    
            cy.wait(6000)
    
            // RESUMO DO PEDIDO - ANTES DE FINALIZAR
    
            botaoFinalizarPedido()

            finalizandoPedido()
    
            cy.wait(10000)
    
            pedidoGerado()
        })
    
        it.skip('Pedido com promoção a prazo parcelado (promoção 151): produto 1867 0 0', () => {
    
            processoVendaPrincipal()
    
            escolherClientePedido()
    
            cy.wait(500)
    
            produtoPromoPrazoParcelado()
    
            saldodisponivel()
    
            escolherProdutoPesquisa()
    
            cy.wait(200)
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                      
            escolherVoltagemProduto()
    
            //Usar promoção, no card "Promoções"
            cy.get('.md-3-line > div.md-button > .md-no-style')
                .click()
    
            //Escolher uma forma de pagamento, no card de "Formas de pagamento"
            cy.get('#dialogContent_121 > .white > [style=""] > div.md-button > .md-no-style')
                .click()
    
            //clicar no botão "ADICIONAR", para adicionar produto
            botãoAdicionar()
    
            cy.wait(500)
    
            modalServicosVinculados()

            okServicosVinculados()
                
            tirarEntrega()

            tirarMontagem()
    
            cy.wait(400)
    
            avancarParaParcelas()
    
            // tela de PAGAMENTO
    
            cy.wait(14000)
    
            //Botão "AVANÇAR"
            avancarFinal()
    
            cy.wait(6000)
    
            // RESUMO DO PEDIDO - ANTES DE FINALIZAR
    
            botaoFinalizarPedido()

            finalizandoPedido()
    
            cy.wait(7500)
    
            pedidoGerado()
        })
    })

    context('Sem entrega/ com promoção e sem promoção/ processo 9860 - caminho feliz', () => {

        it.skip('Pedido com promoção partida (promoção 152): produto 1868 0 0 e produto 1870 0 0 (sem promoção)', () => {
    
            processoVendaPrincipal()
    
            escolherClientePedido()
    
            cy.wait(500)
    
            produtoPromoPartida()
    
            saldodisponivel()
    
            escolherProdutoPesquisa()
    
            cy.wait(200)
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                      
            escolherVoltagemProduto()
    
            //Usar promoção, no card "Promoções"
            cy.get('.md-3-line > div.md-button > .md-no-style')
                .click()
    
            //Escolher uma forma de pagamento, no card de "Formas de pagamento"
            cy.get('#dialogContent_121 > .white > [style=""] > div.md-button > .md-no-style')
                .click()
    
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
    
            cy.wait(14000)

            //Tela de PARCELAS

            botaoGerarParcelas()
            
            cy.wait(6500)

            //Escolher forma de pagamento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
                .click()

            //Escolher parcelamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
                .click()

            cy.wait(1000)

            //Avançar para finalizar o pedido
            avancarFinal()

            cy.wait(9000)
            
            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(10000)
    
            pedidoGerado()
        })

        it.skip('Pedido com promoção a prazo com entrada (promoção 150): produto 1866 0 0 e produto 1870 0 0 (sem promoção)', () => {
    
            processoVendaPrincipal()
    
            escolherClientePedido()
    
            cy.wait(500)
    
            produtoPromoPrazoEntrada()
    
            saldodisponivel()
    
            escolherProdutoPesquisa()
    
            cy.wait(200)
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                      
            escolherVoltagemProduto()
            
            cy.wait(400)
    
            //Clicar na promoção escolhida - Card de promoção
            cy.get('.md-3-line > div.md-button > .md-no-style')
                .click()
    
            //Card de Formas de pagamento - escolher forma de pagamento
            cy.get('#dialogContent_124 > .white > [style=""] > div.md-button > .md-no-style')
                .click()
    
            //clicar no botão "ADICIONAR", para adicionar produto
            botãoAdicionar()
    
            cy.wait(500)
    
            modalServicosVinculados()

            okServicosVinculados()
                
            tirarEntrega()

            tirarMontagem()
    
            cy.wait(400)

            escolherProdutoPesquisa()
    
            //Validando informações do segundo produto após pesquisar
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
    
            cy.wait(14000)
    
            //Abrir opções de processos a receber entrada
            cy.get('#select_348')
                .click({force:true})
    
            //Escolher processo a receber de entrada
            cy.contains('div.md-text', '3861 - T.A. A Receber A Vista')
                .click({force:true})
    
            //Botão "GERAR PAGAMENTO"
            cy.get('.white > .layout-align-center-center > .md-primary')
                .click({force:true})
    
            cy.wait(400)

            botaoGerarParcelas()

            cy.wait(6000)
    
            //Selecionando forma de pagamento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
                .click()
    
            //Selecionando parcela na forma de pagamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
                .click()
    
            cy.wait(400)
    
            //Botão "AVANÇAR"
            avancarFinal()
    
            cy.wait(8000)
    
            botaoFinalizarPedido()

            finalizandoPedido()
    
            cy.wait(10000)
    
            pedidoGerado()
        })
    })

    context('Com entrega /com promoção/ processo 9860 - caminho feliz', () => {

        it.skip('Pedido com promoção partida (promoção 152): produto 1868 0 0', () => {
    
            processoVendaPrincipal()
    
            escolherClientePedido()
    
            cy.wait(500)
    
            produtoPromoPartida()

            saldodisponivel()
    
            escolherProdutoPesquisa()
    
            cy.wait(200)
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                      
            escolherVoltagemProduto()
    
            //Usar promoção, no card "Promoções"
            cy.get('.md-3-line > div.md-button > .md-no-style')
                .click()
    
            //Escolher uma forma de pagamento, no card de "Formas de pagamento"
            cy.get('#dialogContent_121 > .white > [style=""] > div.md-button > .md-no-style')
                .click()
    
            //clicar no botão "ADICIONAR", para adicionar produto
            botãoAdicionar()
    
            cy.wait(500)
    
            modalServicosVinculados()

            okServicosVinculados()
    
            avancarParaTransportadora()
    
            cy.wait(14000)

            // tela para ESCOLHER TRANSPORTADORA

            //Card de inconsistencias - fechar
            cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                .click()
    
            escolherTransportadora()
        
            escolherRota()

            avancarParcelasEntrega()
        
            cy.wait(15000)
    
            botaoGerarParcelas()

            cy.wait(6500)

            //Escolher "Forma de pagamento"
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
                .click()

            //Escolher parcelamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
                .click()

            cy.wait(400)

            //Clicar para avançar para a tela de finalizar pedido
            avancarFinal()
            
            cy.wait(9000)

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR
    
            botaoFinalizarPedido()

            finalizandoPedido()
    
            cy.wait(9000)
    
            pedidoGerado()
        })
    
        it.skip('Pedido com promoção a prazo com entrada (promoção 150): produto 1866 0 0', () => {

            processoVendaPrincipal()

            escolherClientePedido()
    
            cy.wait(500)
    
            produtoPromoPrazoEntrada()
    
            saldodisponivel()
    
            escolherProdutoPesquisa()
    
            cy.wait(200)
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                      
            escolherVoltagemProduto()
            
            cy.wait(400)
    
            //Clicar na promoção escolhida - Card de promoção
            cy.get('.md-3-line > div.md-button > .md-no-style')
                .click()
    
            //Card de Formas de pagamento - escolher forma de pagamento
            cy.get('#dialogContent_124 > .white > [style=""] > div.md-button > .md-no-style')
                .click()
    
            //clicar no botão "ADICIONAR", para adicionar produto
            botãoAdicionar()
    
            cy.wait(500)
    
            modalServicosVinculados()

            okServicosVinculados()
    
            cy.wait(400)
    
            avancarParaTransportadora()
    
            cy.wait(14000)

            // tela para ESCOLHER TRANSPORTADORA

            //Card de inconsistencias - fechar
            cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                .click()
    
            escolherTransportadora()
        
            escolherRota()

            avancarParcelasEntrega()
        
            cy.wait(15000)

            // tela de GERAR PARCELAS

            //Escolher forma de pagamento na entrada
            cy.get('#select_931')
                .click({force:true})

            //Escolher o processo para a forma de pagamento de entrada
            cy.get('#select_option_943')
                .click({force:true})

            cy.wait(400)

            //Botão GERAR PAGAMENTO
            cy.get('.white > .layout-align-center-center > .md-primary')
                .click({force:true})

            botaoGerarParcelas()

            cy.wait(7500)

            //Escolher "Forma de pagamento"
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
                .click()

            //Escolher parcelamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
                .click()

            cy.wait(400)

            avancarFinal()
            
            cy.wait(9000)

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR
    
            botaoFinalizarPedido()

            finalizandoPedido()
    
            cy.wait(9000)
    
            pedidoGerado()
        })

        it.skip('Pedido com promoção a prazo parcelado (promoção 151): produto 1867 0 0', () => {
    
            processoVendaPrincipal()
    
            escolherClientePedido()
    
            cy.wait(500)
    
            produtoPromoPrazoParcelado()
    
            saldodisponivel()
    
            escolherProdutoPesquisa()
    
            cy.wait(200)
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                      
            escolherVoltagemProduto()
    
            //Usar promoção, no card "Promoções"
            cy.get('.md-3-line > div.md-button > .md-no-style')
                .click()
    
            //Escolher uma forma de pagamento, no card de "Formas de pagamento"
            cy.get('#dialogContent_121 > .white > [style=""] > div.md-button > .md-no-style')
                .click()
    
            //clicar no botão "ADICIONAR", para adicionar produto
            botãoAdicionar()
    
            cy.wait(500)
    
            modalServicosVinculados()

            okServicosVinculados()
    
            cy.wait(400)
    
            avancarParaTransportadora()
    
            cy.wait(14000)

            // tela para ESCOLHER TRANSPORTADORA

            //Card de inconsistencias - fechar
            cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                .click()

            escolherTransportadora()
        
            escolherRota()

            avancarParcelasEntrega()
        
            cy.wait(15000)

            // tela de GERAR PARCELAS

            botaoGerarParcelas()

            cy.wait(7000)

            //Escolher a forma de pagamento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
                .click({force:true})

            //Escolher a forma de pagamento/parcelas
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
                .click({force:true})

            cy.wait(400)

            //Clicar no botão AVANÇAR, para ir para a última tela, para finalizar
            avancarFinal()

            cy.wait(8000)

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            finalizandoPedido()
    
            cy.wait(9000)
    
            pedidoGerado()
        })  
    }) 

    context('Com entrega/ com promoção e sem promoção/ processo 9860 - caminho feliz', () => {

        it.skip('Pedido com promoção partida (promoção 152): produto 1868 0 0 e produto 1870 0 0 (sem promoção)', () => {
    
            processoVendaPrincipal()
    
            escolherClientePedido()
    
            cy.wait(500)
    
            produtoPromoPartida()

            saldodisponivel()
    
            escolherProdutoPesquisa()
    
            cy.wait(200)
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                      
            escolherVoltagemProduto()
    
            //Usar promoção, no card "Promoções"
            cy.get('.md-3-line > div.md-button > .md-no-style')
                .click()
    
            //Escolher uma forma de pagamento, no card de "Formas de pagamento"
            cy.get('#dialogContent_121 > .white > [style=""] > div.md-button > .md-no-style')
                .click()
    
            //clicar no botão "ADICIONAR", para adicionar produto
            botãoAdicionar()
    
            cy.wait(500)
    
            modalServicosVinculados()

            okServicosVinculados()

            cy.wait(800)
    
            produtoNormalSegundo()

            saldodisponivel()
    
            escolherProdutoPesquisa()
    
            cy.wait(800)
    
            //Escolhendo voltagem do segundo produto
            cy.get(':nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style')
                .click()
    
            //clicar no botão "ADICIONAR", para adicionar produto
            botãoAdicionar()
    
            cy.wait(1000)
    
            //Botão "OK" - Serviços Vinculados - segundo produto
            cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar
    
            avancarParaTransportadora()
    
            cy.wait(16000)

            // tela para ESCOLHER TRANSPORTADORA

            //Card de inconsistencias - fechar
            cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                .click()
    
            escolherTransportadora()
        
            escolherRota()

            avancarParcelasEntrega()
        
            cy.wait(17000)

            //Tela de PARCELAS

            //Clicar em GERAR PARCELAS
            botaoGerarParcelas()
            
            cy.wait(6500)

            //Escolher forma de pagemento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
                .click()

            //Escolher parcelamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
                .click()

            cy.wait(400)

            //Avançar para finalizar o pedido
            avancarFinal()

            cy.wait(9000)
            
            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(10000)
    
            pedidoGerado()
        })
    })
})