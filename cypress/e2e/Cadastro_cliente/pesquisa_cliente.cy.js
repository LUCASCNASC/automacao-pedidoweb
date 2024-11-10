import { titulopagina } from '../../support/para_todos';

const numeroCPF = "117.415.410-18"
const numeroCNPJ = "24468163000161"
const descricaoCPF = "CPF AUTOMAÇÃO SABIUM - LUCAS CAMARGO"
const descricaoCNPJ = "CNPJ AUTOMAÇÃO SABIUM - LUCAS CAMARGO"
describe('Cadastrar cliente', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        titulopagina() //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
    })

    context('Pesquisa cliente por número', () => {

        it('Pesquisa por número CPF', () => {
    
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

            //Card de clientes - campo para digitar cliente
            cy.get('#txtBuscaClienteModal')
                .clear()
                .wait(100)
                .should('have.value','')
                .wait(100)
                .type(numeroCPF)

            //Card de clientes - Conteúdo que a pesquisa trouxe
            cy.get('button[aria-label="CPF AUTOMACAO SABIUM - LUCAS CAMARGO 117.415.410-18   - MARINGA/PR"]')
                .should('exist') 
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Card de clientes - clicar no botão de conteúdo que a pesquisa trouxe
            cy.get('button[aria-label="CPF AUTOMACAO SABIUM - LUCAS CAMARGO 117.415.410-18   - MARINGA/PR"]')
                .click()

            //Mensagem de "Aguarde carregando..."
            cy.get('.md-dialog-fullscreen > .carregando')
                .should('exist') 
                .and('be.visible')
                .and('have.text', ' Aguarde carregando...')

            cy.wait(2500)

            //Número CPF do cliente selecionado
            cy.get('#lblCpfClienteSelecionado')
                .should('exist') 
                .and('be.visible')

            //Descrição CPF do cliente selecionado
            cy.get('#lblNomeClienteSelecionado')
                .should('exist') 
                .and('be.visible')
        }) 

        it('Pesquisa por número CNPJ', () => {
    
            //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
            cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
                .wait(800)
                .type(numeroCNPJ,'{downArrow}')

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

            //Card de clientes - Texto Digite o nome ou o CNPJ do cliente para busca
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

            //Card de clientes - campo para digitar cliente
            cy.get('#txtBuscaClienteModal')
                .clear()
                .wait(100)
                .should('have.value','')
                .wait(100)
                .type(numeroCNPJ)

            //Card de clientes - Conteúdo que a pesquisa trouxe
            cy.get('button[aria-label="CNPJ AUTOMACAO SABIUM - LUCAS CAMARGO 24.468.163/0001-61   - MARINGA/PR"]')
                .should('exist') 
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Card de clientes - clicar no botão de conteúdo que a pesquisa trouxe
            cy.get('button[aria-label="CNPJ AUTOMACAO SABIUM - LUCAS CAMARGO 24.468.163/0001-61   - MARINGA/PR"]')
                .click()

            //Mensagem de "Aguarde carregando..."
            cy.get('.md-dialog-fullscreen > .carregando')
                .should('exist') 
                .and('be.visible')
                .and('have.text', ' Aguarde carregando...')

            cy.wait(2500)

            //Número CNPJ do cliente selecionado
            cy.get('#lblCpfClienteSelecionado')
                .should('exist') 
                .and('be.visible')

            //Descrição CNPJ do cliente selecionado
            cy.get('#lblNomeClienteSelecionado')
                .should('exist') 
                .and('be.visible')
        }) 
    })

    context('Pesquisa cliente por descrição', () => {

        it('Pesquisa por descrição CPF', () => {
    
            //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
            cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
                .click()

            //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
            cy.get('#txtBuscaCliente')
                .wait(500)
                .type(descricaoCPF,'{downArrow}')

            cy.wait(800)

            //clicar na lupa de pesquisa de clientes
            cy.get('.md-block > .ng-binding')
                .should('exist') 
                //.and('be.visible')
                .click({force:true})

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

            //Card de clientes - campo para digitar cliente
            cy.get('#txtBuscaClienteModal')
                .clear()
                .wait(100)
                .should('have.value','')
                .wait(100)
                .type(descricaoCPF)

            //Card de clientes - Conteúdo que a pesquisa trouxe
            cy.get('button[aria-label="CPF AUTOMACAO SABIUM - LUCAS CAMARGO 117.415.410-18   - MARINGA/PR"]')
                .should('exist') 
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Card de clientes - clicar no botão de conteúdo que a pesquisa trouxe
            cy.get('button[aria-label="CPF AUTOMACAO SABIUM - LUCAS CAMARGO 117.415.410-18   - MARINGA/PR"]')
                .click()

            //Mensagem de "Aguarde carregando..."
            cy.get('.md-dialog-fullscreen > .carregando')
                .should('exist') 
                .and('be.visible')
                .and('have.text', ' Aguarde carregando...')

            cy.wait(2500)

            //Número CPF do cliente selecionado
            cy.get('#lblCpfClienteSelecionado')
                .should('exist') 
                .and('be.visible')

            //Descrição CPF do cliente selecionado
            cy.get('#lblNomeClienteSelecionado')
                .should('exist') 
                .and('be.visible')
        }) 

        it('Pesquisa por descrição CNPJ', () => {
    
            //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
            cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
                .click()

            //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
            cy.get('#txtBuscaCliente')
                .wait(500)
                .type(descricaoCNPJ,'{downArrow}')

            cy.wait(800)

            //clicar na lupa de pesquisa de clientes
            cy.get('.md-block > .ng-binding')
                .should('exist') 
                //.and('be.visible')
                .click({force:true})

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

            //Card de clientes - campo para digitar cliente
            cy.get('#txtBuscaClienteModal')
                .clear()
                .wait(100)
                .should('have.value','')
                .wait(100)
                .type(descricaoCNPJ)

            //Card de clientes - Conteúdo que a pesquisa trouxe
            cy.get('button[aria-label="CNPJ AUTOMACAO SABIUM - LUCAS CAMARGO 24.468.163/0001-61   - MARINGA/PR"]')
                .should('exist') 
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Card de clientes - clicar no botão de conteúdo que a pesquisa trouxe
            cy.get('button[aria-label="CNPJ AUTOMACAO SABIUM - LUCAS CAMARGO 24.468.163/0001-61   - MARINGA/PR"]')
                .click()

            //Mensagem de "Aguarde carregando..."
            cy.get('.md-dialog-fullscreen > .carregando')
                .should('exist') 
                .and('be.visible')
                .and('have.text', ' Aguarde carregando...')

            cy.wait(2500)

            //Número CPF do cliente selecionado
            cy.get('#lblCpfClienteSelecionado')
                .should('exist') 
                .and('be.visible')

            //Descrição CPF do cliente selecionado
            cy.get('#lblNomeClienteSelecionado')
                .should('exist') 
                .and('be.visible')
        }) 
    })
})