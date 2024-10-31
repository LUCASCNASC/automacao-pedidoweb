//validar e clicar botão % (desconto)
export function clicarBotaoDesconto (selector) {

    //validando botão
    cy.get('[ng-click="abrirModalDescontoProduto($index)"]')
        .scrollIntoView()
        .wait(200)
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //validando ícone do botão
    cy.get('[ng-click="abrirModalDescontoProduto($index)"] > .ng-scope')
        .scrollIntoView()
        .wait(200)
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click({force:true})
}

//validar Sub/Sobre - Sub R$
export function validarModalSubSobre (selector) {

    //validando título Sub/Sobre
    cy.get('.md-transition-in > ._md > .md-toolbar-tools > .flex')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'Sub/Sobre')

    //validando botão X
    cy.get('.md-transition-in > ._md > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //validando botão arrasta
    cy.get('.md-primary > .md-container > .md-bar')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //validando texto "Sub (-)"
    cy.contains('Sub (-)')
        .should('exist')
        .and('be.visible')

    //validando texto "(+) Sobre"
    cy.contains('(+) Sobre')
        .should('exist')
        .and('be.visible')

    //validando botão R$
    cy.contains('button', 'R$')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //validando botão %
    cy.contains('button', '%')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //validando botão VALOR FIXO
    cy.contains('button', 'VALOR FIXO')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //validando ícone R$
    cy.get('md-icon')
        .should('exist')
        .and('be.visible')

    //validando campo para colocar desconto
    cy.get('input.campoMoeda_desconto.md-input')
        .should('exist')
        .and('be.visible')
        .and('have.value', '0')

    //Botão APLICAR
    cy.get('button[ng-click="aplicarSubSobre()"]')
        .should('exist')
        .and('be.visible')
        .and('contain', 'Aplicar')
        .and('not.be.disabled')
} 

//aplicar desconto Sub(-) com R$
export function aplicarDescontoR$ (selector) {

    const valor_desconto_R$ = '1000'

    //clicar no botão R$    
    cy.contains('button', 'R$')
        .click({force:true})

    //preencher campo com valor do desconto
    cy.get('#txtReajusteReal_0')
        .type(valor_desconto_R$)

    //clicar no botão APLICAR
    cy.get('button[ng-click="aplicarSubSobre()"]')
        .click({force:true})
}

//aplicar desconto Sub(-) com %
export function aplicarDescontoPorcentagem (selector) {

    const valor_desconto_porcentagem = '2'

    //clicar no botão %    
    cy.contains('button', '%')
        .click({force:true})

    //preencher campo com valor do desconto
    cy.get('#txtReajustePorc_0')
        .type(valor_desconto_porcentagem)

    //clicar no botão APLICAR
    cy.get('button[ng-click="aplicarSubSobre()"]')
        .click({force:true})
}

//aplicar desconto Sub(-) com VALOR FIXO
export function aplicarDescontoValorFixo (selector) {

    const valor_desconto_valorFixo = '130000'

    //clicar no botão VALOR FIXO    
    cy.contains('button', 'VALOR FIXO')
        .click({force:true})

    //preencher campo com valor do desconto
    cy.get('#txtReajusteFixo_0')
        .clear()
        .wait(100)
        .type(valor_desconto_valorFixo)

    //clicar no botão APLICAR
    cy.get('button[ng-click="aplicarSubSobre()"]')
        .click({force:true})
}