//Escolher primeiro produto normal - 1860 0 0
export function produtoNormalPrimeiro (selector) {

    const primeiro_produto_normal = '1860'

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('exist')
        .and('be.visible')
        .and('have.value', '')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(primeiro_produto_normal)
        .wait(100)
        .should('have.value', primeiro_produto_normal)
}

//Escolher segundo produto normal - 1870 0 0
export function produtoNormalSegundo (selector) {

    const segundo_produto_normal = '1870'

    //Limpando campo com o produto anterior
    cy.get('#searchText')
        .clear()
        .wait(100)
        .should('have.value', '')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('exist')
        .and('be.visible')
        .and('have.value', '')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(segundo_produto_normal)
        .wait(100)
        .should('have.value', segundo_produto_normal)
}

//Escolher primeiro produto normal - 1862 0 0
export function produtoKitPrimeiro (selector) {

    const primeiro_kit_normal = '1862'

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('exist')
        .and('be.visible')
        .and('have.value', '')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(primeiro_kit_normal)
        .wait(100)
        .should('have.value', primeiro_kit_normal)
}

//Escolher primeiro produto com promoção partida - 1868 0 0
export function produtoPromoPartida (selector) {

    const produto_promocao_partida = '1868'

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('exist')
        .and('be.visible')
        .and('have.value', '')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_promocao_partida)
        .wait(100)
        .should('have.value', produto_promocao_partida)
}

//Escolher primeiro produto com promoção a prazo com entrada - 1866 0 0
export function produtoPromoPrazoEntrada (selector) {

    const produto_promocao_prazo_entrada = '1866'

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('exist')
        .and('be.visible')
        .and('have.value', '')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_promocao_prazo_entrada)
        .wait(100)
        .should('have.value', produto_promocao_prazo_entrada)
}

//Escolher primeiro produto com promoção a prazo parcelado - 1867 0 0
export function produtoPromoPrazoParcelado (selector) {

    const produto_promocao_prazo_parcelado = '1867'

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('exist')
        .and('be.visible')
        .and('have.value', '')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_promocao_prazo_parcelado)
        .wait(100)
        .should('have.value', produto_promocao_prazo_parcelado)
}
