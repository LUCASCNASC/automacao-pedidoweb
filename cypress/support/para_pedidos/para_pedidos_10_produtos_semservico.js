// produto
export function produtoPrincipal (selector) {

    const produto_principal = '1907'

    //Limpando campo com o produto anterior
    cy.get('#searchText')
        .clear()
        .wait(400)
        .should('have.value', '')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_principal)
        .wait(100)
        .should('have.value', produto_principal)
}

//Clicar para selecionar o produto que queremos adicionar ao pedido - sem validações
export function escolherProdutoPesquisa (selector) {

    //Clicar para adicionar no carrinho
    cy.get('.md-list-item-text')
        .click({force:true})

}

//Botão adicionar produto após selecionar voltagem do produto
export function botãoAdicionarProduto (selector) {

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})
}

//Clicar para selecionar a voltagem 1907 1 1
export function clicarVoltagem1 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > [style=""] > div.md-button > .md-no-style')
        .click({force:true})
}

//Clicar para selecionar a voltagem 1907 2 2
export function clicarVoltagem2 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(3) > div.md-button > .md-no-style')
        .click({force:true})
}

//Clicar para selecionar a voltagem 1907 3 3
export function clicarVoltagem3 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
}

//Clicar para selecionar a voltagem 1907 4 4
export function clicarVoltagem4 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(5) > div.md-button > .md-no-style')
        .click({force:true})
}

//Clicar para selecionar a voltagem 1907 5 5
export function clicarVoltagem5 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(6) > div.md-button > .md-no-style')
        .click({force:true})
}

//Clicar para selecionar a voltagem 1907 6 6
export function clicarVoltagem6 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(7) > div.md-button > .md-no-style')
        .click({force:true})
}

//Clicar para selecionar a voltagem 1907 7 7
export function clicarVoltagem7 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(8) > div.md-button > .md-no-style')
        .click({force:true})
}

//Clicar para selecionar a voltagem 1907 8 8
export function clicarVoltagem8 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(9) > div.md-button > .md-no-style')
        .click({force:true})
}

//Clicar para selecionar a voltagem 1907 9 9
export function clicarVoltagem9 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(10) > div.md-button > .md-no-style')
        .click({force:true})
}

//Clicar para selecionar a voltagem 1907 10 10
export function clicarVoltagem10 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(11) > div.md-button > .md-no-style')
        .click({force:true})
}

//Clicar para selecionar a voltagem 1907 11 11
export function clicarVoltagem11 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(12) > div.md-button > .md-no-style')
        .click({force:true})
}

//Clicar para selecionar a voltagem 1907 12 12
export function clicarVoltagem12 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(13) > div.md-button > .md-no-style')
        .click({force:true})
}

//Clicar para selecionar a voltagem 1907 13 13
export function clicarVoltagem13 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(14) > div.md-button > .md-no-style')
        .click({force:true})
}

//Clicar para selecionar a voltagem 1907 14 14
export function clicarVoltagem14 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(15) > div.md-button > .md-no-style')
        .click({force:true})
}

//Clicar para selecionar a voltagem 1907 15 15
export function clicarVoltagem15 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(16) > div.md-button > .md-no-style')
        .click({force:true})
}

//Clicar para selecionar a voltagem 1907 16 16
export function clicarVoltagem16 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(17) > div.md-button > .md-no-style')
        .click({force:true})
}

//Clicar para selecionar a voltagem 1907 17 17
export function clicarVoltagem17 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(18) > div.md-button > .md-no-style')
        .click({force:true})
}

//Clicar para selecionar a voltagem 1907 18 18
export function clicarVoltagem18 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(19) > div.md-button > .md-no-style')
        .click({force:true})
}

//Clicar para selecionar a voltagem 1907 19 19
export function clicarVoltagem19 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(20) > div.md-button > .md-no-style')
        .click({force:true})
}

//Arrastar botão de Retirada / Entrega do terceiro produto
export function tirarEntregaTerceiro (selector) {

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(4) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .should('have.text', ' Retirada / Entrega ')
        .click({force:true})
}

//Arrastar botão de Retirada / Entrega do quarto produto
export function tirarEntregaQuarto (selector) {

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(5) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .should('have.text', ' Retirada / Entrega ')
        .click({force:true})
}

//Arrastar botão de Retirada / Entrega do quinto produto
export function tirarEntregaQuinto (selector) {

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(6) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .should('have.text', ' Retirada / Entrega ')
        .click({force:true})
}

//Arrastar botão de Retirada / Entrega do sexto produto
export function tirarEntregaSexto (selector) {
    
    cy.wait(1000)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(7) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .should('have.text', ' Retirada / Entrega ')
        .click({force:true})
}

//Arrastar botão de Retirada / Entrega do sétimo produto
export function tirarEntregaSetimo (selector) {

    cy.wait(1000)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(8) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .should('have.text', ' Retirada / Entrega ')
        .click({force:true})
}

//Arrastar botão de Retirada / Entrega do oitavo produto
export function tirarEntregaOitavo (selector) {

    cy.wait(1000)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(9) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .should('have.text', ' Retirada / Entrega ')
        .click({force:true})
}

//Arrastar botão de Retirada / Entrega do nono produto
export function tirarEntregaNono (selector) {

    cy.wait(1000)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(10) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .should('have.text', ' Retirada / Entrega ')
        .click({force:true})
}

//Arrastar botão de Retirada / Entrega do décimo produto
export function tirarEntregaDecimo (selector) {

    cy.wait(1000)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(11) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .should('have.text', ' Retirada / Entrega ')
        .click({force:true})
}

//Arrastar botão de Retirada / Entrega do onze produto
export function tirarEntregaOnze (selector) {

    cy.wait(1000)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(12) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .should('have.text', ' Retirada / Entrega ')
        .click({force:true})
}

//Arrastar botão de Retirada / Entrega do doze produto
export function tirarEntregaDoze (selector) {

    cy.wait(1000)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(13) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .should('have.text', ' Retirada / Entrega ')
        .click({force:true})
}

