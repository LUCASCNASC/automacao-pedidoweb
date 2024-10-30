//Validando produto com saldo indisponível
export function semSaldodisponivel (selector) {
    
    //Validando imagem
    cy.get('.resultado-imagem')
        .should('exist')
        .and('be.visible')

    //Validando "Saldo indisponivel"
    cy.get('.label')
        .should('exist')
        .and('be.visible')
        .and('have.text','Saldo indisponivel')
        .invoke('css', 'background-color') // Obtém a cor do elemento
        .should('equal', 'rgb(217, 83, 79)')

    //Validando nome do produto dentro card
    cy.get('.md-resultado-titulo')
        .should('exist')
        .and('be.visible')

    //Validado código do produto dentro do card
    cy.get('.badge-saldo.ng-binding')
        .should('exist')
        .and('be.visible')

    //Validando R$ dentro do card
    cy.get('sup')
        .should('exist')
        .and('be.visible')
        .and('have.text','R$')

    //Validando valor do produto dentro do card
    cy.get('.valor-busca')
        .should('exist')
        .and('be.visible')

    //Validando check box dentro do card
    cy.get('.expandeIcone')
        .should('exist')
        .and('be.visible')
}

//validando que botão ADICIONAR produto não exist
export function botaoAdicionarNotExist (selector) {

     //Botão adicionar produto após selecionar voltagem do produto
     cy.get('button.md-primary.btn-rounded')
        .should('not.exist')
}