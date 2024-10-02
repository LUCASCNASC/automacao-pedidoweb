//Importando funções 
import { titulopagina } from '../../support/uiUtils';

describe('Login caminho feliz - usuário normal senha liberada', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
    })

    it.skip('usuário normal senha liberada - caminho feliz', () => {

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
            .type('sabium.automacao')
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
            .type('123.automacao')
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

        cy.wait(9000)

        //Validando botão INICIAR ATENDIMENTO, para ver se logou
        cy.get('.md-raised > .truncate')
            .should('exist')
            .and('be.visible')
    })

    it('usuário normal senha liberada - passar usuário errado', () => {

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
            .type('sabium.automacao')
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
            .type('123.automacao')
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

        cy.wait(9000)

        //Validando botão INICIAR ATENDIMENTO, para ver se logou
        cy.get('.md-raised > .truncate')
            .should('exist')
            .and('be.visible')
    })

    it('usuário normal senha liberada - passar senha', () => {

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
            .type('sabium.teste123')
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
            .type('1435.automacao')
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

        cy.wait(9000)

        //Validando botão INICIAR ATENDIMENTO, para ver se logou
        cy.get('.md-raised > .truncate')
            .should('exist')
            .and('be.visible')
    })
    
})