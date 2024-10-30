
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

//Validando opção Ínicio, do menu de opções
export function inicioOpcaoMenu (selector) {

    //ícone Início 
    cy.get('md-icon[md-svg-src="images/icons/home.svg"]')
        .scrollIntoView()
        .should('exist')

    //Opção Início no menu de opções
    cy.get('a[aria-label="Início"]')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')

    //Opção Início no menu de opções
    cy.get('a[aria-label="Início"]')
        .should('have.attr', 'aria-label', 'Início')
}

//Validando opção Departamentos, do menu de opções
export function departamentoOpcaoMenu (selector) {

    //ícone Departamentos 
    cy.get('md-icon[md-svg-src="images/icons/departamentos.svg"]')
        .scrollIntoView()
        .should('exist')

    //Opção Departamentos no menu de opções
    cy.get('a[aria-label="Departamentos"]')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')

    //Opção Departamentos no menu de opções
    cy.get('a[aria-label="Departamentos"]')
        .should('have.attr', 'aria-label', 'Departamentos')
}

//Validando opção Serviços, do menu de opções
export function servicosOpcaoMenu (selector) {

    //ícone Serviços 
    cy.get('md-icon[md-svg-src="images/icons/services.svg"]')
        .scrollIntoView()
        .should('exist')

    //Opção Serviços no menu de opções
    cy.get('a[aria-label="Serviços"]')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')

    //Opção Serviços no menu de opções
    cy.get('a[aria-label="Serviços"]')
        .should('have.attr', 'aria-label', 'Serviços')
}

//Validando opção Pedidos Pendentes, do menu de opções
export function pedidosPendentesOpcaoMenu (selector) {

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
}

//Validando opção Cliente, do menu de opções
export function clienteOpcaoMenu (selector) {

    //ícone Cliente
    cy.get('md-icon[md-svg-src="images/icons/cliente.svg"]')
        .scrollIntoView()
        .should('exist')

    //Opção Cliente no menu de opções
    cy.get('a[aria-label="Cliente"]')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')

    //Opção Cliente no menu de opções
    cy.get('a[aria-label="Cliente"]')
        .should('have.attr', 'aria-label', 'Cliente')
}

//Validando opção Cliente Completo, do menu de opções
export function clienteCompletoOpcaoMenu (selector) {

    //ícone Cliente completo
    cy.get('md-icon[md-svg-src="images/icons/cliente_completo.svg"]')
        .scrollIntoView()
        .should('exist')

    //Opção Cliente completo no menu de opções
    cy.get('a[aria-label="Cliente completo"]')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')

    //Opção Cliente completo no menu de opções
    cy.get('a[aria-label="Cliente completo"]')
        .should('have.attr', 'aria-label', 'Cliente completo')
}

//Validando opção Pós Venda, do menu de opções
export function posVendaOpcaoMenu (selector) {

    //ícone Pós-venda 
    cy.get('md-icon[md-svg-src="images/icons/pos-venda.svg"]')
        .scrollIntoView()
        .should('exist')

    //Opção Pós-venda no menu de opções
    cy.get('a[aria-label="Pós-venda"]')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')

    //Opção Pós-venda no menu de opções
    cy.get('a[aria-label="Pós-venda"]')
        .should('have.attr', 'aria-label', 'Pós-venda')
}

//Validando opção Intenção de compra, do menu de opções
export function intencaoCompraOpcaoMenu (selector) {

    //ícone Intenção de compra 
    cy.get('md-icon[md-svg-src="images/icons/intencao.svg"]')
        .scrollIntoView()
        .should('exist')

    //Opção Intenção de compra no menu de opções
    cy.get('button[aria-label="Intenção de compra"]')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')

    //Opção Intenção de compra no menu de opções
    cy.get('button[aria-label="Intenção de compra"]')
        .should('have.attr', 'aria-label', 'Intenção de compra')
}

//Validando opção Propósta de crédito, do menu de opções
export function propostaCreditoOpcaoMenu (selector) {

    //ícone Proposta de crédito 
    cy.get('md-icon[md-svg-src="images/icons/aprovacao_credito.svg"]')
        .scrollIntoView()
        .should('exist')

    //Opção Proposta de crédito no menu de opções
    cy.get('a[aria-label="Proposta de crédito"]')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')

    //Opção Proposta de crédito no menu de opções
    cy.get('a[aria-label="Proposta de crédito"]')
        .should('have.attr', 'aria-label', 'Proposta de crédito')
}

//Validando opção Configurações, do menu de opções
export function configuracoesOpcaoMenu (selector) {

    //ícone Configurações
    cy.get('md-icon[md-svg-src="images/icons/settings.svg"]')
        .scrollIntoView()
        .should('exist')

    //Opção Configurações no menu de opções
    cy.get('a[aria-label="Configurações"]')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')

    //Opção Configurações no menu de opções
    cy.get('a[aria-label="Configurações"]')
        .should('have.attr', 'aria-label', 'Configurações')
}

//Validando opção Minha performance, do menu de opções
export function minhaPerformanceOpcaoMenu (selector) {

    //ícone Minha performance
    cy.get('md-icon[md-svg-src="images/icons/performance.svg"]')
        .scrollIntoView()
        .should('exist')

    //Opção Minha performance no menu de opções
    cy.get('a[aria-label="Minha performance"]')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')

    //Opção Minha performance no menu de opções
    cy.get('a[aria-label="Minha performance"]')
        .should('have.attr', 'aria-label', 'Minha performance')
}