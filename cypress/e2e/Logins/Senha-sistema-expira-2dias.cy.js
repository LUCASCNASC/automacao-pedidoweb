//Importando funções 
import { titulopagina } from '../../support/uiUtils';

const usuSabiumAutomacao = "sabium.automacao";
const senhaautomacao = "123.automacao";
const novasenha = "321@Teste";

describe('Login com usuário que senha expira em 2 dias', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
    })

    it.skip('Login - clicar em NÃO atualizar senha', () => {

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

        cy.wait(8000)


        //Após logar

        //Card de expira acesso - Mensagem "Falta(m) " 2 " dia(s) para seu acesso ao sistema expirar. Favor atualizá-lo."
        cy.get('.md-dialog-content-body > .ng-binding')
            .should('exist')
            .and('be.visible')
            .and('have.text','Falta(m) " 2 " dia(s) para seu acesso ao sistema expirar. Favor atualizá-lo.')

        //Card de expira acesso - NÃO
        cy.get('.md-cancel-button')
            .should('exist')
            .and('be.visible')
            .and('have.text','NÃO')
            .and('not.have.attr', 'disabled')

        //Card de expira acesso - SIM
        cy.get('.md-confirm-button')
            .should('exist')
            .and('be.visible')
            .and('have.text','SIM')
            .and('not.have.attr', 'disabled')

        //Card de expira acesso - clicar em NÃO
        cy.get('.md-cancel-button')
            .click()

        //Validando botão INICIAR ATENDIMENTO, para ver se logou
        cy.get('.md-raised > .truncate')
            .should('exist')
            .and('be.visible')
    })

    it.skip('Login - clicar em SIM atualizar senha - clicar em Fechar a redefinição de senha', () => {

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

        cy.wait(8000)


        //Após logar

        //Card de expira acesso - Mensagem "Falta(m) " 2 " dia(s) para seu acesso ao sistema expirar. Favor atualizá-lo."
        cy.get('.md-dialog-content-body > .ng-binding')
            .should('exist')
            .and('be.visible')
            .and('have.text','Falta(m) " 2 " dia(s) para seu acesso ao sistema expirar. Favor atualizá-lo.')

        //Card de expira acesso - NÃO
        cy.get('.md-cancel-button')
            .should('exist')
            .and('be.visible')
            .and('have.text','NÃO')
            .and('not.have.attr', 'disabled')

        //Card de expira acesso - SIM
        cy.get('.md-confirm-button')
            .should('exist')
            .and('be.visible')
            .and('have.text','SIM')
            .and('not.have.attr', 'disabled')

        //Card de expira acesso - clicar em SIM
        cy.get('.md-confirm-button')
            .click()

        //Mensagem "Aguarde carregando...", após clicarmos em SIM
        cy.get('center')
            .should('exist')
            .and('be.visible')
            .and('have.text','Aguarde carregando...')


        //Card Altere Sua Senha Temporária - título "Altere Sua Senha Temporária"
        cy.get('p')
            .contains('Altere Sua Senha Temporária')
            .should('exist')
            .and('be.visible')

        //Card Altere Sua Senha Temporária - texto "Usuário"
        cy.get('.senha_nova > :nth-child(1)')
            .should('exist')
            .and('be.visible')
            .and('have.text','Usuário')

        //Card Altere Sua Senha Temporária - campo para preenchimento "Usuário"
        cy.get(':nth-child(2) > .ng-pristine')
            .should('exist')
            .and('be.visible')
            .and('have.value',(usuSabiumAutomacao))

        //Card Altere Sua Senha Temporária - texto "Senha Atual"
        cy.get('.senha_nova > :nth-child(4)')
            .should('exist')
            .and('be.visible')
            .and('have.text','Senha Atual')

        //Card Altere Sua Senha Temporária - campo para preenchimento "Senha Atual"
        cy.get(':nth-child(5) > .ng-pristine')
            .should('exist')
            .and('be.visible')
            .and('have.value','')
            .type((senhaautomacao))

        //Card Altere Sua Senha Temporária - olhos "Senha Atual"
        cy.get('md-icon[ng-click="showPasswordToggle()"]')
            .should('exist')
            .and('be.visible')

        //Card Altere Sua Senha Temporária - botão "Gerar uma Nova Senha"
        cy.get('a[ng-click="gerarNovaSenha($event)"]')
            .should('exist')
            .and('be.visible')
            .and('not.have.attr', 'disabled')

        //Card Altere Sua Senha Temporária - título "Regras para a Nova Senha"
        cy.get('p')
            .contains('Regras para a Nova Senha')
            .should('exist')
            .and('be.visible')

        //Validar a primeira Regras para a Nova Senha (antes de preencher campo Nova Senha) - Texto Ao menos 8 caracteres.
        cy.contains('span', 'Ao menos 8 caracteres.')
            .should('exist')
            .and('be.visible')
            .and('have.css', 'color', 'rgb(204, 0, 0)')

        //Validar a segunda Regras para a Nova Senha (antes de preencher campo Nova Senha) - Texto Ao menos 1 letra maiúscula ou minúscula.
        cy.contains('span', 'Ao menos 1 letra maiúscula ou minúscula.')
            .should('exist')
            .and('be.visible')
            .and('have.css', 'color', 'rgb(204, 0, 0)')

        //Validar a terceira Regras para a Nova Senha (antes de preencher campo Nova Senha) - Texto Ao menos 1 algarismo.
        cy.contains('span', 'Ao menos 1 algarismo.')
            .should('exist')
            .and('be.visible')
            .and('have.css', 'color', 'rgb(204, 0, 0)')

        //Validar a quarta Regras para a Nova Senha (antes de preencher campo Nova Senha) - Texto Ao menos 1 caractere especial.
        cy.contains('span', 'Ao menos 1 caractere especial.')
            .should('exist')
            .and('be.visible')
            .and('have.css', 'color', 'rgb(204, 0, 0)')

        //Validar a quinta Regras para a Nova Senha (antes de preencher campo Nova Senha) - Texto A nova senha não pode ser a atual.
        cy.contains('span', 'A nova senha não pode ser a atual.')
            .should('exist')
            .and('be.visible')
            .and('have.css', 'color', 'rgb(204, 0, 0)')

        //Validar a sexta Regras para a Nova Senha (antes de preencher campo Nova Senha) - Texto As novas senhas informadas são iguais.
        cy.contains('span', 'As novas senhas informadas são iguais.')
            .should('exist')
            .and('be.visible')
            .and('have.css', 'color', 'rgb(204, 0, 0)')

        //Card Altere Sua Senha Temporária - campo para preenchimento "Nova Senha"
        cy.get('input[name="password_new"]')
            .should('exist')
            .should('be.visible')
            .and('have.value','')
            .type((novasenha))

        //Card Altere Sua Senha Temporária - olhos "Nova Senha"
        cy.get('md-icon[ng-click="showPasswordToggle(true)"]')
            .should('exist')
            .should('be.visible')

        //Validar a primeira Regras para a Nova Senha (depois de preencher campo Nova Senha) - Texto Ao menos 8 caracteres.
        cy.contains('span', 'Ao menos 8 caracteres.')
            .should('exist')
            .and('be.visible')
            .and('have.css', 'color', 'rgb(0, 100, 0)')

        //Validar a segunda Regras para a Nova Senha (depois de preencher campo Nova Senha) - Texto Ao menos 1 letra maiúscula ou minúscula.
        cy.contains('span', 'Ao menos 1 letra maiúscula ou minúscula.')
            .should('exist')
            .and('be.visible')
            .and('have.css', 'color', 'rgb(0, 100, 0)')

        //Validar a terceira Regras para a Nova Senha (depois de preencher campo Nova Senha) - Texto Ao menos 1 algarismo.
        cy.contains('span', 'Ao menos 1 algarismo.')
            .should('exist')
            .and('be.visible')
            .and('have.css', 'color', 'rgb(0, 100, 0)')

        //Validar a quarta Regras para a Nova Senha (depois de preencher campo Nova Senha) - Texto Ao menos 1 caractere especial.
        cy.contains('span', 'Ao menos 1 caractere especial.')
            .should('exist')
            .and('be.visible')
            .and('have.css', 'color', 'rgb(0, 100, 0)')

        //Validar a quinta Regras para a Nova Senha (depois de preencher campo Nova Senha) - Texto A nova senha não pode ser a atual.
        cy.contains('span', 'A nova senha não pode ser a atual.')
            .should('exist')
            .and('be.visible')
            .and('have.css', 'color', 'rgb(0, 100, 0)')

        //Validar a sexta Regras para a Nova Senha (depois de preencher campo Nova Senha) - Texto As novas senhas informadas são iguais.
        cy.contains('span', 'As novas senhas informadas são iguais.')
            .should('exist')
            .and('be.visible')
            .and('have.css', 'color', 'rgb(204, 0, 0)')

        //Card Altere Sua Senha Temporária - botão CONFIRMAR antes de todas as regras estarem certas
        cy.get(':nth-child(5) > .md-raised')
            .should('exist')
            .and('be.visible')
            .and('have.text','Confirmar')
            .and('not.have.attr', 'not.disabled')

        //Card Altere Sua Senha Temporária - texto "Repetir Nova Senha"
        cy.get('.senha_nova > :nth-child(10)')
            .should('exist')
            .and('be.visible')
            .and('have.text','Repetir Nova Senha')

        //Card Altere Sua Senha Temporária - campo para preenchimento "Repetir Nova Senha"
        cy.get(':nth-child(11) > .ng-pristine')
            .should('exist')
            .and('be.visible')
            .and('have.value','')
            .type((novasenha))

        //Validar a sexta Regras para a Nova Senha (depois de preencher campo Repetir Nova Senha) - Texto As novas senhas informadas são iguais.
        cy.contains('span', 'As novas senhas informadas são iguais.')
            .should('exist')
            .and('be.visible')
            .and('have.css', 'color', 'rgb(0, 100, 0)')

        //Card Altere Sua Senha Temporária - botão CONFIRMAR depois de todas as regras estarem certas
        cy.get(':nth-child(5) > .md-raised')
            .should('exist')
            .and('be.visible')
            .and('have.text','Confirmar')
            .and('not.have.attr', 'disabled')

        scrollTo()
             
        //Card Altere Sua Senha Temporária - botão Fechar 
        cy.get('[ng-show="!loading"] > a')
            .should('exist')
            .and('be.visible')
            .and('have.text','Fechar')
            .and('not.have.attr', 'disabled')
            
        //Card Altere Sua Senha Temporária - clicar no botão Fechar 
        cy.get('[ng-show="!loading"] > a')
            .click()

        //Ícone do computador - validar se realmente se voltou para a tela de login
        cy.get('[ng-click="clienteStatsOpen()"] > .ng-binding')
            .should('exist')
            .and('be.visible')
            .and('not.have.attr', 'disabled')
    })

    it.skip('Login - clicar em SIM atualizar senha - clicar em CONFIRMAR a redefinição de senha', () => {

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

        cy.wait(8000)


        //Após logar

        //Card de expira acesso - Mensagem "Falta(m) " 2 " dia(s) para seu acesso ao sistema expirar. Favor atualizá-lo."
        cy.get('.md-dialog-content-body > .ng-binding')
            .should('exist')
            .and('be.visible')
            .and('have.text','Falta(m) " 2 " dia(s) para seu acesso ao sistema expirar. Favor atualizá-lo.')

        //Card de expira acesso - NÃO
        cy.get('.md-cancel-button')
            .should('exist')
            .and('be.visible')
            .and('have.text','NÃO')
            .and('not.have.attr', 'disabled')

        //Card de expira acesso - SIM
        cy.get('.md-confirm-button')
            .should('exist')
            .and('be.visible')
            .and('have.text','SIM')
            .and('not.have.attr', 'disabled')

        //Card de expira acesso - clicar em SIM
        cy.get('.md-confirm-button')
            .click()

        //Mensagem "Aguarde carregando...", após clicarmos em SIM
        cy.get('center')
            .should('exist')
            .and('be.visible')
            .and('have.text','Aguarde carregando...')


        //Card Altere Sua Senha Temporária - título "Altere Sua Senha Temporária"
        cy.get('p')
            .contains('Altere Sua Senha Temporária')
            .should('exist')
            .and('be.visible')

        //Card Altere Sua Senha Temporária - texto "Usuário"
        cy.get('.senha_nova > :nth-child(1)')
            .should('exist')
            .and('be.visible')
            .and('have.text','Usuário')

        //Card Altere Sua Senha Temporária - campo para preenchimento "Usuário"
        cy.get(':nth-child(2) > .ng-pristine')
            .should('exist')
            .and('be.visible')
            .and('have.value',(usuSabiumAutomacao))

        //Card Altere Sua Senha Temporária - texto "Senha Atual"
        cy.get('.senha_nova > :nth-child(4)')
            .should('exist')
            .and('be.visible')
            .and('have.text','Senha Atual')

        //Card Altere Sua Senha Temporária - campo para preenchimento "Senha Atual"
        cy.get(':nth-child(5) > .ng-pristine')
            .should('exist')
            .and('be.visible')
            .and('have.value','')
            .type((senhaautomacao))

        //Card Altere Sua Senha Temporária - olhos "Senha Atual"
        cy.get('md-icon[ng-click="showPasswordToggle()"]')
            .should('exist')
            .and('be.visible')

        //Card Altere Sua Senha Temporária - botão "Gerar uma Nova Senha"
        cy.get('a[ng-click="gerarNovaSenha($event)"]')
            .should('exist')
            .and('be.visible')
            .and('not.have.attr', 'disabled')

        //Card Altere Sua Senha Temporária - título "Regras para a Nova Senha"
        cy.get('p')
            .contains('Regras para a Nova Senha')
            .should('exist')
            .and('be.visible')

        //Validar a primeira Regras para a Nova Senha (antes de preencher campo Nova Senha) - Texto Ao menos 8 caracteres.
        cy.contains('span', 'Ao menos 8 caracteres.')
            .should('exist')
            .and('be.visible')
            .and('have.css', 'color', 'rgb(204, 0, 0)')

        //Validar a segunda Regras para a Nova Senha (antes de preencher campo Nova Senha) - Texto Ao menos 1 letra maiúscula ou minúscula.
        cy.contains('span', 'Ao menos 1 letra maiúscula ou minúscula.')
            .should('exist')
            .and('be.visible')
            .and('have.css', 'color', 'rgb(204, 0, 0)')

        //Validar a terceira Regras para a Nova Senha (antes de preencher campo Nova Senha) - Texto Ao menos 1 algarismo.
        cy.contains('span', 'Ao menos 1 algarismo.')
            .should('exist')
            .and('be.visible')
            .and('have.css', 'color', 'rgb(204, 0, 0)')

        //Validar a quarta Regras para a Nova Senha (antes de preencher campo Nova Senha) - Texto Ao menos 1 caractere especial.
        cy.contains('span', 'Ao menos 1 caractere especial.')
            .should('exist')
            .and('be.visible')
            .and('have.css', 'color', 'rgb(204, 0, 0)')

        //Validar a quinta Regras para a Nova Senha (antes de preencher campo Nova Senha) - Texto A nova senha não pode ser a atual.
        cy.contains('span', 'A nova senha não pode ser a atual.')
            .should('exist')
            .and('be.visible')
            .and('have.css', 'color', 'rgb(204, 0, 0)')

        //Validar a sexta Regras para a Nova Senha (antes de preencher campo Nova Senha) - Texto As novas senhas informadas são iguais.
        cy.contains('span', 'As novas senhas informadas são iguais.')
            .should('exist')
            .and('be.visible')
            .and('have.css', 'color', 'rgb(204, 0, 0)')

        //Card Altere Sua Senha Temporária - campo para preenchimento "Nova Senha"
        cy.get('input[name="password_new"]')
            .should('exist')
            .should('be.visible')
            .and('have.value','')
            .type((novasenha))

        //Card Altere Sua Senha Temporária - olhos "Nova Senha"
        cy.get('md-icon[ng-click="showPasswordToggle(true)"]')
            .should('exist')
            .should('be.visible')

        //Validar a primeira Regras para a Nova Senha (depois de preencher campo Nova Senha) - Texto Ao menos 8 caracteres.
        cy.contains('span', 'Ao menos 8 caracteres.')
            .should('exist')
            .and('be.visible')
            .and('have.css', 'color', 'rgb(0, 100, 0)')

        //Validar a segunda Regras para a Nova Senha (depois de preencher campo Nova Senha) - Texto Ao menos 1 letra maiúscula ou minúscula.
        cy.contains('span', 'Ao menos 1 letra maiúscula ou minúscula.')
            .should('exist')
            .and('be.visible')
            .and('have.css', 'color', 'rgb(0, 100, 0)')

        //Validar a terceira Regras para a Nova Senha (depois de preencher campo Nova Senha) - Texto Ao menos 1 algarismo.
        cy.contains('span', 'Ao menos 1 algarismo.')
            .should('exist')
            .and('be.visible')
            .and('have.css', 'color', 'rgb(0, 100, 0)')

        //Validar a quarta Regras para a Nova Senha (depois de preencher campo Nova Senha) - Texto Ao menos 1 caractere especial.
        cy.contains('span', 'Ao menos 1 caractere especial.')
            .should('exist')
            .and('be.visible')
            .and('have.css', 'color', 'rgb(0, 100, 0)')

        //Validar a quinta Regras para a Nova Senha (depois de preencher campo Nova Senha) - Texto A nova senha não pode ser a atual.
        cy.contains('span', 'A nova senha não pode ser a atual.')
            .should('exist')
            .and('be.visible')
            .and('have.css', 'color', 'rgb(0, 100, 0)')

        //Validar a sexta Regras para a Nova Senha (depois de preencher campo Nova Senha) - Texto As novas senhas informadas são iguais.
        cy.contains('span', 'As novas senhas informadas são iguais.')
            .should('exist')
            .and('be.visible')
            .and('have.css', 'color', 'rgb(204, 0, 0)')

        //Card Altere Sua Senha Temporária - botão CONFIRMAR antes de todas as regras estarem certas
        cy.get(':nth-child(5) > .md-raised')
            .should('exist')
            .and('be.visible')
            .and('have.text','Confirmar')
            .and('not.have.attr', 'not.disabled')

        //Card Altere Sua Senha Temporária - texto "Repetir Nova Senha"
        cy.get('.senha_nova > :nth-child(10)')
            .should('exist')
            .and('be.visible')
            .and('have.text','Repetir Nova Senha')

        //Card Altere Sua Senha Temporária - campo para preenchimento "Repetir Nova Senha"
        cy.get(':nth-child(11) > .ng-pristine')
            .should('exist')
            .and('be.visible')
            .and('have.value','')
            .type((novasenha))

        //Validar a sexta Regras para a Nova Senha (depois de preencher campo Repetir Nova Senha) - Texto As novas senhas informadas são iguais.
        cy.contains('span', 'As novas senhas informadas são iguais.')
            .should('exist')
            .and('be.visible')
            .and('have.css', 'color', 'rgb(0, 100, 0)')

        //Card Altere Sua Senha Temporária - botão CONFIRMAR depois de todas as regras estarem certas
        cy.get(':nth-child(5) > .md-raised')
            .should('exist')
            .and('be.visible')
            .and('have.text','Confirmar')
            .and('not.have.attr', 'disabled')

        scrollTo()
             
        //Card Altere Sua Senha Temporária - botão Fechar 
        cy.get('[ng-show="!loading"] > a')
            .should('exist')
            .and('be.visible')
            .and('have.text','Fechar')
            .and('not.have.attr', 'disabled')
            
        //Card Altere Sua Senha Temporária - clicar no botão CONFIRMAR
        //cy.get(':nth-child(5) > .md-raised')
        //    .click()
    })
})