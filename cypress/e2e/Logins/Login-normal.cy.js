//Importando funções 
import { titulopagina } from '../../support/para_todos';
import { logoEmpresaLogin, iconeComputadorLogin, usuarioTextoIcone, senhaTextoIcone, iconeOlhosSenha, botaoEsqueceuSenha, botaoEntrarHabilitado, 
         botaoEntrarDesabilitado, clicarBotaoEntrar, mensagemEntrandoSistema } from '../../support/para_logins/para_login';

const usuSabiumAutomacao = "sabium.automacao"; //usuário ERP Sabium (contexto 1)
const senhaautomacao = "123.automacao"; //senha usuário ERP Sabium (contexto 1)
const usuarioSbx = "sbx.automacao" //usuário SBX Sabium (contexto 3)
const senhaSbx = "1234.sbx" //senha usuário SBX Sabium (contexto 3)

describe('Login caminho feliz - usuário normal senha liberada', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        titulopagina() //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
    })

    context('Usuário contexto 1', () => {

        it('Login - caminho feliz', () => {
    
            logoEmpresaLogin()

            iconeComputadorLogin()
    
            usuarioTextoIcone()
        
            //Validando campo "informe seu usuário"
            cy.get('#txtusername')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type((usuSabiumAutomacao))
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe seu usuário')
    
            senhaTextoIcone()
    
            //Campo Informe sua senha
            cy.get('#txtpassword')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type((senhaautomacao))
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha')
    
            iconeOlhosSenha()
    
            botaoEsqueceuSenha()
    
            botaoEntrarHabilitado()
    
            clicarBotaoEntrar()
    
            mensagemEntrandoSistema()
    
            cy.wait(8000)
    
            //Validando botão INICIAR ATENDIMENTO, para ver se logou
            cy.get('.md-raised > .truncate')
                .should('exist')
                .and('be.visible')
        })
    
        it('Login - passar usuário errado (deve dar mensagem de Login ou Senha do usuário está incorreto.)', () => {
    
            logoEmpresaLogin()

            iconeComputadorLogin()
    
            usuarioTextoIcone()
        
            //Validando campo "informe seu usuário"
            cy.get('#txtusername')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type('sabium.123')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe seu usuário')
    
            senhaTextoIcone()
    
            //Campo Informe sua senha
            cy.get('#txtpassword')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type((senhaautomacao))
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha')
    
            iconeOlhosSenha()
    
            botaoEsqueceuSenha()
    
            botaoEntrarHabilitado()
    
            clicarBotaoEntrar()
    
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
    
            //Validando que não entrou no sistema
            iconeComputadorLogin()
        })
    
        it('Login - passar senha errada (deve dar mensagem de Login ou Senha do usuário está incorreto.)', () => {
    
            logoEmpresaLogin()

            iconeComputadorLogin()
    
            usuarioTextoIcone()
        
            //Validando campo "informe seu usuário"
            cy.get('#txtusername')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type(usuSabiumAutomacao)
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe seu usuário')
    
            senhaTextoIcone()
    
            //Campo Informe sua senha
            cy.get('#txtpassword')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type('123.teste')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha')
    
            iconeOlhosSenha()
    
            botaoEsqueceuSenha()
    
            botaoEntrarHabilitado()
    
            clicarBotaoEntrar()
    
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
    
            //Validando que não entrou no sistema
            iconeComputadorLogin()
        })
    
        it('Login - passar somente login (botão ENTRAR deve ficar desabilitado)', () => {
    
            logoEmpresaLogin()

            iconeComputadorLogin()
    
            usuarioTextoIcone()
        
            //Validando campo "informe seu usuário"
            cy.get('#txtusername')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe seu usuário')
    
            senhaTextoIcone()
    
            //Campo Informe sua senha
            cy.get('#txtpassword')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type('123.automacao')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha')
    
            iconeOlhosSenha()
    
            botaoEsqueceuSenha()
    
            botaoEntrarDesabilitado()
    
            clicarBotaoEntrar()
    
            //Validando que não entrou no sistema
            iconeComputadorLogin()
        })
    
        it('Login - passar somente login (botão ENTRAR deve ficar desabilitado)', () => {
    
            logoEmpresaLogin()

            iconeComputadorLogin()
    
            usuarioTextoIcone()
        
            //Validando campo "informe seu usuário"
            cy.get('#txtusername')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type('sabium.automacao')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe seu usuário')
    
            senhaTextoIcone()
    
            //Campo Informe sua senha
            cy.get('#txtpassword')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha')
    
            iconeOlhosSenha()
    
            botaoEsqueceuSenha()
    
            botaoEntrarDesabilitado()
    
            clicarBotaoEntrar()
    
            //Validando que não entrou no sistema
            iconeComputadorLogin()
        })  
    
        it('Login - sem passar login e senha (botão ENTRAR deve ficar desabilitado)', () => {
    
            logoEmpresaLogin()

            iconeComputadorLogin()
    
           usuarioTextoIcone()
        
            //Validando campo "informe seu usuário"
            cy.get('#txtusername')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe seu usuário')
    
            senhaTextoIcone()
    
            //Campo Informe sua senha
            cy.get('#txtpassword')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha')
    
            iconeOlhosSenha()
    
            botaoEsqueceuSenha()
    
            botaoEntrarDesabilitado()
    
            clicarBotaoEntrar()
    
            //Validando que não entrou no sistema
            iconeComputadorLogin()
        })
    })

    context('Usuário contexto 3', () => {

        it('Login - caminho feliz', () => {
    
            logoEmpresaLogin()

            iconeComputadorLogin()
    
            usuarioTextoIcone()
        
            //Validando campo "informe seu usuário"
            cy.get('#txtusername')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type((usuarioSbx))
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe seu usuário')
    
            senhaTextoIcone()
    
            //Campo Informe sua senha
            cy.get('#txtpassword')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type((senhaSbx))
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha')
    
            iconeOlhosSenha()
    
            botaoEsqueceuSenha()
    
            botaoEntrarHabilitado()
    
            clicarBotaoEntrar()
    
            mensagemEntrandoSistema()
    
            cy.wait(8000)
    
            //Validando botão INICIAR ATENDIMENTO, para ver se logou
            cy.get('.md-raised > .truncate')
                .should('exist')
                .and('be.visible')
        })
    
        it('Login - passar usuário errado (deve dar mensagem de Login ou Senha do usuário está incorreto.)', () => {
    
            logoEmpresaLogin()

            iconeComputadorLogin()
    
            usuarioTextoIcone()
        
            //Validando campo "informe seu usuário"
            cy.get('#txtusername')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type('sabium.123')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe seu usuário')
    
            senhaTextoIcone()
    
            //Campo Informe sua senha
            cy.get('#txtpassword')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type((senhaSbx))
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha')
    
            iconeOlhosSenha()
    
            botaoEsqueceuSenha()
    
            botaoEntrarHabilitado()
    
            clicarBotaoEntrar()
    
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
    
            //Validando que não entrou no sistema
            iconeComputadorLogin()
        })
    
        it('Login - passar senha errada (deve dar mensagem de Login ou Senha do usuário está incorreto.)', () => {
    
            logoEmpresaLogin()

            iconeComputadorLogin()
    
            usuarioTextoIcone()
        
            //Validando campo "informe seu usuário"
            cy.get('#txtusername')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type(usuarioSbx)
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe seu usuário')
    
            senhaTextoIcone()
    
            //Campo Informe sua senha
            cy.get('#txtpassword')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type('123.teste')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha')
    
            iconeOlhosSenha()
    
            botaoEsqueceuSenha()
    
            botaoEntrarHabilitado()
    
            clicarBotaoEntrar()
    
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
    
            //Validando que não entrou no sistema
            iconeComputadorLogin()
        })
    
        it('Login - passar somente login (botão ENTRAR deve ficar desabilitado)', () => {
    
            logoEmpresaLogin()

            iconeComputadorLogin()
    
            usuarioTextoIcone()
        
            //Validando campo "informe seu usuário"
            cy.get('#txtusername')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe seu usuário')
    
            senhaTextoIcone()
    
            //Campo Informe sua senha
            cy.get('#txtpassword')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type('123.automacao')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha')
    
            iconeOlhosSenha()
    
            botaoEsqueceuSenha()
    
            botaoEntrarDesabilitado()
    
            clicarBotaoEntrar()
    
            //Validando que não entrou no sistema
            iconeComputadorLogin()
        })
    
        it('Login - passar somente login (botão ENTRAR deve ficar desabilitado)', () => {
    
            logoEmpresaLogin()

            iconeComputadorLogin()
    
            usuarioTextoIcone()
        
            //Validando campo "informe seu usuário"
            cy.get('#txtusername')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type('sabium.automacao')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe seu usuário')
    
            senhaTextoIcone()
    
            //Campo Informe sua senha
            cy.get('#txtpassword')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha')
    
            iconeOlhosSenha()
    
            botaoEsqueceuSenha()
    
            botaoEntrarDesabilitado()
    
            clicarBotaoEntrar()
    
            //Validando que não entrou no sistema
            iconeComputadorLogin()
        })  
    
        it('Login - sem passar login e senha (botão ENTRAR deve ficar desabilitado)', () => {
    
            logoEmpresaLogin()

            iconeComputadorLogin()
    
            usuarioTextoIcone()
        
            //Validando campo "informe seu usuário"
            cy.get('#txtusername')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe seu usuário')
    
            senhaTextoIcone()
    
            //Campo Informe sua senha
            cy.get('#txtpassword')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .invoke('attr', 'placeholder')
                .should('equal', 'Informe sua senha')
    
            iconeOlhosSenha()
    
            botaoEsqueceuSenha()
    
            botaoEntrarDesabilitado()
    
            clicarBotaoEntrar()
    
            //Validando que não entrou no sistema
            iconeComputadorLogin()
        })
    })
})