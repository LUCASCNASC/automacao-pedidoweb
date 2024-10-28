import { titulopagina } from '../../../support/para_todos';
import { escolherTransportadora, saldodisponivel, escolherRota, escolherClientePedido, pedidoGerado, botaoFinalizarPedido, 
    finalizandoPedido, botãoAdicionar, tirarEntrega, tirarEntregaSegundo, botaoGerarParcelas, processoVendaPrincipal, avancarParaParcelas, avancarParaTransportadora, avancarParcelasEntrega, 
    modalServicosVinculados, okServicosVinculados, escolherProdutoPesquisa, escolherVoltagemProduto, avancarFinal, modalInconsRotaTransp } from '../../../support/para_pedidos/gerais_pedidos';
import { produtoNormalPrimeiro, produtoNormalSegundo } from '../../../support/para_pedidos/produtos_pedidos';

describe('Gerar pedidos com Garantia e Mão de Obra', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
        titulopagina() //Validar título da aba carregada
    })

    context('Sem frete/processo 9860 - caminho feliz', () => {
    
        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra que destaca e não separa)', () => {

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

            cy.wait(300)

            //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            cy.get('#checkbox-142-0 > .md-container')
                .click()

            okServicosVinculados()
                
            tirarEntrega()

            cy.wait(400)

            avancarParaParcelas()

            // tela de GERAR PARCELAS

            cy.wait(9000)

            botaoGerarParcelas()

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

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            //Carregamento de pedido
            finalizandoPedido()

            cy.wait(11000)

            pedidoGerado()
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

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

            cy.wait(300)

            //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            cy.get('#checkbox-142-0 > .md-container')
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

            cy.wait(10000)

            // tela de GERAR PARCELAS

            botaoGerarParcelas()

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

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            //Carregamento de pedido
            finalizandoPedido()

            cy.wait(12000)

            pedidoGerado()
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa no mesmo processo)', () => {

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

            cy.wait(300)

            //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            cy.get('#checkbox-143-1 > .md-container')
                .click()

            okServicosVinculados()

            tirarEntrega()

            cy.wait(400)

            avancarParaParcelas()

            // tela de GERAR PARCELAS

            cy.wait(9000)

            botaoGerarParcelas()

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

            cy.wait(8000)

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            //Carregamento de pedido
            finalizandoPedido()

            cy.wait(11000)

            pedidoGerado()
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

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

            cy.wait(300)

            //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            cy.get('#checkbox-143-1 > .md-container')
                .click()

            okServicosVinculados()

            tirarEntrega()

            cy.wait(800)

            //Pesquisando segundo produto
            produtoNormalSegundo()
    
            //Validando informações do segundo produto após pesquisar
            saldodisponivel()
    
            escolherProdutoPesquisa()
    
            cy.wait(800)
    
            escolherVoltagemProduto()
    
            //clicar no botão "ADICIONAR", para adicionar produto
            botãoAdicionar()
    
            cy.wait(1000)
    
            okServicosVinculados()
    
            tirarEntregaSegundo()

            cy.wait(400)

            avancarParaParcelas()

            // tela de GERAR PARCELAS

            cy.wait(10000)

            botaoGerarParcelas()

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

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            //Carregamento de pedido
            finalizandoPedido()

            cy.wait(12000)

            pedidoGerado()
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa em outro processo)', () => {

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

            cy.wait(300)

            //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            cy.get('#checkbox-143-1 > .md-container')
                .click()

            okServicosVinculados()

            tirarEntrega()

            cy.wait(400)

            avancarParaParcelas()

            // tela de GERAR PARCELAS

            cy.wait(9000)

            botaoGerarParcelas()

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

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(11000)

            pedidoGerado()
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

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

            cy.wait(300)

            //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente"
            cy.get('#checkbox-144-2 > .md-container')
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
    
            okServicosVinculados()
    
            tirarEntregaSegundo()

            cy.wait(400)

            avancarParaParcelas()

            // tela de GERAR PARCELAS

            cy.wait(10000)

            botaoGerarParcelas()

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

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(12000)

            pedidoGerado()
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra que destaca e não separa)', () => {

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

            cy.wait(300)

            //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            cy.get('#checkbox-142-0 > .md-container')
                .click()

            okServicosVinculados()
                
            tirarEntrega()

            cy.wait(400)

            avancarParaParcelas()

            // tela de GERAR PARCELAS

            cy.wait(9000)

            botaoGerarParcelas()

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

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(11000)

            pedidoGerado()
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

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

            cy.wait(300)

            //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            cy.get('#checkbox-142-0 > .md-container')
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

            cy.wait(10000)

            botaoGerarParcelas()

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

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(12000)

            pedidoGerado()
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa no mesmo processo)', () => {

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

            cy.wait(300)

            //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            cy.get('#checkbox-143-1 > .md-container')
                .click()

            okServicosVinculados()

            tirarEntrega()

            cy.wait(400)

            avancarParaParcelas()

            // tela de GERAR PARCELAS

            cy.wait(9000)

            botaoGerarParcelas()

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

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(11000)

            pedidoGerado()
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

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

            cy.wait(300)

            //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            cy.get('#checkbox-143-1 > .md-container')
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

            cy.wait(10000)

            botaoGerarParcelas()

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

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(12000)

            pedidoGerado()
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa em outro processo)', () => {

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

            cy.wait(300)

            //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado automaticamente
            cy.get('#checkbox-144-2 > .md-container')
                .click()

            okServicosVinculados()

            tirarEntrega()

            cy.wait(400)

            avancarParaParcelas()

            // tela de GERAR PARCELAS

            cy.wait(9000)

            botaoGerarParcelas()

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

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(11000)

            pedidoGerado()
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

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

            cy.wait(300)

            //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado automaticamente
            cy.get('#checkbox-144-2 > .md-container')

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

            cy.wait(10000)

            botaoGerarParcelas()

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

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(12000)

            pedidoGerado()
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra que destaca e não separa)', () => {

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

            //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado
            cy.get('#checkbox-141-2 > .md-container')
                .click()

            cy.wait(300)

            //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            cy.get('#checkbox-142-0 > .md-container')
                .click()

            okServicosVinculados()

            tirarEntrega()

            cy.wait(400)

            avancarParaParcelas()

            // tela de GERAR PARCELAS

            cy.wait(9000)

            botaoGerarParcelas()

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

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(11000)

            pedidoGerado()
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

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

            //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado
            cy.get('#checkbox-141-2 > .md-container')
                .click()

            cy.wait(300)

            //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            cy.get('#checkbox-142-0 > .md-container')
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

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(12000)

            pedidoGerado()
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa no mesmo processo)', () => {

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

            //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado
            cy.get('#checkbox-141-2 > .md-container')
                .click()

            cy.wait(300)

            //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            cy.get('#checkbox-143-1 > .md-container')
                .click()

            okServicosVinculados()

            tirarEntrega()

            cy.wait(400)

            avancarParaParcelas()

            // tela de GERAR PARCELAS

            cy.wait(8000)

            botaoGerarParcelas()

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

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(11000)

            pedidoGerado()
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

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

            //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado
            cy.get('#checkbox-141-2 > .md-container')
                .click()

            cy.wait(300)

            //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            cy.get('#checkbox-143-1 > .md-container')
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

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(12000)

            pedidoGerado()
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa em outro processo)', () => {

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

            //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado
            cy.get('#checkbox-141-2 > .md-container')
                .click()

            cy.wait(300)

            okServicosVinculados()

            tirarEntrega()

            cy.wait(400)

            avancarParaParcelas()

            // tela de GERAR PARCELAS

            cy.wait(9000)

            botaoGerarParcelas()

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

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(11000)

            pedidoGerado()
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

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

            //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado
            cy.get('#checkbox-141-2 > .md-container')
                .click()

            cy.wait(300)

            //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado
            cy.get('#checkbox-144-2 > .md-container')
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

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(12000)

            pedidoGerado()
        })
    })

    context('Com entrega/processo 9860 - caminho feliz', () => {

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra que destaca e não separa)', () => {

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

            cy.wait(300)

            //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            cy.get('#checkbox-142-0 > .md-container')
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

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(13000)

            pedidoGerado()
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

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

            cy.wait(300)

            //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            cy.get('#checkbox-142-0 > .md-container')
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
    
            //Função criada para clicar no campo transportadora e escolher a trasportadora
            escolherTransportadora()
        
            escolherRota()

            avancarParcelasEntrega()
        
            cy.wait(10000)

            // tela de GERAR PARCELAS

            botaoGerarParcelas()

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

            cy.wait(10000)

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(12000)

            pedidoGerado()
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa no mesmo processo)', () => {

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

            cy.wait(300)

            //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            cy.get('#checkbox-143-1 > .md-container')
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

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(13000)

            pedidoGerado()
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

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

            cy.wait(300)

            //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            cy.get('#checkbox-143-1 > .md-container')
                .click()

            okServicosVinculados()

            cy.wait(800)

            //Pesquisando segundo produto
            produtoNormalSegundo()
    
            //Validando informações do segundo produto após pesquisar
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
        
            cy.wait(10000)

            // tela de GERAR PARCELAS

            botaoGerarParcelas()

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

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(12000)

            pedidoGerado()
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa em outro processo)', () => {

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

            cy.wait(300)

            //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado neste produto
            cy.get('#checkbox-144-2 > .md-container')
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

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(12000)

            pedidoGerado()
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

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

            cy.wait(300)

            //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado neste produto
            cy.get('#checkbox-144-2 > .md-container')
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
        
            cy.wait(10000)

            // tela de GERAR PARCELAS

            botaoGerarParcelas()

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

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(12000)

            pedidoGerado()
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra que destaca e não separa)', () => {

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

            cy.wait(300)

            //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            cy.get('#checkbox-142-0 > .md-container')
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

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(12000)

            pedidoGerado()
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

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

            cy.wait(300)

            //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            cy.get('#checkbox-142-0 > .md-container')
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
        
            cy.wait(10000)

            // tela de GERAR PARCELAS

            botaoGerarParcelas()

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

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(12000)

            pedidoGerado()
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa no mesmo processo)', () => {

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

            cy.wait(300)

            //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            cy.get('#checkbox-143-1 > .md-container')
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

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(13000)

            pedidoGerado()
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

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

            cy.wait(300)

            //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            cy.get('#checkbox-143-1 > .md-container')
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
        
            cy.wait(10000)

            // tela de GERAR PARCELAS

            botaoGerarParcelas()

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

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(12000)

            pedidoGerado()
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa em outro processo)', () => {

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

            cy.wait(300)

            //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado automaticamente
            cy.get('#checkbox-144-2 > .md-container')
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

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(13000)

            pedidoGerado()
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

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

            cy.wait(300)

            //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado automaticamente
            cy.get('#checkbox-144-2 > .md-container')
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
        
            cy.wait(10000)

            // tela de GERAR PARCELAS

            botaoGerarParcelas()

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

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(12000)

            pedidoGerado()
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra que destaca e não separa)', () => {

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

            //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado
            cy.get('#checkbox-141-2 > .md-container')
                .click()

            cy.wait(300)

            //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            cy.get('#checkbox-142-0 > .md-container')
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

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(12000)

            pedidoGerado()
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

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

            //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado
            cy.get('#checkbox-141-2 > .md-container')
                .click()

            cy.wait(300)

            //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            cy.get('#checkbox-142-0 > .md-container')
                .click()

            okServicosVinculados()

            cy.wait(800)

            //Pesquisando segundo produto
            produtoNormalSegundo()
    
            saldodisponivel()
    
            //clicar para selecionar o segundo produto; 
            escolherProdutoPesquisa()
    
            cy.wait(800)
    
            escolherVoltagemProduto()
    
            //clicar no botão "ADICIONAR", para adicionar produto
            botãoAdicionar()
    
            cy.wait(1000)
    
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

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(12000)

            pedidoGerado()
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa no mesmo processo)', () => {

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

            //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado
            cy.get('#checkbox-141-2 > .md-container')
                .click()

            cy.wait(300)

            //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            cy.get('#checkbox-143-1 > .md-container')
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

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(13000)

            pedidoGerado()
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

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

            //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado
            cy.get('#checkbox-141-2 > .md-container')
                .click()

            cy.wait(300)

            //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            cy.get('#checkbox-143-1 > .md-container')
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
    
            //Função criada para clicar no campo transportadora e escolher a trasportadora
            escolherTransportadora()
        
            escolherRota()

            avancarParcelasEntrega()
        
            cy.wait(10000)

            // tela de GERAR PARCELAS

            botaoGerarParcelas()

            cy.wait(9000)

            //Selecionando forma de pagamento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
                .click()

            //Selecionando parcela na forma de pagamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
                .click()

            cy.wait(800)

            //Botão "AVANÇAR"
            avancarFinal()

            cy.wait(9000)

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(12000)

            pedidoGerado()
        })

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa em outro processo)', () => {

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

            //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado
            cy.get('#checkbox-141-2 > .md-container')
                .click()

            cy.wait(300)

            //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado
            cy.get('#checkbox-144-2 > .md-container')
                .click()

            okServicosVinculados()

            cy.wait(800)

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

            cy.wait(10000)

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

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(12000)

            pedidoGerado()
        })  

        it.skip('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

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

            //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado
            cy.get('#checkbox-141-2 > .md-container')
                .click()

            cy.wait(300)

            //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado
            cy.get('#checkbox-144-2 > .md-container')
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
    
            //Botão "OK" - Serviços Vinculados - segundo produto
            cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar
    
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

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            finalizandoPedido()

            cy.wait(12000)

            pedidoGerado()
        })
    })
})