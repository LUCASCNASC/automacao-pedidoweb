//Importando funções 
import { titulopagina } from '../../support/uiUtils';

const usuSabiumAutomacao = "sabium.automacao"; //usuário ERP Sabium (contexto 1)
const senhaautomacao = "123.automacao"; //senha usuário ERP Sabium (contexto 1)
const usuarioSbx = "sbx.automacao" //usuário SBX Sabium (contexto 3)
const senhaSbx = "1234.sbx" //senha usuário SBX Sabium (contexto 3)

describe('Login caminho feliz - usuário normal senha liberada', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
    })

    context('Usuário contexto 1', () => {

        it('Login - caminho feliz', () => {

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
    
            cy.wait(8000)
    
            //Validando botão INICIAR ATENDIMENTO, para ver se logou
            cy.get('.md-raised > .truncate')
                .should('exist')
                .and('be.visible')
        })
    
        it('Login - passar usuário errado (deve dar mensagem de Login ou Senha do usuário está incorreto.)', () => {
    
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
                .type('sabium.123')
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
    
            cy.wait(800)
    
            //Mensagem de senha errada
            cy.get('.toast')
                .should('exist')
                .and('be.visible')
    
            //Mensagem "Atenção"
            cy.get('.toast-title')
                .should('exist')
                .and('be.visible')
                .and('have.text','Atenção')
                .and('not.have.attr', 'disabled')
    
            //Mensagem "Login ou Senha do usuário está incorreto."
            cy.get('.toast-message')
                .should('exist')
                .and('be.visible')
                .and('have.text','Login ou Senha do usuário está incorreto.')
                .and('not.have.attr', 'disabled') 
    
            //Botão X para fechar mensagem
            cy.get('.toast-close-button')
                .should('exist')
                .and('be.visible')
    
            //Ícone do computador - novamente, para provar que não logamos, ainda estamos na tela de login
            cy.get('[ng-click="clienteStatsOpen()"] > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')
        })
    
        it('Login - passar senha errada (deve dar mensagem de Login ou Senha do usuário está incorreto.)', () => {
    
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
                .type(usuSabiumAutomacao)
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
                .type('123.teste')
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
    
            cy.wait(800)
    
            //Mensagem de senha errada
            cy.get('.toast')
                .should('exist')
                .and('be.visible')
    
            //Mensagem "Atenção"
            cy.get('.toast-title')
                .should('exist')
                .and('be.visible')
                .and('have.text','Atenção')
                .and('not.have.attr', 'disabled')
    
            //Mensagem "Login ou Senha do usuário está incorreto."
            cy.get('.toast-message')
                .should('exist')
                .and('be.visible')
                .and('have.text','Login ou Senha do usuário está incorreto.')
                .and('not.have.attr', 'disabled') 
    
            //Botão X para fechar mensagem
            cy.get('.toast-close-button')
                .should('exist')
                .and('be.visible')
    
            //Ícone do computador - novamente, para provar que não logamos, ainda estamos na tela de login
            cy.get('[ng-click="clienteStatsOpen()"] > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')
        })
    
        it('Login - passar somente login (botão ENTRAR deve ficar desabilitado)', () => {
    
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
                .and('not.have.attr', 'not.disabled')
    
            //Clicar no botão ENTRAR
            cy.get('.test_btnSalvarCliente')
                .click({force:true})
    
            //Ícone do computador - novamente, para provar que não logamos, ainda estamos na tela de login
            cy.get('[ng-click="clienteStatsOpen()"] > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')
        })
    
        it('Login - passar somente login (botão ENTRAR deve ficar desabilitado)', () => {
    
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
                .and('not.have.attr', 'not.disabled')
    
            //Clicar no botão ENTRAR
            cy.get('.test_btnSalvarCliente')
                .click({force:true})
    
            //Ícone do computador - novamente, para provar que não logamos, ainda estamos na tela de login
            cy.get('[ng-click="clienteStatsOpen()"] > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')
        })  
    
        it('Login - sem passar login e senha (botão ENTRAR deve ficar desabilitado)', () => {
    
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
                .and('not.have.attr', 'not.disabled')
    
            //Clicar no botão ENTRAR
            cy.get('.test_btnSalvarCliente')
                .click({force:true})
    
            //Ícone do computador - novamente, para provar que não logamos, ainda estamos na tela de login
            cy.get('[ng-click="clienteStatsOpen()"] > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')
        })
    })

    context('Usuário contexto 3', () => {

        it('Login - caminho feliz', () => {

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
                .type((usuarioSbx))
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
                .type((senhaSbx))
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
    
            cy.wait(8000)
    
            //Validando botão INICIAR ATENDIMENTO, para ver se logou
            cy.get('.md-raised > .truncate')
                .should('exist')
                .and('be.visible')
        })
    
        it('Login - passar usuário errado (deve dar mensagem de Login ou Senha do usuário está incorreto.)', () => {
    
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
                .type('sabium.123')
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
                .type((senhaSbx))
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
    
            cy.wait(800)
    
            //Mensagem de senha errada
            cy.get('.toast')
                .should('exist')
                .and('be.visible')
    
            //Mensagem "Atenção"
            cy.get('.toast-title')
                .should('exist')
                .and('be.visible')
                .and('have.text','Atenção')
                .and('not.have.attr', 'disabled')
    
            //Mensagem "Login ou Senha do usuário está incorreto."
            cy.get('.toast-message')
                .should('exist')
                .and('be.visible')
                .and('have.text','Login ou Senha do usuário está incorreto.')
                .and('not.have.attr', 'disabled') 
    
            //Botão X para fechar mensagem
            cy.get('.toast-close-button')
                .should('exist')
                .and('be.visible')
    
            //Ícone do computador - novamente, para provar que não logamos, ainda estamos na tela de login
            cy.get('[ng-click="clienteStatsOpen()"] > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')
        })
    
        it('Login - passar senha errada (deve dar mensagem de Login ou Senha do usuário está incorreto.)', () => {
    
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
                .type(usuarioSbx)
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
                .type('123.teste')
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
    
            cy.wait(800)
    
            //Mensagem de senha errada
            cy.get('.toast')
                .should('exist')
                .and('be.visible')
    
            //Mensagem "Atenção"
            cy.get('.toast-title')
                .should('exist')
                .and('be.visible')
                .and('have.text','Atenção')
                .and('not.have.attr', 'disabled')
    
            //Mensagem "Login ou Senha do usuário está incorreto."
            cy.get('.toast-message')
                .should('exist')
                .and('be.visible')
                .and('have.text','Login ou Senha do usuário está incorreto.')
                .and('not.have.attr', 'disabled') 
    
            //Botão X para fechar mensagem
            cy.get('.toast-close-button')
                .should('exist')
                .and('be.visible')
    
            //Ícone do computador - novamente, para provar que não logamos, ainda estamos na tela de login
            cy.get('[ng-click="clienteStatsOpen()"] > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')
        })
    
        it('Login - passar somente login (botão ENTRAR deve ficar desabilitado)', () => {
    
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
                .and('not.have.attr', 'not.disabled')
    
            //Clicar no botão ENTRAR
            cy.get('.test_btnSalvarCliente')
                .click({force:true})
    
            //Ícone do computador - novamente, para provar que não logamos, ainda estamos na tela de login
            cy.get('[ng-click="clienteStatsOpen()"] > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')
        })
    
        it('Login - passar somente login (botão ENTRAR deve ficar desabilitado)', () => {
    
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
                .and('not.have.attr', 'not.disabled')
    
            //Clicar no botão ENTRAR
            cy.get('.test_btnSalvarCliente')
                .click({force:true})
    
            //Ícone do computador - novamente, para provar que não logamos, ainda estamos na tela de login
            cy.get('[ng-click="clienteStatsOpen()"] > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')
        })  
    
        it('Login - sem passar login e senha (botão ENTRAR deve ficar desabilitado)', () => {
    
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
                .and('not.have.attr', 'not.disabled')
    
            //Clicar no botão ENTRAR
            cy.get('.test_btnSalvarCliente')
                .click({force:true})
    
            //Ícone do computador - novamente, para provar que não logamos, ainda estamos na tela de login
            cy.get('[ng-click="clienteStatsOpen()"] > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')
        })
    })
})