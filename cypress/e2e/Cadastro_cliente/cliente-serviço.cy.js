//Importando funções 
import { titulopagina, escolherClientePedido } from '../../support/uiUtils';

describe('Verificar tela de serviços, selecionar cliente e processo de venda de serviços', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage(); 
    })

    context('Tela de serviços de um cliente', () => {

        it('Tela de serviços de um cliente', () => {

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


            //ABA SERVIÇOS//

            //Aba título SERVIÇOS VINCULADOS
            cy.contains('md-tab-item', 'Serviços Vinculados')
                .should('have.attr', 'aria-selected', 'true') //valida se ele está selecionado
                .and('have.text', 'Serviços Vinculados')
                .and('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Aba título RENOVAÇÕES
            cy.contains('md-tab-item', 'Renovações')
                .should('have.attr', 'aria-selected', 'false') //valida se ele não está selecionado
                .and('have.text', 'Renovações')
                .and('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Aba SERVIÇOS VINCULADOS - Título Serviços Vinculados
            cy.contains('h3', 'Serviços Vinculados')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Serviços Vinculados')

            //Aba SERVIÇOS VINCULADOS - Botão Todos (marcado), deve estar azul
            cy.contains('span', 'Todos')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Todos')
                .and('not.have.attr', 'disabled')

            //Aba SERVIÇOS VINCULADOS - Botão Todos (marcado) - validando cor da borda, deve estar azul
            cy.contains('span', 'Todos')
                .invoke('css', 'border-color')
                .should('equal', 'rgb(26, 70, 203)')

            //Aba SERVIÇOS VINCULADOS - Botão Todos (marcado) - validando cor do texto, deve estar azul
            cy.contains('span', 'Todos')
                .invoke('css', 'color')
                .should('equal', 'rgb(26, 70, 203)')

            //Aba SERVIÇOS VINCULADOS - Botão Mão de Obra (desmarcado), deve estar verde
            cy.contains('span', 'Mão de Obra')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Mão de Obra')
                .and('not.have.attr', 'disabled')

            //Aba SERVIÇOS VINCULADOS - Botão Mão de Obra (desmarcado) - validando cor da borda, deve estar verde
            cy.contains('span', 'Mão de Obra')
                .invoke('css', 'border-color')
                .should('equal', 'rgb(65, 132, 12)')

            //Aba SERVIÇOS VINCULADOS - Botão Mão de Obra (desmarcado) - validando cor do texto, deve estar verde
            cy.contains('span', 'Mão de Obra')
                .invoke('css', 'color')
                .should('equal', 'rgb(65, 132, 12)')

            //Aba SERVIÇOS VINCULADOS - Garantias (desmarcado), deve estar verde
            cy.contains('span', 'Garantias')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Garantias')
                .and('not.have.attr', 'disabled')

            //Aba SERVIÇOS VINCULADOS - Botão Garantias (desmarcado) - validando cor da borda, deve estar verde
            cy.contains('span', 'Garantias')
                .invoke('css', 'border-color')
                .should('equal', 'rgb(65, 132, 12)')

            //Aba SERVIÇOS VINCULADOS - Botão Garantias (desmarcado) - validando cor do texto, deve estar verde
            cy.contains('span', 'Garantias')
                .invoke('css', 'color')
                .should('equal', 'rgb(65, 132, 12)')

            //Aba SERVIÇOS VINCULADOS - campo N do pedido, data de vencimento
            cy.get('form.ng-pristine > .ng-pristine')
                .should('exist')
                .and('be.visible')
                .and('have.attr', 'placeholder', 'N° do pedido, data de vencimento ou produto')
                .and('have.value','')
                .wait(200)
                .type('7')
                .wait(200)
                .and('have.value','7')
                .wait(200)
                .clear()

            //Aba SERVIÇOS VINCULADOS - lupa do campo N do pedido, data de vencimento
            cy.get('form.ng-valid > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Aba SERVIÇOS VINCULADOS - Texto Pedido
            cy.contains('h3', 'Pedido')
                .should('exist')
                .and('be.visible')
                .and('contain', 'Pedido')

            //Aba SERVIÇOS VINCULADOS - Texto Data de Vencimento
            cy.contains('h4', 'Data de Vencimento')
                .should('exist')
                .and('be.visible')
                .and('contain', 'Data de Vencimento')

            //Aba SERVIÇOS VINCULADOS - Clicar no botão Mão de Obra
            cy.contains('span', 'Mão de Obra')
                .click({force:true})

            //Aba SERVIÇOS VINCULADOS - Botão Todos (desmarcado), deve estar verde
            cy.contains('span', 'Todos')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Todos')
                .and('not.have.attr', 'disabled')

            //Aba SERVIÇOS VINCULADOS - Botão Todos (desmarcado) - validando cor da borda, deve estar verde
            cy.contains('span', 'Todos')
                .invoke('css', 'border-color')
                .should('equal', 'rgb(65, 132, 12)')

            //Aba SERVIÇOS VINCULADOS - Botão Todos (desmarcado) - validando cor do texto, deve estar verde
            cy.contains('span', 'Todos')
                .invoke('css', 'color')
                .should('equal', 'rgb(65, 132, 12)')

            //Aba SERVIÇOS VINCULADOS - Botão Mão de Obra (marcado), deve estar azul
            cy.contains('span', 'Mão de Obra')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Mão de Obra')
                .and('not.have.attr', 'disabled')

            //Aba SERVIÇOS VINCULADOS - Botão Mão de Obra (marcado) - validando cor da borda, deve estar azul
            cy.contains('span', 'Mão de Obra')
                .invoke('css', 'border-color')
                .should('equal', 'rgb(26, 70, 203)')

            //Aba SERVIÇOS VINCULADOS - Botão Mão de Obra (marcado) - validando cor do texto, deve estar azul
            cy.contains('span', 'Mão de Obra')
                .invoke('css', 'color')
                .should('equal', 'rgb(26, 70, 203)')

            //Aba SERVIÇOS VINCULADOS - Garantias (desmarcado), deve estar verde
            cy.contains('span', 'Garantias')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Garantias')
                .and('not.have.attr', 'disabled')

            //Aba SERVIÇOS VINCULADOS - Botão Garantias (desmarcado) - validando cor da borda, deve estar verde
            cy.contains('span', 'Garantias')
                .invoke('css', 'border-color')
                .should('equal', 'rgb(65, 132, 12)')

            //Aba SERVIÇOS VINCULADOS - Botão Garantias (desmarcado) - validando cor do texto, deve estar verde
            cy.contains('span', 'Garantias')
                .invoke('css', 'color')
                .should('equal', 'rgb(65, 132, 12)')

            //Aba SERVIÇOS VINCULADOS - campo N do pedido, data de vencimento
            cy.get('form.ng-valid > .ng-valid')
                .should('exist')
                .and('be.visible')
                .and('have.attr', 'placeholder', 'N° do pedido, data de vencimento ou produto')
                .and('have.value','')
                .wait(200)
                .type('7')
                .wait(200)
                .and('have.value','7')
                .wait(200)
                .clear()

            //Aba SERVIÇOS VINCULADOS - lupa do campo N do pedido, data de vencimento
            cy.get('form.ng-valid > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Aba SERVIÇOS VINCULADOS - Texto Pedido
            cy.contains('h3', 'Pedido')
                .should('exist')
                .and('be.visible')
                .and('contain', 'Pedido')

            //Aba SERVIÇOS VINCULADOS - Texto Data de Vencimento
            cy.contains('h4', 'Data de Vencimento')
                .should('exist')
                .and('be.visible')
                .and('contain', 'Data de Vencimento')

            //Aba SERVIÇOS VINCULADOS - Clicar no botão Mão de Obra
            cy.contains('span', 'Garantias')
                .click({force:true})

            //Aba SERVIÇOS VINCULADOS - Botão Todos (desmarcado), deve estar verde
            cy.contains('span', 'Todos')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Todos')
                .and('not.have.attr', 'disabled')

            //Aba SERVIÇOS VINCULADOS - Botão Todos (desmarcado) - validando cor da borda, deve estar verde
            cy.contains('span', 'Todos')
                .invoke('css', 'border-color')
                .should('equal', 'rgb(65, 132, 12)')

            //Aba SERVIÇOS VINCULADOS - Botão Todos (desmarcado) - validando cor do texto, deve estar verde
            cy.contains('span', 'Todos')
                .invoke('css', 'color')
                .should('equal', 'rgb(65, 132, 12)')

            //Aba SERVIÇOS VINCULADOS - Botão Mão de Obra (desmarcado), deve estar verde
            cy.contains('span', 'Mão de Obra')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Mão de Obra')
                .and('not.have.attr', 'disabled')

            //Aba SERVIÇOS VINCULADOS - Botão Mão de Obra (desmarcado) - validando cor da borda, deve estar verde
            cy.contains('span', 'Mão de Obra')
                .invoke('css', 'border-color')
                .should('equal', 'rgb(65, 132, 12)')

            //Aba SERVIÇOS VINCULADOS - Botão Mão de Obra (desmarcado) - validando cor do texto, deve estar verde
            cy.contains('span', 'Mão de Obra')
                .invoke('css', 'color')
                .should('equal', 'rgb(65, 132, 12)')

            //Aba SERVIÇOS VINCULADOS - Garantias (marcado), deve estar azul
            cy.contains('span', 'Garantias')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Garantias')
                .and('not.have.attr', 'disabled')

            //Aba SERVIÇOS VINCULADOS - Botão Garantias (marcado) - validando cor da borda, deve estar azul
            cy.contains('span', 'Garantias')
                .invoke('css', 'border-color')
                .should('equal', 'rgb(26, 70, 203)')

            //Aba SERVIÇOS VINCULADOS - Botão Garantias (marcado) - validando cor do texto, deve estar azul
            cy.contains('span', 'Garantias')
                .invoke('css', 'color')
                .should('equal', 'rgb(26, 70, 203)')

            //Aba SERVIÇOS VINCULADOS - Clicar na aba RENOVAÇÕES
            cy.contains('md-tab-item', 'Renovações')    
                .scrollIntoView()
                .click({force:true})

            //Aba título SERVIÇOS VINCULADOS
            cy.contains('md-tab-item', 'Serviços Vinculados')
                .should('have.attr', 'aria-selected', 'false') //valida se ele não está selecionado

            //Aba título RENOVAÇÕES
            cy.contains('md-tab-item', 'Renovações')
                .should('have.attr', 'aria-selected', 'true') //valida se ele está selecionado

            //Aba SERVIÇOS VINCULADOS - Título Renovações
            cy.contains('h3', 'Renovações')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Renovações')
        })
    })   
})