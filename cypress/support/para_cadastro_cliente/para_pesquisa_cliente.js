//validando mensagem "Aguarde carregando..."
export function mensagemAguardeCarregando (selector) {

    //Mensagem de "Aguarde carregando..."
    cy.get('.md-dialog-fullscreen > .carregando')
        .should('exist') 
        .and('be.visible')
        .and('have.text', ' Aguarde carregando...')
}

//clicando na lupa pesquisa de cliente
export function clicarLupaPesquisaCliente (selector) {

    //clicar na lupa de pesquisa de clientes
    cy.get('.md-block > .ng-binding')
        .should('exist') 
        .and('be.visible')
        .click({force:true})
}

//validando botão X do card cliente
export function botaoXCardCliente (selector) {

    //Card de clientes - Botão X
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('exist') 
        .and('be.visible')
        .and('not.have.attr', 'disabled')
}

//validando título card clientes 
export function tituloCardClientes (selector) {

    //Card inteiro de Clientes
    cy.get('.md-dialog-fullscreen')
    .should('exist') 
    .and('be.visible')

    //Card de clientes - Título Clientes
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'Clientes')
}

//validando ard de clientes - Texto Digite o nome ou o CPF do cliente para busca
export function textoInformativoClienteBusca (selector) {

    //Card de clientes - Texto Digite o nome ou o CPF do cliente para busca
    cy.get('label[for="txtBuscaClienteModal"]')
        .should('have.text', 'Digite o nome ou o CPF do cliente para busca')
        .and('exist') 
        .and('be.visible')
}

//validando Card de clientes - Botão de cadastrar novo cliente
export function botaoCadastrarNovoCliente (selector) {

    //Card de clientes - Botão de cadastrar novo cliente
    cy.get('[ng-click="novoCliente()"] > .ng-binding')
        .should('exist') 
        .and('be.visible')
        .and('not.have.attr', 'disabled')
}

//validando Card de clientes - Botão comando de voz
export function botaoComandoVoz (selector) {

    //Card de clientes - Botão comando de voz
    cy.get('[ng-click="capturarVozCliente()"] > .ng-binding')
        .should('exist') 
        .and('be.visible')
        .and('not.have.attr', 'disabled')
}

//validando Card de clientes - campo para digitar cliente
export function campoDigitarCliente (selector) {

    //Card de clientes - campo para digitar cliente
    cy.get('#txtBuscaClienteModal')
        .should('exist') 
        .and('be.visible')
        .invoke('val')
        .should('not.be.empty')
}

//validando numero e descrição do cliente CPF selecionado
export function numeroDescricaoCPFpesquisado (selector) {

    //Número CPF do cliente selecionado
    cy.get('#lblCpfClienteSelecionado')
        .should('exist') 
        .and('be.visible')

    //Descrição CPF do cliente selecionado
    cy.get('#lblNomeClienteSelecionado')
        .should('exist') 
        .and('be.visible')
}

//validando numero e descrição do cliente CNPJ selecionado
export function numeroDescricaoCNPJpesquisado (selector) {

    //Número CNPJ do cliente selecionado
    cy.get('#lblCpfClienteSelecionado')
        .should('exist') 
        .and('be.visible')

    //Descrição CNPJ do cliente selecionado
    cy.get('#lblNomeClienteSelecionado')
        .should('exist') 
        .and('be.visible')
}

//clicando cliente CPF pesquisado
export function clicarCPFPesquisado (selector) {

    //Card de clientes - Conteúdo que a pesquisa trouxe
    cy.get('button[aria-label="CPF AUTOMACAO SABIUM - LUCAS CAMARGO 117.415.410-18   - MARINGA/PR"]')
        .should('exist') 
        .and('be.visible')
        .and('not.have.attr', 'disabled')

    //Card de clientes - clicar no botão de conteúdo que a pesquisa trouxe
    cy.get('button[aria-label="CPF AUTOMACAO SABIUM - LUCAS CAMARGO 117.415.410-18   - MARINGA/PR"]')
        .click()
}

//clicando cliente CNPJ pesquisado
export function clicarCNPJPesquisado (selector) {

    //Card de clientes - Conteúdo que a pesquisa trouxe
    cy.get('button[aria-label="CNPJ AUTOMACAO SABIUM - LUCAS CAMARGO 24.468.163/0001-61   - MARINGA/PR"]')
        .should('exist') 
        .and('be.visible')
        .and('not.have.attr', 'disabled')

    //Card de clientes - clicar no botão de conteúdo que a pesquisa trouxe
    cy.get('button[aria-label="CNPJ AUTOMACAO SABIUM - LUCAS CAMARGO 24.468.163/0001-61   - MARINGA/PR"]')
        .click()
}