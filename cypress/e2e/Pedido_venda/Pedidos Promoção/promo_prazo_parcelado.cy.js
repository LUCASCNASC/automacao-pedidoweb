//Importando funções 
import { detalhevenda, detalhevendaclicar } from '../../../support/uiUtils';

describe('Gerar pedido normal', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
    })
  
    it('Gerar pedido com promoção a prazo parcelado, processo 9860; um produto, produto 1867 0 0 (promoção 151) - caminho feliz', () => {

        
        cy.title()
            .should('eq', 'Sabium Mobile') //Validando título da página

        cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login

        cy.wait(1000);

        //clicar para aparecer as opções de processo
        cy.get('#select_value_label_4 > .md-select-icon')
            .click()

        cy.wait(1000)
        
        //rolar para o meio das opções de processo
        cy.get('#select_listbox_12')
            .scrollTo('center')

        cy.wait(1000)

        //selecionar processo de venda "9860"
        cy.get('#select_option_59 > .md-text')
            .click({force: true})

        cy.wait(1000)

        //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
        cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
            .wait(1500)
            .type('48976249089 {downArrow}') //Inserindo CPF no campo "INFORME O CLIENTE"
        
        cy.wait(1000)
        
        //clicar na lupa de pesquisa de clientes
        cy.get('.md-block > .ng-binding')
            .should('exist') //Validando se a lupa existe
            .and('be.visible')//Validando se a lupa está visível
            .click()

        cy.wait(2000)
        
        //após a pesquisa encontrar o cliente, vamos selecionar ele
        cy.get('.md-3-line > div.md-button > .md-no-style')
            .should('exist') //Validando se o cliente existe
            .and('be.visible')//Validando se o cliente está visível
            .click()

        cy.wait(4000)

        //Campo "Buscar produtos"
        cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos

        cy.get('#searchText')
            .should('have.value', '') //Validando se o campo foi realmente limpo
            .wait(1500)
            .type('1867')
       
        cy.wait(3500)

        //Preenchendo campo para pesquisar produto
        cy.contains('Cod: 1867')

        cy.wait(500)

        //Validando informações do produto após pesquisar
        //cy.get('.md-list-item-text > .ng-scope')
        //    .should('exist') //Validando existencia do "Saldo disponível"
        //    .and('be.visible') //Validando se elemento "Saldo disponível" está visível
        //    .and('have.text','Saldo disponivel') //Verificando texto
        //    .invoke('css', 'color') // Obtém a cor do elemento
        //    .should('equal', 'rgb(255, 255, 255)'); // Verifica a cor (RGB)

        //clicar para selecionar o produto; 
        cy.contains('Cod: 1867')
            .click({ force: true })

        cy.wait(1500)

        // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM

        
        //Função criada para clicar no botão detalher venda, que baixa o PDF
        detalhevendaclicar()

        cy.wait(1000)
                  
        //Selecionar a voltagem do produto
        cy.get('.padding-5 > :nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style')
            .click({ force: true })

        //Usar promoção, no card "Promoções"
        cy.get('.md-3-line > div.md-button > .md-no-style')
            .click()

        //Escolher uma forma de pagamento, no card de "Formas de pagamento"
        cy.get('#dialogContent_119 > .white > [style=""] > div.md-button > .md-no-style')
            .click()

        //clicar no botão "ADICIONAR", para adicionar produto
        cy.get('[style="padding: 0px 5px;"] > .md-primary')
            .click()

        cy.wait(3500)

        //Desmarcar garantia - card "Serviços Vinculados"
        cy.get('#checkbox-141-2 > .md-container')
            .click()

        cy.wait(1000)

        //Desmarcar Mão de Obra - card "Serviços Vinculados"
        cy.get('#checkbox-144-2 > .md-container')
            .click()

        cy.wait(500)

        //Botão "OK" - Serviços Vinculados
        cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
            .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

        cy.wait(1500)

        //Botão SERVIÇOS VINCULADOS
        cy.get(':nth-child(4) > :nth-child(1) > .md-default')
            .click()

        cy.wait(500)
           
        //Botão "OK" - Serviços Vinculados
        cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
            .click()

        cy.wait(500)

        //Botão de arrastar Retirada / Entrega
        cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
            .click() //Clicar para tirar a entrega do pedido

        cy.wait(1000)

        //Botão de arrastar Montagem
        cy.get('[ng-show="itemAtual._permiteMontagem"] > .md-auto-horizontal-margin > .md-label')
            .click() //Clicar para tirar a montagem

        cy.wait(500)

        //rolagem para baixo
        cy.get('.containerSabium')
            .scrollTo("center")

        cy.wait(500)

        //Botão "AVANÇAR"
        cy.get('.flex-gt-sm-50 > .md-primary')
            .click() //Clicar para avançar para a próxima tela

        // tela de PAGAMENTO

        cy.wait(1000)

        //Botão "AVANÇAR"
        cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
            .click()

        cy.wait(6000)

        // RESUMO DO PEDIDO - ANTES DE FINALIZAR
        
        //Texto "Consumidor Final"
        cy.get('.md-label')
            .scrollIntoView()

        cy.wait(1000)

        //Botão "FINALIZAR PEDIDO"
        cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
            .click()

        //Carregando a finalização do pedido
        cy.wait(7500)

         //Validar mensagem "Pedido gravado com sucesso!"
        cy.get('[ng-show="!editarPedido"]')
            .should('exist')
            .and('be.visible')
            .and('contain.text','Pedido gravado com sucesso!')


        //Após gerar pedido

        //Botão "OK"
        //cy.get('md-dialog-actions.layout-align-center-center > .md-primary')
        //    .click()

    })
})

