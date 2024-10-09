//Importando funções 
import { titulopagina } from '../../support/uiUtils';
import gerarCpf from '../../support/gerarCPF';
import gerarCNPJ from '../../support/gerarCNPJ';

const cpf = gerarCpf(); // Gera um CPF válido
const cnpj = gerarCNPJ();
const CEPcadastro = "87065300"
const nomeClienteCPF = "Novo cadastro cliente CPF"
const nomeClienteCNPJ = "Novo cadastro cliente CNPJ"


describe('Cadastrar cliente completo', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
    })

    context('Cadastro de cliente completo', () => {

        it('Cliente completo CPF', () => {

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
                .type(nomeClienteCPF, { force: true })

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

            //Campo Tipo de sexo
            cy.get('#txtSexo')
                .should('exist')
                .and('be.visible')
                //.and('have.value','')

            //Clicar no campo Tipo de sexo
            cy.get('#txtSexo')
                .click({force:true})

            //Clicar na opção MASCULINO
            cy.get('#select_option_128')
                .click({force:true})

            //Tentar clicar em SALVAR, não deve deixar, pois ainda não tem endereço
            cy.get('.btn > .ng-scope')
                .click()

            cy.wait(500)
            
            //Card Um endereço do tipo padrão é obrigatório
            cy.get('.toast')
                .should('exist')
                .and('be.visible')

            //Card Um endereço do tipo padrão é obrigatório - Alerta
            cy.get('.toast-title')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Alerta')

            //Card Um endereço do tipo padrão é obrigatório - Um endereço do tipo padrão é obrigatório.
            cy.get('.toast-message')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Um endereço do tipo padrão é obrigatório.')

            //Aba Endereço
            cy.get('#menu_items_pri > :nth-child(2)')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Endereço')

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

            //Tentar adicionar endereço sem passar as informações necessárias - não deve deixar
            cy.get('#btnModalAddEndereco')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'not.disabled')

            //Validando campo vazio - Tipo de Endereço
            cy.get('#txtTpEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            cy.wait(200)

            //Selecionar tipo de endereço
            cy.get('#select_option_229')
                .click({force:true})

            //Validando campo vazio - CEP
            cy.get('#txtCepEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Validando campo vazio - Endereço
            cy.get('#txtRuaEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Validando campo vazio - Número
            cy.get('#txtNumEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Validando campo vazio - Complemento
            cy.get('#txtComplEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Validando campo vazio - Bairro
            cy.get('#txtBairroEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Validando campo vazio - Caixa Postal
            cy.get('#txtCxPostEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Validando campo vazio - Estado
            cy.get('#txtUfEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Validando campo vazio - Cidade
            cy.get('#txtCidEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Validando botão SALVAR, antes de preencher os campos obrigatórios
            cy.get('#btnModalAddEndereco')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'not.disabled')
                //.and('have.text', 'Salvar') - aparecendo como undefined

            cy.wait(200)
            
            //Clicar para aparecer as opções do Tipo de Endereço
            cy.get('#txtTpEndereco')
                .click({force:true})

            cy.wait(300)
            
            //Selecionar Tipo de Endereço Padrão
            cy.get('#select_option_201 > .md-text')
                .click({force:true})

            //Preenchendo campo CEP
            cy.get('#txtCepEndereco')
                .type(CEPcadastro, {force:true})

            //Lupa de pesquisa de CEP
            cy.get('.md-icon-float > .ng-binding')
                .should('exist')
                .and('be.visible')

            //Clicar na lupa de pesquisa de CEP
            cy.get('.md-icon-float > .ng-binding')
                .click({force:true})

            //Preenchendo campo Número
            cy.get('#txtNumEndereco')
                .type('66')

            ///Validando botão SALVAR, antes de preencher os campos obrigatórios
            cy.get('#btnModalAddEndereco')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')
                //.and('have.text', 'Salvar') - aparecendo como undefined

            //Clicar no botão SALVAR, para adicionar endereço
            cy.get('#btnModalAddEndereco')
                .click()

            cy.wait(200)

            //Card de endereço adicionado
            cy.get('.md-whiteframe-2dp')
                .should('exist')
                .and('be.visible')
                .and('contain', 'Padrão')
                .and('contain', 'RUA PETÚNIA - 66 - PARQUE INDUSTRIAL')
                .and('contain', '87065-300')

            //Card Endereço incluído com sucesso.
            cy.get('.toast-success')
                .should('exist')
                .and('be.visible')

            //Card Endereço incluído com sucesso. - Aviso
            cy.get('.toast-success > .toast-title')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Aviso')

            //Card Endereço incluído com sucesso. - Endereço incluído com sucesso.
            cy.get('.toast-success > .toast-message')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Endereço incluído com sucesso.')

            //Validando aba Rota
            cy.get('#menu_items_pri > :nth-child(3)')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Rotas')

            //Clicar na aba Rota
            cy.get('#menu_items_pri > :nth-child(3)')
                .click()

            //Botão +, para adicionar Rota
            cy.get('.layout-align-end-end > .md-fab')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Botão +, para adicionar Rota
            cy.get('.layout-align-end-end > .md-fab')
                .click()

            //Card Rotas - título Rotas
            cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Rotas')

            //Card Rotas - botão X
            cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Card Rotas - Campo tipo de endereço
            cy.get('#txtTpEnderecoRota')
                .should('exist')
                .and('be.visible')
                .and('have.value','')

            //Card Rotas - Campo Rota
            cy.get('#txtRota')
                .should('exist')
                .and('be.visible')
                .and('have.value','')

            //Card Rotas - Lupa de rota
            cy.get('.layout-gt-sm-column > .md-block > .ng-binding')
                .should('exist')
                .and('be.visible')

            //Clicar no campo tipo de endereço
            cy.get('#txtTpEnderecoRota')
                .click({force:true})

            //Clicar no tipo de endereço Padrão
            cy.get('#select_option_2313')
                .click({force:true})

            //Inserindo rota 
            cy.get('#txtRota')
                .type('1')

            cy.wait(200)

            //Clicando na lupa de rota
            cy.get('.layout-gt-sm-column > .md-block > .ng-binding')
                .click({force:true})

            cy.wait(200)

            //Clicando na rota maringá - segunda rota
            cy.get('v-pane-header.ng-scope > div')
                .click({force:true})

            cy.wait(200)

            //Clicando rota centro - terceira rota
            cy.get(':nth-child(4) > .padding-10-0')
                .click({force:true})
            
            //Card Endereço incluído com sucesso.
            cy.get('#toast-container > :nth-child(1)')
                .should('exist')
                .and('be.visible')

            //Card Endereço incluído com sucesso. - Aviso
            cy.get(':nth-child(1) > .toast-title')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Aviso')

            //Card Endereço incluído com sucesso. - Endereço incluído com sucesso.
            cy.get(':nth-child(1) > .toast-message')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Rota incluída com sucesso.')

            //Card de endereço adicionado
            cy.get('.md-whiteframe-2dp')
                .should('exist')
                .and('be.visible')
                .and('contain', 'Grupo: 5')
                .and('contain', 'Rota: 1')
                .and('contain', 'Cidade: 1')
                .and('contain', 'Tipo endereço: 1')

            //Validando aba Telefones
            cy.get('#menu_items_pri > :nth-child(4)')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Telefones')

            //Clicar na aba Telefones
            cy.get('#menu_items_pri > :nth-child(4)')
                .click()

            //Botão +, para adicionar Rota
            cy.get('.layout-align-end-end > .md-fab')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Botão +, para adicionar Rota
            cy.get('.layout-align-end-end > .md-fab')
                .click()

            //Card Telefone
            cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Telefone')

            //Card Telefone - botão X
            cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Card Telefone - campo tipo de telefone
            cy.get('#txtTpTel')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Card Telefone - campo número
            cy.get('#txtNumTel')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Card Telefone - campo ramal
            cy.get('#txtRamalTel')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Card Telefone - botão SALVAR
            cy.get('#btnModalAddTel')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'not.disabled')

            //Card Telefone - campo tipo de telefone
            cy.get('#txtTpTel')
                .click({force:true})
                
            //Card Telefone - escolher tipo de endereço
            cy.get('#select_option_2327')
                .click({force:true})

            //Card Telefone - preencher campo número
            cy.get('#txtNumTel')
                .type('4495787847')

            //Card Telefone - preencher campo ramal
            cy.get('#txtRamalTel')
                .type('435')

            //Card Telefone - botão SALVAR - depois de preencher os campo obrigatório
            cy.get('#btnModalAddTel')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Card Telefone - clicar botão SALVAR - depois de preencher os campo obrigatório
            cy.get('#btnModalAddTel')
                .click({force:true})

            //Card de endereço adicionado
            cy.get('.md-whiteframe-2dp')
                .should('exist')
                .and('be.visible')
                .and('contain', 'Padrão')
                .and('contain', '(44) 9578-7847')
                .and('contain', '435')

            cy.wait(8000)

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
                
            //Botão SALVAR
            cy.get('.btn')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')
                //.and('have.text', 'Salvar')
                
            //Clicar no botão SALVAR
            cy.get('.btn')
                .click()

            cy.wait(2000)

            //Card Aguarde carregando...
            cy.get('.layout-align-center-center > h3')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Aguarde carregando...')

            //Card Registro salvo com sucesso!
            cy.get('.toast-success')
                .should('exist')
                .and('be.visible')

            //Card Registro salvo com sucesso! - Aviso
            cy.get(':nth-child(1) > .toast-title')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Aviso')

            //Card Registro salvo com sucesso! - Registro salvo com sucesso!
            cy.get('.toast-success > .toast-message')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Registro salvo com sucesso!')
        })  

        it('Cliente completo CPF - mensagem de campos obrigatórios', () => {

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

            //Clicar em salvar, antes de preencher o campo CPF, não deve deixar salvar
            cy.get('.btn')
                .click({force:true})

            //Card Um endereço do tipo padrão é obrigatório - Alerta
            cy.get('.toast-title')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Alerta')

            //Card Um endereço do tipo padrão é obrigatório - Um endereço do tipo padrão é obrigatório.
            cy.get('.toast-message')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Um endereço do tipo padrão é obrigatório.')

            //Aba Endereço
            cy.get('#menu_items_pri > :nth-child(2)')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Endereço')

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
                .type(nomeClienteCPF, { force: true })

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

            //Campo Tipo de sexo
            cy.get('#txtSexo')
                .should('exist')
                .and('be.visible')
                //.and('have.value','')

            //Clicar no campo Tipo de sexo
            cy.get('#txtSexo')
                .click({force:true})

            //Clicar na opção MASCULINO
            cy.get('#select_option_128')
                .click({force:true})

            cy.wait(500)
            
            //Card Um endereço do tipo padrão é obrigatório
            cy.get('.toast')
                .should('exist')
                .and('be.visible')

            //Card Um endereço do tipo padrão é obrigatório - Alerta
            cy.get('.toast-title')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Alerta')

            //Card Um endereço do tipo padrão é obrigatório - Um endereço do tipo padrão é obrigatório.
            cy.get('.toast-message')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Um endereço do tipo padrão é obrigatório.')

            //Aba Endereço
            cy.get('#menu_items_pri > :nth-child(2)')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Endereço')

            //Clicar na aba Endereço
            cy.get('#menu_items_pri > :nth-child(2)')
                .scrollIntoView()
                .click({force:true})

            cy.wait(6000)

            //Clicar em salvar, antes de preencher o campo CPF, não deve deixar salvar
            cy.get('.btn')
                .click({force:true})

            //Card Um endereço do tipo padrão é obrigatório
            cy.get('.toast')
                .should('exist')
                .and('be.visible')

            //Card Um endereço do tipo padrão é obrigatório - Alerta
            cy.get('.toast-title')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Alerta')

            //Card Um endereço do tipo padrão é obrigatório - Um endereço do tipo padrão é obrigatório.
            cy.get('.toast-message')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Um endereço do tipo padrão é obrigatório.')

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

            //Tentar adicionar endereço sem passar as informações necessárias - não deve deixar
            cy.get('#btnModalAddEndereco')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'not.disabled')

            //Validando campo vazio - Tipo de Endereço
            cy.get('#txtTpEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            cy.wait(200)

            //Selecionar tipo de endereço
            cy.get('#select_option_229')
                .click({force:true})

            //Validando campo vazio - CEP
            cy.get('#txtCepEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Validando campo vazio - Endereço
            cy.get('#txtRuaEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Validando campo vazio - Número
            cy.get('#txtNumEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Validando campo vazio - Complemento
            cy.get('#txtComplEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Validando campo vazio - Bairro
            cy.get('#txtBairroEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Validando campo vazio - Caixa Postal
            cy.get('#txtCxPostEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Validando campo vazio - Estado
            cy.get('#txtUfEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Validando campo vazio - Cidade
            cy.get('#txtCidEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Validando botão SALVAR, antes de preencher os campos obrigatórios
            cy.get('#btnModalAddEndereco')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'not.disabled')
                //.and('have.text', 'Salvar') - aparecendo como undefined

            cy.wait(200)
            
            //Clicar para aparecer as opções do Tipo de Endereço
            cy.get('#txtTpEndereco')
                .click({force:true})

            cy.wait(300)
            
            //Selecionar Tipo de Endereço Padrão
            cy.get('#select_option_201 > .md-text')
                .click({force:true})

            //Preenchendo campo CEP
            cy.get('#txtCepEndereco')
                .type(CEPcadastro, {force:true})

            //Lupa de pesquisa de CEP
            cy.get('.md-icon-float > .ng-binding')
                .should('exist')
                .and('be.visible')

            //Clicar na lupa de pesquisa de CEP
            cy.get('.md-icon-float > .ng-binding')
                .click({force:true})

            //Preenchendo campo Número
            cy.get('#txtNumEndereco')
                .type('66')

            ///Validando botão SALVAR, antes de preencher os campos obrigatórios
            cy.get('#btnModalAddEndereco')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')
                //.and('have.text', 'Salvar') - aparecendo como undefined

            //Clicar no botão SALVAR, para adicionar endereço
            cy.get('#btnModalAddEndereco')
                .click()

            cy.wait(200)

            //Card de endereço adicionado
            cy.get('.md-whiteframe-2dp')
                .should('exist')
                .and('be.visible')
                .and('contain', 'Padrão')
                .and('contain', 'RUA PETÚNIA - 66 - PARQUE INDUSTRIAL')
                .and('contain', '87065-300')

            //Card Endereço incluído com sucesso.
            cy.get('.toast-success')
                .should('exist')
                .and('be.visible')

            //Card Endereço incluído com sucesso. - Aviso
            cy.get('.toast-success > .toast-title')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Aviso')

            //Card Endereço incluído com sucesso. - Endereço incluído com sucesso.
            cy.get('.toast-success > .toast-message')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Endereço incluído com sucesso.')

            //Validando aba Rota
            cy.get('#menu_items_pri > :nth-child(3)')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Rotas')

            //Clicar na aba Rota
            cy.get('#menu_items_pri > :nth-child(3)')
                .click()

            //Botão +, para adicionar Rota
            cy.get('.layout-align-end-end > .md-fab')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Botão +, para adicionar Rota
            cy.get('.layout-align-end-end > .md-fab')
                .click()

            //Card Rotas - título Rotas
            cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Rotas')

            //Card Rotas - botão X
            cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Card Rotas - Campo tipo de endereço
            cy.get('#txtTpEnderecoRota')
                .should('exist')
                .and('be.visible')
                .and('have.value','')

            //Card Rotas - Campo Rota
            cy.get('#txtRota')
                .should('exist')
                .and('be.visible')
                .and('have.value','')

            //Card Rotas - Lupa de rota
            cy.get('.layout-gt-sm-column > .md-block > .ng-binding')
                .should('exist')
                .and('be.visible')

            //Clicar no campo tipo de endereço
            cy.get('#txtTpEnderecoRota')
                .click({force:true})

            //Clicar no tipo de endereço Padrão
            cy.get('#select_option_2313')
                .click({force:true})

            //Inserindo rota 
            cy.get('#txtRota')
                .type('1')

            cy.wait(200)

            //Clicando na lupa de rota
            cy.get('.layout-gt-sm-column > .md-block > .ng-binding')
                .click({force:true})

            cy.wait(200)

            //Clicando na rota maringá - segunda rota
            cy.get('v-pane-header.ng-scope > div')
                .click({force:true})

            cy.wait(200)

            //Clicando rota centro - terceira rota
            cy.get(':nth-child(4) > .padding-10-0')
                .click({force:true})
            
            //Card Endereço incluído com sucesso.
            cy.get('#toast-container > :nth-child(1)')
                .should('exist')
                .and('be.visible')

            //Card Endereço incluído com sucesso. - Aviso
            cy.get(':nth-child(1) > .toast-title')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Aviso')

            //Card Endereço incluído com sucesso. - Endereço incluído com sucesso.
            cy.get(':nth-child(1) > .toast-message')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Rota incluída com sucesso.')

            //Card de endereço adicionado
            cy.get('.md-whiteframe-2dp')
                .should('exist')
                .and('be.visible')
                .and('contain', 'Grupo: 5')
                .and('contain', 'Rota: 1')
                .and('contain', 'Cidade: 1')
                .and('contain', 'Tipo endereço: 1')

            //Validando aba Telefones
            cy.get('#menu_items_pri > :nth-child(4)')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Telefones')

            //Clicar na aba Telefones
            cy.get('#menu_items_pri > :nth-child(4)')
                .click()

            //Botão +, para adicionar Rota
            cy.get('.layout-align-end-end > .md-fab')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Botão +, para adicionar Rota
            cy.get('.layout-align-end-end > .md-fab')
                .click()

            //Card Telefone
            cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Telefone')

            //Card Telefone - botão X
            cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Card Telefone - campo tipo de telefone
            cy.get('#txtTpTel')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Card Telefone - campo número
            cy.get('#txtNumTel')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Card Telefone - campo ramal
            cy.get('#txtRamalTel')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Card Telefone - botão SALVAR
            cy.get('#btnModalAddTel')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'not.disabled')

            //Card Telefone - campo tipo de telefone
            cy.get('#txtTpTel')
                .click({force:true})
                
            //Card Telefone - escolher tipo de endereço
            cy.get('#select_option_2327')
                .click({force:true})

            //Card Telefone - preencher campo número
            cy.get('#txtNumTel')
                .type('4495787847')

            //Card Telefone - preencher campo ramal
            cy.get('#txtRamalTel')
                .type('435')

            //Card Telefone - botão SALVAR - depois de preencher os campo obrigatório
            cy.get('#btnModalAddTel')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Card Telefone - clicar botão SALVAR - depois de preencher os campo obrigatório
            cy.get('#btnModalAddTel')
                .click({force:true})

            //Card de endereço adicionado
            cy.get('.md-whiteframe-2dp')
                .should('exist')
                .and('be.visible')
                .and('contain', 'Padrão')
                .and('contain', '(44) 9578-7847')
                .and('contain', '435')

            cy.wait(8000)

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
                
            //Botão SALVAR
            cy.get('.btn')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')
                //.and('have.text', 'Salvar')
                
            //Clicar no botão SALVAR
            cy.get('.btn')
                .click()

            cy.wait(2000)

            //Card Aguarde carregando...
            cy.get('.layout-align-center-center > h3')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Aguarde carregando...')

            //Card Registro salvo com sucesso!
            cy.get('.toast-success')
                .should('exist')
                .and('be.visible')

            //Card Registro salvo com sucesso! - Aviso
            cy.get(':nth-child(1) > .toast-title')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Aviso')

            //Card Registro salvo com sucesso! - Registro salvo com sucesso!
            cy.get('.toast-success > .toast-message')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Registro salvo com sucesso!')
        })  

        it('Cliente completo CNPJ', () => {

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

            //Campo CNPJ
            cy.get('#txtCpfCnpj')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type(cnpj, { force: true })

            //Campo Nome Completo
            cy.get('#txtRazaoSocial')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type(nomeClienteCNPJ, { force: true })

            cy.get('#txtNomeFantasia')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type(nomeClienteCNPJ, { force: true })

            //Tentar clicar em SALVAR, não deve deixar, pois ainda não tem endereço
            cy.get('.btn > .ng-scope')
                .click()

            cy.wait(400)
            
            //Card Um endereço do tipo padrão é obrigatório
            cy.get('.toast')
                .should('exist')
                .and('be.visible')

            //Card Um endereço do tipo padrão é obrigatório - Alerta
            cy.get('.toast-title')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Alerta')

            //Card Um endereço do tipo padrão é obrigatório - Um endereço do tipo padrão é obrigatório.
            cy.get('.toast-message')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Um endereço do tipo padrão é obrigatório.')

            //Aba Endereço
            cy.get('#menu_items_pri > :nth-child(2)')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Endereço')

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

            //Tentar adicionar endereço sem passar as informações necessárias - não deve deixar
            cy.get('#btnModalAddEndereco')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'not.disabled')

            //Validando campo vazio - Tipo de Endereço
            cy.get('#txtTpEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            cy.wait(200)

            //Selecionar tipo de endereço
            cy.get('#select_option_229')
                .click({force:true})

            //Validando campo vazio - CEP
            cy.get('#txtCepEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Validando campo vazio - Endereço
            cy.get('#txtRuaEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Validando campo vazio - Número
            cy.get('#txtNumEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Validando campo vazio - Complemento
            cy.get('#txtComplEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Validando campo vazio - Bairro
            cy.get('#txtBairroEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Validando campo vazio - Caixa Postal
            cy.get('#txtCxPostEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Validando campo vazio - Estado
            cy.get('#txtUfEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Validando campo vazio - Cidade
            cy.get('#txtCidEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Validando botão SALVAR, antes de preencher os campos obrigatórios
            cy.get('#btnModalAddEndereco')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'not.disabled')
                //.and('have.text', 'Salvar') - aparecendo como undefined

            cy.wait(200)
            
            //Clicar para aparecer as opções do Tipo de Endereço
            cy.get('#txtTpEndereco')
                .click({force:true})

            cy.wait(300)
            
            //Selecionar Tipo de Endereço Padrão
            cy.get('#select_option_218 > .md-text')
                .click({force:true})

            //Preenchendo campo CEP
            cy.get('#txtCepEndereco')
                .type(CEPcadastro, {force:true})

            //Lupa de pesquisa de CEP
            cy.get('.md-icon-float > .ng-binding')
                .should('exist')
                .and('be.visible')

            //Clicar na lupa de pesquisa de CEP
            cy.get('.md-icon-float > .ng-binding')
                .click({force:true})

            //Preenchendo campo Número
            cy.get('#txtNumEndereco')
                .type('66')

            ///Validando botão SALVAR, antes de preencher os campos obrigatórios
            cy.get('#btnModalAddEndereco')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')
                //.and('have.text', 'Salvar') - aparecendo como undefined

            //Clicar no botão SALVAR, para adicionar endereço
            cy.get('#btnModalAddEndereco')
                .click()

            cy.wait(200)

            //Card de endereço adicionado
            cy.get('.md-whiteframe-2dp')
                .should('exist')
                .and('be.visible')
                .and('contain', 'Padrão')
                .and('contain', 'RUA PETÚNIA - 66 - PARQUE INDUSTRIAL')
                .and('contain', '87065-300')

            //Card Endereço incluído com sucesso.
            cy.get('.toast-success')
                .should('exist')
                .and('be.visible')

            //Card Endereço incluído com sucesso. - Aviso
            cy.get('.toast-success > .toast-title')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Aviso')

            //Card Endereço incluído com sucesso. - Endereço incluído com sucesso.
            cy.get('.toast-success > .toast-message')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Endereço incluído com sucesso.')

            //Validando aba Rota
            cy.get('#menu_items_pri > :nth-child(3)')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Rotas')

            //Clicar na aba Rota
            cy.get('#menu_items_pri > :nth-child(3)')
                .click()

            //Botão +, para adicionar Rota
            cy.get('.layout-align-end-end > .md-fab')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Botão +, para adicionar Rota
            cy.get('.layout-align-end-end > .md-fab')
                .click()

            //Card Rotas - título Rotas
            cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Rotas')

            //Card Rotas - botão X
            cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Card Rotas - Campo tipo de endereço
            cy.get('#txtTpEnderecoRota')
                .should('exist')
                .and('be.visible')
                .and('have.value','')

            //Card Rotas - Campo Rota
            cy.get('#txtRota')
                .should('exist')
                .and('be.visible')
                .and('have.value','')

            //Card Rotas - Lupa de rota
            cy.get('.layout-gt-sm-column > .md-block > .ng-binding')
                .should('exist')
                .and('be.visible')

            //Clicar no campo tipo de endereço
            cy.get('#txtTpEnderecoRota')
                .click({force:true})

            //Clicar no tipo de endereço Padrão
            cy.get('#select_option_1545 > .md-text')
                .click({force:true})

            //Inserindo rota 
            cy.get('#txtRota')
                .type('1')

            cy.wait(200)

            //Clicando na lupa de rota
            cy.get('.layout-gt-sm-column > .md-block > .ng-binding')
                .click({force:true})

            cy.wait(200)

            //Clicando na rota maringá - segunda rota
            cy.get('v-pane-header.ng-scope > div')
                .click({force:true})

            cy.wait(200)

            //Clicando rota centro - terceira rota
            cy.get(':nth-child(4) > .padding-10-0')
                .click({force:true})
            
            //Card Endereço incluído com sucesso.
            cy.get('#toast-container > :nth-child(1)')
                .should('exist')
                .and('be.visible')

            //Card Endereço incluído com sucesso. - Aviso
            cy.get(':nth-child(1) > .toast-title')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Aviso')

            //Card Endereço incluído com sucesso. - Endereço incluído com sucesso.
            cy.get(':nth-child(1) > .toast-message')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Rota incluída com sucesso.')

            //Card de endereço adicionado
            cy.get('.md-whiteframe-2dp')
                .should('exist')
                .and('be.visible')
                .and('contain', 'Grupo: 5')
                .and('contain', 'Rota: 1')
                .and('contain', 'Cidade: 1')
                .and('contain', 'Tipo endereço: 1')

            //Validando aba Telefones
            cy.get('#menu_items_pri > :nth-child(4)')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Telefones')

            //Clicar na aba Telefones
            cy.get('#menu_items_pri > :nth-child(4)')
                .click()

            //Botão +, para adicionar Rota
            cy.get('.layout-align-end-end > .md-fab')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Botão +, para adicionar Rota
            cy.get('.layout-align-end-end > .md-fab')
                .click()

            //Card Telefone
            cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Telefone')

            //Card Telefone - botão X
            cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Card Telefone - campo tipo de telefone
            cy.get('#txtTpTel')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Card Telefone - campo número
            cy.get('#txtNumTel')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Card Telefone - campo ramal
            cy.get('#txtRamalTel')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Card Telefone - botão SALVAR
            cy.get('#btnModalAddTel')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'not.disabled')

            //Card Telefone - campo tipo de telefone
            cy.get('#txtTpTel')
                .click({force:true})
                
            //Card Telefone - escolher tipo de endereço
            cy.get('#select_option_1559 > .md-text')
                .click({force:true})

            //Card Telefone - preencher campo número
            cy.get('#txtNumTel')
                .type('4495787847')

            //Card Telefone - preencher campo ramal
            cy.get('#txtRamalTel')
                .type('435')

            //Card Telefone - botão SALVAR - depois de preencher os campo obrigatório
            cy.get('#btnModalAddTel')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Card Telefone - clicar botão SALVAR - depois de preencher os campo obrigatório
            cy.get('#btnModalAddTel')
                .click({force:true})

            //Card de endereço adicionado
            cy.get('.md-whiteframe-2dp')
                .should('exist')
                .and('be.visible')
                .and('contain', 'Padrão')
                .and('contain', '(44) 9578-7847')
                .and('contain', '435')

            cy.wait(8000)

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
                
            //Botão SALVAR
            cy.get('.btn')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')
                //.and('have.text', 'Salvar')
                
            //Clicar no botão SALVAR
            cy.get('.btn')
                .click()

            cy.wait(2000)

            //Card Aguarde carregando...
            cy.get('.layout-align-center-center > h3')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Aguarde carregando...')

            //Card Registro salvo com sucesso!
            cy.get('.toast-success')
                .should('exist')
                .and('be.visible')

            //Card Registro salvo com sucesso! - Aviso
            cy.get(':nth-child(1) > .toast-title')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Aviso')

            //Card Registro salvo com sucesso! - Registro salvo com sucesso!
            cy.get('.toast-success > .toast-message')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Registro salvo com sucesso!')
        }) 
    })
})