//Importando funções 
import { titulopagina } from '../../support/para_todos';
import gerarCpf from '../../support/gerarCPF';
import gerarCNPJ from '../../support/gerarCNPJ';

const cpf = gerarCpf(); // Gera um CPF válido
const cnpj = gerarCNPJ();
const CEPcadastro = "87065300"
const CEPalteracao = "87054320"
const nomeClienteCPF = "Novo cadastro cliente CPF"
const nomeClienteCNPJ = "Novo cadastro cliente CNPJ"
const idSupervisorTrial = "393"
const nomeSupervidorTrial = "T.A. USUÁRIO AUTOMAÇÃO"
const senhaSupervisor = "123.automacao"
const numeroCPF = "117.415.410-18" //usado apenas no teste de adicionar pelo botão na pesquisa de cliente

describe('Cadastrar cliente simples', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
    })
  
    context('Cadastro de cliente simples', () => {

        it('Cliente simples CPF', () => {

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

            //Opção Cliente no menu de opções
            cy.get('a[aria-label="Cliente"]')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Opção Cliente no menu de opções
            cy.get('a[aria-label="Cliente"]')
                .should('have.attr', 'aria-label', 'Cliente')

            //Opção Cliente no menu de opções
            cy.get('a[aria-label="Cliente"]')
                .scrollIntoView()
                .click({force:true})

            //Campo CPF - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtCpf"]')
                .should('have.text', 'CPF')

            //Campo CPF 
            cy.get('#txtCpf')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type(cpf, {force: true})

            //Campo Nome Completo - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtNomeCompleto"]')
                .should('have.text', 'Nome Completo')     

            //Campo Nome Completo
            cy.get('#txtNomeCompleto')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type(nomeClienteCPF, {force: true})

            //Ícone de data de nascimento
            cy.get('.date-picker.flex-md-100 > .validaData > .md-datepicker-button')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Campo Data de nascimento - validando mensagem dentro do campo antes de preencher
            cy.get('label[aria-hidden="false"]')
                .should('have.text', 'Data de nascimento')     

            //Campo data de nascimento
            cy.get('#input_124')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .wait(200)
                .type("30/09/1998", {force:true})

            //Campo CEP - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtCep"]')
                .should('have.text', 'CEP')   

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

            //Campo Número - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtNumero"]')
                .should('have.text', 'Número') 
            
            //Campo Número, do endereço
            cy.get('#txtNumero')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type('66', {force:true})

            //Campo Código da rota - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="codigo_rota"]')
                .should('have.text', 'Código da rota') 
            
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

            //Campo rota 2 - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtBuscaRotaModal"]')
                .should('have.text', 'Rota') 

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
            cy.get('md-icon[ng-disabled="bloqueioBtnRota"]')
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

        it('Cliente simples CPF - alterar data de nascimento logo após cadastrar', () => {

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

            //Opção Cliente no menu de opções
            cy.get('a[aria-label="Cliente"]')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Opção Cliente no menu de opções
            cy.get('a[aria-label="Cliente"]')
                .should('have.attr', 'aria-label', 'Cliente')

            //Opção Cliente no menu de opções
            cy.get('a[aria-label="Cliente"]')
                .scrollIntoView()
                .click({force:true})

            //Campo CPF - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtCpf"]')
                .should('have.text', 'CPF')

            //Campo CPF 
            cy.get('#txtCpf')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type(cpf, { force: true })

            //Campo Nome Completo - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtNomeCompleto"]')
                .should('have.text', 'Nome Completo')  

            //Campo Nome Completo
            cy.get('#txtNomeCompleto')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type(nomeClienteCPF, { force: true })

            //Ícone de data de nascimento
            cy.get('.date-picker.flex-md-100 > .validaData > .md-datepicker-button')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Campo Data de nascimento - validando mensagem dentro do campo antes de preencher
            cy.get('label[aria-hidden="false"]')
                .should('have.text', 'Data de nascimento')  

            //Campo data de nascimento
            cy.get('#input_124')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .wait(200)
                .type("30/09/1998", {force:true})

            //Campo CEP - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtCep"]')
                .should('have.text', 'CEP') 

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

            //Campo Número - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtNumero"]')
                .should('have.text', 'Número') 

            //Campo Número, do endereço
            cy.get('#txtNumero')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type('66', {force:true})

            //Campo Código da rota - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="codigo_rota"]')
                .should('have.text', 'Código da rota') 

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

            //Campo rota 2 - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtBuscaRotaModal"]')
                .should('have.text', 'Rota') 

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
            cy.get('md-icon[ng-disabled="bloqueioBtnRota"]')
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

        it('Cliente simples CPF - alterar data de nascimento (deve pedir trial)', () => {

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

            //Opção Cliente no menu de opções
            cy.get('a[aria-label="Cliente"]')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Opção Cliente no menu de opções
            cy.get('a[aria-label="Cliente"]')
                .should('have.attr', 'aria-label', 'Cliente')

            //Opção Cliente no menu de opções
            cy.get('a[aria-label="Cliente"]')
                .scrollIntoView()
                .click({force:true})

            //Campo CPF - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtCpf"]')
                .should('have.text', 'CPF')

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

            //Campo Nome Completo - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtNomeCompleto"]')
            .should('have.text', 'Nome Completo')  

            //Campo Nome Completo
            cy.get('#txtNomeCompleto')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type(nomeClienteCPF, { force: true })

            //Ícone de data de nascimento
            cy.get('.date-picker.flex-md-100 > .validaData > .md-datepicker-button')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Campo Data de nascimento - validando mensagem dentro do campo antes de preencher
            cy.get('label[aria-hidden="false"]')
                .should('have.text', 'Data de nascimento') 

            //Campo data de nascimento
            cy.get('#input_124')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .wait(200)
                .type("30/09/1998", {force:true})

            //Campo CEP - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtCep"]')
                .should('have.text', 'CEP') 

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

            //Campo Número - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtNumero"]')
                .should('have.text', 'Número') 

            //Campo Número, do endereço
            cy.get('#txtNumero')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type('66', {force:true})

            //Campo Código da rota - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="codigo_rota"]')
                .should('have.text', 'Código da rota') 

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

            //Campo rota 2 - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtBuscaRotaModal"]')
                .should('have.text', 'Rota') 

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
            cy.get('md-icon[ng-disabled="bloqueioBtnRota"]')
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
                .click({force:true})

            cy.wait(2500)

            //Clicar na data que desejo, 29/09/1998
            cy.get('#input_124')
                .should('exist')
                .and('be.visible')
                .and('have.value','30/09/1998')
                .wait(200)
                .clear()
                .wait(200)
                .type("29/09/1997", {force:true})

            //Botão SALVAR - validar
            cy.get('.layout-align-end-center > .md-raised')
                .scrollIntoView()
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

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

        it('Cliente simples CPF - alterar tipo de sexo', () => {

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

            //Opção Cliente no menu de opções
            cy.get('a[aria-label="Cliente"]')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Opção Cliente no menu de opções
            cy.get('a[aria-label="Cliente"]')
                .should('have.attr', 'aria-label', 'Cliente')

            //Opção Cliente no menu de opções
            cy.get('a[aria-label="Cliente"]')
                .scrollIntoView()
                .click({force:true})

            //Campo CPF - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtCpf"]')
                .should('have.text', 'CPF')

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

            //Campo Nome Completo - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtNomeCompleto"]')
                .should('have.text', 'Nome Completo')  

            //Campo Nome Completo
            cy.get('#txtNomeCompleto')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type(nomeClienteCPF, { force: true })

            //Ícone de data de nascimento
            cy.get('.date-picker.flex-md-100 > .validaData > .md-datepicker-button')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Campo Data de nascimento - validando mensagem dentro do campo antes de preencher
            cy.get('label[aria-hidden="false"]')
                .should('have.text', 'Data de nascimento') 

            //Campo data de nascimento
            cy.get('#input_124')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .wait(200)
                .type("30/09/1998", {force:true})

            //Campo Sexo
            cy.get('.md-default-theme[ng-model="cliente.idtiposexo"]')
                .scrollIntoView()
                .should('exist')
                .and('be.visible')
                .and('have.value','')

            //Campo Sexo - clicar
            cy.get('.md-default-theme[ng-model="cliente.idtiposexo"]')
                .click({force:true})

            //Selecionar masculino
            cy.get('.md-text.ng-binding')
                .contains('Masculino')
                .click({force:true})

            //Campo CEP - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtCep"]')
                .should('have.text', 'CEP') 

            //Campo CEP
            cy.get('#txtCep')
                .scrollIntoView()
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

            //Campo Número - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtNumero"]')
                .should('have.text', 'Número') 

            //Campo Número, do endereço
            cy.get('#txtNumero')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type('66', {force:true})

            //Campo Código da rota - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="codigo_rota"]')
                .should('have.text', 'Código da rota')

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

            //Campo rota 2 - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtBuscaRotaModal"]')
                .should('have.text', 'Rota') 

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
            cy.get('md-icon[ng-click="pesquisar()"]')
                .click({force:true})

            //Escolher última informação da rota
            cy.get('v-pane-header.ng-scope > div')
                .click({force:true})

            //Selecionar última rota
            cy.contains('div', '1 - Centro')
                .click({force:true})

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


            // ALTERAR SEXO 


            //Campo Sexo - clicar
            cy.get('.md-default-theme[ng-model="cliente.idtiposexo"]')
                .click({force:true})

            cy.wait (2500)

            //Mensagem se desejo visualizar o cadastro
            cy.get('.md-title')
                .should('exist')
                .and('be.visible')
                .and('contain', 'Este CPF / CNPJ já está cadastrado para')
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

            cy.wait(200)

            //Clicar em Sim para se desejo visualizar este cadastro
            cy.get('.md-confirm-button')
                .click({force:true})

            cy.wait(2000)

            //Selecionar femino
            cy.get('.md-text.ng-binding')
                .contains('Feminino')
                .click({force:true})

            cy.wait(2500)

            //Clicar para abrir a modificação
            cy.get('.date-picker.flex-md-100 > .validaData > .md-datepicker-input-container > .md-datepicker-triangle-button')
                .click()

            cy.wait(200)

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

            cy.wait(9000)

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

        it('Cliente simples CPF - alterar Endereço logo após cadastrar', () => {

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

            //Opção Cliente no menu de opções
            cy.get('a[aria-label="Cliente"]')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Opção Cliente no menu de opções
            cy.get('a[aria-label="Cliente"]')
                .should('have.attr', 'aria-label', 'Cliente')

            //Opção Cliente no menu de opções
            cy.get('a[aria-label="Cliente"]')
                .scrollIntoView()
                .click({force:true})

            //Campo CPF - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtCpf"]')
                .should('have.text', 'CPF')

            //Campo CPF 
            cy.get('#txtCpf')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type(cpf, { force: true })

            //Campo Nome Completo - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtNomeCompleto"]')
                .should('have.text', 'Nome Completo') 

            //Campo Nome Completo
            cy.get('#txtNomeCompleto')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type(nomeClienteCPF, { force: true })

            //Ícone de data de nascimento
            cy.get('.date-picker.flex-md-100 > .validaData > .md-datepicker-button')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Campo Data de nascimento - validando mensagem dentro do campo antes de preencher
            cy.get('label[aria-hidden="false"]')
                .should('have.text', 'Data de nascimento')  

            //Campo data de nascimento
            cy.get('#input_124')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .wait(200)
                .type("30/09/1998", {force:true})

            //Campo CEP - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtCep"]')
                .should('have.text', 'CEP')  

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

            //Campo Número - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtNumero"]')
                .should('have.text', 'Número')

            //Campo Número, do endereço
            cy.get('#txtNumero')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type('66', {force:true})

            //Campo Código da rota - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="codigo_rota"]')
                .should('have.text', 'Código da rota') 

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

            //Campo rota 2 - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtBuscaRotaModal"]')
                .should('have.text', 'Rota') 

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
            cy.get('md-icon[ng-click="pesquisar()"]')
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

            //Clicar para entrar no cadastro de cliente simples
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

        it('Cliente simples CNPJ', () => {

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

            //Opção Cliente no menu de opções
            cy.get('a[aria-label="Cliente"]')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Opção Cliente no menu de opções
            cy.get('a[aria-label="Cliente"]')
                .should('have.attr', 'aria-label', 'Cliente')

            //Opção Cliente no menu de opções
            cy.get('a[aria-label="Cliente"]')
                .scrollIntoView()
                .click({force:true})

            //Arrastar para Pessoa jurídica
            cy.get('.flex-md-100 > .md-auto-horizontal-margin > .md-label')
                .should('exist')
                .and('be.visible')
                .and('contain',' Pessoa Física/Pessoa Júridica ')

            //Arrastar para Pessoa jurídica
            cy.get('.flex-md-100 > .md-auto-horizontal-margin > .md-label')
                .click({force:true})

            //Campo CPF - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtCNPJ"]')
                .should('have.text', 'CNPJ')

            //Campo CNPJ
            cy.get('#txtCNPJ')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type(cnpj, { force: true })

            //Campo Nome Completo - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtNomeCompleto"]')
                .should('have.text', 'Nome Completo')

            //Campo Nome Completo
            cy.get('#txtNomeCompleto')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type(nomeClienteCNPJ, { force: true })

            //Campo CEP - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtCep"]')
                .should('have.text', 'CEP')  

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

            //Campo Número - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtNumero"]')
                .should('have.text', 'Número') 

            //Campo Número, do endereço
            cy.get('#txtNumero')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type('66', {force:true})

            //Campo Código da rota - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="codigo_rota"]')
                .should('have.text', 'Código da rota')

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

            //Campo rota 2 - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtBuscaRotaModal"]')
                .should('have.text', 'Rota') 

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
            cy.get('md-icon[ng-click="pesquisar()"]')
                .click({force:true})

            //Escolher última informação da rota
            cy.get('v-pane-header.ng-scope > div')
                .click({force:true})

            //Selecionar última rota
            cy.contains('div', '1 - Centro')
                .click({force:true})

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

        it('Cliente simples CNPJ - alterar Endereço', () => {

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

            //Opção Cliente no menu de opções
            cy.get('a[aria-label="Cliente"]')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Opção Cliente no menu de opções
            cy.get('a[aria-label="Cliente"]')
                .should('have.attr', 'aria-label', 'Cliente')

            //Opção Cliente no menu de opções
            cy.get('a[aria-label="Cliente"]')
                .scrollIntoView()
                .click({force:true})

            //Arrastar para Pessoa jurídica
            cy.get('.flex-md-100 > .md-auto-horizontal-margin > .md-label')
                .should('exist')
                .and('be.visible')
                .and('contain',' Pessoa Física/Pessoa Júridica ')

            //Arrastar para Pessoa jurídica
            cy.get('.flex-md-100 > .md-auto-horizontal-margin > .md-label')
                .click({force:true})

            //Campo CPF - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtCNPJ"]')
                .should('have.text', 'CNPJ')

            //Campo CNPJ
            cy.get('#txtCNPJ')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type(cnpj, { force: true })

            //Campo Nome Completo - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtNomeCompleto"]')
                .should('have.text', 'Nome Completo') 

            //Campo Nome Completo
            cy.get('#txtNomeCompleto')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type(nomeClienteCNPJ, { force: true })

            //Campo CEP - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtCep"]')
                .should('have.text', 'CEP')

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

            //Campo Número - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtNumero"]')
                .should('have.text', 'Número')

            //Campo Número, do endereço
            cy.get('#txtNumero')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type('66', {force:true})

            //Campo Código da rota - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="codigo_rota"]')
                .should('have.text', 'Código da rota') 

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

            //Campo rota 2 - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtBuscaRotaModal"]')
                .should('have.text', 'Rota') 

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
            cy.get('md-icon[ng-click="pesquisar()"]')
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
    })

    context('Botão de adicionar cliente, na pesquisa de cliente', () => {

        it('Botão de adicionar cliente, na pesquisa de cliente', () => {

            cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
        
            //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
            titulopagina()
        
            //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
            cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
                .wait(800)
                .type(numeroCPF,'{downArrow}')

            cy.wait(800)

            //clicar na lupa de pesquisa de clientes
            cy.get('.md-block > .ng-binding')
                .should('exist') 
                .and('be.visible')
                .click()

                cy.wait(2000)

            //Card inteiro de Clientes
            cy.get('.md-dialog-fullscreen')
                .should('exist') 
                .and('be.visible')

            //Card de clientes - Título Clientes
            cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Clientes')

            //Card de clientes - Botão X
            cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding')
                .should('exist') 
                .and('be.visible')
                .and('not.have.attr', 'disabled')

                //Card de clientes - Texto Digite o nome ou o CPF do cliente para busca
            cy.get('label[for="txtBuscaClienteModal"]')
                .should('have.text', 'Digite o nome ou o CPF do cliente para busca')
                .and('exist') 
                .and('be.visible')

            //Card de clientes - Botão de cadastrar novo cliente
            cy.get('[ng-click="novoCliente()"] > .ng-binding')
                .should('exist') 
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Card de clientes - Botão comando de voz
            cy.get('[ng-click="capturarVozCliente()"] > .ng-binding')
                .should('exist') 
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Card de clientes - campo para digitar cliente
            cy.get('#txtBuscaClienteModal')
                .should('exist') 
                .and('be.visible')
                .invoke('val')
                .should('not.be.empty')

            //Card de clientes - Clicar no botão de cadastrar novo cliente
            cy.get('[ng-click="novoCliente()"] > .ng-binding')
                .click({force:true})

            //Tela de Cadastro de Cliente - botão CLIENTE - validar se realmente redirecionou para lá
            cy.get('.md-default')
                .should('exist') 
                .and('be.visible')
                .and('not.have.attr', 'disabled')

        })
    })
})