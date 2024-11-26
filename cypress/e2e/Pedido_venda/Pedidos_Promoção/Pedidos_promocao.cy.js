import { titulopagina } from '../../../support/para_todos';
import { escolherTransportadora, saldodisponivel, escolherRota, escolherClientePedido, pedidoGerado, botaoFinalizarPedido, finalizandoPedido,
         clicarAdicionarProduto, tirarEntrega, tirarEntregaSegundo, tirarMontagemSegundo, botaoGerarParcelas, processoVendaPrincipal,
         avancarParaParcelas, avancarParaTransportadora, avancarParcelasEntrega, modalServicosVinculados, okServicosVinculados,
         escolherProdutoPesquisa, escolherVoltagemProduto, avancarFinal, modalInconsRotaTransp } from '../../../support/para_pedidos/gerais_pedidos'
import { produtoNormalSegundo } from '../../../support/para_pedidos/produtos_pedidos';
import { produtoPromoPartida, produtoPromoPrazoEntrada, produtoPromoPrazoParcelado, clicarUsarPromocao, selecionarFormaPagPromo } from '../../../support/para_pedidos/para_pedidos_promocao';

describe('Gerar pedidos com promoção', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        titulopagina() 
        processoVendaPrincipal()
        escolherClientePedido()
        cy.wait(500)
    })
  
    context('Sem entrega/ com promoção/ processo 9860 - caminho feliz', () => {

        it('Pedido com promoção partida (promoção 152): produto 1868 0 0', () => {
    
            produtoPromoPartida() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)   
            escolherVoltagemProduto()
            clicarUsarPromocao() //PROMOCAO
            selecionarFormaPagPromo()
            clicarAdicionarProduto()
            cy.wait(500)
    
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
    
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(12000)
    
            avancarFinal() //AVANÇAR PARA ÚLTIMA TELA
            cy.wait(8000)
        })
    
        it('Pedido com promoção a prazo com entrada (promoção 150): produto 1866 0 0', () => {
    
            produtoPromoPrazoEntrada() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)        
            escolherVoltagemProduto()
            clicarUsarPromocao() //PROMOÇÃO
            selecionarFormaPagPromo()
            cy.wait(400)
            clicarAdicionarProduto()
            cy.wait(500)
    
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
    
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(9000)
    
            //GERAR PARCELAS

            cy.get('#select_190')
                .click()
    
            //Escolher processo a receber de entrada
            cy.get('#select_option_203 > .md-text')
                .click({force:true})
    
            //Botão "GERAR PAGAMENTO"
            cy.get('.white > .layout-align-center-center > .md-primary')
                .click()
    
            cy.wait(400)
    
            avancarFinal()  //AVANÇAR PARA ÚLTIMA TELA
            cy.wait(6000)
        })
    
        it('Pedido com promoção a prazo parcelado (promoção 151): produto 1867 0 0', () => {
    
            produtoPromoPrazoParcelado() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)
            escolherVoltagemProduto()
            clicarUsarPromocao() //PROMOÇÃO
            selecionarFormaPagPromo()
            clicarAdicionarProduto()
            cy.wait(500)
    
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculados()
                
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(11000)
    
            avancarFinal() //AVANÇAR PARA ÚLTIMA TELA
            cy.wait(6000)
        })
    })

    context('Sem entrega/ com promoção e sem promoção/ processo 9860 - caminho feliz', () => {

        it('Pedido com promoção partida (promoção 152): produto 1868 0 0 e produto 1870 0 0 (sem promoção)', () => {
    
            produtoPromoPartida() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)    
            escolherVoltagemProduto()
            clicarUsarPromocao() //PROMOÇÃO
            selecionarFormaPagPromo()
            clicarAdicionarProduto()
            cy.wait(500)
    
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculados()
                
            tirarEntrega() //ENTREGA
            cy.wait(800)
    
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(800)
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(500)

            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados()
                
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            tirarMontagemSegundo()
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(12000)

            botaoGerarParcelas() //GERAR PARCELAS
            cy.wait(6500)

            //Escolher forma de pagamento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
                .click()

            //Escolher parcelamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
                .click()

            cy.wait(1000)

            avancarFinal()
            cy.wait(8000)
        })

        it('Pedido com promoção a prazo com entrada (promoção 150): produto 1866 0 0 e produto 1870 0 0 (sem promoção)', () => {
    
            produtoPromoPrazoEntrada() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)
            escolherVoltagemProduto()
            clicarUsarPromocao() //PROMOÇÃO
            selecionarFormaPagPromo()
            cy.wait(400)
            clicarAdicionarProduto()
            cy.wait(500)
    
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculados()
                
            tirarEntrega() //ENTREGA
            cy.wait(400)

            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            cy.wait(400)
            escolherProdutoPesquisa()
            cy.wait(800)
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(500)
    
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados()
                
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            tirarMontagemSegundo()
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(13000)

            //GERAR PARCELAS 
    
            //Abrir opções de processos a receber entrada
            cy.get('#select_344')
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
    
            avancarFinal()
            cy.wait(8000)
        })
    })

    context('Com entrega /com promoção/ processo 9860 - caminho feliz', () => {

        it('Pedido com promoção partida (promoção 152): produto 1868 0 0', () => {
    
            produtoPromoPartida() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)    
            escolherVoltagemProduto()
            clicarUsarPromocao()
            selecionarFormaPagPromo()
            clicarAdicionarProduto()
            cy.wait(500)
    
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculados()
            avancarParaTransportadora()
            cy.wait(12000)

            modalInconsRotaTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            escolherRota()

            avancarParcelasEntrega() //ENTREGA
            cy.wait(13000)
    
            botaoGerarParcelas() //GERAR PARCELAS
            cy.wait(6500)

            //Escolher "Forma de pagamento"
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
                .click()

            //Escolher parcelamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
                .click()

            cy.wait(400)

            avancarFinal()
            cy.wait(9000)
        })
    
        it('Pedido com promoção a prazo com entrada (promoção 150): produto 1866 0 0', () => {
    
            produtoPromoPrazoEntrada() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)       
            escolherVoltagemProduto()
            clicarUsarPromocao() //PROMOÇÃO
            selecionarFormaPagPromo()
            clicarAdicionarProduto()
            cy.wait(500)
    
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculados()
            cy.wait(400)
            avancarParaTransportadora()
            cy.wait(13000)

            modalInconsRotaTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            escolherRota()
            avancarParcelasEntrega()
            cy.wait(13000)

            //GERAR PARCELAS

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
            cy.wait(8000)

            //Escolher "Forma de pagamento"
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
                .click()

            //Escolher parcelamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
                .click()

            cy.wait(400)

            avancarFinal()
            cy.wait(9000)
        })

        it('Pedido com promoção a prazo parcelado (promoção 151): produto 1867 0 0', () => {
    
            produtoPromoPrazoParcelado() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)
            escolherVoltagemProduto()
            clicarUsarPromocao() //PROMOÇÃO
            selecionarFormaPagPromo()
            clicarAdicionarProduto()
            cy.wait(500)
    
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculados()
            cy.wait(400)
            avancarParaTransportadora()
            cy.wait(12000)

            modalInconsRotaTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            escolherRota()
            avancarParcelasEntrega()
            cy.wait(13000)

            //GERAR PARCELAS
            botaoGerarParcelas()
            cy.wait(6500)

            //Escolher a forma de pagamento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
                .click({force:true})

            //Escolher a forma de pagamento/parcelas
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
                .click({force:true})

            cy.wait(400)

            avancarFinal()
            cy.wait(8000)
        })  
    }) 

    context('Com entrega/ com promoção e sem promoção/ processo 9860 - caminho feliz', () => {

        it('Pedido com promoção partida (promoção 152): produto 1868 0 0 e produto 1870 0 0 (sem promoção)', () => {
    
            produtoPromoPartida() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)
            escolherVoltagemProduto()
            clicarUsarPromocao() //PROMOÇÃO
            selecionarFormaPagPromo()
            clicarAdicionarProduto()
            cy.wait(500)
    
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculados()
            cy.wait(800)
    
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(800)
            escolherVoltagemProduto() 
            clicarAdicionarProduto()
            cy.wait(1000)
    
            okServicosVinculados() //SERVIÇOS
            avancarParaTransportadora()
            cy.wait(14000)
            modalInconsRotaTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            escolherRota()
            avancarParcelasEntrega()
            cy.wait(14000)

            //GERAR PARCELAS
            botaoGerarParcelas()
            cy.wait(6500)

            //Escolher forma de pagemento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
                .click()

            //Escolher parcelamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
                .click()

            cy.wait(400)

            avancarFinal()
            cy.wait(9000)
        })
    })

    afterEach(() => {
        // RESUMO DO PEDIDO - ANTES DE FINALIZAR
        botaoFinalizarPedido()
        finalizandoPedido()
        cy.wait(7000)
        pedidoGerado()
      });
})