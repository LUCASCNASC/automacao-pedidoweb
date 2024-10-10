//Importando funções 
import { titulopagina } from '../../support/uiUtils';

const filial = "050"
const descricaoUsuario = "T.A. USUÁRIO AUTOMAÇÃO"

describe('Validações de layout - menu opções', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage(); 
    })

    context('Menu opções - validar as opções que o menu traz, mas sem entrar nas telas', () => {

        it.only('Menu opções - validar as opções que o menu traz, mas sem entrar nas telas', () => {

            cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
    
            //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
            titulopagina()

            //Topo da página - parte colorida
            cy.get('.topo > .md-toolbar-tools')
                .should('exist')
                .and('be.visible')

            //Ícone menu de opções
            cy.get('[aria-label="Menu de opções"] > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')
                //.and('have.class', 'ng-binding ng-scope material-icons md-default-theme') - aparecendo como undefined

            //Clica no ícone menu de opções
            cy.get('[aria-label="Menu de opções"] > .ng-binding')
                .click({force:true})

            //Opção Início no menu de opções
            cy.get('a[aria-label="Inicio"]')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Opção Início no menu de opções
            cy.get('a[aria-label="Cliente completo"]')
                .should('have.attr', 'aria-label', 'Início')
        })

    })  
})