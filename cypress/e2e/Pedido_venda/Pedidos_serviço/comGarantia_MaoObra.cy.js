import { titulopagina, saldodisponivel } from '../../../support/para_todos';
import { escolherTransportadora, escolherRota, escolherClientePedido, pedidoGerado, botaoFinalizarPedido, finalizandoPedido, botãoAdicionar, tirarEntrega, avancarFinal, botaoGerarParcelas } from '../../../support/para_pedidos';

describe('Gerar pedidos com Garantia e Mão de Obra', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
        titulopagina() //Validar título da aba carregada
    })

    context('Sem frete/processo 9860 - caminho feliz', () => {
    
            it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra que destaca e não separa)', () => {

                //clicar para aparecer as opções de processo
                cy.get('#select_value_label_4 > .md-select-icon')
                    .click()

                cy.wait(800)
                
                //rolar para o meio das opções de processo
                cy.get('#select_listbox_12')
                    .scrollTo('center')

                cy.wait(800)

                //selecionar processo de venda "9860"
                cy.get('#select_option_60 > .md-text')
                    .click({force: true})

                cy.wait(800)

                //Função para escolher cliente para pedido
                escolherClientePedido()

                cy.wait(2000)

                //Campo "Buscar produtos"
                cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos

                cy.get('#searchText')
                    .should('have.value', '') //Validando se o campo foi realmente limpo
                    .wait(1300)
                    .type('1860')
            
                cy.wait(2500)

                //Preenchendo campo para pesquisar produto
                cy.contains('Cod: 1860')

                cy.wait(400)

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

                //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
                cy.get('#checkbox-139-0 > .md-container')
                    .click()

                cy.wait(300)

                //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
                cy.get('#checkbox-142-0 > .md-container')
                    .click()

                //Botão "OK" - Serviços Vinculados
                cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                    .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar
                    
                tirarEntrega()

                cy.wait(400)

                //Botão "AVANÇAR"
                cy.get('.flex-gt-sm-50 > .md-primary')
                    .click() //Clicar para avançar para a próxima tela

                // tela de GERAR PARCELAS

                cy.wait(9000)

                //Título "Formas de pagamento na Entrada"
                cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                    .scrollIntoView()

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

            it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

                //clicar para aparecer as opções de processo
                cy.get('#select_value_label_4 > .md-select-icon')
                    .click()

                cy.wait(800)
                
                //rolar para o meio das opções de processo
                cy.get('#select_listbox_12')
                    .scrollTo('center')

                cy.wait(800)

                //selecionar processo de venda "9860"
                cy.get('#select_option_60 > .md-text')
                    .click({force: true})

                cy.wait(800)

                //Função para escolher cliente para pedido
                escolherClientePedido()

                cy.wait(2000)

                //Campo "Buscar produtos"
                cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos

                cy.get('#searchText')
                    .should('have.value', '') //Validando se o campo foi realmente limpo
                    .wait(1300)
                    .type('1860')
            
                cy.wait(2500)

                //Preenchendo campo para pesquisar produto
                cy.contains('Cod: 1860')

                cy.wait(400)

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

                //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
                cy.get('#checkbox-139-0 > .md-container')
                    .click()

                cy.wait(300)

                //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
                cy.get('#checkbox-142-0 > .md-container')
                    .click()

                //Botão "OK" - Serviços Vinculados
                cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                    .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

                tirarEntrega()

                cy.wait(400)

                //Buscar segundo produto
                cy.get('#searchText')
                    .clear()
                    .type('1870')
        
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

                //Botão "OK" - Serviços Vinculados
                cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                    .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar)
        
                tirarEntrega()

                cy.wait(400)

                //Botão "AVANÇAR"
                cy.get('.flex-gt-sm-50 > .md-primary')
                    .click({force:true}) //Clicar para avançar para a próxima tela

                cy.wait(10000)

                // tela de GERAR PARCELAS

                //Título "Formas de pagamento na Entrada"
                cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                    .scrollIntoView()

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
                cy.wait(12000)

                pedidoGerado()
            })

            it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa no mesmo processo)', () => {

                //clicar para aparecer as opções de processo
                cy.get('#select_value_label_4 > .md-select-icon')
                    .click()

                cy.wait(800)
                
                //rolar para o meio das opções de processo
                cy.get('#select_listbox_12')
                    .scrollTo('center')

                cy.wait(800)

                //selecionar processo de venda "9860"
                cy.get('#select_option_60 > .md-text')
                    .click({force: true})

                cy.wait(800)

                //Função para escolher cliente para pedido
                escolherClientePedido()

                cy.wait(2000)

                //Campo "Buscar produtos"
                cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos

                cy.get('#searchText')
                    .should('have.value', '') //Validando se o campo foi realmente limpo
                    .wait(1300)
                    .type('1860')
            
                cy.wait(2500)

                //Preenchendo campo para pesquisar produto
                cy.contains('Cod: 1860')

                cy.wait(400)

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

                //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
                cy.get('#checkbox-139-0 > .md-container')
                    .click()

                cy.wait(300)

                //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
                cy.get('#checkbox-143-1 > .md-container')
                    .click()

                cy.wait(400)

                //Botão "OK" - Serviços Vinculados
                cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                    .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

                tirarEntrega()

                cy.wait(400)

                //Botão "AVANÇAR"
                cy.get('.flex-gt-sm-50 > .md-primary')
                    .click() //Clicar para avançar para a próxima tela

                // tela de GERAR PARCELAS

                cy.wait(9000)

                //Título "Formas de pagamento na Entrada"
                cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                    .scrollIntoView()

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

                cy.wait(8000)

                // RESUMO DO PEDIDO - ANTES DE FINALIZAR

                botaoFinalizarPedido()

                //Carregamento de pedido
                finalizandoPedido()

                //Carregando a finalização do pedido
                cy.wait(11000)

                pedidoGerado()
            })

            it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

                //clicar para aparecer as opções de processo
                cy.get('#select_value_label_4 > .md-select-icon')
                    .click()

                cy.wait(800)
                
                //rolar para o meio das opções de processo
                cy.get('#select_listbox_12')
                    .scrollTo('center')

                cy.wait(800)

                //selecionar processo de venda "9860"
                cy.get('#select_option_60 > .md-text')
                    .click({force: true})

                cy.wait(800)

                //Função para escolher cliente para pedido
                escolherClientePedido()

                cy.wait(2000)

                //Campo "Buscar produtos"
                cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos

                cy.get('#searchText')
                    .should('have.value', '') //Validando se o campo foi realmente limpo
                    .wait(1300)
                    .type('1860')
            
                cy.wait(2500)

                //Preenchendo campo para pesquisar produto
                cy.contains('Cod: 1860')

                cy.wait(400)

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

                //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
                cy.get('#checkbox-139-0 > .md-container')
                    .click()

                cy.wait(300)

                //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
                cy.get('#checkbox-143-1 > .md-container')
                    .click()

                //Botão "OK" - Serviços Vinculados
                cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                    .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

                tirarEntrega()

                cy.wait(800)

                //Buscar segundo produto
                cy.get('#searchText')
                    .clear()
                    .type('1870')
        
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
        
                tirarEntrega()

                cy.wait(400)

                //Botão "AVANÇAR"
                cy.get('.flex-gt-sm-50 > .md-primary')
                    .click({force:true}) //Clicar para avançar para a próxima tela

                // tela de GERAR PARCELAS

                cy.wait(10000)

                //Título "Formas de pagamento na Entrada"
                cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                    .scrollIntoView()

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

                //Botão "FINALIZAR PEDIDO"
                botaoFinalizarPedido()

                //Carregamento de pedido
                finalizandoPedido()

                //Carregando a finalização do pedido
                cy.wait(12000)

                //Validar mensagem "Pedido gravado com sucesso!"
                pedidoGerado()
            })

            it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa em outro processo)', () => {

                //clicar para aparecer as opções de processo
                cy.get('#select_value_label_4 > .md-select-icon')
                    .click()

                cy.wait(800)
                
                //rolar para o meio das opções de processo
                cy.get('#select_listbox_12')
                    .scrollTo('center')

                cy.wait(800)

                //selecionar processo de venda "9860"
                cy.get('#select_option_60 > .md-text')
                    .click({force: true})

                cy.wait(800)

                //Função para escolher cliente para pedido
                escolherClientePedido()

                cy.wait(2000)

                //Campo "Buscar produtos"
                cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos

                cy.get('#searchText')
                    .should('have.value', '') //Validando se o campo foi realmente limpo
                    .wait(1300)
                    .type('1860')
            
                cy.wait(2500)

                //Preenchendo campo para pesquisar produto
                cy.contains('Cod: 1860')

                cy.wait(400)

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

                //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
                cy.get('#checkbox-139-0 > .md-container')
                    .click()

                cy.wait(300)

                //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
                cy.get('#checkbox-143-1 > .md-container')
                    .click()

                //Botão "OK" - Serviços Vinculados
                cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                    .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

                tirarEntrega()

                cy.wait(400)

                //Botão "AVANÇAR"
                cy.get('.flex-gt-sm-50 > .md-primary')
                    .click({force:true}) //Clicar para avançar para a próxima tela

                // tela de GERAR PARCELAS

                cy.wait(9000)

                //Título "Formas de pagamento na Entrada"
                cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                    .scrollIntoView()

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

            it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

                //clicar para aparecer as opções de processo
                cy.get('#select_value_label_4 > .md-select-icon')
                    .click()

                cy.wait(800)
                
                //rolar para o meio das opções de processo
                cy.get('#select_listbox_12')
                    .scrollTo('center')

                cy.wait(800)

                //selecionar processo de venda "9860"
                cy.get('#select_option_60 > .md-text')
                    .click({force: true})

                cy.wait(800)

                //Função para escolher cliente para pedido
                escolherClientePedido()

                cy.wait(2000)

                //Campo "Buscar produtos"
                cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos

                cy.get('#searchText')
                    .should('have.value', '') //Validando se o campo foi realmente limpo
                    .wait(1300)
                    .type('1860')
            
                cy.wait(2500)

                //Preenchendo campo para pesquisar produto
                cy.contains('Cod: 1860')

                cy.wait(400)

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

                //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
                cy.get('#checkbox-139-0 > .md-container')
                    .click()

                cy.wait(300)

                //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente"
                cy.get('#checkbox-144-2 > .md-container')
                    .click()

                //Botão "OK" - Serviços Vinculados
                cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                    .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

                tirarEntrega()

                cy.wait(400)

                //Buscar segundo produto
                cy.get('#searchText')
                    .clear()
                    .type('1870')
        
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
        
                tirarEntrega()

                cy.wait(400)

                //Botão "AVANÇAR"
                cy.get('.flex-gt-sm-50 > .md-primary')
                    .click({force:true}) //Clicar para avançar para a próxima tela

                // tela de GERAR PARCELAS

                cy.wait(10000)

                //Título "Formas de pagamento na Entrada"
                cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                    .scrollIntoView()

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

                //Botão "FINALIZAR PEDIDO"
                botaoFinalizarPedido()

                //Carregamento de pedido
                finalizandoPedido()

                //Carregando a finalização do pedido
                cy.wait(12000)

                //Validar mensagem "Pedido gravado com sucesso!"
                pedidoGerado()
            })

            it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra que destaca e não separa)', () => {

                //clicar para aparecer as opções de processo
                cy.get('#select_value_label_4 > .md-select-icon')
                    .click()

                cy.wait(800)
                
                //rolar para o meio das opções de processo
                cy.get('#select_listbox_12')
                    .scrollTo('center')

                cy.wait(800)

                //selecionar processo de venda "9860"
                cy.get('#select_option_60 > .md-text')
                    .click({force: true})

                cy.wait(800)

                //Função para escolher cliente para pedido
                escolherClientePedido()

                cy.wait(2000)

                //Campo "Buscar produtos"
                cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos

                cy.get('#searchText')
                    .should('have.value', '') //Validando se o campo foi realmente limpo
                    .wait(1300)
                    .type('1860')
            
                cy.wait(2500)

                //Preenchendo campo para pesquisar produto
                cy.contains('Cod: 1860')

                cy.wait(400)

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

                //Marcar garantia "T.A. Garantia Não Separa"
                cy.get('#checkbox-140-1 > .md-container')
                    .click()

                cy.wait(300)

                //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
                cy.get('#checkbox-142-0 > .md-container')
                    .click()

                //Botão "OK" - Serviços Vinculados
                cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                    .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar
                    
                tirarEntrega()

                cy.wait(400)

                //Botão "AVANÇAR"
                cy.get('.flex-gt-sm-50 > .md-primary')
                    .click({force:true}) //Clicar para avançar para a próxima tela

                // tela de GERAR PARCELAS

                cy.wait(9000)

                //Título "Formas de pagamento na Entrada"
                cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                    .scrollIntoView()

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

                //Botão "FINALIZAR PEDIDO"
                botaoFinalizarPedido()

                //Carregamento de pedido
                finalizandoPedido()

                //Carregando a finalização do pedido
                cy.wait(11000)

                //Validar mensagem "Pedido gravado com sucesso!"
                pedidoGerado()
            })

            it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

                //clicar para aparecer as opções de processo
                cy.get('#select_value_label_4 > .md-select-icon')
                    .click()

                cy.wait(800)
                
                //rolar para o meio das opções de processo
                cy.get('#select_listbox_12')
                    .scrollTo('center')

                cy.wait(800)

                //selecionar processo de venda "9860"
                cy.get('#select_option_60 > .md-text')
                    .click({force: true})

                cy.wait(800)

                //Função para escolher cliente para pedido
                escolherClientePedido()

                cy.wait(2000)

                //Campo "Buscar produtos"
                cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos

                cy.get('#searchText')
                    .should('have.value', '') //Validando se o campo foi realmente limpo
                    .wait(1300)
                    .type('1860')
            
                cy.wait(2500)

                //Preenchendo campo para pesquisar produto
                cy.contains('Cod: 1860')

                cy.wait(400)

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

                //Marcar garantia "T.A. Garantia Não Separa"
                cy.get('#checkbox-140-1 > .md-container')
                    .click()

                cy.wait(300)

                //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
                cy.get('#checkbox-142-0 > .md-container')
                    .click()

                //Botão "OK" - Serviços Vinculados
                cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                    .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

                tirarEntrega()

                cy.wait(800)

                //Buscar segundo produto
                cy.get('#searchText')
                    .clear()
                    .type('1870')
        
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
        
                tirarEntrega()

                cy.wait(400)

                //Botão "AVANÇAR"
                cy.get('.flex-gt-sm-50 > .md-primary')
                    .click({force:true}) //Clicar para avançar para a próxima tela

                // tela de GERAR PARCELAS

                cy.wait(10000)

                //Título "Formas de pagamento na Entrada"
                cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                    .scrollIntoView()

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

                //Botão "FINALIZAR PEDIDO"
                botaoFinalizarPedido()

                //Carregamento de pedido
                finalizandoPedido()

                //Carregando a finalização do pedido
                cy.wait(12000)

                //Validar mensagem "Pedido gravado com sucesso!"
                pedidoGerado()
            })

            it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa no mesmo processo)', () => {

                //clicar para aparecer as opções de processo
                cy.get('#select_value_label_4 > .md-select-icon')
                    .click()

                cy.wait(800)
                
                //rolar para o meio das opções de processo
                cy.get('#select_listbox_12')
                    .scrollTo('center')

                cy.wait(800)

                //selecionar processo de venda "9860"
                cy.get('#select_option_60 > .md-text')
                    .click({force: true})

                cy.wait(800)

                //Função para escolher cliente para pedido
                escolherClientePedido()

                cy.wait(2000)

                //Campo "Buscar produtos"
                cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos

                cy.get('#searchText')
                    .should('have.value', '') //Validando se o campo foi realmente limpo
                    .wait(1300)
                    .type('1860')
            
                cy.wait(2500)

                //Preenchendo campo para pesquisar produto
                cy.contains('Cod: 1860')

                cy.wait(400)

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

                //Marcar garantia "T.A. Garantia Não Separa"
                cy.get('#checkbox-140-1 > .md-container')
                    .click()

                cy.wait(300)

                //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
                cy.get('#checkbox-143-1 > .md-container')
                    .click()

                //Botão "OK" - Serviços Vinculados
                cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                    .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

                tirarEntrega()

                cy.wait(400)

                //Botão "AVANÇAR"
                cy.get('.flex-gt-sm-50 > .md-primary')
                    .click({force:true}) //Clicar para avançar para a próxima tela

                // tela de GERAR PARCELAS

                cy.wait(9000)

                //Título "Formas de pagamento na Entrada"
                cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                    .scrollIntoView()

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

            it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

                //clicar para aparecer as opções de processo
                cy.get('#select_value_label_4 > .md-select-icon')
                    .click()

                cy.wait(800)
                
                //rolar para o meio das opções de processo
                cy.get('#select_listbox_12')
                    .scrollTo('center')

                cy.wait(800)

                //selecionar processo de venda "9860"
                cy.get('#select_option_60 > .md-text')
                    .click({force: true})

                cy.wait(800)

                //Função para escolher cliente para pedido
                escolherClientePedido()

                cy.wait(2000)

                //Campo "Buscar produtos"
                cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos

                cy.get('#searchText')
                    .should('have.value', '') //Validando se o campo foi realmente limpo
                    .wait(1300)
                    .type('1860')
            
                cy.wait(2500)

                //Preenchendo campo para pesquisar produto
                cy.contains('Cod: 1860')

                cy.wait(400)

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

                //Marcar garantia "T.A. Garantia Não Separa"
                cy.get('#checkbox-140-1 > .md-container')
                    .click()

                cy.wait(300)

                //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
                cy.get('#checkbox-143-1 > .md-container')
                    .click()

                //Botão "OK" - Serviços Vinculados
                cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                    .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

                tirarEntrega()

                cy.wait(800)

                //Buscar segundo produto
                cy.get('#searchText')
                    .clear()
                    .type('1870')
        
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
        
                tirarEntrega()

                cy.wait(400)

                //Botão "AVANÇAR"
                cy.get('.flex-gt-sm-50 > .md-primary')
                    .click({force:true}) //Clicar para avançar para a próxima tela

                // tela de GERAR PARCELAS

                cy.wait(10000)

                //Título "Formas de pagamento na Entrada"
                cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                    .scrollIntoView()

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

                //Botão "FINALIZAR PEDIDO"
                botaoFinalizarPedido()

                //Carregamento de pedido
                finalizandoPedido()

                //Carregando a finalização do pedido
                cy.wait(12000)

                //Validar mensagem "Pedido gravado com sucesso!"
                pedidoGerado()
            })

            it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa em outro processo)', () => {

                //clicar para aparecer as opções de processo
                cy.get('#select_value_label_4 > .md-select-icon')
                    .click()

                cy.wait(800)
                
                //rolar para o meio das opções de processo
                cy.get('#select_listbox_12')
                    .scrollTo('center')

                cy.wait(800)

                //selecionar processo de venda "9860"
                cy.get('#select_option_60 > .md-text')
                    .click({force: true})

                cy.wait(800)

                //Função para escolher cliente para pedido
                escolherClientePedido()

                cy.wait(2000)

                //Campo "Buscar produtos"
                cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos

                cy.get('#searchText')
                    .should('have.value', '') //Validando se o campo foi realmente limpo
                    .wait(1300)
                    .type('1860')
            
                cy.wait(2500)

                //Preenchendo campo para pesquisar produto
                cy.contains('Cod: 1860')

                cy.wait(400)

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

                //Marcar garantia "T.A. Garantia Não Separa"
                cy.get('#checkbox-140-1 > .md-container')
                    .click()

                cy.wait(300)

                //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado automaticamente
                cy.get('#checkbox-144-2 > .md-container')
                    .click()

                //Botão "OK" - Serviços Vinculados
                cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                    .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

                tirarEntrega()

                cy.wait(400)

                //Botão "AVANÇAR"
                cy.get('.flex-gt-sm-50 > .md-primary')
                    .click({force:true}) //Clicar para avançar para a próxima tela

                // tela de GERAR PARCELAS

                cy.wait(9000)

                //Título "Formas de pagamento na Entrada"
                cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                    .scrollIntoView()

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

            it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

                //clicar para aparecer as opções de processo
                cy.get('#select_value_label_4 > .md-select-icon')
                    .click()

                cy.wait(800)
                
                //rolar para o meio das opções de processo
                cy.get('#select_listbox_12')
                    .scrollTo('center')

                cy.wait(800)

                //selecionar processo de venda "9860"
                cy.get('#select_option_60 > .md-text')
                    .click({force: true})

                cy.wait(800)

                //Função para escolher cliente para pedido
                escolherClientePedido()

                //Campo "Buscar produtos"
                cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos

                cy.get('#searchText')
                    .should('have.value', '') //Validando se o campo foi realmente limpo
                    .wait(1300)
                    .type('1860')
            
                cy.wait(2000)

                //Preenchendo campo para pesquisar produto
                cy.contains('Cod: 1860')

                cy.wait(400)

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

                //Marcar garantia "T.A. Garantia Não Separa"
                cy.get('#checkbox-140-1 > .md-container')
                    .click()

                cy.wait(300)

                //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado automaticamente
                cy.get('#checkbox-144-2 > .md-container')

                //Botão "OK" - Serviços Vinculados
                cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                    .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

                tirarEntrega()

                cy.wait(800)

                //Buscar segundo produto
                cy.get('#searchText')
                    .clear()
                    .type('1870')
        
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
        
                tirarEntrega()

                cy.wait(400)

                //Botão "AVANÇAR"
                cy.get('.flex-gt-sm-50 > .md-primary')
                    .click({force:true}) //Clicar para avançar para a próxima tela

                // tela de GERAR PARCELAS

                cy.wait(10000)

                //Título "Formas de pagamento na Entrada"
                cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                    .scrollIntoView()

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
                cy.wait(12000)

                pedidoGerado()
            })

            it('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra que destaca e não separa)', () => {

                //clicar para aparecer as opções de processo
                cy.get('#select_value_label_4 > .md-select-icon')
                    .click()

                cy.wait(800)
                
                //rolar para o meio das opções de processo
                cy.get('#select_listbox_12')
                    .scrollTo('center')

                cy.wait(800)

                //selecionar processo de venda "9860"
                cy.get('#select_option_60 > .md-text')
                    .click({force: true})

                cy.wait(800)

                //Função para escolher cliente para pedido
                escolherClientePedido()

                cy.wait(2000)

                //Campo "Buscar produtos"
                cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos

                cy.get('#searchText')
                    .should('have.value', '') //Validando se o campo foi realmente limpo
                    .wait(1300)
                    .type('1860')
            
                cy.wait(2500)

                //Preenchendo campo para pesquisar produto
                cy.contains('Cod: 1860')

                cy.wait(400)

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

                //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado
                cy.get('#checkbox-141-2 > .md-container')
                    .click()

                cy.wait(300)

                //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
                cy.get('#checkbox-142-0 > .md-container')
                    .click()

                //Botão "OK" - Serviços Vinculados
                cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                    .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

                tirarEntrega()

                cy.wait(400)

                //Botão "AVANÇAR"
                cy.get('.flex-gt-sm-50 > .md-primary')
                    .click({force:true}) //Clicar para avançar para a próxima tela

                // tela de GERAR PARCELAS

                cy.wait(9000)

                //Título "Formas de pagamento na Entrada"
                cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                    .scrollIntoView()

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

            it('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

                //clicar para aparecer as opções de processo
                cy.get('#select_value_label_4 > .md-select-icon')
                    .click()

                cy.wait(800)
                
                //rolar para o meio das opções de processo
                cy.get('#select_listbox_12')
                    .scrollTo('center')

                cy.wait(800)

                //selecionar processo de venda "9860"
                cy.get('#select_option_60 > .md-text')
                    .click({force: true})

                cy.wait(800)

                //Função para escolher cliente para pedido
                escolherClientePedido()

                cy.wait(2000)

                //Campo "Buscar produtos"
                cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos

                cy.get('#searchText')
                    .should('have.value', '') //Validando se o campo foi realmente limpo
                    .wait(1300)
                    .type('1860')
            
                cy.wait(2500)

                //Preenchendo campo para pesquisar produto
                cy.contains('Cod: 1860')

                cy.wait(400)

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

                //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado
                cy.get('#checkbox-141-2 > .md-container')
                    .click()

                cy.wait(300)

                //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
                cy.get('#checkbox-142-0 > .md-container')
                    .click()

                //Botão "OK" - Serviços Vinculados
                cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                    .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

                tirarEntrega()

                cy.wait(400)

                //Buscar segundo produto
                cy.get('#searchText')
                    .clear()
                    .type('1870')
        
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

                tirarEntrega()

                cy.wait(400)

                //Botão "AVANÇAR"
                cy.get('.flex-gt-sm-50 > .md-primary')
                    .click({force:true}) //Clicar para avançar para a próxima tela

                // tela de GERAR PARCELAS

                cy.wait(10000)

                //Título "Formas de pagamento na Entrada"
                cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                    .scrollIntoView()

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
                cy.wait(12000)

                pedidoGerado()
            })

            it('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa no mesmo processo)', () => {

                //clicar para aparecer as opções de processo
                cy.get('#select_value_label_4 > .md-select-icon')
                    .click()

                cy.wait(800)
                
                //rolar para o meio das opções de processo
                cy.get('#select_listbox_12')
                    .scrollTo('center')

                cy.wait(800)

                //selecionar processo de venda "9860"
                cy.get('#select_option_60 > .md-text')
                    .click({force: true})

                cy.wait(800)

                //Função para escolher cliente para pedido
                escolherClientePedido()

                cy.wait(2000)

                //Campo "Buscar produtos"
                cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos

                cy.get('#searchText')
                    .should('have.value', '') //Validando se o campo foi realmente limpo
                    .wait(1300)
                    .type('1860')
            
                cy.wait(2500)

                //Preenchendo campo para pesquisar produto
                cy.contains('Cod: 1860')

                cy.wait(400)

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

                //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado
                cy.get('#checkbox-141-2 > .md-container')
                    .click()

                cy.wait(300)

                //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
                cy.get('#checkbox-143-1 > .md-container')
                    .click()

                //Botão "OK" - Serviços Vinculados
                cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                    .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

                tirarEntrega()

                cy.wait(400)

                //Botão "AVANÇAR"
                cy.get('.flex-gt-sm-50 > .md-primary')
                    .click({force:true}) //Clicar para avançar para a próxima tela

                // tela de GERAR PARCELAS

                cy.wait(8000)

                //Título "Formas de pagamento na Entrada"
                cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                    .scrollIntoView()

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

            it('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

                //clicar para aparecer as opções de processo
                cy.get('#select_value_label_4 > .md-select-icon')
                    .click()

                cy.wait(800)
                
                //rolar para o meio das opções de processo
                cy.get('#select_listbox_12')
                    .scrollTo('center')

                cy.wait(800)

                //selecionar processo de venda "9860"
                cy.get('#select_option_60 > .md-text')
                    .click({force: true})

                cy.wait(800)

                //Função para escolher cliente para pedido
                escolherClientePedido()

                cy.wait(2000)

                //Campo "Buscar produtos"
                cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos

                cy.get('#searchText')
                    .should('have.value', '') //Validando se o campo foi realmente limpo
                    .wait(1300)
                    .type('1860')
            
                cy.wait(2500)

                //Preenchendo campo para pesquisar produto
                cy.contains('Cod: 1860')

                cy.wait(400)

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

                //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado
                cy.get('#checkbox-141-2 > .md-container')
                    .click()

                cy.wait(300)

                //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
                cy.get('#checkbox-143-1 > .md-container')
                    .click()

                //Botão "OK" - Serviços Vinculados
                cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                    .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

                tirarEntrega()

                cy.wait(400)

                //Buscar segundo produto
                cy.get('#searchText')
                    .clear()
                    .type('1870')
        
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
        
                tirarEntrega()

                cy.wait(400)

                //Botão "AVANÇAR"
                cy.get('.flex-gt-sm-50 > .md-primary')
                    .click({force:true}) //Clicar para avançar para a próxima tela

                // tela de GERAR PARCELAS

                cy.wait(10000)

                //Título "Formas de pagamento na Entrada"
                cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                    .scrollIntoView()

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
                cy.wait(12000)

                pedidoGerado()
            })

            it('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa em outro processo)', () => {

                //clicar para aparecer as opções de processo
                cy.get('#select_value_label_4 > .md-select-icon')
                    .click()

                cy.wait(800)
                
                //rolar para o meio das opções de processo
                cy.get('#select_listbox_12')
                    .scrollTo('center')

                cy.wait(800)

                //selecionar processo de venda "9860"
                cy.get('#select_option_60 > .md-text')
                    .click({force: true})

                cy.wait(800)

                //Função para escolher cliente para pedido
                escolherClientePedido()

                cy.wait(2000)

                //Campo "Buscar produtos"
                cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos

                cy.get('#searchText')
                    .should('have.value', '') //Validando se o campo foi realmente limpo
                    .wait(1300)
                    .type('1860')
            
                cy.wait(2500)

                //Preenchendo campo para pesquisar produto
                cy.contains('Cod: 1860')

                cy.wait(400)

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

                //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado
                cy.get('#checkbox-141-2 > .md-container')
                    .click()

                cy.wait(300)

                //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado
                cy.get('#checkbox-144-2 > .md-container')
                    .click()

                //Botão "OK" - Serviços Vinculados
                cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                    .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

                tirarEntrega()

                cy.wait(400)

                //Botão "AVANÇAR"
                cy.get('.flex-gt-sm-50 > .md-primary')
                    .click({force:true}) //Clicar para avançar para a próxima tela

                // tela de GERAR PARCELAS

                cy.wait(9000)

                //Título "Formas de pagamento na Entrada"
                cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                    .scrollIntoView()

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

            it('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

                //clicar para aparecer as opções de processo
                cy.get('#select_value_label_4 > .md-select-icon')
                    .click()

                cy.wait(800)
                
                //rolar para o meio das opções de processo
                cy.get('#select_listbox_12')
                    .scrollTo('center')

                cy.wait(800)

                //selecionar processo de venda "9860"
                cy.get('#select_option_60 > .md-text')
                    .click({force: true})

                cy.wait(800)

                //Função para escolher cliente para pedido
                escolherClientePedido()

                cy.wait(2000)

                //Campo "Buscar produtos"
                cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos

                cy.get('#searchText')
                    .should('have.value', '') //Validando se o campo foi realmente limpo
                    .wait(1300)
                    .type('1860')
            
                cy.wait(2500)

                //Preenchendo campo para pesquisar produto
                cy.contains('Cod: 1860')

                cy.wait(400)

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

                //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado
                cy.get('#checkbox-141-2 > .md-container')
                    .click()

                cy.wait(300)

                //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado
                cy.get('#checkbox-144-2 > .md-container')
                    .click()

                //Botão "OK" - Serviços Vinculados
                cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                    .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

                tirarEntrega()

                cy.wait(400)

                //Buscar segundo produto
                cy.get('#searchText')
                    .clear()
                    .type('1870')
        
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
        
                tirarEntrega()

                cy.wait(400)

                //Botão "AVANÇAR"
                cy.get('.flex-gt-sm-50 > .md-primary')
                    .click({force:true}) //Clicar para avançar para a próxima tela

                // tela de GERAR PARCELAS

                cy.wait(10000)

                //Título "Formas de pagamento na Entrada"
                cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                    .scrollIntoView()

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
                cy.wait(12000)

                pedidoGerado()
            })
        })

    context('Com entrega/processo 9860 - caminho feliz', () => {

            it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra que destaca e não separa)', () => {

                //clicar para aparecer as opções de processo
                cy.get('#select_value_label_4 > .md-select-icon')
                    .click()

                cy.wait(800)
                
                //rolar para o meio das opções de processo
                cy.get('#select_listbox_12')
                    .scrollTo('center')

                cy.wait(800)

                //selecionar processo de venda "9860"
                cy.get('#select_option_60 > .md-text')
                    .click({force: true})

                cy.wait(800)

                //Função para escolher cliente para pedido
                escolherClientePedido()

                cy.wait(2000)

                //Campo "Buscar produtos"
                cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos

                cy.get('#searchText')
                    .should('have.value', '') //Validando se o campo foi realmente limpo
                    .wait(1300)
                    .type('1860')
            
                cy.wait(2500)

                //Preenchendo campo para pesquisar produto
                cy.contains('Cod: 1860')

                cy.wait(400)

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

                //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
                cy.get('#checkbox-139-0 > .md-container')
                    .click()

                cy.wait(300)

                //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
                cy.get('#checkbox-142-0 > .md-container')
                    .click()

                //Botão "OK" - Serviços Vinculados
                cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                    .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

                cy.wait(400)

                //Botão "AVANÇAR"
                cy.get('.flex-gt-sm-50 > .md-primary')
                    .click({force:true}) //Clicar para avançar para a próxima tela

                // tela para ESCOLHER TRANSPORTADORA

                cy.wait(14000)

                //Card de inconsistencias - fechar
                cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                    .click()
        
                //Função criada para clicar no campo transportadora e escolher a trasportadora
                escolherTransportadora()
            
                escolherRota()
            
                cy.wait(10000)

                // tela de GERAR PARCELAS

                //Título "Formas de pagamento na Entrada"
                cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                    .scrollIntoView()

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
                cy.wait(13000)

                pedidoGerado()
            })

            it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

                //clicar para aparecer as opções de processo
                cy.get('#select_value_label_4 > .md-select-icon')
                    .click()

                cy.wait(800)
                
                //rolar para o meio das opções de processo
                cy.get('#select_listbox_12')
                    .scrollTo('center')

                cy.wait(800)

                //selecionar processo de venda "9860"
                cy.get('#select_option_60 > .md-text')
                    .click({force: true})

                cy.wait(800)

                //Função para escolher cliente para pedido
                escolherClientePedido()

                cy.wait(2000)

                //Campo "Buscar produtos"
                cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos

                cy.get('#searchText')
                    .should('have.value', '') //Validando se o campo foi realmente limpo
                    .wait(1300)
                    .type('1860')
            
                cy.wait(2500)

                //Preenchendo campo para pesquisar produto
                cy.contains('Cod: 1860')

                cy.wait(400)

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

                //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
                cy.get('#checkbox-139-0 > .md-container')
                    .click()

                cy.wait(300)

                //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
                cy.get('#checkbox-142-0 > .md-container')
                    .click()

                //Botão "OK" - Serviços Vinculados
                cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                    .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

                cy.wait(800)

                //Buscar segundo produto
                cy.get('#searchText')
                    .clear()
                    .type('1870')
        
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

                //Botão "AVANÇAR"
                cy.get('.flex-gt-sm-50 > .md-primary')
                    .click({force:true}) //Clicar para avançar para a próxima tela

                // tela para ESCOLHER TRANSPORTADORA

                cy.wait(14000)

                //Card de inconsistencias - fechar
                cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                    .click()
        
                //Função criada para clicar no campo transportadora e escolher a trasportadora
                escolherTransportadora()
            
                escolherRota()
            
                cy.wait(10000)

                // tela de GERAR PARCELAS

                //Título "Formas de pagamento na Entrada"
                cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                    .scrollIntoView()

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

                cy.wait(10000)

                // RESUMO DO PEDIDO - ANTES DE FINALIZAR

                botaoFinalizarPedido()

                //Carregamento de pedido
                finalizandoPedido()

                //Carregando a finalização do pedido
                cy.wait(12000)

                pedidoGerado()
            })

            it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa no mesmo processo)', () => {

                //clicar para aparecer as opções de processo
                cy.get('#select_value_label_4 > .md-select-icon')
                    .click()

                cy.wait(800)
                
                //rolar para o meio das opções de processo
                cy.get('#select_listbox_12')
                    .scrollTo('center')

                cy.wait(800)

                //selecionar processo de venda "9860"
                cy.get('#select_option_60 > .md-text')
                    .click({force: true})

                cy.wait(800)

                //Função para escolher cliente para pedido
                escolherClientePedido()

                cy.wait(2000)

                //Campo "Buscar produtos"
                cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos

                cy.get('#searchText')
                    .should('have.value', '') //Validando se o campo foi realmente limpo
                    .wait(1300)
                    .type('1860')
            
                cy.wait(2500)

                //Preenchendo campo para pesquisar produto
                cy.contains('Cod: 1860')

                cy.wait(400)

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

                //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
                cy.get('#checkbox-139-0 > .md-container')
                    .click()

                cy.wait(300)

                //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
                cy.get('#checkbox-143-1 > .md-container')
                    .click()

                //Botão "OK" - Serviços Vinculados
                cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                    .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

                cy.wait(400)

                //Botão "AVANÇAR"
                cy.get('.flex-gt-sm-50 > .md-primary')
                    .click({force:true}) //Clicar para avançar para a próxima tela

                // tela para ESCOLHER TRANSPORTADORA

                cy.wait(14000)

                //Card de inconsistencias - fechar
                cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                    .click()
        
                //Função criada para clicar no campo transportadora e escolher a trasportadora
                escolherTransportadora()
            
                escolherRota()
            
                cy.wait(10000)

                // tela de GERAR PARCELAS

                //Título "Formas de pagamento na Entrada"
                cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                    .scrollIntoView()

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
                cy.wait(13000)

                pedidoGerado()
            })

            it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

                //clicar para aparecer as opções de processo
                cy.get('#select_value_label_4 > .md-select-icon')
                    .click()

                cy.wait(800)
                
                //rolar para o meio das opções de processo
                cy.get('#select_listbox_12')
                    .scrollTo('center')

                cy.wait(800)

                //selecionar processo de venda "9860"
                cy.get('#select_option_60 > .md-text')
                    .click({force: true})

                cy.wait(800)

                //Função para escolher cliente para pedido
                escolherClientePedido()

                cy.wait(2000)

                //Campo "Buscar produtos"
                cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos

                cy.get('#searchText')
                    .should('have.value', '') //Validando se o campo foi realmente limpo
                    .wait(1300)
                    .type('1860')
            
                cy.wait(2500)

                //Preenchendo campo para pesquisar produto
                cy.contains('Cod: 1860')

                cy.wait(400)

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

                //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
                cy.get('#checkbox-139-0 > .md-container')
                    .click()

                cy.wait(300)

                //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
                cy.get('#checkbox-143-1 > .md-container')
                    .click()

                //Botão "OK" - Serviços Vinculados
                cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                    .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

                cy.wait(800)

                //Buscar segundo produto
                cy.get('#searchText')
                    .clear()
                    .type('1870')
        
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

                //Botão "AVANÇAR"
                cy.get('.flex-gt-sm-50 > .md-primary')
                    .click({force:true}) //Clicar para avançar para a próxima tela

                // tela para ESCOLHER TRANSPORTADORA

                cy.wait(14000)

                //Card de inconsistencias - fechar
                cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                    .click()
        
                //Função criada para clicar no campo transportadora e escolher a trasportadora
                escolherTransportadora()
            
                escolherRota()
            
                cy.wait(10000)

                // tela de GERAR PARCELAS

                //Título "Formas de pagamento na Entrada"
                cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                    .scrollIntoView()

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
                cy.wait(12000)

                pedidoGerado()
            })

            it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa em outro processo)', () => {

                //clicar para aparecer as opções de processo
                cy.get('#select_value_label_4 > .md-select-icon')
                    .click()

                cy.wait(800)
                
                //rolar para o meio das opções de processo
                cy.get('#select_listbox_12')
                    .scrollTo('center')

                cy.wait(800)

                //selecionar processo de venda "9860"
                cy.get('#select_option_60 > .md-text')
                    .click({force: true})

                cy.wait(800)

                //Função para escolher cliente para pedido
                escolherClientePedido()

                cy.wait(2000)

                //Campo "Buscar produtos"
                cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos

                cy.get('#searchText')
                    .should('have.value', '') //Validando se o campo foi realmente limpo
                    .wait(1300)
                    .type('1860')
            
                cy.wait(2500)

                //Preenchendo campo para pesquisar produto
                cy.contains('Cod: 1860')

                cy.wait(400)

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

                //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
                cy.get('#checkbox-139-0 > .md-container')
                    .click()

                cy.wait(300)

                //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado neste produto
                cy.get('#checkbox-144-2 > .md-container')
                    .click()

                //Botão "OK" - Serviços Vinculados
                cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                    .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

                cy.wait(400)

                //Botão "AVANÇAR"
                cy.get('.flex-gt-sm-50 > .md-primary')
                    .click({force:true}) //Clicar para avançar para a próxima tela

                // tela para ESCOLHER TRANSPORTADORA

                cy.wait(14000)

                //Card de inconsistencias - fechar
                cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                    .click()
        
                //Função criada para clicar no campo transportadora e escolher a trasportadora
                escolherTransportadora()
            
                escolherRota()
            
                cy.wait(10000)

                // tela de GERAR PARCELAS

                //Título "Formas de pagamento na Entrada"
                cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                    .scrollIntoView()

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
                cy.wait(12000)

                pedidoGerado()
            })

            it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

                //clicar para aparecer as opções de processo
                cy.get('#select_value_label_4 > .md-select-icon')
                    .click()

                cy.wait(800)
                
                //rolar para o meio das opções de processo
                cy.get('#select_listbox_12')
                    .scrollTo('center')

                cy.wait(800)

                //selecionar processo de venda "9860"
                cy.get('#select_option_60 > .md-text')
                    .click({force: true})

                cy.wait(800)

                //Função para escolher cliente para pedido
                escolherClientePedido()

                cy.wait(2000)

                //Campo "Buscar produtos"
                cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos

                cy.get('#searchText')
                    .should('have.value', '') //Validando se o campo foi realmente limpo
                    .wait(1300)
                    .type('1860')
            
                cy.wait(2500)

                //Preenchendo campo para pesquisar produto
                cy.contains('Cod: 1860')

                cy.wait(400)

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

                //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
                cy.get('#checkbox-139-0 > .md-container')
                    .click()

                cy.wait(300)

                //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado neste produto
                cy.get('#checkbox-144-2 > .md-container')
                    .click()

                //Botão "OK" - Serviços Vinculados
                cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                    .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

                cy.wait(800)

                //Buscar segundo produto
                cy.get('#searchText')
                    .clear()
                    .type('1870')
        
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

                //Botão "AVANÇAR"
                cy.get('.flex-gt-sm-50 > .md-primary')
                    .click() //Clicar para avançar para a próxima tela

                // tela para ESCOLHER TRANSPORTADORA

                cy.wait(14000)

                //Card de inconsistencias - fechar
                cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                    .click()
        
                //Função criada para clicar no campo transportadora e escolher a trasportadora
                escolherTransportadora()
            
                escolherRota()
            
                cy.wait(10000)

                // tela de GERAR PARCELAS

                //Título "Formas de pagamento na Entrada"
                cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                    .scrollIntoView()

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
                cy.wait(12000)

                pedidoGerado()
            })

            it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra que destaca e não separa)', () => {

                //clicar para aparecer as opções de processo
                cy.get('#select_value_label_4 > .md-select-icon')
                    .click()

                cy.wait(800)
                
                //rolar para o meio das opções de processo
                cy.get('#select_listbox_12')
                    .scrollTo('center')

                cy.wait(800)

                //selecionar processo de venda "9860"
                cy.get('#select_option_60 > .md-text')
                    .click({force: true})

                cy.wait(800)

                //Função para escolher cliente para pedido
                escolherClientePedido()

                cy.wait(2000)

                //Campo "Buscar produtos"
                cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos

                cy.get('#searchText')
                    .should('have.value', '') //Validando se o campo foi realmente limpo
                    .wait(1300)
                    .type('1860')
            
                cy.wait(2500)

                //Preenchendo campo para pesquisar produto
                cy.contains('Cod: 1860')

                cy.wait(400)

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

                //Marcar garantia "T.A. Garantia Não Separa"
                cy.get('#checkbox-140-1 > .md-container')
                    .click()

                cy.wait(300)

                //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
                cy.get('#checkbox-142-0 > .md-container')
                    .click()

                //Botão "OK" - Serviços Vinculados
                cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                    .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

                cy.wait(400)

                //Botão "AVANÇAR"
                cy.get('.flex-gt-sm-50 > .md-primary')
                    .click({force:true}) //Clicar para avançar para a próxima tela

                // tela para ESCOLHER TRANSPORTADORA

                cy.wait(14000)

                //Card de inconsistencias - fechar
                cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                    .click()
        
                //Função criada para clicar no campo transportadora e escolher a trasportadora
                escolherTransportadora()
            
                escolherRota()
            
                cy.wait(10000)

                // tela de GERAR PARCELAS

                //Título "Formas de pagamento na Entrada"
                cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                    .scrollIntoView()

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
                cy.wait(12000)

                pedidoGerado()
            })

            it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

                //clicar para aparecer as opções de processo
                cy.get('#select_value_label_4 > .md-select-icon')
                    .click()

                cy.wait(800)
                
                //rolar para o meio das opções de processo
                cy.get('#select_listbox_12')
                    .scrollTo('center')

                cy.wait(800)

                //selecionar processo de venda "9860"
                cy.get('#select_option_60 > .md-text')
                    .click({force: true})

                cy.wait(800)

                //Função para escolher cliente para pedido
                escolherClientePedido()

                cy.wait(2000)

                //Campo "Buscar produtos"
                cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos

                cy.get('#searchText')
                    .should('have.value', '') //Validando se o campo foi realmente limpo
                    .wait(1300)
                    .type('1860')
            
                cy.wait(2500)

                //Preenchendo campo para pesquisar produto
                cy.contains('Cod: 1860')

                cy.wait(400)

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

                //Marcar garantia "T.A. Garantia Não Separa"
                cy.get('#checkbox-140-1 > .md-container')
                    .click()

                cy.wait(300)

                //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
                cy.get('#checkbox-142-0 > .md-container')
                    .click()

                //Botão "OK" - Serviços Vinculados
                cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                    .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

                cy.wait(800)

                //Buscar segundo produto
                cy.get('#searchText')
                    .clear()
                    .type('1870')
        
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

                //Botão "AVANÇAR"
                cy.get('.flex-gt-sm-50 > .md-primary')
                    .click({force:true}) //Clicar para avançar para a próxima tela

                // tela para ESCOLHER TRANSPORTADORA

                cy.wait(14000)

                //Card de inconsistencias - fechar
                cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                    .click()
        
                //Função criada para clicar no campo transportadora e escolher a trasportadora
                escolherTransportadora()
            
                escolherRota()
            
                cy.wait(10000)

                // tela de GERAR PARCELAS

                //Título "Formas de pagamento na Entrada"
                cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                    .scrollIntoView()

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
                cy.wait(12000)

                pedidoGerado()
            })

            it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa no mesmo processo)', () => {

                //clicar para aparecer as opções de processo
                cy.get('#select_value_label_4 > .md-select-icon')
                    .click()

                cy.wait(800)
                
                //rolar para o meio das opções de processo
                cy.get('#select_listbox_12')
                    .scrollTo('center')

                cy.wait(800)

                //selecionar processo de venda "9860"
                cy.get('#select_option_60 > .md-text')
                    .click({force: true})

                cy.wait(800)

                //Função para escolher cliente para pedido
                escolherClientePedido()

                cy.wait(2000)

                //Campo "Buscar produtos"
                cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos

                cy.get('#searchText')
                    .should('have.value', '') //Validando se o campo foi realmente limpo
                    .wait(1300)
                    .type('1860')
            
                cy.wait(2500)

                //Preenchendo campo para pesquisar produto
                cy.contains('Cod: 1860')

                cy.wait(400)

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

                //Marcar garantia "T.A. Garantia Não Separa"
                cy.get('#checkbox-140-1 > .md-container')
                    .click()

                cy.wait(300)

                //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
                cy.get('#checkbox-143-1 > .md-container')
                    .click()

                //Botão "OK" - Serviços Vinculados
                cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                    .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

                cy.wait(400)

                //Botão "AVANÇAR"
                cy.get('.flex-gt-sm-50 > .md-primary')
                    .click({force:true}) //Clicar para avançar para a próxima tela

                // tela para ESCOLHER TRANSPORTADORA

                cy.wait(14000)

                //Card de inconsistencias - fechar
                cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                    .click()
        
                //Função criada para clicar no campo transportadora e escolher a trasportadora
                escolherTransportadora()
            
                escolherRota()
            
                cy.wait(10000)

                // tela de GERAR PARCELAS

                //Título "Formas de pagamento na Entrada"
                cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                    .scrollIntoView()

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
                cy.wait(13000)

                pedidoGerado()
            })

            it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

                //clicar para aparecer as opções de processo
                cy.get('#select_value_label_4 > .md-select-icon')
                    .click()

                cy.wait(800)
                
                //rolar para o meio das opções de processo
                cy.get('#select_listbox_12')
                    .scrollTo('center')

                cy.wait(800)

                //selecionar processo de venda "9860"
                cy.get('#select_option_60 > .md-text')
                    .click({force: true})

                cy.wait(800)

                //Função para escolher cliente para pedido
                escolherClientePedido()

                cy.wait(2000)

                //Campo "Buscar produtos"
                cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos

                cy.get('#searchText')
                    .should('have.value', '') //Validando se o campo foi realmente limpo
                    .wait(1300)
                    .type('1860')
            
                cy.wait(2500)

                //Preenchendo campo para pesquisar produto
                cy.contains('Cod: 1860')

                cy.wait(400)

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

                //Marcar garantia "T.A. Garantia Não Separa"
                cy.get('#checkbox-140-1 > .md-container')
                    .click()

                cy.wait(300)

                //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
                cy.get('#checkbox-143-1 > .md-container')
                    .click()

                //Botão "OK" - Serviços Vinculados
                cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                    .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

                cy.wait(800)

                //Buscar segundo produto
                cy.get('#searchText')
                    .clear()
                    .type('1870')
        
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

                //Botão "AVANÇAR"
                cy.get('.flex-gt-sm-50 > .md-primary')
                    .click() //Clicar para avançar para a próxima tela

                // tela para ESCOLHER TRANSPORTADORA

                cy.wait(14000)

                //Card de inconsistencias - fechar
                cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                    .click()
        
                //Função criada para clicar no campo transportadora e escolher a trasportadora
                escolherTransportadora()
            
                escolherRota()
            
                cy.wait(10000)

                // tela de GERAR PARCELAS

                //Título "Formas de pagamento na Entrada"
                cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                    .scrollIntoView()

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
                cy.wait(12000)

                pedidoGerado()
            })

            it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa em outro processo)', () => {

                //clicar para aparecer as opções de processo
                cy.get('#select_value_label_4 > .md-select-icon')
                    .click()

                cy.wait(800)
                
                //rolar para o meio das opções de processo
                cy.get('#select_listbox_12')
                    .scrollTo('center')

                cy.wait(800)

                //selecionar processo de venda "9860"
                cy.get('#select_option_60 > .md-text')
                    .click({force: true})

                cy.wait(800)

                //Função para escolher cliente para pedido
                escolherClientePedido()

                cy.wait(2000)

                //Campo "Buscar produtos"
                cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos

                cy.get('#searchText')
                    .should('have.value', '') //Validando se o campo foi realmente limpo
                    .wait(1300)
                    .type('1860')
            
                cy.wait(2500)

                //Preenchendo campo para pesquisar produto
                cy.contains('Cod: 1860')

                cy.wait(400)

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

                //Marcar garantia "T.A. Garantia Não Separa"
                cy.get('#checkbox-140-1 > .md-container')
                    .click()

                cy.wait(300)

                //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado automaticamente
                cy.get('#checkbox-144-2 > .md-container')
                    .click()

                //Botão "OK" - Serviços Vinculados
                cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                    .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

                cy.wait(400)

                //Botão "AVANÇAR"
                cy.get('.flex-gt-sm-50 > .md-primary')
                    .click({force:true}) //Clicar para avançar para a próxima tela

                // tela para ESCOLHER TRANSPORTADORA

                cy.wait(14000)

                //Card de inconsistencias - fechar
                cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                    .click()
        
                //Função criada para clicar no campo transportadora e escolher a trasportadora
                escolherTransportadora()
            
                escolherRota()
            
                cy.wait(10000)

                // tela de GERAR PARCELAS

                //Título "Formas de pagamento na Entrada"
                cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                    .scrollIntoView()

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
                cy.wait(13000)

                pedidoGerado()
            })

            it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

                //clicar para aparecer as opções de processo
                cy.get('#select_value_label_4 > .md-select-icon')
                    .click()

                cy.wait(800)
                
                //rolar para o meio das opções de processo
                cy.get('#select_listbox_12')
                    .scrollTo('center')

                cy.wait(800)

                //selecionar processo de venda "9860"
                cy.get('#select_option_60 > .md-text')
                    .click({force: true})

                cy.wait(800)

                //Função para escolher cliente para pedido
                escolherClientePedido()

                cy.wait(2000)

                //Campo "Buscar produtos"
                cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos

                cy.get('#searchText')
                    .should('have.value', '') //Validando se o campo foi realmente limpo
                    .wait(1300)
                    .type('1860')
            
                cy.wait(2500)

                //Preenchendo campo para pesquisar produto
                cy.contains('Cod: 1860')

                cy.wait(400)

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

                //Marcar garantia "T.A. Garantia Não Separa"
                cy.get('#checkbox-140-1 > .md-container')
                    .click()

                cy.wait(300)

                //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado automaticamente
                cy.get('#checkbox-144-2 > .md-container')
                    .click()

                //Botão "OK" - Serviços Vinculados
                cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                    .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

                cy.wait(800)

                //Buscar segundo produto
                cy.get('#searchText')
                    .clear()
                    .type('1870')
        
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

                //Botão "AVANÇAR"
                cy.get('.flex-gt-sm-50 > .md-primary')
                    .click() //Clicar para avançar para a próxima tela

                // tela para ESCOLHER TRANSPORTADORA

                cy.wait(14000)

                //Card de inconsistencias - fechar
                cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                    .click()
        
                //Função criada para clicar no campo transportadora e escolher a trasportadora
                escolherTransportadora()
            
                escolherRota()
            
                cy.wait(10000)

                // tela de GERAR PARCELAS

                //Título "Formas de pagamento na Entrada"
                cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                    .scrollIntoView()

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
                cy.wait(12000)

                pedidoGerado()
            })

            it('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra que destaca e não separa)', () => {

                //clicar para aparecer as opções de processo
                cy.get('#select_value_label_4 > .md-select-icon')
                    .click()

                cy.wait(800)
                
                //rolar para o meio das opções de processo
                cy.get('#select_listbox_12')
                    .scrollTo('center')

                cy.wait(800)

                //selecionar processo de venda "9860"
                cy.get('#select_option_60 > .md-text')
                    .click({force: true})

                cy.wait(800)

                //Função para escolher cliente para pedido
                escolherClientePedido()

                cy.wait(2000)

                //Campo "Buscar produtos"
                cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos

                cy.get('#searchText')
                    .should('have.value', '') //Validando se o campo foi realmente limpo
                    .wait(1300)
                    .type('1860')
            
                cy.wait(2500)

                //Preenchendo campo para pesquisar produto
                cy.contains('Cod: 1860')

                cy.wait(400)

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

                //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado
                cy.get('#checkbox-141-2 > .md-container')
                    .click()

                cy.wait(300)

                //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
                cy.get('#checkbox-142-0 > .md-container')
                    .click()

                //Botão "OK" - Serviços Vinculados
                cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                    .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

                cy.wait(400)

                //Botão "AVANÇAR"
                cy.get('.flex-gt-sm-50 > .md-primary')
                    .click({force:true}) //Clicar para avançar para a próxima tela

                // tela para ESCOLHER TRANSPORTADORA

                cy.wait(14000)

                //Card de inconsistencias - fechar
                cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                    .click()
        
                //Função criada para clicar no campo transportadora e escolher a trasportadora
                escolherTransportadora()
            
                escolherRota()
            
                cy.wait(10000)

                // tela de GERAR PARCELAS

                //Título "Formas de pagamento na Entrada"
                cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                    .scrollIntoView()

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
                cy.wait(12000)

                pedidoGerado()
            })

            it('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

                //clicar para aparecer as opções de processo
                cy.get('#select_value_label_4 > .md-select-icon')
                    .click()

                cy.wait(800)
                
                //rolar para o meio das opções de processo
                cy.get('#select_listbox_12')
                    .scrollTo('center')

                cy.wait(800)

                //selecionar processo de venda "9860"
                cy.get('#select_option_60 > .md-text')
                    .click({force: true})

                cy.wait(800)

                //Função para escolher cliente para pedido
                escolherClientePedido()

                cy.wait(2000)

                //Campo "Buscar produtos"
                cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos

                cy.get('#searchText')
                    .should('have.value', '') //Validando se o campo foi realmente limpo
                    .wait(1300)
                    .type('1860')
            
                cy.wait(2500)

                //Preenchendo campo para pesquisar produto
                cy.contains('Cod: 1860')

                cy.wait(400)

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

                //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado
                cy.get('#checkbox-141-2 > .md-container')
                    .click()

                cy.wait(300)

                //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
                cy.get('#checkbox-142-0 > .md-container')
                    .click()

                //Botão "OK" - Serviços Vinculados
                cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                    .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

                cy.wait(800)

                //Buscar segundo produto
                cy.get('#searchText')
                    .clear()
                    .type('1870')
        
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

                //Botão "AVANÇAR"
                cy.get('.flex-gt-sm-50 > .md-primary')
                    .click({force:true}) //Clicar para avançar para a próxima tela

                // tela para ESCOLHER TRANSPORTADORA

                cy.wait(14000)

                //Card de inconsistencias - fechar
                cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                    .click()
        
                //Função criada para clicar no campo transportadora e escolher a trasportadora
                escolherTransportadora()
            
                escolherRota()
            
                cy.wait(10000)

                // tela de GERAR PARCELAS

                //Título "Formas de pagamento na Entrada"
                cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                    .scrollIntoView()

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
                cy.wait(12000)

                pedidoGerado()
            })

            it('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa no mesmo processo)', () => {

                //clicar para aparecer as opções de processo
                cy.get('#select_value_label_4 > .md-select-icon')
                    .click()

                cy.wait(800)
                
                //rolar para o meio das opções de processo
                cy.get('#select_listbox_12')
                    .scrollTo('center')

                cy.wait(800)

                //selecionar processo de venda "9860"
                cy.get('#select_option_60 > .md-text')
                    .click({force: true})

                cy.wait(800)

                //Função para escolher cliente para pedido
                escolherClientePedido()

                cy.wait(2000)

                //Campo "Buscar produtos"
                cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos

                cy.get('#searchText')
                    .should('have.value', '') //Validando se o campo foi realmente limpo
                    .wait(1300)
                    .type('1860')
            
                cy.wait(2500)

                //Preenchendo campo para pesquisar produto
                cy.contains('Cod: 1860')

                cy.wait(400)

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

                //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado
                cy.get('#checkbox-141-2 > .md-container')
                    .click()

                cy.wait(300)

                //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
                cy.get('#checkbox-143-1 > .md-container')
                    .click()

                //Botão "OK" - Serviços Vinculados
                cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                    .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

                cy.wait(400)

                //Botão "AVANÇAR"
                cy.get('.flex-gt-sm-50 > .md-primary')
                    .click({force:true}) //Clicar para avançar para a próxima tela

                // tela para ESCOLHER TRANSPORTADORA

                cy.wait(14000)

                //Card de inconsistencias - fechar
                cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                    .click()
        
                //Função criada para clicar no campo transportadora e escolher a trasportadora
                escolherTransportadora()
            
                escolherRota()
            
                cy.wait(10000)

                // tela de GERAR PARCELAS

                //Título "Formas de pagamento na Entrada"
                cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                    .scrollIntoView()

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
                cy.wait(13000)

                pedidoGerado()
            })

            it('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

                //clicar para aparecer as opções de processo
                cy.get('#select_value_label_4 > .md-select-icon')
                    .click()

                cy.wait(800)
                
                //rolar para o meio das opções de processo
                cy.get('#select_listbox_12')
                    .scrollTo('center')

                cy.wait(800)

                //selecionar processo de venda "9860"
                cy.get('#select_option_60 > .md-text')
                    .click({force: true})

                cy.wait(800)

                //Função para escolher cliente para pedido
                escolherClientePedido()

                cy.wait(2000)

                //Campo "Buscar produtos"
                cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos

                cy.get('#searchText')
                    .should('have.value', '') //Validando se o campo foi realmente limpo
                    .wait(1300)
                    .type('1860')
            
                cy.wait(2500)

                //Preenchendo campo para pesquisar produto
                cy.contains('Cod: 1860')

                cy.wait(400)

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

                //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado
                cy.get('#checkbox-141-2 > .md-container')
                    .click()

                cy.wait(300)

                //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
                cy.get('#checkbox-143-1 > .md-container')
                    .click()

                //Botão "OK" - Serviços Vinculados
                cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                    .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

                cy.wait(800)

                //Buscar segundo produto
                cy.get('#searchText')
                    .clear()
                    .type('1870')
        
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

                //Botão "AVANÇAR"
                cy.get('.flex-gt-sm-50 > .md-primary')
                    .click({force:true}) //Clicar para avançar para a próxima tela

                // tela para ESCOLHER TRANSPORTADORA

                cy.wait(14000)

                //Card de inconsistencias - fechar
                cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                    .click()
        
                //Função criada para clicar no campo transportadora e escolher a trasportadora
                escolherTransportadora()
            
                escolherRota()
            
                cy.wait(10000)

                // tela de GERAR PARCELAS

                //Título "Formas de pagamento na Entrada"
                cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                    .scrollIntoView()

                //Botão "GERAR PARCELAS"
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

                //Carregamento de pedido
                finalizandoPedido()

                //Carregando a finalização do pedido
                cy.wait(12000)

                pedidoGerado()
            })

            it('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa em outro processo)', () => {

                //clicar para aparecer as opções de processo
                cy.get('#select_value_label_4 > .md-select-icon')
                    .click()

                cy.wait(800)
                
                //rolar para o meio das opções de processo
                cy.get('#select_listbox_12')
                    .scrollTo('center')

                cy.wait(800)

                //selecionar processo de venda "9860"
                cy.get('#select_option_60 > .md-text')
                    .click({force: true})

                cy.wait(800)

                //Função para escolher cliente para pedido
                escolherClientePedido()

                cy.wait(2000)

                //Campo "Buscar produtos"
                cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos

                cy.get('#searchText')
                    .should('have.value', '') //Validando se o campo foi realmente limpo
                    .wait(1300)
                    .type('1860')
            
                cy.wait(2500)

                //Preenchendo campo para pesquisar produto
                cy.contains('Cod: 1860')

                cy.wait(400)

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

                //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado
                cy.get('#checkbox-141-2 > .md-container')
                    .click()

                cy.wait(300)

                //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado
                cy.get('#checkbox-144-2 > .md-container')
                    .click()

                //Botão "OK" - Serviços Vinculados
                cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                    .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

                cy.wait(800)

                //Botão "AVANÇAR"
                cy.get('.flex-gt-sm-50 > .md-primary')
                    .click({force:true}) //Clicar para avançar para a próxima tela

                // tela para ESCOLHER TRANSPORTADORA

                cy.wait(14000)

                //Card de inconsistencias - fechar
                cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                    .click()
        
                //Função criada para clicar no campo transportadora e escolher a trasportadora
                escolherTransportadora()
            
                escolherRota()
            
                cy.wait(10000)

                // tela de GERAR PARCELAS

                //Título "Formas de pagamento na Entrada"
                cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                    .scrollIntoView()

                //Botão "GERAR PARCELAS"
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

                cy.wait(9000)

                // RESUMO DO PEDIDO - ANTES DE FINALIZAR

                cy.wait(800)

                botaoFinalizarPedido()

                //Carregamento de pedido
                finalizandoPedido()

                //Carregando a finalização do pedido
                cy.wait(12000)

                pedidoGerado()
            })  

            it('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

                //clicar para aparecer as opções de processo
                cy.get('#select_value_label_4 > .md-select-icon')
                    .click()

                cy.wait(800)
                
                //rolar para o meio das opções de processo
                cy.get('#select_listbox_12')
                    .scrollTo('center')

                cy.wait(800)

                //selecionar processo de venda "9860"
                cy.get('#select_option_60 > .md-text')
                    .click({force: true})

                cy.wait(800)

                //Função para escolher cliente para pedido
                escolherClientePedido()

                cy.wait(2000)

                //Campo "Buscar produtos"
                cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos

                cy.get('#searchText')
                    .should('have.value', '') //Validando se o campo foi realmente limpo
                    .wait(1300)
                    .type('1860')
            
                cy.wait(2500)

                //Preenchendo campo para pesquisar produto
                cy.contains('Cod: 1860')

                cy.wait(400)

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

                //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado
                cy.get('#checkbox-141-2 > .md-container')
                    .click()

                cy.wait(300)

                //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" - não precisa marcar, pois já vem marcado
                cy.get('#checkbox-144-2 > .md-container')
                    .click()

                //Botão "OK" - Serviços Vinculados
                cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
                    .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

                cy.wait(800)

                //Buscar segundo produto
                cy.get('#searchText')
                    .clear()
                    .type('1870')
        
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

                //Botão "AVANÇAR"
                cy.get('.flex-gt-sm-50 > .md-primary')
                    .click({force:true}) //Clicar para avançar para a próxima tela

                // tela para ESCOLHER TRANSPORTADORA

                cy.wait(14000)

                //Card de inconsistencias - fechar
                cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
                    .click()
        
                //Função criada para clicar no campo transportadora e escolher a trasportadora
                escolherTransportadora()
            
                escolherRota()
            
                cy.wait(10000)

                // tela de GERAR PARCELAS

                //Título "Formas de pagamento na Entrada"
                cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
                    .scrollIntoView()

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
                cy.wait(12000)

                pedidoGerado()
            })
    })
    })