//Função para validar título da página (criada por conta da variação entre Sabium Mobile e SBX Mobile)
export function titulopagina(selector, expectedText) {
    cy.title()
        .should('eq', 'SBX Mobile') //Validando título da página
}

//Função criada para não ficar repetindo validação de "Aguarde carregando..."
export function msgaguardecarregando(selector, expectedText) {
    cy.get('.carregando')
            .should('contain','Aguarde carregando...') //Validar mensagem de carregamento após escolher processo de venda
            .and('exist') //Validando se a mensagem existe
            .and('be.visible')//Validando se a mensagem está visível
}

//Função para validar o botão PDF, que baixa o PDF
export function detalhevenda(selector) {
    //Botão para visualizar em PDF
    cy.get('.iconeBuscaDetalheVenda')
        .scrollIntoView() // Garante que o elemento esteja visível na viewport
        .should('exist') //Validando a existencia do elemento
        .and('be.visible') //Validando se o elemento está visível
        .and('not.have.attr', 'disabled') //Validando se o botão está habilitado
}

//Função criada para clicar no botão detalher venda, que baixa o PDF
export function detalhevendaclicar(selector) {
    //Botão para visualizar em PDF
    cy.get('.iconeBuscaDetalheVenda')
        .click() //Clicar para baixar arquivo em PDF
}

export function saldodisponivel (selector) {
    //Validando informações do produto após pesquisar
    cy.get('.md-list-item-text > .ng-scope')
    .should('exist') //Validando existencia do "Saldo disponível"
    .and('be.visible') //Validando se elemento "Saldo disponível" está visível
    .and('have.text','Saldo disponivel') //Verificando texto
    .invoke('css', 'color') // Obtém a cor do elemento
    .should('equal', 'rgb(255, 255, 255)'); // Verifica a cor (RGB)
}