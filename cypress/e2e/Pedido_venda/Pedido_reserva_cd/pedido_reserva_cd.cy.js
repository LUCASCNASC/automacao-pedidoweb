import { titulopagina } from '../../../support/para_todos';
import { escolherTransportadora, saldodisponivel, escolherRota, escolherClientePedido, pedidoGerado, botaoFinalizarPedido, finalizandoPedido,
         botãoAdicionar, tirarEntrega, tirarMontagem, tirarEntregaSegundo, tirarMontagemSegundo, botaoGerarParcelas, processoVendaPrincipal,
         avancarParaParcelas, avancarParaTransportadora, avancarParcelasEntrega, modalServicosVinculados, okServicosVinculados,
         escolherProdutoPesquisa, escolherVoltagemProduto, avancarFinal, modalInconsRotaTransp, carregandoFormaPagamento, 
         saldoCDDisponivel} from '../../../support/para_pedidos/gerais_pedidos';
import { produtoCDPrimeiro, produtoNormalSegundo} from '../../../support/para_pedidos/produtos_pedidos';

describe('Gerar pedido com reserva no CD - Regra de saldo Parâmetro 36 = 4 - Parâmetro 139 = 4 - Trial 653 não configurado', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
        titulopagina() //Validar título da aba carregada
    })

    context('Sem frete/ processo 9860 - caminho feliz', () => {

        it('Pedido de venda: produto 1880 0 0', () => {
            
            processoVendaPrincipal()
    
            escolherClientePedido()
    
            cy.wait(500)
    
            //Pesquisando produto
            produtoCDPrimeiro()
    
            saldoCDDisponivel()
    
            escolherProdutoPesquisa()
    
            cy.wait(200)
    
            // // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM

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

            carregandoFormaPagamento()
    
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
    
            cy.wait(6000) 
        })

        it('Pedido de venda: produtos 1880 0 0 (reserva CD) e 1870 0 0 (saldo local)', () => {
    
            processoVendaPrincipal()
    
            escolherClientePedido()
    
            cy.wait(500)
    
            //Pesquisando produto
            produtoCDPrimeiro()
    
            saldoCDDisponivel()
    
            escolherProdutoPesquisa()

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM

            cy.wait(200)
                      
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
    
            cy.wait(6500)
    
            botaoGerarParcelas()

            carregandoFormaPagamento()
    
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
    
            cy.wait(7000)
        })
    })

    context('Com frete/ processo 9860 - caminho feliz', () => {

        it('Pedido de venda: produto 1880 0 0', () => {
    
            processoVendaPrincipal()
    
            escolherClientePedido()
    
            cy.wait(500)
    
            //Pesquisando produto
            produtoCDPrimeiro()

            saldoCDDisponivel()
    
            escolherProdutoPesquisa()
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
    
            cy.wait(200)
                      
            escolherVoltagemProduto()
            
            //clicar no botão "ADICIONAR", para adicionar produto
            botãoAdicionar()
    
            cy.wait(500)

            modalServicosVinculados()

            okServicosVinculados()
    
            tirarMontagem()
    
            cy.wait(400)
    
            avancarParaTransportadora()
    
            // tela para ESCOLHER TRANSPORTADORA

            cy.wait(12000)

            modalInconsRotaTransp()
    
            escolherTransportadora()
        
            escolherRota()

            avancarParcelasEntrega()
        
            cy.wait(7500)

            // tela de GERAR PARCELAS

            botaoGerarParcelas()

            carregandoFormaPagamento()

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

            cy.wait(7000)
        })

        it('Pedido de venda: produtos 1880 0 0 (reserva CD) e 1870 0 0 (saldo local)', () => {
    
            processoVendaPrincipal()
    
            escolherClientePedido()
    
            cy.wait(500)
    
            //Pesquisando produto
            produtoCDPrimeiro()

            saldoCDDisponivel()
    
            escolherProdutoPesquisa()
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
    
            cy.wait(200)
                      
            escolherVoltagemProduto()
            
            //clicar no botão "ADICIONAR", para adicionar produto
            botãoAdicionar()
    
            cy.wait(500)

            modalServicosVinculados()

            okServicosVinculados()
    
            cy.wait(400)
    
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
    
            cy.wait(1000)
    
            avancarParaTransportadora()
    
            // tela para ESCOLHER TRANSPORTADORA

            cy.wait(14000)

            modalInconsRotaTransp()
    
            escolherTransportadora()
        
            escolherRota()

            avancarParcelasEntrega()
        
            cy.wait(8000)

            // tela de GERAR PARCELAS

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