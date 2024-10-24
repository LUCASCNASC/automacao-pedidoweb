//Função criada para clicar no campo transportadora e escolher a trasportadora
export function escolherTransportadora (selector) {
    //Campo Transportadora - clicar para abrir as opções
    cy.get('input[name="transportadora"]')
        .click({force:true})

    cy.wait(300)

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

    cy.wait(400)

    //Clicar para avançar para a tela de GERAR PARCELAS
    cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
        .click({force:true})
}

//Função para escolher cliente CPF para gerar pedido de venda
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

//Função para validar card de Pedido Concluído
export function pedidoGerado (selector) {

    //Card pedido gravado com sucesso - Título Pedido Concluído
    cy.get('.md-toolbar-tools h2.flex')
        .should('exist')
        .and('be.visible')
        .and('contain','Pedido Concluído')

    //Card pedido gravado com sucesso - X para sair da aba
    cy.get('.md-content-overflow > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')

    //Card pedido gravado com sucesso - ícone check
    cy.get('.icon.success.animate')
        .should('exist')
        .find('.line.tip.animateSuccessTip')
        .should('exist')

    //Card pedido gravado com sucesso - Pedido gerado
    cy.get('.padding-10 > .layout-wrap > .flex-sm-50 > :nth-child(1)')
        .should('exist')
        .and('be.visible')
        .and('contain','Pedido gerado:')
        
    //Card pedido gravado com sucesso - Pedido gravado com sucesso
    cy.get('[ng-show="!editarPedido"]')
        .should('exist')
        .and('be.visible')
        .and('contain','Pedido gravado com sucesso!')

    //Card pedido gravado com sucesso - Número do Pedido gravado com sucesso
    cy.get('#pedido-numero')
        .should('exist')
        .and('be.visible')

    //Card pedido gravado com sucesso - Botão IMPRIMIR
    cy.get('md-dialog-actions.layout-align-center-center > .md-accent')
        .should('exist')
        .and('be.visible')
        .and('contain', 'Imprimir')
        .and('not.have.attr', 'disabled')

    //Card pedido gravado com sucesso - Botão OK
    cy.get('md-dialog-actions.layout-align-center-center > .md-primary')
        .should('exist')
        .and('be.visible')
        .and('contain', 'Ok')
        .and('not.have.attr', 'disabled')
}

export function botaoFinalizarPedido (selector) {

    //Botão FINALIZAR PEDIDO
    cy.get('button.md-primary.btn-rounded.md-raised.btn-block.md-default-theme.md-ink-ripple[type="button"][ng-click="confirmarPedido()"]')
        .scrollIntoView()
        .wait(200)
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .should('have.text', 'Finalizar pedido')

    //Clicar para finalizar pedido
    cy.get('button[ng-click="confirmarPedido()"]')
        .click({force:true})
}

export function finalizandoPedido (selector) {

    //Card pedido concluído (carregando finalização do pedido) - Título Pedido Concluído
    cy.get('.md-toolbar-tools h2.flex')
        .should('exist')
        .and('be.visible')
        .and('contain','Pedido Concluído')

    //Card pedido concluído (carregando finalização do pedido) - X para sair da aba
    cy.get('.md-content-overflow > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')

    //Card pedido concluído (carregando finalização do pedido) - girando carregar
    cy.get('.layout-column > .md-accent')
        .should('exist')
        .and('exist')

    //Card pedido concluído (carregando finalização do pedido) - Mensagem Finalizando pedido...
    cy.get('.layout-column > h4')
        .should('exist')
        .and('be.visible')
        .and('have.text','Finalizando pedido...')

    //Card pedido concluído (carregando finalização do pedido) - ATENÇÃO
    cy.get('.layout-column > p > span')
        .should('exist')
        .and('be.visible')
        .and('have.text','ATENÇÃO:')
        .and('have.css', 'color', 'rgb(204, 0, 0)')

    //Card pedido concluído (carregando finalização do pedido) -  Não atualize a página ...
    cy.get('.layout-column > p')
        .should('exist')
        .and('be.visible')
        .and('contain','Não atualize a página enquanto o pedido estiver sendo finalizado.')
        .and('have.css', 'color', 'rgb(204, 0, 0)')

}

//Botão adicionar produto após selecionar voltagem do produto
export function botãoAdicionar (selector) {

    //Botão adicionar produto após selecionar voltagem do produto
    cy.get('button.md-primary.btn-rounded')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain','Adicionar')

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

}

//Arrastar botão de Retirada / Entrega
export function tirarEntrega (selector) {

    //Botão como um todo
    cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-container > .md-bar')
        .scrollIntoView()
        .wait(200)
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //Botão Retirada / Entrega parte esquerda
    cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-container')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //Botão Retirada / Entrega parte direita
    cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-container > .md-thumb-container > .md-thumb')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', ' Retirada / Entrega ')
        .click({force:true})
}

//Arrastar botão de Montagem
export function tirarMontagem (selector) {

    //Botão como um todo
    cy.get('.produto-nome > .valor > .md-auto-horizontal-margin > .md-container > .md-bar')
        .scrollIntoView()
        .wait(200)
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //Botão Montagem parte direita
    cy.get('.produto-nome > .valor > .md-auto-horizontal-margin > .md-container > .md-thumb-container > .md-thumb')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //Botão Montagem - texto Montagem
    cy.get('.produto-nome > .valor > .md-auto-horizontal-margin > .md-label')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', ' Montagem ')
        .click({force:true})
}

//Botão AVANÇAR, da tela antes de finalizar o pedido
export function avancarFinal (selector) {

    // //Validando botão avançar
    // cy.get('button[type="button"][ng-click="avancarParaEtapa4()"]')

    //Botão "AVANÇAR"
    cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain','Avançar')

    //Botão "AVANÇAR" - clicar
    cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
        .click({force:true})
}

//Botão "GERAR PARCELAS"
export function botaoGerarParcelas (selector) {

    //Botão "GERAR PARCELAS" - validações
    cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', 'Gerar parcelas')

    //Botão "GERAR PARCELAS" - clicar
    cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
        .click({force:true})
}

//Para escolher processo de venda 9860 normal
export function processoVendaPrincipal (selector) {

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

    //selecionar processo de venda "9860"
    cy.get('#select_option_60 > .md-text')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click({force:true})
}

//Para escolher processo de venda entrega futura 9862 normal
export function processoEntregaFutura (selector) {

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

    //selecionar processo de venda "9862"
    cy.get('#select_option_62 > .md-text')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click({force:true})
}

//Para escolher processo de venda financeiro baixa 9863 normal
export function processoFinanceiroBaixa (selector) {

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

    //selecionar processo de venda "9863"
    cy.get('#select_option_63 > .md-text')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click({force:true})
}

//Escolher primeiro produto normal - 1860 0 0
export function produtoNormalPrimeiro (selector) {

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
        .type('1860')
        .wait(100)
        .should('have.value', '1860')
}

//Escolher segundo produto normal - 1870 0 0
export function produtoNormalSegundo (selector) {

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
        .type('1870')
        .wait(100)
        .should('have.value', '1870')
}