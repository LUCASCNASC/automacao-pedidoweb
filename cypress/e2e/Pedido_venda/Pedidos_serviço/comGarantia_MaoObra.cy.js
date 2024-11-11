import { titulopagina } from '../../../support/para_todos';
import { escolherTransportadora, saldodisponivel, escolherRota, escolherClientePedido, pedidoGerado, botaoFinalizarPedido, finalizandoPedido,
         clicarAdicionarProduto, tirarEntrega, tirarEntregaSegundo, botaoGerarParcelas, processoVendaPrincipal, avancarParaParcelas,
         avancarParaTransportadora, avancarParcelasEntrega, modalServicosVinculados, okServicosVinculados, escolherProdutoPesquisa,
         escolherVoltagemProduto, avancarFinal, modalInconsRotaTransp, carregandoFormaPagamento, escolherFormaPagamentoPrincipal, 
         escolherDuasParcelaPagamento } from '../../../support/para_pedidos/gerais_pedidos';
import { produtoNormalPrimeiro, produtoNormalSegundo } from '../../../support/para_pedidos/produtos_pedidos';

describe('Gerar pedidos com Garantia e Mão de Obra', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login(); 
        titulopagina() 
    })

    context('Sem frete/processo 9860 - caminho feliz', () => {
    
        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra que destaca e não separa)', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoNormalPrimeiro()

            saldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            clicarAdicionarProduto()

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

            cy.wait(8000)

            botaoGerarParcelas()

            carregandoFormaPagamento()

            cy.wait(9000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(8000)
        })

        it.only('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoNormalPrimeiro()

            saldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            clicarAdicionarProduto()

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

            produtoNormalSegundo()
    
            saldodisponivel()

            cy.wait(800)
    
            escolherProdutoPesquisa()
    
            cy.wait(800)
    
            escolherVoltagemProduto()
    
            clicarAdicionarProduto()
    
            cy.wait(1000)

            modalServicosVinculados()

            okServicosVinculados()
    
            tirarEntregaSegundo()

            cy.wait(400)

            avancarParaParcelas()

            cy.wait(10000)

            // tela de GERAR PARCELAS

            botaoGerarParcelas()

            carregandoFormaPagamento()

            cy.wait(9000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(9000)
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa no mesmo processo)', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoNormalPrimeiro()

            saldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            clicarAdicionarProduto()

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

            carregandoFormaPagamento()

            cy.wait(9000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(8000)
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoNormalPrimeiro()

            saldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            clicarAdicionarProduto()

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

            produtoNormalSegundo()
    
            saldodisponivel()

            cy.wait(800)
    
            escolherProdutoPesquisa()
    
            cy.wait(800)
    
            escolherVoltagemProduto()
    
            clicarAdicionarProduto()
    
            cy.wait(1000)
    
            okServicosVinculados()
    
            tirarEntregaSegundo()

            cy.wait(400)

            avancarParaParcelas()

            // tela de GERAR PARCELAS

            cy.wait(10000)

            botaoGerarParcelas()

            carregandoFormaPagamento()

            cy.wait(9000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(9000)
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa em outro processo)', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoNormalPrimeiro()

            saldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            clicarAdicionarProduto()

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

            carregandoFormaPagamento()

            cy.wait(9000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(9000)
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoNormalPrimeiro()

            saldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            clicarAdicionarProduto()

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

            produtoNormalSegundo()
    
            saldodisponivel()

            cy.wait(800)
    
            escolherProdutoPesquisa()
    
            cy.wait(800)
    
            escolherVoltagemProduto()
    
            clicarAdicionarProduto()
    
            cy.wait(1000)
    
            okServicosVinculados()
    
            tirarEntregaSegundo()

            cy.wait(400)

            avancarParaParcelas()

            // tela de GERAR PARCELAS

            cy.wait(10000)

            botaoGerarParcelas()

            carregandoFormaPagamento()

            cy.wait(9000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(9000)
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra que destaca e não separa)', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoNormalPrimeiro()

            saldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            clicarAdicionarProduto()

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

            carregandoFormaPagamento()

            cy.wait(9000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(9000)
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoNormalPrimeiro()

            saldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            clicarAdicionarProduto()

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

            produtoNormalSegundo()
    
            saldodisponivel()

            cy.wait(800)
    
            escolherProdutoPesquisa()
    
            cy.wait(800)
    
            escolherVoltagemProduto()
    
            clicarAdicionarProduto()
    
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

            cy.wait(9000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(9000)
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa no mesmo processo)', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoNormalPrimeiro()

            saldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            clicarAdicionarProduto()

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

            carregandoFormaPagamento()

            cy.wait(9000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(9000)
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoNormalPrimeiro()

            saldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            clicarAdicionarProduto()

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

            produtoNormalSegundo()

            saldodisponivel()

            cy.wait(800)
    
            escolherProdutoPesquisa()
    
            cy.wait(800)
    
            escolherVoltagemProduto()
    
            /clicarAdicionarProduto()
    
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

            cy.wait(9000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(9000)
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa em outro processo)', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoNormalPrimeiro()

            saldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            clicarAdicionarProduto()

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

            carregandoFormaPagamento()

            cy.wait(9000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(9000)
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoNormalPrimeiro()

            saldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            clicarAdicionarProduto()

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

            produtoNormalSegundo()
    
            saldodisponivel()

            cy.wait(800)
    
            escolherProdutoPesquisa()
    
            cy.wait(800)
    
            escolherVoltagemProduto()
    
            clicarAdicionarProduto()
    
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

            cy.wait(9000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(9000)
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra que destaca e não separa)', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoNormalPrimeiro()

            saldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            clicarAdicionarProduto()

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

            carregandoFormaPagamento()

            cy.wait(9000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(9000)
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoNormalPrimeiro()

            saldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            clicarAdicionarProduto()

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

            produtoNormalSegundo()
    
            saldodisponivel()

            cy.wait(800)
    
            escolherProdutoPesquisa()
    
            cy.wait(800)
    
            escolherVoltagemProduto()
    
            clicarAdicionarProduto()
    
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

            cy.wait(9000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(9000)
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa no mesmo processo)', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoNormalPrimeiro()

            saldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            clicarAdicionarProduto()

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

            carregandoFormaPagamento()

            cy.wait(9000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(9000)
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoNormalPrimeiro()

            saldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            clicarAdicionarProduto()

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

            produtoNormalSegundo()
    
            saldodisponivel()

            cy.wait(800)
    
            escolherProdutoPesquisa()
    
            cy.wait(800)
    
            escolherVoltagemProduto()
    
            clicarAdicionarProduto()
    
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

            cy.wait(9000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(9000)
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa em outro processo)', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoNormalPrimeiro()

            saldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            clicarAdicionarProduto()

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

            carregandoFormaPagamento()

            cy.wait(9000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(9000)
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoNormalPrimeiro()

            saldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            clicarAdicionarProduto()

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

            produtoNormalSegundo()
    
            saldodisponivel()

            cy.wait(800)
    
            escolherProdutoPesquisa()
    
            cy.wait(800)
    
            escolherVoltagemProduto()
    
            clicarAdicionarProduto()
    
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

            cy.wait(9000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(9000)
        })
    })

    context('Com entrega/processo 9860 - caminho feliz', () => {

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra que destaca e não separa)', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoNormalPrimeiro()

            saldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            clicarAdicionarProduto()

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

            carregandoFormaPagamento()

            cy.wait(9000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(9000)
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoNormalPrimeiro()

            saldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            clicarAdicionarProduto()

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

            produtoNormalSegundo()
    
            saldodisponivel()

            cy.wait(800)
    
            escolherProdutoPesquisa()
    
            cy.wait(800)
    
            escolherVoltagemProduto()
    
            clicarAdicionarProduto()
    
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

            carregandoFormaPagamento()

            cy.wait(9000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(10000)
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa no mesmo processo)', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoNormalPrimeiro()

            saldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            clicarAdicionarProduto()

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

            carregandoFormaPagamento()

            cy.wait(9000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(9000)
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoNormalPrimeiro()

            saldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            clicarAdicionarProduto()

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

            produtoNormalSegundo()
    
            saldodisponivel()

            cy.wait(800)
    
            escolherProdutoPesquisa()
    
            cy.wait(800)
    
            escolherVoltagemProduto()
    
            clicarAdicionarProduto()
    
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

            carregandoFormaPagamento()

            cy.wait(9000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(9000)
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa em outro processo)', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoNormalPrimeiro()

            saldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            clicarAdicionarProduto()

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

            carregandoFormaPagamento()

            cy.wait(9000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(9000)
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoNormalPrimeiro()

            saldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            clicarAdicionarProduto()

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

            produtoNormalSegundo()
    
            saldodisponivel()

            cy.wait(800)
    
            escolherProdutoPesquisa()
    
            cy.wait(800)
    
            escolherVoltagemProduto()
    
            clicarAdicionarProduto()
    
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

            carregandoFormaPagamento()

            cy.wait(9000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(9000)
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra que destaca e não separa)', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoNormalPrimeiro()

            saldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            clicarAdicionarProduto()

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

            carregandoFormaPagamento()

            cy.wait(9000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(9000)
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoNormalPrimeiro()

            saldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            clicarAdicionarProduto()

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

            produtoNormalSegundo()
    
            saldodisponivel()

            cy.wait(800)
    
            escolherProdutoPesquisa()
    
            cy.wait(800)
    
            escolherVoltagemProduto()
    
            clicarAdicionarProduto()
    
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

            carregandoFormaPagamento()

            cy.wait(9000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(9000)
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa no mesmo processo)', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoNormalPrimeiro()

            saldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            clicarAdicionarProduto()

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

            carregandoFormaPagamento()

            cy.wait(9000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(9000)
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoNormalPrimeiro()

            saldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            clicarAdicionarProduto()

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

            produtoNormalSegundo()
    
            saldodisponivel()

            cy.wait(800)
    
            escolherProdutoPesquisa()
    
            cy.wait(800)
    
            escolherVoltagemProduto()
    
            clicarAdicionarProduto()
    
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

            carregandoFormaPagamento()

            cy.wait(9000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(9000)
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa em outro processo)', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoNormalPrimeiro()

            saldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            clicarAdicionarProduto()

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

            carregandoFormaPagamento()

            cy.wait(9000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(9000)
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoNormalPrimeiro()

            saldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            clicarAdicionarProduto()

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

            produtoNormalSegundo()
    
            saldodisponivel()

            cy.wait(800)
    
            escolherProdutoPesquisa()
    
            cy.wait(800)
    
            escolherVoltagemProduto()
    
            clicarAdicionarProduto()
    
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

            carregandoFormaPagamento()

            cy.wait(9000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(9000)
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra que destaca e não separa)', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoNormalPrimeiro()

            saldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            clicarAdicionarProduto()

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

            carregandoFormaPagamento()

            cy.wait(9000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(9000)
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoNormalPrimeiro()

            saldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            clicarAdicionarProduto()

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

            produtoNormalSegundo()
    
            saldodisponivel()

            cy.wait(800)
    
            escolherProdutoPesquisa()
    
            cy.wait(800)
    
            escolherVoltagemProduto()
    
            clicarAdicionarProduto()
    
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

            carregandoFormaPagamento()

            cy.wait(9000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(9000)
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa no mesmo processo)', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoNormalPrimeiro()

            saldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            clicarAdicionarProduto()

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

            carregandoFormaPagamento()

            cy.wait(9000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(9000)
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoNormalPrimeiro()

            saldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            clicarAdicionarProduto()

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

            produtoNormalSegundo()
    
            saldodisponivel()

            cy.wait(800)
    
            escolherProdutoPesquisa()
    
            cy.wait(800)
    
            escolherVoltagemProduto()
    
            clicarAdicionarProduto()
    
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

            carregandoFormaPagamento()

            cy.wait(9000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(800)

            avancarFinal()

            cy.wait(9000)
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa em outro processo)', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoNormalPrimeiro()

            saldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            clicarAdicionarProduto()

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

            carregandoFormaPagamento()

            cy.wait(10000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            avancarFinal()

            cy.wait(10000)
        })  

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            processoVendaPrincipal()

            escolherClientePedido()

            cy.wait(500)

            produtoNormalPrimeiro()

            saldodisponivel()

            escolherProdutoPesquisa()

            cy.wait(200)

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                    
            escolherVoltagemProduto()
            
            clicarAdicionarProduto()

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

            produtoNormalSegundo()
    
            saldodisponivel()

            cy.wait(800)
    
            escolherProdutoPesquisa()
    
            cy.wait(800)
    
            escolherVoltagemProduto()
    
            clicarAdicionarProduto()
    
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

            carregandoFormaPagamento()

            cy.wait(9000)

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