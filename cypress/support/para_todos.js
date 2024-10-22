//Função para validar título da página (criada por conta da variação entre Sabium Mobile e SBX Mobile)
export function titulopagina(selector, expectedText) {
    cy.title()
        .should('eq', 'Sabium Mobile') //Validando título da página
}

export function saldodisponivel (selector) {
    //Validando informações do produto após pesquisar
    cy.get('.md-list-item-text > .ng-scope')
        .contains('Saldo disponivel')
        .should('exist') //Validando existencia do "Saldo disponível"
        .and('be.visible') //Validando se elemento "Saldo disponível" está visível
        .and('have.text','Saldo disponivel') //Verificando texto
        .invoke('css', 'color') // Obtém a cor do elemento
        .should('equal', 'rgb(255, 255, 255)'); // Verifica a cor (RGB)
}

