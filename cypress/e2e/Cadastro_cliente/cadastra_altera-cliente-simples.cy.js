//Importando funções 
import { titulopagina } from '../../support/uiUtils';
import gerarCpf from '../../support/gerarCPF';
import gerarCNPJ from '../../support/gerarCNPJ';

const cpf = gerarCpf(); // Gera um CPF válido
const cnpj = gerarCNPJ();
const CEPcadastro = "87065300"
const CEPalteracao = "87054320"
const nomeCliente = "Novo cadastro cliente"

describe('Cadastrar cliente', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
    })
  
    context('Cadastro de cliente simples', () => {

        it.skip('Cliente simples CPF', () => {

            cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
    
            //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
            titulopagina()
    
            //Ícone do menu de opções
            cy.get('[aria-label="Menu de opções"] > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            // Validar HINT menu de opções ***
                        
            //Clicar ni ícone do menu de opções
            cy.get('[aria-label="Menu de opções"] > .ng-binding')
                .click()

            //No menu de opções, escolher opção "Cliente"
            cy.get('[ng-show="nivelacessodadopessoal != 1"][href="#!/cliente/cliente-cadastro"] > div.md-button > .md-no-style')
                .click()

            //Campo CPF 
            cy.get('#txtCpf')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type(cpf, { force: true })

            //Campo Nome Completo
            cy.get('#txtNomeCompleto')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type(nomeCliente, { force: true })

            //Ícone de data de nascimento
            cy.get('.date-picker.flex-md-100 > .validaData > .md-datepicker-button')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Campo data de nascimento
            cy.get('#input_124')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .wait(200)
                .type("30/09/1998", {force:true})

            //Campo CEP
            cy.get('#txtCep')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type(CEPcadastro, {force:true})

            //Lupa de pesquisa do CEP
            cy.get('.md-icon-float > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Clicar na lupa de pesquisa do CEP
            cy.get('.md-icon-float > .ng-binding')
                .click({force:true})

            //Campo Número, do endereço
            cy.get('#txtNumero')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type('66', {force:true})

            //Preencher campo rota 1
            cy.get('.rota-frete > .md-icon-right > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type('1', {force:true})

            //Lupa do campo Rota 1
            cy.get('.rota-frete > .md-icon-right > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Preencher campo rota 2
            cy.get('#txtBuscaRotaModal')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type('1', {force:true}, '{downarrow}')

            //Lupa do campo Rota 2
            cy.get('md-icon[aria-label="Pesquisar"]')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Clicar na lupa do campo Rota 2
            cy.get('#dialogContent_808 > .layout-wrap > .md-icon-float > .ng-binding')
                .click({force:true})

            //Escolher última informação da rota
            cy.get('v-pane-header.ng-scope > div')
                .click()

            //Selecionar última rota
            cy.contains('div', '1 - Centro')
                .click()

            //Botão SALVAR
            cy.get('.layout-align-end-center > .md-raised')
                .scrollIntoView()
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')
                //.and('have.text', 'Salvar')
                //.and('have.css', 'background-color', 'rgb(26, 70, 203)')

            //Clica no botão SALVAR
            cy.get('.layout-align-end-center > .md-raised')
                .click({force:true})

            //Card de mensagem de Registro salvo com sucesso!
            cy.get('.toast')
                .should('exist')
                .and('be.visible')

            //Card de mensagem de Registro salvo com sucesso! - Aviso
            cy.get('.toast-title')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Aviso')

            //Card de mensagem de Registro salvo com sucesso! - Registro salvo com sucesso!
            cy.get('.toast-message')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Registro salvo com sucesso!')
        })  

        it.skip('Cliente simples CPF - alterar data de nascimento logo após cadastrar (não deve pedir trial)', () => {

            cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
    
            //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
            titulopagina()
    
            //Ícone do menu de opções
            cy.get('[aria-label="Menu de opções"] > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            // Validar HINT menu de opções ***
                        
            //Clicar ni ícone do menu de opções
            cy.get('[aria-label="Menu de opções"] > .ng-binding')
                .click()

            //No menu de opções, escolher opção "Cliente"
            cy.get('[ng-show="nivelacessodadopessoal != 1"][href="#!/cliente/cliente-cadastro"] > div.md-button > .md-no-style')
                .click()

            //Campo CPF 
            cy.get('#txtCpf')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type(cpf, { force: true })

            //Campo Nome Completo
            cy.get('#txtNomeCompleto')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type(nomeCliente, { force: true })

            //Ícone de data de nascimento
            cy.get('.date-picker.flex-md-100 > .validaData > .md-datepicker-button')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Campo data de nascimento
            cy.get('#input_124')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .wait(200)
                .type("30/09/1998", {force:true})

            //Campo CEP
            cy.get('#txtCep')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type(CEPcadastro, {force:true})

            //Lupa de pesquisa do CEP
            cy.get('.md-icon-float > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Clicar na lupa de pesquisa do CEP
            cy.get('.md-icon-float > .ng-binding')
                .click({force:true})

            //Campo Número, do endereço
            cy.get('#txtNumero')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type('66', {force:true})

            //Preencher campo rota 1
            cy.get('.rota-frete > .md-icon-right > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type('1', {force:true})

            //Lupa do campo Rota 1
            cy.get('.rota-frete > .md-icon-right > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Preencher campo rota 2
            cy.get('#txtBuscaRotaModal')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type('1', {force:true}, '{downarrow}')

            //Lupa do campo Rota 2
            cy.get('md-icon[aria-label="Pesquisar"]')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Clicar na lupa do campo Rota 2
            cy.get('#dialogContent_808 > .layout-wrap > .md-icon-float > .ng-binding')
                .click({force:true})

            //Escolher última informação da rota
            cy.get('v-pane-header.ng-scope > div')
                .click()

            //Selecionar última rota
            cy.contains('div', '1 - Centro')
                .click()

            //Botão SALVAR
            cy.get('.layout-align-end-center > .md-raised')
                .scrollIntoView()
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')
                //.and('have.text', 'Salvar')
                //.and('have.css', 'background-color', 'rgb(26, 70, 203)')

            //Clica no botão SALVAR
            cy.get('.layout-align-end-center > .md-raised')
                .click({force:true})

            //Card de mensagem de Registro salvo com sucesso!
            cy.get('.toast')
                .should('exist')
                .and('be.visible')

            //Card de mensagem de Registro salvo com sucesso! - Aviso
            cy.get('.toast-title')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Aviso')

            //Card de mensagem de Registro salvo com sucesso! - Registro salvo com sucesso!
            cy.get('.toast-message')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Registro salvo com sucesso!')

            // ALTERAÇÃO DE CLIENTE SIMPLES - CPF


            //Ícone do menu de opções
            cy.get('[aria-label="Menu de opções"] > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            // Validar HINT menu de opções ***
                        
            //Clicar ni ícone do menu de opções
            cy.get('[aria-label="Menu de opções"] > .ng-binding')
                .click()

            cy.get('[ng-show="nivelacessodadopessoal != 1"][href="#!/cliente/cliente-cadastro"] > div.md-button > .md-no-style')
                .click()

            //Alteração - Campo data de nascimento
            cy.get('#input_880')
                .should('exist')
                .and('be.visible')
                .clear()
                .should('have.value','')
                .type("10/10/1990", {force:true})

            //Botão SALVAR - alteração
            cy.get('.layout-align-end-center > .md-raised')
                .scrollIntoView()
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')
                //.and('have.text', 'Salvar')
                //.and('have.css', 'background-color', 'rgb(26, 70, 203)')

            //Clica no botão SALVAR - alteração
            cy.get('.layout-align-end-center > .md-raised')
                .click({force:true})

            //Card de mensagem de Registro salvo com sucesso!
            cy.get('.toast')
                .should('exist')
                .and('be.visible')

            //Card de mensagem de Registro salvo com sucesso! - Aviso
            cy.get('.toast-title')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Aviso')

            //Card de mensagem de Registro salvo com sucesso! - Registro salvo com sucesso!
            cy.get('.toast-message')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Registro salvo com sucesso!')
        })  
        //NÃO ESTÁ DANDO
        it.skip('Cliente simples CPF', () => {

            cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
    
            //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
            titulopagina()
    
            //Ícone do menu de opções
            cy.get('[aria-label="Menu de opções"] > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            // Validar HINT menu de opções ***
                        
            //Clicar no ícone do menu de opções
            cy.get('[aria-label="Menu de opções"] > .ng-binding')
                .click()

            //No menu de opções, escolher opção "Cliente"
            cy.get('[ng-show="nivelacessodadopessoal != 1"][href="#!/cliente/cliente-cadastro"] > div.md-button > .md-no-style')
                .click()

            //Campo CPF 
            cy.get('#txtCpf')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type(cpf, { force: true })

            //Copiar cpf colocado no campo
            cy.get('#txtCpf')
                .then((value) => {
                    cy.log(`Valor copiado: ${cpf}`); // Exibe o valor no log
                    // Aqui você pode usar 'value' como precisar
                });

            //Campo Nome Completo
            cy.get('#txtNomeCompleto')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type(nomeCliente, { force: true })

            //Ícone de data de nascimento
            cy.get('.date-picker.flex-md-100 > .validaData > .md-datepicker-button')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Campo data de nascimento
            cy.get('#input_124')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .wait(200)
                .type("30/09/1998", {force:true})

            //Campo CEP
            cy.get('#txtCep')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type(CEPcadastro, {force:true})

            //Lupa de pesquisa do CEP
            cy.get('.md-icon-float > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Clicar na lupa de pesquisa do CEP
            cy.get('.md-icon-float > .ng-binding')
                .click({force:true})

            //Campo Número, do endereço
            cy.get('#txtNumero')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type('66', {force:true})

            //Preencher campo rota 1
            cy.get('.rota-frete > .md-icon-right > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type('1', {force:true})

            //Lupa do campo Rota 1
            cy.get('.rota-frete > .md-icon-right > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Preencher campo rota 2
            cy.get('#txtBuscaRotaModal')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type('1', {force:true}, '{downarrow}')

            //Lupa do campo Rota 2
            cy.get('md-icon[aria-label="Pesquisar"]')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Clicar na lupa do campo Rota 2
            cy.get('#dialogContent_808 > .layout-wrap > .md-icon-float > .ng-binding')
                .click({force:true})

            //Escolher última informação da rota
            cy.get('v-pane-header.ng-scope > div')
                .click()

            //Selecionar última rota
            cy.contains('div', '1 - Centro')
                .click()

            //Botão SALVAR
            cy.get('.layout-align-end-center > .md-raised')
                .scrollIntoView()
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')
                //.and('have.text', 'Salvar')
                //.and('have.css', 'background-color', 'rgb(26, 70, 203)')

            //Clica no botão SALVAR
            cy.get('.layout-align-end-center > .md-raised')
                .click({force:true})

            //Card de mensagem de Registro salvo com sucesso!
            cy.get('.toast')
                .should('exist')
                .and('be.visible')

            //Card de mensagem de Registro salvo com sucesso! - Aviso
            cy.get('.toast-title')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Aviso')

            //Card de mensagem de Registro salvo com sucesso! - Registro salvo com sucesso!
            cy.get('.toast-message')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Registro salvo com sucesso!')

            cy.wait(1000)
             
            //Limpar campo cliente - clicar no X
            cy.get('#btnBuscaLimpar > .ng-binding')
                .click({force:true})

            cy.wait(1000)

            //Clicar no ícone do menu de opções
            cy.get('[aria-label="Menu de opções"] > .ng-binding')
                .click()

            //Dentro do menu, clico em Início
            cy.get('[role="listitem"][href="#!/principal/"] > div.md-button > .md-no-style')
                .click()

            cy.wait(1000)

            //clicar na lupa de pesquisa de clientes
            cy.get('.md-block > .ng-binding')
                .should('exist') //Validando se a lupa existe
                //.and('be.visible')//Validando se a lupa está visível
                .click({force: true})

            cy.get('#txtBuscaCliente')
                .wait(1000)
                .type(`${cpf}`, { force: true }); //Inserindo CPF no campo "INFORME O CLIENTE"

            cy.wait(300)

            //clicar na lupa de pesquisa de clientes
            //cy.get('.md-block > .ng-binding')
            //    .should('exist') //Validando se a lupa existe
                //.and('be.visible')//Validando se a lupa está visível
             //   .click({force: true})

            cy.wait(400)

            //Clicar no ícone do menu de opções
            cy.get('[aria-label="Menu de opções"] > .ng-binding')
                .click()

            //No menu de opções, escolher opção "Cliente"
            cy.get('[ng-show="nivelacessodadopessoal != 1"][href="#!/cliente/cliente-cadastro"] > div.md-button > .md-no-style')
                .click()

            //Alteração - Campo data de nascimento
            cy.get('#input_964')
                .should('exist')
                .and('be.visible')
                .clear()
                .should('have.value','')
                .type("10/10/1990", {force:true})

            //Botão SALVAR
            cy.get('.layout-align-end-center > .md-raised')
                .scrollIntoView()
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')
                //.and('have.text', 'Salvar')
                //.and('have.css', 'background-color', 'rgb(26, 70, 203)')

            //Clica no botão SALVAR
            cy.get('.layout-align-end-center > .md-raised')
                .click({force:true})

        })

        it.skip('Cliente simples CPF - alterar CEP logo após cadastrar', () => {

            cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
    
            //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
            titulopagina()
    
            //Ícone do menu de opções
            cy.get('[aria-label="Menu de opções"] > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            // Validar HINT menu de opções ***
                        
            //Clicar ni ícone do menu de opções
            cy.get('[aria-label="Menu de opções"] > .ng-binding')
                .click()

            //No menu de opções, escolher opção "Cliente"
            cy.get('[ng-show="nivelacessodadopessoal != 1"][href="#!/cliente/cliente-cadastro"] > div.md-button > .md-no-style')
                .click()

            //Campo CPF 
            cy.get('#txtCpf')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type(cpf, { force: true })

            //Campo Nome Completo
            cy.get('#txtNomeCompleto')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type(nomeCliente, { force: true })

            //Ícone de data de nascimento
            cy.get('.date-picker.flex-md-100 > .validaData > .md-datepicker-button')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Campo data de nascimento
            cy.get('#input_124')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .wait(200)
                .type("30/09/1998", {force:true})

            //Campo CEP
            cy.get('#txtCep')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type(CEPcadastro, {force:true})

            //Lupa de pesquisa do CEP
            cy.get('.md-icon-float > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Clicar na lupa de pesquisa do CEP
            cy.get('.md-icon-float > .ng-binding')
                .click({force:true})

            //Campo Número, do endereço
            cy.get('#txtNumero')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type('66', {force:true})

            //Preencher campo rota 1
            cy.get('.rota-frete > .md-icon-right > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type('1', {force:true})

            //Lupa do campo Rota 1
            cy.get('.rota-frete > .md-icon-right > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Preencher campo rota 2
            cy.get('#txtBuscaRotaModal')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type('1', {force:true}, '{downarrow}')

            //Lupa do campo Rota 2
            cy.get('md-icon[aria-label="Pesquisar"]')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Clicar na lupa do campo Rota 2
            cy.get('#dialogContent_808 > .layout-wrap > .md-icon-float > .ng-binding')
                .click({force:true})

            //Escolher última informação da rota
            cy.get('v-pane-header.ng-scope > div')
                .click()

            //Selecionar última rota
            cy.contains('div', '1 - Centro')
                .click()

            //Botão SALVAR
            cy.get('.layout-align-end-center > .md-raised')
                .scrollIntoView()
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')
                //.and('have.text', 'Salvar')
                //.and('have.css', 'background-color', 'rgb(26, 70, 203)')

            //Clica no botão SALVAR
            cy.get('.layout-align-end-center > .md-raised')
                .click({force:true})

            //Card de mensagem de Registro salvo com sucesso!
            cy.get('.toast')
                .should('exist')
                .and('be.visible')

            //Card de mensagem de Registro salvo com sucesso! - Aviso
            cy.get('.toast-title')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Aviso')

            //Card de mensagem de Registro salvo com sucesso! - Registro salvo com sucesso!
            cy.get('.toast-message')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Registro salvo com sucesso!')


            // ALTERAÇÃO DE CLIENTE SIMPLES - CPF


            //Ícone do menu de opções
            cy.get('[aria-label="Menu de opções"] > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            // Validar HINT menu de opções ***
                        
            //Clicar ni ícone do menu de opções
            cy.get('[aria-label="Menu de opções"] > .ng-binding')
                .click()

            cy.get('[ng-show="nivelacessodadopessoal != 1"][href="#!/cliente/cliente-cadastro"] > div.md-button > .md-no-style')
                .click()

            //Campo CEP - alterar
            cy.get('#txtCep')
                .should('exist')
                .and('be.visible')
                .clear({force:true})
                .and('have.value','')
                .type(CEPalteracao, {force:true})

            //Lupa de pesquisa do CEP
            cy.get('.md-icon-float > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Clicar na lupa de pesquisa do CEP
            cy.get('.md-icon-float > .ng-binding')
                .click({force:true})

            //Campo Número, do endereço
            cy.get('#txtNumero')
                .should('exist')
                .and('be.visible')
                .clear({force:true})
                .and('have.value','')
                .type('113', {force:true})

            //Botão SALVAR - alteração
            cy.get('.layout-align-end-center > .md-raised')
                .scrollIntoView()
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')
                //.and('have.text', 'Salvar')
                //.and('have.css', 'background-color', 'rgb(26, 70, 203)')

            //Clica no botão SALVAR - alteração
            cy.get('.layout-align-end-center > .md-raised')
                .click({force:true})

            //Card de mensagem de Registro salvo com sucesso!
            cy.get('.toast')
                .should('exist')
                .and('be.visible')

            //Card de mensagem de Registro salvo com sucesso! - Aviso
            cy.get('.toast-title')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Aviso')

            //Card de mensagem de Registro salvo com sucesso! - Registro salvo com sucesso!
            cy.get('.toast-message')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Registro salvo com sucesso!')
        })

        it.only('Cliente simples CNPJ', () => {

            cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
    
            //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
            titulopagina()
    
            //Ícone do menu de opções
            cy.get('[aria-label="Menu de opções"] > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            // Validar HINT menu de opções ***
                        
            //Clicar no ícone do menu de opções
            cy.get('[aria-label="Menu de opções"] > .ng-binding')
                .click()

            //No menu de opções, escolher opção "Cliente"
            cy.get('[ng-show="nivelacessodadopessoal != 1"][href="#!/cliente/cliente-cadastro"] > div.md-button > .md-no-style')
                .click()

            //Arrastar para Pessoa jurídica
            cy.get('.flex-md-100 > .md-auto-horizontal-margin > .md-label')
                .should('exist')
                .and('be.visible')
                .and('contain',' Pessoa Física/Pessoa Júridica ')

            //Arrastar para Pessoa jurídica
            cy.get('.flex-md-100 > .md-auto-horizontal-margin > .md-label')
                .click({force:true})

            //Campo CNPJ
            cy.get('#txtCNPJ')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type(cnpj, { force: true })

            //Campo Nome Completo
            cy.get('#txtNomeCompleto')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type(nomeCliente, { force: true })

            //Campo CEP
            cy.get('#txtCep')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type(CEPcadastro, {force:true})

            //Lupa de pesquisa do CEP
            cy.get('.md-icon-float > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Clicar na lupa de pesquisa do CEP
            cy.get('.md-icon-float > .ng-binding')
                .click({force:true})

            //Campo Número, do endereço
            cy.get('#txtNumero')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type('66', {force:true})

            //Preencher campo rota 1
            cy.get('.rota-frete > .md-icon-right > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type('1', {force:true})

            //Lupa do campo Rota 1
            cy.get('.rota-frete > .md-icon-right > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Preencher campo rota 2
            cy.get('#txtBuscaRotaModal')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type('1', {force:true}, '{downarrow}')

            //Lupa do campo Rota 2
            cy.get('md-icon[aria-label="Pesquisar"]')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Clicar na lupa do campo Rota 2
            cy.get('#dialogContent_808 > .layout-wrap > .md-icon-float > .ng-binding')
                .click({force:true})

            //Escolher última informação da rota
            cy.get('v-pane-header.ng-scope > div')
                .click()

            //Selecionar última rota
            cy.contains('div', '1 - Centro')
                .click()

            //Botão SALVAR
            cy.get('.layout-align-end-center > .md-raised')
                .scrollIntoView()
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')
                //.and('have.text', 'Salvar')
                //.and('have.css', 'background-color', 'rgb(26, 70, 203)')

            //Clica no botão SALVAR
            cy.get('.layout-align-end-center > .md-raised')
                .click({force:true})

            //Card de mensagem de Registro salvo com sucesso!
            cy.get('.toast')
                .should('exist')
                .and('be.visible')

            //Card de mensagem de Registro salvo com sucesso! - Aviso
            cy.get('.toast-title')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Aviso')

            //Card de mensagem de Registro salvo com sucesso! - Registro salvo com sucesso!
            cy.get('.toast-message')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Registro salvo com sucesso!')
        })
    })
})