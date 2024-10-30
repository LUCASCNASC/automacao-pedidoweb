//Validando Logo da empresa
export function logoEmpresaLogin (selector) {

    //Validar o logo da empresa
    cy.get('.logo')
        .should('exist')
        .and('be.visible')
}

//Validando Ícone do computador
export function iconeComputadorLogin (selector) {

    //Ícone do computador
    cy.get('[ng-click="clienteStatsOpen()"] > .ng-binding')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')
}

//Validando texto usuário, acima do campo usuário e validando ícone do usuário
export function usuarioTextoIcone (selector) {

    //Validando Texto "Usuário" acima do campo informe sue usuário
    cy.get('label[for="txtusername"]')
        .should('exist')
        .and('be.visible')
        .and('have.text','Usuário')

    //Ícone do campo informe seu usuário
    cy.get(':nth-child(3) > .name')
        .should('exist')
        .and('be.visible')
}

//Validando texto Senha, acima do campo usuário e validando ícone da Senha
export function senhaTextoIcone (selector) {
    
    //Validando Texto "Senha" acima do campo informe sua senha
    cy.get('label[for="txtpassword"]')
        .should('exist')
        .and('be.visible')
        .and('have.text','Senha')

    //Ícone de senha
    cy.get('.md-icon-right > .name')
        .should('exist')
        .and('be.visible')
}

//Ícone de visualizar senha
export function iconeOlhosSenha (selector) {

    //ícone de olho, para ver a senha
    cy.get('.md-icon-right > .md-primary')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')
}

//Botão Esqueceu Senha
export function botaoEsqueceuSenha (selector) {

    //Botão/mensagem "Esqueceu a senha?"
    cy.get('div[ng-click="modalSenhaNovaOpen()"]')
        .contains('Esqueceu a senha?')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')
}

//Botão entrar habilitado
export function botaoEntrarHabilitado (selector) {

    //Botão ENTRAR
    cy.get('.test_btnSalvarCliente')
        .should('exist')
        .and('be.visible')
        .and('have.text','Entrar')
        .and('not.have.attr', 'disabled')
}

//Botão entrar desabilitado
export function botaoEntrarDesabilitado (selector) {

    //Botão ENTRAR
    cy.get('.test_btnSalvarCliente')
        .should('exist')
        .and('be.visible')
        .and('have.text','Entrar')
        .and('not.have.attr', 'not.disabled')
}

//Clicar no botão entrar
export function clicarBotaoEntrar (selector) {

    //Clicar no botão ENTRAR
    cy.get('.test_btnSalvarCliente')
        .click({force:true})
}

//Mensagem Entrando no sistema
export function mensagemEntrandoSistema (selector) {

    //Mensagem "Entrando no sistema"
    cy.get('.ng-scope > .ng-binding')
        .should('exist')
        .and('be.visible')
        .and('have.text','Entrando no sistema')
}