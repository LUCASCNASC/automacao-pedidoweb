import { titulopagina, saldodisponivel } from '../../../support/para_todos';
import { escolherTransportadora, escolherRota, escolherClientePedido, pedidoGerado, finalizandoPedido, botaoFinalizarPedido, botãoAdicionar, tirarEntrega, tirarMontagem, avancarFinal,
        botaoGerarParcelas, processoFinanceiroBaixa, tirarEntregaSegundo, tirarMontagemSegundo, avancarParaParcelas,
        avancarParaTransportadora, avancarParcelasEntrega, modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/gerais_pedidos';
import { produtoNormalPrimeiro, produtoNormalSegundo } from '../../../support/para_pedidos/produtos_pedidos';

describe('Gerar pedido com financeiro na baixa', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
        titulopagina() //Validar título da aba carregada
    })
  
    context('Sem frete/ processo 9863 - caminho feliz', () => {

        it.skip('Pedido de venda: produto 1860 0 0', () => {
    
            processoFinanceiroBaixa()
    
            //Função para escolher cliente para pedido
            escolherClientePedido()
    
            cy.wait(1000)
    
            //Pesquisando produto
            produtoNormalPrimeiro()
    
            //Validando informações do produto após pesquisar
            saldodisponivel()
    
            //clicar para selecionar o produto; 
            cy.contains('Cod: 1860')
                .click({ force: true })
    
            cy.wait(1300)
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
    
            cy.wait(800)
                      
            //Selecionar a voltagem do produto
            cy.get('.padding-5 > :nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style')
                .click({ force: true })
            
            //clicar no botão "ADICIONAR", para adicionar produto
            botãoAdicionar()
    
            cy.wait(1000)
    
            //validando modal Serviços Vinculados
            modalServicosVinculados()

            //Botão "OK" - Serviços Vinculados
            okServicosVinculados()
    
            tirarEntrega()

            tirarMontagem()
    
            cy.wait(400)
    
            avancarParaParcelas()
    
            // tela de GERAR PARCELAS
    
            cy.wait(6500)
    
            //Título "Formas de pagamento na Entrada"
            cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                .scrollIntoView()
    
            //Botão "GERAR PARCELAS"
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
    
            cy.wait(5000)
    
            // RESUMO DO PEDIDO - ANTES DE FINALIZAR
    
            botaoFinalizarPedido()

            //Carregamento de pedido
            finalizandoPedido()
    
            //Carregando a finalização do pedido
            cy.wait(7000)
    
            pedidoGerado()
        })

        it.skip('Pedido de venda: produtos 1860 0 0 e 1870 0 0', () => {
    
            processoFinanceiroBaixa()
    
            //Função para escolher cliente para pedido
            escolherClientePedido()
    
            cy.wait(1000)
    
            //Pesquisando produto
            produtoNormalPrimeiro()
    
            //Validando informações do produto após pesquisar
            saldodisponivel()
    
            //clicar para selecionar o produto; 
            cy.contains('Cod: 1860')
                .click({ force: true })
    
            cy.wait(1300)
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
    
            cy.wait(800)
                      
            //Selecionar a voltagem do produto
            cy.get('.padding-5 > :nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style')
                .click({ force: true })
            
            //clicar no botão "ADICIONAR", para adicionar produto
            botãoAdicionar()
    
            cy.wait(1000)
    
            //validando modal Serviços Vinculados
            modalServicosVinculados()

            //Botão "OK" - Serviços Vinculados
            okServicosVinculados()
    
            tirarEntrega()

            tirarMontagem()
    
            cy.wait(800)
    
            //Pesquisando segundo produto
            produtoNormalSegundo()
    
            //Validando informações do segundo produto após pesquisar
            saldodisponivel()
    
            //clicar para selecionar o segundo produto; 
            cy.contains('Cod: 1870')
                .click({ force: true })
    
            cy.wait(800)
    
            //Escolhendo voltagem do segundo produto
            cy.get(':nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style')
                .click()
    
            //clicar no botão "ADICIONAR", para adicionar produto
            botãoAdicionar()
    
            cy.wait(1000)
    
            //validando modal Serviços Vinculados
            modalServicosVinculados()

            //Botão "OK" - Serviços Vinculados
            okServicosVinculados()
    
            tirarEntregaSegundo()

            tirarMontagemSegundo()
    
            cy.wait(400)
    
            avancarParaParcelas()
    
            // tela de GERAR PARCELAS
    
            cy.wait(7000)
    
            //Título "Formas de pagamento na Entrada"
            cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                .scrollIntoView()
    
            //Botão "GERAR PARCELAS"
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
    
            cy.wait(7500)
    
            // RESUMO DO PEDIDO - ANTES DE FINALIZAR
    
            botaoFinalizarPedido()

            //Carregamento de pedido
            finalizandoPedido()
    
            //Carregando a finalização do pedido
            cy.wait(8500)
    
            pedidoGerado()
        })
    })
    
    context('Com frete/ processo 9863 - caminho feliz', () => {

        it.skip('Pedido de venda: produto 1860 0 0', () => {
    
            processoFinanceiroBaixa()
    
            //Função para escolher cliente para pedido
            escolherClientePedido()
    
            cy.wait(1000)
    
            //Pesquisando produto
            produtoNormalPrimeiro()
    
            //Validando informações do produto após pesquisar
            saldodisponivel()
    
            //clicar para selecionar o produto; 
            cy.contains('Cod: 1860')
                .click({ force: true })
    
            cy.wait(1300)
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
    
            cy.wait(800)
                      
            //Selecionar a voltagem do produto
            cy.get('.padding-5 > :nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style')
                .click({ force: true })
            
            //clicar no botão "ADICIONAR", para adicionar produto
            botãoAdicionar()
    
            cy.wait(1000)
    
            //validando modal Serviços Vinculados
            modalServicosVinculados()

            //Botão "OK" - Serviços Vinculados
            okServicosVinculados()
    
            cy.wait(400)
    
            avancarParaTransportadora()
    
            // tela para ESCOLHER TRANSPORTADORA

            cy.wait(12000)

            escolherRota()

            cy.wait(6000)

            //Clicar para avançar para a tela de GERAR PARCELAS
            avancarParcelasEntrega()

            // tela de GERAR PARCELAS

            //Botão "GERAR PARCELAS"
            botaoGerarParcelas()

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

            cy.wait(8000)

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            //Carregamento de pedido
            finalizandoPedido()

            //Carregando a finalização do pedido
            cy.wait(10000)

            pedidoGerado()
        })

        it.skip('Pedido de venda: produtos 1860 0 0 e 1870 0 0', () => {
    
            processoFinanceiroBaixa()
    
            //Função para escolher cliente para pedido
            escolherClientePedido()
    
            cy.wait(1000)
    
            //Pesquisando produto
            produtoNormalPrimeiro()
    
            //Validando informações do produto após pesquisar
            saldodisponivel()
    
            //clicar para selecionar o produto; 
            cy.contains('Cod: 1860')
                .click({ force: true })
    
            cy.wait(1300)
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                      
            //Selecionar a voltagem do produto
            cy.get('.padding-5 > :nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style')
                .click({ force: true })
            
            //clicar no botão "ADICIONAR", para adicionar produto
            botãoAdicionar()
    
            cy.wait(1000)
    
            //validando modal Serviços Vinculados
            modalServicosVinculados()

            //Botão "OK" - Serviços Vinculados
            okServicosVinculados()
    
            cy.wait(400)
    
            //rolagem para baixo
            cy.get('.containerSabium')
                .scrollTo("center")

            cy.wait(800)
    
            //Pesquisando segundo produto
            produtoNormalSegundo()
    
            //Validando informações do segundo produto após pesquisar
            saldodisponivel()
    
            //clicar para selecionar o segundo produto; 
            cy.contains('Cod: 1870')
                .click({ force: true })
    
            cy.wait(800)
    
            //Escolhendo voltagem do segundo produto
            cy.get(':nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style')
                .click()
    
            //clicar no botão "ADICIONAR", para adicionar produto
            botãoAdicionar()
    
            cy.wait(1000)
    
            //validando modal Serviços Vinculados
            modalServicosVinculados()

            //Botão "OK" - Serviços Vinculados
            okServicosVinculados()
    
            cy.wait(400)
    
            avancarParaTransportadora()
    
            // tela para ESCOLHER TRANSPORTADORA

            cy.wait(13000)

            escolherRota()

            cy.wait(8000)

            //Clicar para avançar para a tela de GERAR PARCELAS
            avancarParcelasEntrega()

            // tela de GERAR PARCELAS

            //Botão "GERAR PARCELAS"
            botaoGerarParcelas()

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

            cy.wait(8000)

            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            //Carregamento de pedido
            finalizandoPedido()

            //Carregando a finalização do pedido
            cy.wait(10000)

            pedidoGerado()
        })
    })
})