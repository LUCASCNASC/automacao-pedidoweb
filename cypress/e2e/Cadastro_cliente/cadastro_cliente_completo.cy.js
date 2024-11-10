//Importando funções 
import { titulopagina } from '../../support/para_todos';
import { iconeMenuOpcoes, opcaoClienteCompleto, preecherDataNascimento, selecionarSexoCliente, preencherNomeCompleto, preencherNomeCNPJ,
         clicarSalvarCliente, clicarAbaEndereco, preencherCPFcliente, preencherCNPJcliente, messEnderecoIncluidoSucesso, preencherNomeFantasiaCNPJ } from '../../support/para_cadastro_cliente/para_cliente_completo';
import gerarCpf from '../../support/gerarCPF';
import gerarCNPJ from '../../support/gerarCNPJ';



const CEPcadastro = "87065300"


describe('Cadastrar cliente completo', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login(); 
        titulopagina()//Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
    })

    context('Cadastro de cliente completo', () => {

        //REVISAR DATA NASCIMENTO - NÃO ESTÁ FUNCIONANDO
        it('Cliente completo CPF', () => {

            iconeMenuOpcoes()

            opcaoClienteCompleto()

            preencherCPFcliente()

            preencherNomeCompleto()

            preecherDataNascimento()

            selecionarSexoCliente()

            clicarSalvarCliente()

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

            clicarAbaEndereco()

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

            //Campo Tipo de Endereço - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtTpEndereco"]')
                .should('have.text', 'Tipo de Endereço') 

            //Validando campo vazio - Tipo de Endereço
            cy.get('#txtTpEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            cy.wait(200)

            //Selecionar tipo de endereço
            cy.get('#select_option_229')
                .click({force:true})

            //Campo CEP - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtCepEndereco"]')
                .should('have.text', 'CEP') 

            //Validando campo vazio - CEP
            cy.get('#txtCepEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Campo Endereço - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtRuaEndereco"]')
                .should('have.text', 'Endereço') 

            //Validando campo vazio - Endereço
            cy.get('#txtRuaEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Campo Número - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtNumEndereco"]')
                .should('have.text', 'Número') 

            //Validando campo vazio - Número
            cy.get('#txtNumEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Campo Complemento - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtComplEndereco"]')
                .should('have.text', 'Complemento') 

            //Validando campo vazio - Complemento
            cy.get('#txtComplEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Campo Bairro - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtBairroEndereco"]')
                .should('have.text', 'Bairro') 

            //Validando campo vazio - Bairro
            cy.get('#txtBairroEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Campo Caixa Postal - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtCxPostEndereco"]')
                .should('have.text', 'Caixa Postal') 

            //Validando campo vazio - Caixa Postal
            cy.get('#txtCxPostEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Campo Estado - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtUfEndereco"]')
                .should('have.text', 'Estado')

            //Validando campo vazio - Estado
            cy.get('#txtUfEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Campo Cidade - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtCidEndereco"]')
                .should('have.text', 'Cidade')

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
            cy.get('.md-text.ng-binding')
                .contains('Padrão')
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
                
            cy.wait(300)

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

            //Campo Tipo de endereço - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtTpEnderecoRota"]')
                .should('have.text', 'Tipo de endereço')

            //Card Rotas - Campo Tipo de endereço
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
            cy.get('.md-text.ng-binding')
                .contains('Padrão')
                .click({force:true})

            //Campo Rota - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtRota"]')
                .should('have.text', 'Rota')

            //Inserindo Rota 
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

            //Campo Tipo de telefone - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtTpTel"]')
                .should('have.text', 'Tipo de telefone')

            //Card Telefone - campo tipo de telefone
            cy.get('#txtTpTel')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Campo Número - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtNumTel"]')
                .should('have.text', 'Número')

            //Card Telefone - campo número
            cy.get('#txtNumTel')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Campo Ramal - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtRamalTel"]')
                .should('have.text', 'Ramal')

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
            cy.get('.md-text.ng-binding')
                .contains('Padrão')
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

            cy.wait(1000)

            messEnderecoIncluidoSucesso()
                
            clicarSalvarCliente()

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

        //REVISAR DATA NASCIMENTO - NÃO ESTÁ FUNCIONANDO
        it('Cliente completo CPF - mensagem de campos obrigatórios', () => {
    
            iconeMenuOpcoes()

            opcaoClienteCompleto()

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

            preencherCPFcliente()

            preencherNomeCompleto()

            preecherDataNascimento()

            selecionarSexoCliente()

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

            clicarAbaEndereco()

            cy.wait(5000)

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

            //Campo Tipo de Endereço - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtTpEndereco"]')
                .should('have.text', 'Tipo de Endereço') 

            //Validando campo vazio - Tipo de Endereço
            cy.get('#txtTpEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            cy.wait(200)

            //Selecionar tipo de endereço
            cy.get('.md-text.ng-binding')
                .contains('Padrão')
                .click({force:true})

            //Campo CEP - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtCepEndereco"]')
                .should('have.text', 'CEP')

            //Validando campo vazio - CEP
            cy.get('#txtCepEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Campo Endereço - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtRuaEndereco"]')
                .should('have.text', 'Endereço') 

            //Validando campo vazio - Endereço
            cy.get('#txtRuaEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Campo Número - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtNumEndereco"]')
                .should('have.text', 'Número') 

            //Validando campo vazio - Número
            cy.get('#txtNumEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Campo Complemento - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtComplEndereco"]')
                .should('have.text', 'Complemento') 

            //Validando campo vazio - Complemento
            cy.get('#txtComplEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Campo Bairro - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtBairroEndereco"]')
                .should('have.text', 'Bairro')

            //Validando campo vazio - Bairro
            cy.get('#txtBairroEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Campo Caixa Postal - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtCxPostEndereco"]')
                .should('have.text', 'Caixa Postal')

            //Validando campo vazio - Caixa Postal
            cy.get('#txtCxPostEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Campo Estado - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtUfEndereco"]')
                .should('have.text', 'Estado')

            //Validando campo vazio - Estado
            cy.get('#txtUfEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Campo Cidade - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtCidEndereco"]')
                .should('have.text', 'Cidade')

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
            cy.get('.md-text.ng-binding')
                .contains('Padrão')
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

            //Campo Tipo de endereço - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtTpEnderecoRota"]')
                .should('have.text', 'Tipo de endereço')
            
            //Card Rotas - Campo tipo de endereço
            cy.get('#txtTpEnderecoRota')
                .should('exist')
                .and('be.visible')
                .and('have.value','')

            //Campo Rota - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtRota"]')
                .should('have.text', 'Rota')

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
            cy.get('.md-text.ng-binding')
                .contains('Padrão')
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

            //Campo Tipo de telefone - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtTpTel"]')
                .should('have.text', 'Tipo de telefone')

            //Card Telefone - campo tipo de telefone
            cy.get('#txtTpTel')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Campo Número - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtNumTel"]')
                .should('have.text', 'Número')

            //Card Telefone - campo número
            cy.get('#txtNumTel')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Campo Ramal - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtRamalTel"]')
                .should('have.text', 'Ramal')

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
            cy.get('.md-text.ng-binding')
                .contains('Padrão')
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

            cy.wait(2000)

            messEnderecoIncluidoSucesso()
                
            clicarSalvarCliente()

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
    
            iconeMenuOpcoes()

            opcaoClienteCompleto()

            preencherCNPJcliente()

            preencherNomeCNPJ()

            preencherNomeFantasiaCNPJ()

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

            clicarAbaEndereco()

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
                
            //Campo Tipo de Endereço - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtTpEndereco"]')
                .should('have.text', 'Tipo de Endereço') 
            
            //Validando campo vazio - Tipo de Endereço
            cy.get('#txtTpEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            cy.wait(200)

            //Selecionar tipo de endereço
            cy.get('#select_option_229')
                .click({force:true})

            //Campo CEP - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtCepEndereco"]')
                .should('have.text', 'CEP') 

            //Validando campo vazio - CEP
            cy.get('#txtCepEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Campo Endereço - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtRuaEndereco"]')
                .should('have.text', 'Endereço') 

            //Validando campo vazio - Endereço
            cy.get('#txtRuaEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Campo Número - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtNumEndereco"]')
                .should('have.text', 'Número') 

            //Validando campo vazio - Número
            cy.get('#txtNumEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Campo Complemento - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtComplEndereco"]')
                .should('have.text', 'Complemento') 

            //Validando campo vazio - Complemento
            cy.get('#txtComplEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Campo Bairro - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtBairroEndereco"]')
                .should('have.text', 'Bairro') 

            //Validando campo vazio - Bairro
            cy.get('#txtBairroEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Campo Caixa Postal - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtCxPostEndereco"]')
                .should('have.text', 'Caixa Postal')

            //Validando campo vazio - Caixa Postal
            cy.get('#txtCxPostEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Campo Estado - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtUfEndereco"]')
                .should('have.text', 'Estado')

            //Validando campo vazio - Estado
            cy.get('#txtUfEndereco')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Campo Cidade - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtCidEndereco"]')
                .should('have.text', 'Cidade')

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
            cy.get('.md-text.ng-binding')
                .contains('Padrão')
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

            //Campo Tipo de endereço - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtTpEnderecoRota"]')
                .should('have.text', 'Tipo de endereço')

            //Card Rotas - Campo tipo de endereço
            cy.get('#txtTpEnderecoRota')
                .should('exist')
                .and('be.visible')
                .and('have.value','')

            //Campo Rota - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtRota"]')
                .should('have.text', 'Rota')

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
            cy.get('.md-text.ng-binding')
                .contains('Padrão')
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

            //Campo Tipo de telefone - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtTpTel"]')
                .should('have.text', 'Tipo de telefone')

            //Card Telefone - campo tipo de telefone
            cy.get('#txtTpTel')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Campo Número - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtNumTel"]')
                .should('have.text', 'Número')

            //Card Telefone - campo número
            cy.get('#txtNumTel')
                .should('exist')
                .and('be.visible')
                .and('have.value', '')

            //Campo Ramal - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtRamalTel"]')
                .should('have.text', 'Ramal')

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
            cy.get('.md-text.ng-binding')
                .contains('Padrão')
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

            cy.wait(2000)

            messEnderecoIncluidoSucesso()
                
            clicarSalvarCliente()

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