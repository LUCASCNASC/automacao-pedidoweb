//Importando funções 
import { titulopagina } from '../../support/uiUtils';

const usuSabiumAutomacao = "sabium.automacao";
const senhaautomacao = "123.automacao";
describe('Senha do sistema expirada', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
    })

    it.skip('Tentar logar com usuário com senha do sistema expirada', () => {

        //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
        titulopagina()

        //Validar o logo da empresa
        cy.get('.logo')
            .should('exist')
            .and('be.visible')

        //Ícone do computador
        cy.get('[ng-click="clienteStatsOpen()"] > .ng-binding')
            .should('exist')
            .and('be.visible')
            .and('not.have.attr', 'disabled')

        //Validando "Usuário" acima do campo informe sue usuário
        cy.get('label[for="txtusername"]')
            .should('exist')
            .and('be.visible')
            .and('have.text','Usuário')

        //Ícone do campo informe seu usuário
        cy.get(':nth-child(3) > .name')
            .should('exist')
            .and('be.visible')
    
        //Validando campo "informe seu usuário"
        cy.get('#txtusername')
            .should('exist')
            .and('be.visible')
            .and('have.value','')
            .type((usuSabiumAutomacao))
            .invoke('attr', 'placeholder')
            .should('equal', 'Informe seu usuário')

        //Validando "Senha" acima do campo informe sua senha
        cy.get('label[for="txtpassword"]')
            .should('exist')
            .and('be.visible')
            .and('have.text','Senha')
 
        //Ícone de senha
        cy.get('.md-icon-right > .name')
            .should('exist')
            .and('be.visible')

        //Campo Informe sua senha
        cy.get('#txtpassword')
            .should('exist')
            .and('be.visible')
            .and('have.value','')
            .type((senhaautomacao))
            .invoke('attr', 'placeholder')
            .should('equal', 'Informe sua senha')

        //ícone de olho, para ver a senha
        cy.get('.md-icon-right > .md-primary')
            .should('exist')
            .and('be.visible')
            .and('not.have.attr', 'disabled')

        //Botão/mensagem "Esqueceu a senha?"
        cy.get('div[ng-click="modalSenhaNovaOpen()"]')
            .contains('Esqueceu a senha?')
            .should('exist')
            .and('be.visible')
            .and('not.have.attr', 'disabled')

        //Botão ENTRAR
        cy.get('.test_btnSalvarCliente')
            .should('exist')
            .and('be.visible')
            .and('have.text','Entrar')
            .and('not.have.attr', 'disabled')

        //Clicar no botão ENTRAR
        cy.get('.test_btnSalvarCliente')
            .click({force:true})

        //Mensagem "Entrando no sistema"
        cy.get('.ng-scope > .ng-binding')
            .should('exist')
            .and('be.visible')
            .and('have.text','Entrando no sistema')

        cy.wait(2000)

        //Mensagem "Seu acesso ao sistema expirou."
        cy.get('.md-dialog-content-body')
            .should('exist')
            .and('be.visible')
            .and('have.text','Seu acesso ao sistema expirou.')

        //Botão OK da mensagem "Seu acesso ao sistema expirou."
        cy.get('md-dialog-actions > .md-primary')
            .should('exist')
            .and('be.visible')
            .and('have.text','Ok')
            .and('not.have.attr', 'disabled')

        //Clicar no botão OK da mensagem "Seu acesso ao sistema expirou."
        cy.get('md-dialog-actions > .md-primary')
            .click()

        //Ícone do computador - para validar se realmente continuou na tela de login.
        cy.get('[ng-click="clienteStatsOpen()"] > .ng-binding')
            .should('exist')
            .and('be.visible')
            .and('not.have.attr', 'disabled')
    })
})