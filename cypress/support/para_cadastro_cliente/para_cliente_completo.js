import gerarCpf from '../../support/gerarCPF';
import gerarCNPJ from '../../support/gerarCNPJ';

//Validar e preencher campo CPF
export function preencherCPFcliente (selector) {

    const cpf = gerarCpf(); // Gera um CPF válido

    //Campo CPF - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="txtCpfCnpj"]')
        .should('have.text', 'CPF')

    //Campo CPF 
    cy.get('#txtCpfCnpj')
        .should('exist')
        .and('be.visible')
        .and('have.value','')
        .type(cpf, {force: true})
}

//Validar e preencher campo CNPJ
export function preencherCNPJcliente (selector) {

    const cnpj = gerarCNPJ(); // Gera um CNPJ válido

    //Campo CPF - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="txtCpfCnpj"]')
        .should('have.text', 'CPF')

    //Campo CNPJ
    cy.get('#txtCpfCnpj')
        .should('exist')
        .and('be.visible')
        .and('have.value','')
        .type(cnpj, {force: true})
}

//Validar e clicar no menu de opções
export function iconeMenuOpcoes (selector) {

    //Ícone do menu de opções
    cy.get('[aria-label="Menu de opções"] > .ng-binding')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')
            
    //Clicar ni ícone do menu de opções
    cy.get('[aria-label="Menu de opções"] > .ng-binding')
        .click({force:true})
}

//Escolher opção cliente no menu de opções
export function opcaoClienteCompleto (selector) {

    //Opção Cliente completo no menu de opções
    cy.get('a[aria-label="Cliente completo"]')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')

    //Opção Cliente completo no menu de opções
    cy.get('a[aria-label="Cliente completo"]')
        .should('have.attr', 'aria-label', 'Cliente completo')

    //Opção Cliente completo no menu de opções
    cy.get('a[aria-label="Cliente completo"]')
        .scrollIntoView()
        .click({force:true})
}

//Validar e preencher campo Data Nascimento
export function preecherDataNascimento (selector) {

    //Ícone de data de nascimento
    cy.get('#txtDataNasc > .md-datepicker-button')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')

    //Campo Data Nascimento - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="txtDataNasc"]')
        .should('have.text', 'Data Nascimento') 

    cy.get('#txtDataNasc > .md-datepicker-button')
        .click({force:true})

    cy.wait(200)

    //Campo data de nascimento
    cy.get('#input_100')
        .should('exist')
        .and('be.visible')
        .type("30/09/1998", {force:true})
}

//Validar e escolher sexo da pessoa
export function selecionarSexoCliente (selector) {

    //Campo Sexo - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="txtSexo"]')
        .should('have.text', 'Sexo') 

    //Campo Tipo de Sexo
    cy.get('#txtSexo')
        .should('exist')
        .and('be.visible')
        //.and('have.value','')

    //Clicar no campo Tipo de sexo
    cy.get('#txtSexo')
        .click({force:true})

    //Clicar na opção MASCULINO
    cy.get('.md-text.ng-binding')
        .contains('Masculino')
        .click({force:true})
}

//Validar e prencher campo Nome Completo - CPF
export function preencherNomeCompleto (selector) {

    const nomeClienteCPF = "Novo cadastro cliente CPF"

    //Campo Nome - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="txtRazaoSocial"]')
        .should('have.text', 'Nome') 

    //Campo Nome Completo
    cy.get('#txtRazaoSocial')
        .should('exist')
        .and('be.visible')
        .and('have.value','')
        .type(nomeClienteCPF, {force: true})
}

export function preencherNomeCNPJ (selector) {

    const nomeClienteCNPJ = "Novo cadastro cliente CNPJ"

    //Campo Nome - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="txtRazaoSocial"]')
        .should('have.text', 'Nome') 

    //Campo Nome Completo
    cy.get('#txtRazaoSocial')
        .should('exist')
        .and('be.visible')
        .and('have.value','')
        .type(nomeClienteCNPJ, {force: true})
}

export function preencherNomeFantasiaCNPJ (selector) {

    const nomeClienteCNPJ = "Novo cadastro cliente CNPJ"

    //Campo Nome Fantasia - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="txtNomeFantasia"]')
    .should('have.text', 'Nome Social') 

    cy.get('#txtNomeFantasia')
        .should('exist')
        .and('be.visible')
        .and('have.value','')
        .type(nomeClienteCNPJ, { force: true })
}

//Validar e clicar no botão para salvar cadastro de cliente
export function clicarSalvarCliente (selector) {

    //Botão SALVAR
    cy.get('.btn')
        .scrollIntoView()
        .wait(200)
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')
        //.and('have.text', 'Salvar')
    
    //Clicar no botão SALVAR
    cy.get('.btn')
        .click({force:true})
}

//Validar e clicar na aba ENDEREÇO
export function clicarAbaEndereco (selector) {

    //Aba Endereço
    cy.get('#menu_items_pri > :nth-child(2)')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'Endereço')

    //Clicar na aba Endereço
    cy.get('#menu_items_pri > :nth-child(2)')
        .scrollIntoView()
        .click({force:true})
}

//Validar mensagem de endereço incluído com sucesso
export function messEnderecoIncluidoSucesso (selector) {

    //Card Endereço incluído com sucesso.
    cy.get('.toast-success')
        .should('exist')
        .and('be.visible')

    //Card Endereço incluído com sucesso. - Aviso
    cy.get(':nth-child(1) > .toast-title')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'Aviso')

    //Card Endereço incluído com sucesso. - Endereço incluído com sucesso.
    cy.get('.toast-success > .toast-message')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'Telefone incluído com sucesso.')
}