import { titulopagina } from '../../../support/para_todos';
import { escolherTransportadora, saldodisponivel, escolherRota, escolherClientePedido, pedidoGerado, botaoFinalizarPedido, finalizandoPedido,
         clicarAdicionarProduto, tirarEntrega, tirarMontagem, tirarEntregaSegundo, tirarMontagemSegundo, botaoGerarParcelas, processoVendaPrincipal,
         avancarParaParcelas, avancarParaTransportadora, avancarParcelasEntrega, modalServicosVinculados, okServicosVinculados,
         escolherProdutoPesquisa, escolherVoltagemProduto, avancarFinal, modalInconsRotaTransp } from '../../../support/para_pedidos/gerais_pedidos'
import { prd1PrazoParcela, prd2PrazoParcela, prd3PrazoParcela, prd4PrazoParcela, messAdicionandoProdutosServicos, adicionarPrestamista } from '../../../support/para_pedidos/para_pedidos_promocao';

describe('Gerar pedidos com promoção e serviços com isenção de juros', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login(); 
        titulopagina()
    })
  
    context('Sem entrega/ com promoção/ com serviço processo 9860 - caminho feliz', () => {

        it('Pedido com promoção a prazo/parcelas (promoção 159): produto 1891 0 0 com garantia (isenta de juros)', () => {
    
            processoVendaPrincipal()
    
            escolherClientePedido()
    
            cy.wait(500)
    
            prd1PrazoParcela()
    
            saldodisponivel()
    
            escolherProdutoPesquisa()
    
            cy.wait(200)
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                      
            escolherVoltagemProduto()

            //Validando Tipo "Tipo(s) Serviço(s) Isento(s):" dentro do modal Promoções
            cy.contains('Tipo(s) Serviço(s) Isento(s):')
                .should('exist')
                .and('be.visible')

            //Validando "Garantias" dentro do modal Promoções
            cy.contains('Garantias')
                .should('exist')
                .and('be.visible')
                
            // //Usar promoção, no card "Promoções"
             cy.get('.md-3-line > div.md-button > .md-no-style')
                 .click({force:true})
    
            // //Escolher uma forma de pagamento, no card de "Formas de pagamento"
            cy.get('#dialogContent_123 > .white > [style=""] > div.md-button > .md-no-style')
                .click({force:true})
    
            clicarAdicionarProduto()
    
            cy.wait(500)
    
            modalServicosVinculados()

            //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.get('#checkbox-139-0 > .md-container')
                .click()

            okServicosVinculados()
    
            tirarEntrega()

            tirarMontagem()
    
            cy.wait(400)
    
            avancarParaParcelas()

            messAdicionandoProdutosServicos()
    
            cy.wait(12000)

            // tela de PAGAMENTO

            avancarFinal()
    
            cy.wait(7000)
        })
    
        it('Pedido com promoção a prazo/entrada + parcelas (promoção 158): produto 1895 0 0 com garantia (isenta de juros)', () => {
    
            processoVendaPrincipal()
    
            escolherClientePedido()
    
            cy.wait(500)
    
            prd2PrazoParcela()
    
            saldodisponivel()
    
            escolherProdutoPesquisa()
    
            cy.wait(200)
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                      
            escolherVoltagemProduto()
            
            cy.wait(400)
    
            //Validando Tipo "Tipo(s) Serviço(s) Isento(s):" dentro do modal Promoções
            cy.contains('Tipo(s) Serviço(s) Isento(s):')
                .should('exist')
                .and('be.visible')

            //Validando "Garantias" dentro do modal Promoções
            cy.contains('Garantias')
                .should('exist')
                .and('be.visible')
                
            // //Usar promoção, no card "Promoções"
             cy.get('.md-3-line > div.md-button > .md-no-style')
                 .click({force:true})
    
            // //Escolher uma forma de pagamento, no card de "Formas de pagamento"
            cy.get('#dialogContent_123 > .white > [style=""] > div.md-button > .md-no-style')
                .click({force:true})
    
            clicarAdicionarProduto()
    
            cy.wait(500)
    
            modalServicosVinculados()

            //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.get('#checkbox-139-0 > .md-container')
                .click()

            okServicosVinculados()
    
            tirarEntrega()

            tirarMontagem()
    
            cy.wait(400)
    
            avancarParaParcelas()

            messAdicionandoProdutosServicos()
    
            cy.wait(12000)

            // tela de PAGAMENTO
    
            //Selecionando opções de pagamento de ebtrada
            cy.get('#select_192')
                .should('exist')
                .and('be.visible')
                .click({force:true})

            //Selecionando processo de receber entrada
            cy.get('#select_option_204 > .md-text')
                .should('exist')
                .and('be.visible')
                .click({force:true})

            //Clicando no botão GERAR PAGAMENTO da entrada
            cy.get('.white > .layout-align-center-center > .md-primary')
                .should('exist')
                .and('be.visible')
                .and('not.be.disabled')
                .and('contain','Gerar pagamento')
                .click({force:true})

            avancarFinal()
    
            cy.wait(7000)

        })
    
        it('Pedido com promoção a prazo/parcelas (promoção 161): produto 1893 0 0 com prestamista (isento de juros)', () => {
    
            processoVendaPrincipal()
    
            escolherClientePedido()
    
            cy.wait(500)
    
            prd3PrazoParcela()
    
            saldodisponivel()
    
            escolherProdutoPesquisa()
    
            cy.wait(200)
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                      
            escolherVoltagemProduto()

            cy.wait(400)
    
            //Validando Tipo "Tipo(s) Serviço(s) Isento(s):" dentro do modal Promoções
            cy.contains('Tipo(s) Serviço(s) Isento(s):')
                .should('exist')
                .and('be.visible')

            //Validando "Garantias" dentro do modal Promoções
            cy.contains('Seguro Prestamista')
                .should('exist')
                .and('be.visible')
                
            // //Usar promoção, no card "Promoções"
             cy.get('.md-3-line > div.md-button > .md-no-style')
                 .click({force:true})
    
            // //Escolher uma forma de pagamento, no card de "Formas de pagamento"
            cy.get('#dialogContent_123 > .white > [style=""] > div.md-button > .md-no-style')
                .click({force:true})
    
            clicarAdicionarProduto()
    
            cy.wait(500)
    
            modalServicosVinculados()

            okServicosVinculados()
    
            tirarEntrega()

            tirarMontagem()
    
            cy.wait(400)
    
            avancarParaParcelas()

            messAdicionandoProdutosServicos()
    
            cy.wait(8000)

            adicionarPrestamista()

            // tela de PAGAMENTO

            avancarFinal()
    
            cy.wait(7000)
        })

        it('Pedido com promoção a prazo/parcelas (promoção 162): produto 1894 0 0 com garantia (isenta de juros) e prestamista (com juros)', () => {
    
            processoVendaPrincipal()
    
            escolherClientePedido()
    
            cy.wait(500)
    
            prd4PrazoParcela()
    
            saldodisponivel()
    
            escolherProdutoPesquisa()
    
            cy.wait(200)
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                      
            escolherVoltagemProduto()

            //Validando Tipo "Tipo(s) Serviço(s) Isento(s):" dentro do modal Promoções
            cy.contains('Tipo(s) Serviço(s) Isento(s):')
                .should('exist')
                .and('be.visible')

            //Validando "Garantias" dentro do modal Promoções
            cy.contains('Garantias')
                .should('exist')
                .and('be.visible')
                
            // //Usar promoção, no card "Promoções"
             cy.get('.md-3-line > div.md-button > .md-no-style')
                 .click({force:true})
    
            // //Escolher uma forma de pagamento, no card de "Formas de pagamento"
            cy.get('#dialogContent_123 > .white > [style=""] > div.md-button > .md-no-style')
                .click({force:true})
    
            clicarAdicionarProduto()
    
            cy.wait(500)
    
            modalServicosVinculados()

            //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.get('#checkbox-139-0 > .md-container')
                .click()

            okServicosVinculados()
    
            tirarEntrega()

            tirarMontagem()
    
            cy.wait(400)
    
            avancarParaParcelas()

            messAdicionandoProdutosServicos()

            cy.wait(10000)

            adicionarPrestamista()

            // tela de PAGAMENTO

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