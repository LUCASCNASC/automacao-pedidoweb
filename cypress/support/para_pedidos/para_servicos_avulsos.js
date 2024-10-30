//Para escolher processo de venda 9861 - serviços avulsos
export function processoVendaServicoAvulso (selector) {

    //clicar para aparecer as opções de processo
    cy.get('#select_value_label_4 > .md-select-icon')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()

    //rolar para o meio das opções de processo
    cy.get('#select_listbox_12')
        .should('exist')
        .and('be.visible')
        .scrollTo('center')

    //selecionar processo de venda "9861"
    cy.get('#select_option_61 > .md-text')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click({force:true})
}

//Função para escolher cliente CPF para gerar pedido de venda - pesquisa por cliente
export function escolherClientePedido (selector) {

    //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
    cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
        .wait(500)
        .type('48976249089 {downArrow}')

    cy.wait(200)

    //clicar na lupa de pesquisa de clientes
    cy.get('.md-block > .ng-binding')
        .should('exist')
        .and('be.visible')
        .click()

    cy.wait(1500)

    //após a pesquisa encontrar o cliente, vamos selecionar ele
    cy.get('.md-3-line > div.md-button > .md-no-style')
        .should('exist')
        .and('be.visible')
        .click()
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

//Validando opção Pedidos Pendentes, do menu de opções
export function clicarPedidosPendentesMenu (selector) {

    //ícone Pedidos pendentes 
    cy.get('md-icon[md-svg-src="images/icons/pedido.svg"]')
        .scrollIntoView()
        .should('exist')

    //Opção Pedidos pendentes no menu de opções
    cy.get('a[aria-label="Pedidos pendentes"]')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')

    //Opção Pedidos pendentes no menu de opções
    cy.get('a[aria-label="Pedidos pendentes"]')
        .should('have.attr', 'aria-label', 'Pedidos pendentes')

    //clicar no ícone Pedidos pendentes 
    cy.get('a[aria-label="Pedidos pendentes"]')
        .click({force:true})
}

//Validando e inserindo número do pedido no campo Cliente ou pedido
export function pesquisarPedidoNumero (selector) {

    //Campo Cliente ou pedido - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="input_96"]')
        .should('have.text', 'Cliente ou pedido')     

    //Campo Cliente ou pedido
    cy.get('#input_96')
        .should('exist')
        .and('be.visible')
        .and('have.value','')
        .type(nomeClienteCPF, {force: true})
}