//Importando funções 
import { titulopagina } from '../../support/para_todos';
import { logoEmpresaLogin, iconeComputadorLogin, usuarioTextoIcone, senhaTextoIcone, iconeOlhosSenha, botaoEsqueceuSenha, botaoEntrarHabilitado, 
         botaoEntrarDesabilitado, clicarBotaoEntrar, mensagemEntrandoSistema, botaoIniciarAtendimento, messLoginSenhaIncorreto } from '../../support/para_logins/para_login';

const usuSabiumAutomacao = "sabium.automacao"; //usuário ERP Sabium (contexto 1)
const senhaautomacao = "123.automacao"; //senha usuário ERP Sabium (contexto 1)
const usuarioSbx = "sbx.automacao" //usuário SBX Sabium (contexto 3)
const senhaSbx = "1234.sbx" //senha usuário SBX Sabium (contexto 3)

describe('Login caminho feliz - usuário normal senha liberada', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        titulopagina() //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
        logoEmpresaLogin()
        iconeComputadorLogin()
        usuarioTextoIcone()
    })

    context('Usuário contexto 1', () => {

        it('Login - caminho feliz', () => {

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
            cy.wait(6000)
            botaoIniciarAtendimento()
        })
    
        it('Login - passar usuário errado (deve dar mensagem de Login ou Senha do usuário está incorreto.)', () => {
        
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
            messLoginSenhaIncorreto() 
            iconeComputadorLogin() //Validando que não entrou no sistema
        })
    
        it('Login - passar senha errada (deve dar mensagem de Login ou Senha do usuário está incorreto.)', () => {
        
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
            messLoginSenhaIncorreto()
            iconeComputadorLogin() //Validando que não entrou no sistema
        })
    
        it('Login - passar somente login (botão ENTRAR deve ficar desabilitado)', () => {
        
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
            iconeComputadorLogin() //Validando que não entrou no sistema
        })
    
        it('Login - passar somente login (botão ENTRAR deve ficar desabilitado)', () => {
        
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
            iconeComputadorLogin() //Validando que não entrou no sistema
        })  
    
        it('Login - sem passar login e senha (botão ENTRAR deve ficar desabilitado)', () => {
        
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
    
            iconeComputadorLogin() //Validando que não entrou no sistema
        })
    })

    context('Usuário contexto 3', () => {

        it('Login - caminho feliz', () => {
        
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
            cy.wait(6000)
            botaoIniciarAtendimento()
        })
    
        it('Login - passar usuário errado (deve dar mensagem de Login ou Senha do usuário está incorreto.)', () => {
        
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
            messLoginSenhaIncorreto()
            iconeComputadorLogin() //Validando que não entrou no sistema
        })
    
        it('Login - passar senha errada (deve dar mensagem de Login ou Senha do usuário está incorreto.)', () => {
        
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
            messLoginSenhaIncorreto()
            iconeComputadorLogin() //Validando que não entrou no sistema
        })
    
        it('Login - passar somente login (botão ENTRAR deve ficar desabilitado)', () => {
        
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
            iconeComputadorLogin() //Validando que não entrou no sistema
        })
    
        it('Login - passar somente login (botão ENTRAR deve ficar desabilitado)', () => {
        
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
            iconeComputadorLogin() //Validando que não entrou no sistema
        })  
    
        it('Login - sem passar login e senha (botão ENTRAR deve ficar desabilitado)', () => {
        
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
            iconeComputadorLogin() //Validando que não entrou no sistema
        })
    })
})