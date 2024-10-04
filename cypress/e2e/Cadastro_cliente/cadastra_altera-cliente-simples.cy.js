//Importando funções 
import { titulopagina } from '../../support/uiUtils';
import gerarCpf from '../../support/gerarCPF';
import gerarCNPJ from '../../support/gerarCNPJ';

const cpf = gerarCpf(); // Gera um CPF válido
const cnpj = gerarCNPJ();
const CEPcadastro = "87065300"
const CEPalteracao = "87054320"
const nomeCliente = "Novo cadastro cliente"
const idSupervisorTrial = "393"
const nomeSupervidorTrial = "T.A. USUÁRIO AUTOMAÇÃO"
const senhaSupervisor = "123.automacao"

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

        it.skip('Cliente simples CPF - alterar (deve pedir trial)', () => {

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

            //Clicar no ícone do menu de opções
            cy.get('[aria-label="Menu de opções"] > .ng-binding')
                .click()

            //Clicar no botão Sair
            cy.get('.rodape > ._md-button-wrap > div.md-button > .md-no-style')
                .click({force:true})

            cy.wait(2000)

            //Inserir Usuário para logar novamente
            cy.get('#txtusername')
                .type('sabium.automacao')

            //Inserir Senha para logar novamente
            cy.get('#txtpassword')
                .type('123.automacao')

            //Clicar no botão Entrar, para logar novamente
            cy.get('.test_btnSalvarCliente')
                .click({force:true})

            cy.wait(7500)

            //Clicar no ícone do menu de opções - para alterar o cadastro de cliente
            cy.get('[aria-label="Menu de opções"] > .ng-binding')
                .click()

            //Clicar em "Cliente" - para alterar cadastro
            cy.get('[ng-show="nivelacessodadopessoal != 1"][href="#!/cliente/cliente-cadastro"] > div.md-button > .md-no-style')
                .click()

            //Preencher campo CPF - para alterar o cadastro que acabamos de gerar
            cy.get('#txtCpf')
                .type(`${cpf}`, { force: true }); //Inserindo CPF no campo "INFORME O CLIENTE"


            // ALTERAR DATA DE NASCIMENTO 


            //Clicar no campo Data de nascimento para aparecer a mensagem se desejo visualizar este cadastro
            cy.get('#input_124')
                .click()

            cy.wait (1000)

            //Mensagem se desejo visualizar o cadastro
            cy.get('.md-title')
                .should('exist')
                .and('be.visible')
                .and('contain', 'Este CPF / CNPJ já está cadastrado para')
                .and('contain', ', nascido(a) em')
                .and('contain', ', deseja visualizar este cadastro?')

            //Validar Não para se desejo visualizar este cadastro
            cy.get('.md-cancel-button')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled') 
                //.and('have.text', 'Não') - aparecendo como undefined

            //Validar Sim para se desejo visualizar este cadastro
            cy.get('.md-confirm-button')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')
                //.and('have.text', 'Sim') - aparecendo como undefined

            //Clicar em Sim para se desejo visualizar este cadastro
            cy.get('.md-confirm-button')
                .click()

            cy.wait(2500)

            //Clicar para abrir a modificação
            cy.get('.date-picker.flex-md-100 > .validaData > .md-datepicker-input-container > .md-datepicker-triangle-button')
                .click()

            cy.wait(200)

            //Clicar na data que desejo, 29/09/2024
            cy.get('#md-0-month-1998-8-29 > .md-calendar-date-selection-indicator')
                .click()

            //Botão SALVAR - validar
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

            cy.wait(1000)

            //Clica no botão SALVAR
            cy.get('.layout-align-end-center > .md-raised')
                .click({force:true})

            cy.wait(3000)


            // Card de Autorização do Supervisor

            
            //Título Autorização do Supervisor
            cy.get('.md-toolbar-tools > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Autorização do Supervisor')

            //Título da coluna Trial
            cy.get('thead > tr > :nth-child(1)')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Trial')

            //Informação da coluna Trial
            cy.get('tbody > .ng-scope > :nth-child(1)')
                .should('exist')
                .and('be.visible')

            //Título da coluna Descrição
            cy.get('thead > tr > :nth-child(2)')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Descrição')

            //Informação da coluna Descrição
            cy.get('tbody > .ng-scope > :nth-child(2)')
                .should('exist')
                .and('be.visible')

            //Título da coluna Status
            cy.get('thead > tr > :nth-child(3)')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Status')
            
            //Informação da coluna Status
            cy.contains('td.ng-binding', 'Pendente')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Pendente')
                .and('have.css', 'background-color', 'rgb(234, 7, 7)')

            //Título da coluna Permissão / Usuário
            cy.get('thead > tr > :nth-child(4)')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Permissão / Usuário')

            //Informação da coluna Permissão / Usuário
            cy.get('tbody > .ng-scope > :nth-child(4)')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Sim')

            //Validando Texto Supervisor
            cy.get('tbody > :nth-child(2) > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Supervisor')

            //Validando ID do supervisor
            cy.get('[ng-model="idUsuario"]')
                .should('exist')
                .and('be.visible')
                .and('have.value', idSupervisorTrial)

            //Validando nome do Supervisor
            cy.get('[ng-model="nomeUsuario"]')
                .should('exist')
                .and('be.visible')
                .and('have.value', nomeSupervidorTrial)

            //Validando texto Senha
            cy.get('tbody > :nth-child(3) > :nth-child(1)')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Senha')
            
            //Validando campo de senha do supervisor
            cy.get(':nth-child(3) > [colspan="2"] > .ng-pristine')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')
                .type(senhaSupervisor)

            //Validando botão CANCELAR
            cy.get('.layout-align-center-center > :nth-child(2) > .md-accent')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Cancelar')  
                .and('not.have.attr', 'disabled')

            //Validando botão CONFIRMAR
            cy.contains('button', 'Confirmar')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Confirmar')  
                .and('not.have.attr', 'disabled')

            //Clicar no botão CONFIRMAR
            cy.contains('button', 'Confirmar')
                .click()

            cy.wait(2000)

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

        it.skip('Cliente simples CNPJ', () => {

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

    context('Cadastro de cliente completo', () => {

        it.only('Cliente completo CPF', () => {

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

            //No menu de opções, escolher opção "Cliente Completo"
            cy.get('[ng-show="mostrarMenuClienteCompleto() && nivelacessodadopessoal != 1"] > div.md-button > .md-no-style')
                .click({force:true})

            //Campo CPF 
            cy.get('#txtCpfCnpj')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type(cpf, { force: true })

            //Campo Nome Completo
            cy.get('#txtRazaoSocial')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type(nomeCliente, { force: true })

            //Ícone de data de nascimento
            cy.get('#txtDataNasc > .md-datepicker-button')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Campo data de nascimento
            cy.get('#input_96')
                .should('exist')
                .and('be.visible')
                //.and('have.value','')
                .wait(200)
                .type("30/09/1998", {force:true})

            //Clicar na aba Endereço
            cy.get('#menu_items_pri > :nth-child(2)')
                .scrollIntoView()
                .click({force:true})

            //Botão +, para adicionar um novo endereço
            cy.get('.layout-align-end-end > .md-fab')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Clicar no botão +, para adicionar um novo endereço
            cy.get('.layout-align-end-end > .md-fab')
                .click()

            //Card Endereço - validando título Endereço
            cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Endereço')

            //Validando botão X
            cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Validando campo vazio - Tipo de Endereço
            cy.get('#txtTpEndereco')
                .should('exist')
                .and('be.visible')

            //Validando campo vazio - CEP
            cy.get('#txtCepEndereco')
                .should('exist')
                .and('be.visible')

            //Validando campo vazio - Endereço
            cy.get('#txtRuaEndereco')
                .should('exist')
                .and('be.visible')

            //Validando campo vazio - Número
            cy.get('#txtNumEndereco')
                .should('exist')
                .and('be.visible')

            //Validando campo vazio - Complemento
            cy.get('#txtComplEndereco')
                .should('exist')
                .and('be.visible')

            //Validando campo vazio - Bairro
            cy.get('#txtBairroEndereco')
                .should('exist')
                .and('be.visible')

            //Validando campo vazio - Caixa Postal
            cy.get('#txtCxPostEndereco')
                .should('exist')
                .and('be.visible')

            //Validando campo vazio - Estado
            cy.get('#txtUfEndereco')
                .should('exist')
                .and('be.visible')

            //Validando campo vazio - Cidade
            cy.get('#txtUfEndereco')
                .should('exist')
                .and('be.visible')

            //Validando botão SALVAR, antes de preencher os campos obrigatórios
            cy.get('#txtUfEndereco')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'not.disabled')
                //.and('have.text', 'Salvar') - está aparecendo como undefined

            //Clicar para aparecer as opções do Tipo de Endereço
            cy.get('#txtTpEndereco')
                .click()
            
            //Selecionar Tipo de Endereço Padrão
            cy.get('#select_option_201')
                .click()

            //Preenchendo campo CEP
            cy.get('#txtCepEndereco')
                .type(CEPcadastro, {force:true})

            //Lupa de pesquisa de CEP
            cy.get('.md-icon-float > .ng-binding')
                .should('exist')
                .and('be.visible')

            //Clicar na lupa de pesquisa de CEP
            cy.get('.md-icon-float > .ng-binding')
                .click()

            //Preenchendo campo Número
            cy.get('#txtNumEndereco')
                .type('66')

        })  

    })
})