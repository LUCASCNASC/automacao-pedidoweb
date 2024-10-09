//Importando funções 
import { titulopagina, escolherClientePedido } from '../../support/uiUtils';

describe('Verificar tela de serviços, selecionar cliente e processo de venda de serviços', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage(); 
    })

    context('Tela de serviços de um cliente', () => {

        it.only('Tela de serviços de um cliente', () => {

            cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
    
            //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
            titulopagina()
    
            cy.wait(500);
    
            //clicar para aparecer as opções de processo
            cy.get('#select_value_label_4 > .md-select-icon')
                .click()
    
            cy.wait(500)
            
            //rolar para o meio das opções de processo
            cy.get('#select_listbox_12')
                .scrollTo('center')
    
            cy.wait(500)
    
            //selecionar processo de venda "9860"
            cy.get('#select_option_60 > .md-text')
                .click({force: true})
    
            cy.wait(500)
    
            //Função para escolher cliente para pedido
            escolherClientePedido()
    
            cy.wait(3000)

            //Validando ícone menu de opções
            cy.get('[aria-label="Menu de opções"] > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')
            
            //Clicar para abrir menu de opções
            cy.get('[aria-label="Menu de opções"] > .ng-binding')
                .click()

            //Opção Cliente no menu de opções
            cy.get('a[aria-label="Cliente"]')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Opção Cliente no menu de opções
            cy.get('a[aria-label="Cliente"]')
                .should('have.attr', 'aria-label', 'Cliente')

            //Opção Cliente no menu de opções
            cy.get('a[aria-label="Cliente"]')
                .scrollIntoView()
                .click({force:true})

            //Botão CLIENTE
            cy.contains('a.md-button', 'CLIENTE')
                .should('have.text', 'CLIENTE')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Botão ESTATÍSTICAS
            cy.contains('a.md-button', 'ESTATÍSTICAS')
                .should('have.text', 'ESTATÍSTICAS')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Botão SERVIÇOS
            cy.contains('a.md-button', 'SERVIÇOS')
                .should('have.text', 'SERVIÇOS')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Botão ANEXOS
            cy.contains('a.md-button', 'ANEXOS')
                .should('have.text', 'ANEXOS')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Clicando no botão SERVIÇOS
            cy.contains('a.md-button', 'SERVIÇOS')
                .click({force:true})


        })
    })

    
    
})