//Função criada para clicar no campo transportadora e escolher a trasportadora
export function escolherTransportadora (selector) {
    //Campo Transportadora - clicar para abrir as opções
    cy.get('input[name="transportadora"]')
        .click({force:true})

    cy.wait(500)

    //Selecionar a transportadora que queremos
    cy.get('span[md-highlight-text]')
        .contains('1')
        .click({force:true})
}

//Escolher rota completa, rota maringá
export function escolherRota (selector) {
    //Lupa de pesquisa de rota - clicar para pesquisar
    cy.get('.rota-frete > .md-icon-right > .ng-binding')
        .scrollIntoView()
        .click()

    cy.wait(400)

    //Pesquisar rota
    cy.get('#txtBuscaRotaModal')
        .type('1')

    //Clicar na lupa para pesquisar rota depois de preencher campo
    cy.get('md-icon[ng-click="pesquisar()"]')
        .click()

    cy.wait(400)

    //Escolher rota após pesquisarmos
    cy.get('v-pane-header.ng-scope > div')
        .click() //clicar na rota 1

    //Escolher rota 2
    cy.get(':nth-child(4) > .padding-10-0')
        .click() //clicar na rota 1

    cy.wait(800)

    //Clicar para avançar para a tela de GERAR PARCELAS
    cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
        .click({force:true})
}

//Função para escolher cliente CPF para gerar pedido de venda
export function escolherClientePedido (selector) {

    //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
    cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
        .wait(1300)
        .type('48976249089 {downArrow}') //Inserindo CPF no campo "INFORME O CLIENTE"

    cy.wait(800)

    //clicar na lupa de pesquisa de clientes
    cy.get('.md-block > .ng-binding')
        .should('exist') //Validando se a lupa existe
        .and('be.visible')//Validando se a lupa está visível
        .click()

    cy.wait(2000)

    //após a pesquisa encontrar o cliente, vamos selecionar ele
    cy.get('.md-3-line > div.md-button > .md-no-style')
        .should('exist') //Validando se o cliente existe
        .and('be.visible')//Validando se o cliente está visível
        .click()
}