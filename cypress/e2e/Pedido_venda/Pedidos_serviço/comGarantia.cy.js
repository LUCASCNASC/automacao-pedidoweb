import { titulopagina, saldodisponivel } from '../../../support/para_todos';
import { escolherTransportadora, escolherRota, escolherClientePedido, pedidoGerado, botaoFinalizarPedido, finalizandoPedido, botãoAdicionar, tirarEntrega, avancarFinal,
         botaoGerarParcelas, produtoNormalPrimeiro, produtoNormalSegundo, tirarEntregaSegundo, avancarParaParcelas, avancarParaTransportadora, avancarParcelasEntrega, 
        modalServicosVinculados, okServicosVinculados} from '../../../support/para_pedidos/gerais_pedidos';
import { produtoNormalPrimeiro, produtoNormalSegundo } from '../../../support/para_pedidos/produtos_pedidos';

describe('Gerar pedidos com Garantia', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
        titulopagina() //Validar título da aba carregada
    })   

    context('Sem entrega/processo 9860 - caminho feliz', () => {

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo)', () => {
    
            //Escolher processo de venda
            processoVendaPrincipal()
    
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
    
            //Título "Formas de pagamento na Entrada"
            cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                .scrollIntoView()
    
            //Botão "GERAR PARCELAS"
            botaoGerarParcelas()
    
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
    
            // RESUMO DO PEDIDO - ANTES DE FINALIZAR
    
            botaoFinalizarPedido()

            //Carregamento de pedido
            finalizandoPedido()
    
            //Carregando a finalização do pedido
            cy.wait(10000)
    
            pedidoGerado()
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {
    
            //Escolher processo de venda
            processoVendaPrincipal()
    
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

            modalServicosVinculados()
    
            //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.get('#checkbox-139-0 > .md-container')
                .click()
    
            okServicosVinculados()
    
            tirarEntrega()

            cy.wait(400)

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

            modalServicosVinculados()

            okServicosVinculados()
    
            tirarEntregaSegundo()
    
            cy.wait(400)
    
            avancarParaParcelas()
    
            // tela de GERAR PARCELAS
    
            cy.wait(10000)
    
            //Título "Formas de pagamento na Entrada"
            cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                .scrollIntoView()
    
            //Botão "GERAR PARCELAS"
            botaoGerarParcelas()
    
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
    
            // RESUMO DO PEDIDO - ANTES DE FINALIZAR
    
            botaoFinalizarPedido()

            //Carregamento de pedido
            finalizandoPedido()
    
            //Carregando a finalização do pedido
            cy.wait(13000)

            pedidoGerado()
        })
    
        it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa título)', () => {
    
            //Escolher processo de venda
            processoVendaPrincipal()
    
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
    
            //Título "Formas de pagamento na Entrada"
            cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                .scrollIntoView()
    
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
    
            cy.wait(6500)
    
            // RESUMO DO PEDIDO - ANTES DE FINALIZAR
    
            botaoFinalizarPedido()

            //Carregamento de pedido
            finalizandoPedido()
    
            //Carregando a finalização do pedido
            cy.wait(10000)
    
            pedidoGerado()
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa título) e produto 1870 0 0 (sem serviço)', () => {
    
            //Escolher processo de venda
            processoVendaPrincipal()
    
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

            modalServicosVinculados()
    
            //Marcar garantia "T.A. Garantia Não Separa"
            cy.get('#checkbox-140-1 > .md-container')
                .click()
    
            okServicosVinculados()
    
            tirarEntrega()
    
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

            modalServicosVinculados()

            okServicosVinculados()
    
            tirarEntregaSegundo()
    
            cy.wait(400)
    
            avancarParaParcelas()
    
            // tela de GERAR PARCELAS
    
            cy.wait(8500)
    
            //Título "Formas de pagamento na Entrada"
            cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                .scrollIntoView()
    
            //Botão "GERAR PARCELAS"
            botaoGerarParcelas()
    
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
    
            // RESUMO DO PEDIDO - ANTES DE FINALIZAR
    
            botaoFinalizarPedido()

            //Carregamento de pedido
            finalizandoPedido()
    
            //Carregando a finalização do pedido
            cy.wait(12000)

            pedidoGerado()
        })
    
        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título em um processo diferente)', () => {
    
            //Escolher processo de venda
            processoVendaPrincipal()
    
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
    
            //Título "Formas de pagamento na Entrada"
            cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                .scrollIntoView()
    
            //Botão "GERAR PARCELAS"
            botaoGerarParcelas()
    
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
    
            // RESUMO DO PEDIDO - ANTES DE FINALIZAR
    
            //Botão "FINALIZAR PEDIDO"
            botaoFinalizarPedido()

            finalizandoPedido()
    
            //Carregando a finalização do pedido
            cy.wait(8000)
    
            pedidoGerado()
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título em um processo diferente) e produto 1870 0 0 (sem serviço)', () => {
    
            //Escolher processo de venda
            processoVendaPrincipal()
    
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

            modalServicosVinculados()
    
            //Marcar Garantia separa titulo em um processo deferente
            cy.get('#checkbox-141-2 > .md-container')
                .click()
    
            okServicosVinculados()
    
            tirarEntrega()
    
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

            modalServicosVinculados()
    
            okServicosVinculados()
    
            tirarEntregaSegundo()
    
            cy.wait(400)
    
            avancarParaParcelas()
    
            // tela de GERAR PARCELAS
    
            cy.wait(8500)
    
            //Título "Formas de pagamento na Entrada"
            cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                .scrollIntoView()
    
            //Botão "GERAR PARCELAS"
            botaoGerarParcelas()
    
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
    
            // RESUMO DO PEDIDO - ANTES DE FINALIZAR
    
            botaoFinalizarPedido()

            //Carregamento de pedido
            finalizandoPedido()
    
            //Carregando a finalização do pedido
            cy.wait(10000)

            pedidoGerado()
        })
    })

    context('Com entrega/processo 9860 - caminho feliz', () => {

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo)', () => {
    
            //Escolher processo de venda
            processoVendaPrincipal()
    
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

            modalServicosVinculados()
    
            //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.get('#checkbox-139-0 > .md-container')
                .click()
    
            okServicosVinculados()
    
            cy.wait(400)
    
            avancarParaTransportadora()

            // tela para ESCOLHER TRANSPORTADORA

            cy.wait(14000)

            //Card de inconsistencias - fechar
            cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                .click()

            //Card de inconsistencias - fechar
            cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                .click()
    
            //Função criada para clicar no campo transportadora e escolher a trasportadora
            escolherTransportadora()
        
            escolherRota()

            avancarParcelasEntrega()
        
            cy.wait(7500)

            // tela de GERAR PARCELAS
    
            //Botão "GERAR PARCELAS"
            botaoGerarParcelas()
    
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
    
            // RESUMO DO PEDIDO - ANTES DE FINALIZAR
    
            botaoFinalizarPedido()

            //Carregamento de pedido
            finalizandoPedido()
    
            //Carregando a finalização do pedido
            cy.wait(10000)
    
            pedidoGerado()
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {
    
            //Escolher processo de venda
            processoVendaPrincipal()
    
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

            modalServicosVinculados()
    
            //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.get('#checkbox-139-0 > .md-container')
                .click()
    
            okServicosVinculados()

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

            modalServicosVinculados()
    
            okServicosVinculados()
    
            cy.wait(400)
    
            avancarParaTransportadora()
    
            // tela para ESCOLHER TRANSPORTADORA

            cy.wait(14000)

            //Card de inconsistencias - fechar
            cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                .click()
    
            //Função criada para clicar no campo transportadora e escolher a trasportadora
            escolherTransportadora()
        
            escolherRota()

            avancarParcelasEntrega()
        
            cy.wait(9000)

            // tela de GERAR PARCELAS
    
            //Botão "GERAR PARCELAS"
            botaoGerarParcelas()
    
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
    
            // RESUMO DO PEDIDO - ANTES DE FINALIZAR
    
            botaoFinalizarPedido()

            //Carregamento de pedido
            finalizandoPedido()
    
            //Carregando a finalização do pedido
            cy.wait(10000)
    
            pedidoGerado()
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa título)', () => {
    
            //Escolher processo de venda
            processoVendaPrincipal()
    
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

            modalServicosVinculados()
    
            //Marcar garantia "T.A. Garantia Não Separa"
            cy.get('#checkbox-140-1 > .md-container')
                .click()
    
            okServicosVinculados()
    
            cy.wait(400)
    
            avancarParaTransportadora()
    
            // tela para ESCOLHER TRANSPORTADORA

            cy.wait(14000)

            //Card de inconsistencias - fechar
            cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                .click()

            //Card de inconsistencias - fechar
            cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                .click()
    
            //Função criada para clicar no campo transportadora e escolher a trasportadora
            escolherTransportadora()
        
            escolherRota()

            avancarParcelasEntrega()
        
            cy.wait(9000)

            // tela de GERAR PARCELAS
    
            //Botão "GERAR PARCELAS"
            botaoGerarParcelas()
    
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
    
            // RESUMO DO PEDIDO - ANTES DE FINALIZAR

            botaoFinalizarPedido()

            //Carregamento de pedido
            finalizandoPedido()
    
            //Carregando a finalização do pedido
            cy.wait(10000)
    
            pedidoGerado()
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa título) e produto 1870 0 0 (sem serviço)', () => {
    
            //Escolher processo de venda
            processoVendaPrincipal()
    
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

            modalServicosVinculados()
    
            //Marcar garantia "T.A. Garantia Não Separa"
            cy.get('#checkbox-140-1 > .md-container')
                .click()
    
            okServicosVinculados()
    
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

            modalServicosVinculados()
    
            okServicosVinculados()
    
            cy.wait(400)
    
            avancarParaTransportadora()

            // tela para ESCOLHER TRANSPORTADORA

            cy.wait(14000)

            //Card de inconsistencias - fechar
            cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                .click()

            //Função criada para clicar no campo transportadora e escolher a trasportadora
            escolherTransportadora()
    
            escolherRota()

            avancarParcelasEntrega()
    
            cy.wait(10000)
    
            // tela de GERAR PARCELAS
    
            //Botão "GERAR PARCELAS"
            botaoGerarParcelas()
    
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
    
            // RESUMO DO PEDIDO - ANTES DE FINALIZAR
    
            botaoFinalizarPedido()

            //Carregamento de pedido
            finalizandoPedido()
    
            //Carregando a finalização do pedido
            cy.wait(11000)
    
            pedidoGerado()
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título em um processo diferente)', () => {
    
            //Escolher processo de venda
            processoVendaPrincipal()
    
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

            modalServicosVinculados()
    
            //Marcar Garantia separa titulo em um processo diferente
            cy.get('#checkbox-141-2 > .md-container')
                .click()
    
            okServicosVinculados()
    
            cy.wait(400)
    
            avancarParaTransportadora()
    
            // tela para ESCOLHER TRANSPORTADORA

            cy.wait(14000)

            //Card de inconsistencias - fechar
            cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                .click()

            //Card de inconsistencias - fechar
            cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                .click()
    
            //Função criada para clicar no campo transportadora e escolher a trasportadora
            escolherTransportadora()
        
            escolherRota()

            avancarParcelasEntrega()
        
            cy.wait(10000)

            // tela de GERAR PARCELAS
    
            //Botão "GERAR PARCELAS"
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
    
            //Carregando a finalização do pedido
            cy.wait(11000)
    
            pedidoGerado()
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título em um processo diferente) e produto 1870 0 0 (sem serviço)', () => {
    
            //Escolher processo de venda
            processoVendaPrincipal()
    
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

            modalServicosVinculados()
    
            //Marcar Garantia separa titulo em um processo diferente
            cy.get('#checkbox-141-2 > .md-container')
                .click()
    
            okServicosVinculados()
    
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
    
            //Botão "OK" - Serviços Vinculados - segundo produto
            cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar
    
            cy.wait(400)
    
            avancarParaTransportadora()

            // tela para ESCOLHER TRANSPORTADORA

            cy.wait(16000)

            //Card de inconsistencias - fechar
            cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                .click()

            //Função criada para clicar no campo transportadora e escolher a trasportadora
            escolherTransportadora()
    
            escolherRota()

            avancarParcelasEntrega()
    
            cy.wait(10000)
    
            // tela de GERAR PARCELAS
    
            //Botão "GERAR PARCELAS"
            botaoGerarParcelas()
    
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
    
            // RESUMO DO PEDIDO - ANTES DE FINALIZAR
    
            botaoFinalizarPedido()

            //Carregamento de pedido
            finalizandoPedido()
    
            //Carregando a finalização do pedido
            cy.wait(11000)
    
            pedidoGerado()
        })
    })
})