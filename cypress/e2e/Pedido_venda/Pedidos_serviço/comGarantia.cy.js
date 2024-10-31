import { titulopagina } from '../../../support/para_todos';
import { escolherTransportadora, saldodisponivel, escolherRota, escolherClientePedido, pedidoGerado, botaoFinalizarPedido,
         processoVendaPrincipal, avancarParaParcelas, avancarParaTransportadora, avancarParcelasEntrega, modalServicosVinculados,
         okServicosVinculados, escolherProdutoPesquisa, escolherVoltagemProduto, botãoAdicionar, tirarEntrega, tirarEntregaSegundo,
         botaoGerarParcelas, avancarFinal, finalizandoPedido, modalInconsRotaTransp, carregandoFormaPagamento } from '../../../support/para_pedidos/gerais_pedidos';
import { produtoNormalPrimeiro, produtoNormalSegundo } from '../../../support/para_pedidos/produtos_pedidos';

describe('Gerar pedidos com Garantia', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
        titulopagina() //Validar título da aba carregada
    })   

    context('Sem entrega/processo 9860 - caminho feliz', () => {

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo)', () => {
    
            processoVendaPrincipal()
    
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
    
            //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.get('#checkbox-139-0 > .md-container')
                .click()
    
            okServicosVinculados()
                
            tirarEntrega()
    
            cy.wait(400)
    
            avancarParaParcelas()
    
            // tela de GERAR PARCELAS
    
            cy.wait(8500)
    
            botaoGerarParcelas()

            carregandoFormaPagamento()
    
            cy.wait(7500)
    
            //Selecionando forma de pagamento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
                .click()
    
            //Selecionando parcela na forma de pagamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
                .click()
    
            cy.wait(400)
    
            //Botão "AVANÇAR"
            avancarFinal()
    
            cy.wait(6000)
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {
    
            processoVendaPrincipal()
    
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
    
            //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.get('#checkbox-139-0 > .md-container')
                .click()
    
            okServicosVinculados()
    
            tirarEntrega()

            cy.wait(400)

            //Pesquisando segundo produto
            produtoNormalSegundo()

            saldodisponivel()
    
            escolherProdutoPesquisa()
    
            cy.wait(800)
    
            escolherVoltagemProduto()
    
            //clicar no botão "ADICIONAR", para adicionar produto
            botãoAdicionar()
    
            cy.wait(1000)

            modalServicosVinculados()

            okServicosVinculados()
    
            tirarEntregaSegundo()
    
            cy.wait(400)
    
            avancarParaParcelas()
    
            // tela de GERAR PARCELAS
    
            cy.wait(10000)
    
            botaoGerarParcelas()

            carregandoFormaPagamento()
    
            cy.wait(10500)
    
            //Selecionando forma de pagamento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
                .click()
    
            //Selecionando parcela na forma de pagamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
                .click()
    
            cy.wait(400)
    
            //Botão "AVANÇAR"
            avancarFinal()
    
            cy.wait(11000)
        })
    
        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que não separa título)', () => {
    
            processoVendaPrincipal()

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
    
            //Marcar garantia "T.A. Garantia Não Separa"
            cy.get('#checkbox-140-1 > .md-container')
                .click()

            okServicosVinculados()
    
            tirarEntrega()
    
            cy.wait(400)
    
            avancarParaParcelas()
    
            // tela de GERAR PARCELAS
    
            cy.wait(7500)

            botaoGerarParcelas()

            carregandoFormaPagamento()
    
            cy.wait(7000)
    
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
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que não separa título) e produto 1870 0 0 (sem serviço)', () => {
    
            processoVendaPrincipal()
    
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
    
            //Marcar garantia "T.A. Garantia Não Separa"
            cy.get('#checkbox-140-1 > .md-container')
                .click()
    
            okServicosVinculados()
    
            tirarEntrega()
    
            cy.wait(800)

            //Pesquisando segundo produto
            produtoNormalSegundo()
    
            saldodisponivel()
    
            escolherProdutoPesquisa()
    
            cy.wait(800)
    
            escolherVoltagemProduto()
    
            //clicar no botão "ADICIONAR", para adicionar produto
            botãoAdicionar()
    
            cy.wait(1000)

            modalServicosVinculados()

            okServicosVinculados()
    
            tirarEntregaSegundo()
    
            cy.wait(400)
    
            avancarParaParcelas()
    
            // tela de GERAR PARCELAS
    
            cy.wait(8500)

            botaoGerarParcelas()

            carregandoFormaPagamento()
    
            cy.wait(8000)
    
            //Selecionando forma de pagamento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
                .click()
    
            //Selecionando parcela na forma de pagamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
                .click()
    
            cy.wait(400)
    
            //Botão "AVANÇAR"
            avancarFinal()
    
            cy.wait(10000)
        })
    
        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que separa título em um processo diferente)', () => {
    
            processoVendaPrincipal()

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
    
            //Marcar Garantia separa titulo em um processo deferente
            cy.get('#checkbox-141-2 > .md-container')
                .click()
    
            okServicosVinculados()
    
            tirarEntrega()
    
            cy.wait(400)
    
            avancarParaParcelas()
    
            // tela de GERAR PARCELAS
    
            cy.wait(8500)

            botaoGerarParcelas()

            carregandoFormaPagamento()
    
            cy.wait(7500)
    
            //Selecionando forma de pagamento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
                .click()
    
            //Selecionando parcela na forma de pagamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
                .click()
    
            cy.wait(400)
    
            //Botão "AVANÇAR"
            avancarFinal()
    
            cy.wait(6000)
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que separa título em um processo diferente) e produto 1870 0 0 (sem serviço)', () => {
    
            processoVendaPrincipal()
    
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
    
            //Marcar Garantia separa titulo em um processo deferente
            cy.get('#checkbox-141-2 > .md-container')
                .click()
    
            okServicosVinculados()
    
            tirarEntrega()
    
            cy.wait(800)
    
            //Pesquisando segundo produto
            produtoNormalSegundo()
    
            saldodisponivel()
    
            escolherProdutoPesquisa()
    
            cy.wait(800)
    
            escolherVoltagemProduto()
    
            //clicar no botão "ADICIONAR", para adicionar produto
            botãoAdicionar()
    
            cy.wait(1000)

            modalServicosVinculados()
    
            okServicosVinculados()
    
            tirarEntregaSegundo()
    
            cy.wait(400)
    
            avancarParaParcelas()
    
            // tela de GERAR PARCELAS
    
            cy.wait(8500)
    
            botaoGerarParcelas()

            carregandoFormaPagamento()
    
            cy.wait(7500)
    
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
        })
    })

    context('Com entrega/processo 9860 - caminho feliz', () => {

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo)', () => {
    
            processoVendaPrincipal()
    
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
    
            //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.get('#checkbox-139-0 > .md-container')
                .click()
    
            okServicosVinculados()
    
            cy.wait(400)
    
            avancarParaTransportadora()

            // tela para ESCOLHER TRANSPORTADORA

            cy.wait(14000)

            modalInconsRotaTransp()
    
            escolherTransportadora()
        
            escolherRota()

            avancarParcelasEntrega()
        
            cy.wait(7500)

            // tela de GERAR PARCELAS

            botaoGerarParcelas()

            carregandoFormaPagamento()
    
            cy.wait(8000)
    
            //Selecionando forma de pagamento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
                .click()
    
            //Selecionando parcela na forma de pagamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
                .click()
    
            cy.wait(400)
    
            //Botão "AVANÇAR"
            avancarFinal()
    
            cy.wait(10000)
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {
    
            processoVendaPrincipal()
    
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
    
            //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.get('#checkbox-139-0 > .md-container')
                .click()
    
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
    
            cy.wait(1000)

            modalServicosVinculados()
    
            okServicosVinculados()
    
            cy.wait(400)
    
            avancarParaTransportadora()
    
            // tela para ESCOLHER TRANSPORTADORA

            cy.wait(14000)

            modalInconsRotaTransp()
    
            escolherTransportadora()
        
            escolherRota()

            avancarParcelasEntrega()
        
            cy.wait(9000)

            // tela de GERAR PARCELAS
    
            botaoGerarParcelas()

            carregandoFormaPagamento()
    
            cy.wait(7500)
    
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
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que não separa título)', () => {
    
            processoVendaPrincipal()
    
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
    
            //Marcar garantia "T.A. Garantia Não Separa"
            cy.get('#checkbox-140-1 > .md-container')
                .click()
    
            okServicosVinculados()
    
            cy.wait(400)
    
            avancarParaTransportadora()
    
            // tela para ESCOLHER TRANSPORTADORA

            cy.wait(14000)

            modalInconsRotaTransp()

            escolherTransportadora()
        
            escolherRota()

            avancarParcelasEntrega()
        
            cy.wait(9000)

            // tela de GERAR PARCELAS
    
            botaoGerarParcelas()

            carregandoFormaPagamento()
    
            cy.wait(8500)
    
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
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que não separa título) e produto 1870 0 0 (sem serviço)', () => {
    
            processoVendaPrincipal()
    
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
    
            //Marcar garantia "T.A. Garantia Não Separa"
            cy.get('#checkbox-140-1 > .md-container')
                .click()
    
            okServicosVinculados()
    
            cy.wait(800)

            //Pesquisando segundo produto
            produtoNormalSegundo()
    
            saldodisponivel()
    
            escolherProdutoPesquisa()
    
            cy.wait(800)
    
            //Escolhendo voltagem do segundo produto
            escolherVoltagemProduto()
    
            //clicar no botão "ADICIONAR", para adicionar produto
            botãoAdicionar()
    
            cy.wait(1000)

            modalServicosVinculados()
    
            okServicosVinculados()
    
            cy.wait(400)
    
            avancarParaTransportadora()

            // tela para ESCOLHER TRANSPORTADORA

            cy.wait(14000)

            modalInconsRotaTransp()

            escolherTransportadora()
    
            escolherRota()

            avancarParcelasEntrega()
    
            cy.wait(10000)
    
            // tela de GERAR PARCELAS
    
            //Botão "GERAR PARCELAS"
            botaoGerarParcelas()

            carregandoFormaPagamento()
    
            cy.wait(7500)
    
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
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que separa título em um processo diferente)', () => {
    
            processoVendaPrincipal()
    
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
    
            //Marcar Garantia separa titulo em um processo diferente
            cy.get('#checkbox-141-2 > .md-container')
                .click()
    
            okServicosVinculados()
    
            cy.wait(400)
    
            avancarParaTransportadora()
    
            // tela para ESCOLHER TRANSPORTADORA

            cy.wait(14000)

            modalInconsRotaTransp()
    
            escolherTransportadora()
        
            escolherRota()

            avancarParcelasEntrega()
        
            cy.wait(10000)

            // tela de GERAR PARCELAS
    
            botaoGerarParcelas()

            carregandoFormaPagamento()
    
            cy.wait(9000)
    
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
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que separa título em um processo diferente) e produto 1870 0 0 (sem serviço)', () => {
    
            processoVendaPrincipal()
    
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
    
            //Marcar Garantia separa titulo em um processo diferente
            cy.get('#checkbox-141-2 > .md-container')
                .click()
    
            okServicosVinculados()
    
            cy.wait(800)
    
            //Pesquisando segundo produto
            produtoNormalSegundo()
    
            saldodisponivel()
    
            escolherProdutoPesquisa()
    
            cy.wait(800)
    
            /escolherVoltagemProduto()
    
            //clicar no botão "ADICIONAR", para adicionar produto
            botãoAdicionar()
    
            cy.wait(1000)
    
            okServicosVinculados()
    
            cy.wait(400)
    
            avancarParaTransportadora()

            // tela para ESCOLHER TRANSPORTADORA

            cy.wait(16000)

            modalInconsRotaTransp()

            escolherTransportadora()
    
            escolherRota()

            avancarParcelasEntrega()
    
            cy.wait(10000)
    
            // tela de GERAR PARCELAS
    
            botaoGerarParcelas()

            carregandoFormaPagamento()
    
            cy.wait(7500)
    
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