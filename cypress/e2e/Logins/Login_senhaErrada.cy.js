//Importando funções 
import { titulopagina } from '../../../support/uiUtils';

describe('Validar tela de login.', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
    })
  
    it.skip('Tentar logar no pedido web - passar senha errada (não deve entrar).', () => {
        
        //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
        titulopagina()

        cy.get('[ng-click="clienteStatsOpen()"] > .ng-binding')
            .click() //Clicando no ícone do Computador

        cy.wait(2300)

        cy.get('[style="color:#333;font-size:110%;margin:0"]')
            .should('contain','Resolução Disponível') // Validando texto "Resolução Disponível"

        //Encontrar forma de validar se a resolução disponível é a correta, pois é uma coisa variável
        //cy.get('p.ng-binding')

        cy.get('#dialogContent_4 > :nth-child(3)')
            .should('contain','Sistema Operacional') //Validando texto "Sistema Operacional"

        //Encontrar forma de validar se o Sistema Operacional é a correta, pois é uma coisa variável
        //cy.get(':nth-child(4) > ul > :nth-child(1)')

        //Encontrar forma de validar se a versão do Sistema Operacional é a correta, pois é uma coisa variável
        //cy.get(':nth-child(4) > ul > :nth-child(2)')

        cy.get('#dialogContent_4 > :nth-child(5)')
            .should('contain','Navegador') //Validando texto "Navegador"

        //Encontrar uma forma de validar se realmente está trazendo o navegador que estamos
        //cy.get(':nth-child(6) > ul > :nth-child(1)')

        //Encontrar uma forma de validar se realmente está trazendo a versão correta do navegador que estamos
        //cy.get(':nth-child(6) > ul > :nth-child(2)')

        cy.get('#dialogContent_4 > :nth-child(8)')
            .should('contain','Acesso ao Serviço REST') //Validando texto "Acesso ao Serviço REST"

        //Encontrar uma forma de validar se realmente é a versão do REST que estamos utilizando
        //cy.get(':nth-child(9) > ul > :nth-child(1)')

        //vai quebrar, pois a mensagem é breve, sem ter como manter ela até validar
        //cy.get(':nth-child(9) > ul > :nth-child(2)')
        //    .should('contain','Testando ...') //Validando mensagem "Testando ..."

        cy.get('#dialogContent_4 > .layout-align-center-center > .md-raised')
            .should('contain','Ok') //Validando texto do botão "OK"
            .click() //Clicando no botão "Ok"

        cy.get('.ng-pristine.flex-100 > .layout-column')
            .should('contain','Usuário') //Validando texto "Usuário"
            .and('contain','Senha') //Validando texto "Senha"
            .and('contain','Esqueceu a senha?') //Validando texto "Esqueceu a senha?"

        //Passando login do usuário
        cy.get('#txtusername')
            .should('have.attr', 'placeholder', 'Informe seu usuário') //Validando texto "Informe seu usuário" dentro do campo Usuário
            .type('sabium.automacao {downArrow}') //Passando usuário dentro do campo "Informe seu usuário"

        //Passando senha do usuário
        cy.get('#txtpassword')
            .should('have.attr', 'placeholder', 'Informe sua senha') //Validando texto "Informe sua senha" dentro do campo Senha
            .type('teste.senhaerrada {downArrow}') //Passando senha dentro do campo "Informe sua senha"

        cy.wait(1500)

        cy.get('.md-icon-right > .md-primary') 
            .click() //Clicando no botão para visualizar a senha

        cy.wait(1500)

        cy.get('.md-icon-right > .md-primary')
            .click() //Clicando no botão para parar de visualizar a senha

        cy.wait(2000)

        cy.get('.test_btnSalvarCliente')
            .should('contain','Entrar') //Validando texto do botão "Entrar"
            .click() //Clicando no botão "Entrar"

        cy.get('.ng-scope > .ng-binding')
            .should('contain','Entrando no sistema') //Validando mensagem "Entrando no sistema" logo após clicarmos no botão Entrar

        cy.get('.toast-title') 
            .should('contain','Atenção') //Após passar a senha errada, validar a mensagem de erro

        cy.get('.toast-message')
            .should('contain','Login ou Senha do usuário está incorreto.') //Após passar o usuário errado, validar a mensagem de erro

        
    })

    it.skip('Tentar logar no pedido web - passar senha errada e tentar novamente com senha certa (deve entrar', () => {
        
        //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
        titulopagina()

        cy.get('[ng-click="clienteStatsOpen()"] > .ng-binding')
            .click() //Clicando no ícone do Computador

        cy.wait(2300)

        cy.get('[style="color:#333;font-size:110%;margin:0"]')
            .should('contain','Resolução Disponível') // Validando texto "Resolução Disponível"

        //Encontrar forma de validar se a resolução disponível é a correta, pois é uma coisa variável
        //cy.get('p.ng-binding')

        cy.get('#dialogContent_4 > :nth-child(3)')
            .should('contain','Sistema Operacional') //Validando texto "Sistema Operacional"

        //Encontrar forma de validar se o Sistema Operacional é a correta, pois é uma coisa variável
        //cy.get(':nth-child(4) > ul > :nth-child(1)')

        //Encontrar forma de validar se a versão do Sistema Operacional é a correta, pois é uma coisa variável
        //cy.get(':nth-child(4) > ul > :nth-child(2)')

        cy.get('#dialogContent_4 > :nth-child(5)')
            .should('contain','Navegador') //Validando texto "Navegador"

        //Encontrar uma forma de validar se realmente está trazendo o navegador que estamos
        //cy.get(':nth-child(6) > ul > :nth-child(1)')

        //Encontrar uma forma de validar se realmente está trazendo a versão correta do navegador que estamos
        //cy.get(':nth-child(6) > ul > :nth-child(2)')

        cy.get('#dialogContent_4 > :nth-child(8)')
            .should('contain','Acesso ao Serviço REST') //Validando texto "Acesso ao Serviço REST"

        //Encontrar uma forma de validar se realmente é a versão do REST que estamos utilizando
        //cy.get(':nth-child(9) > ul > :nth-child(1)')

        //vai quebrar, pois a mensagem é breve, sem ter como manter ela até validar
        //cy.get(':nth-child(9) > ul > :nth-child(2)')
        //    .should('contain','Testando ...') //Validando mensagem "Testando ..."

        cy.get('#dialogContent_4 > .layout-align-center-center > .md-raised')
            .should('contain','Ok') //Validando texto do botão "OK"
            .click() //Clicando no botão "Ok"

        cy.get('.ng-pristine.flex-100 > .layout-column')
            .should('contain','Usuário') //Validando texto "Usuário"
            .and('contain','Senha') //Validando texto "Senha"
            .and('contain','Esqueceu a senha?') //Validando texto "Esqueceu a senha?"

        //Passando login do usuário
        cy.get('#txtusername')
            .should('have.attr', 'placeholder', 'Informe seu usuário') //Validando texto "Informe seu usuário" dentro do campo Usuário
            .type('sabium.automacao {downArrow}') //Passando usuário dentro do campo "Informe seu usuário"

        //Passando senha do usuário
        cy.get('#txtpassword')
            .should('have.attr', 'placeholder', 'Informe sua senha') //Validando texto "Informe sua senha" dentro do campo Senha
            .type('teste.senhaerrada {downArrow}') //Passando senha dentro do campo "Informe sua senha"

        cy.wait(1500)

        cy.get('.md-icon-right > .md-primary') 
            .click() //Clicando no botão para visualizar a senha

        cy.wait(1500)

        cy.get('.md-icon-right > .md-primary')
            .click() //Clicando no botão para parar de visualizar a senha

        cy.wait(2000)

        cy.get('.test_btnSalvarCliente')
            .should('contain','Entrar') //Validando texto do botão "Entrar"
            .click() //Clicando no botão "Entrar"

        cy.get('.ng-scope > .ng-binding')
            .should('contain','Entrando no sistema') //Validando mensagem "Entrando no sistema" logo após clicarmos no botão Entrar

        cy.get('.toast-title') 
            .should('contain','Atenção') //Após passar a senha errada, validar a mensagem de erro

        cy.get('.toast-message')
            .should('contain','Login ou Senha do usuário está incorreto.') //Após passar o usuário errado, validar a mensagem de erro

        cy.wait(4000)
        
        cy.get('#txtpassword')
            .clear() //limpa o campo da senha errada

        cy.get('.md-input-message-animation')
            .should('contain','Campo Obrigatório') //Validando mensagem "Campo Obrigatório" quando não passo a senha

        cy.get('#txtpassword')
            .type('123.automacao {downArrow}') //Passando a nova senha

        cy.wait(1500)

        cy.get('.md-icon-right > .md-primary') 
            .click() //Clicando no botão para visualizar a senha

        cy.wait(1500)

        cy.get('.md-icon-right > .md-primary')
            .click() //Clicando no botão para parar de visualizar a senha

        cy.wait(2000)

        cy.get('.test_btnSalvarCliente')
            .click() //Clicar no botão "Entrar" para entrar no sistema

        cy.get('.ng-scope > .ng-binding')
            .should('contain','Entrando no sistema') //Validando mensagem "Entrando no sistema" logo após clicarmos no botão Entrar

        cy.wait(6000)

        cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
            .should('contain','Cliente') //Validando algum campo após entrar, para ver se realmente logou.


    })

})