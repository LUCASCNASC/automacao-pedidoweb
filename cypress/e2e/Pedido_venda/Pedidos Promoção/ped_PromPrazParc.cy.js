describe('Gerar pedido com promoção PRAZO COM ENTRADA ', () => {

    beforeEach(() => {
        cy.visit('http://10.7.0.42:2800/');
        cy.clearAllSessionStorage();
    })
  
    it('Gerar pedido com promoção PRAZO COM ENTRADA, produto 1866 0 0 - caminho feliz', () => {

        cy.title()
            .should('eq', 'Sabium Mobile') //Validando título da página

        //Passando login do usuário
        cy.get('#txtusername')
            .type('sabium.automacao {downArrow}');

        //Passando senha do usuário
        cy.get('#txtpassword')
            .type('123.automacao {downArrow}');

        //Clicando no botão "Entrar", para logar
        cy.get('.test_btnSalvarCliente')
            .should('contain','Entrar') //Validando texto
            .click();

        cy.wait(10000);
        //clicar em "INICIAR ATENDIMENTO"
        //cy.get('.hide-sm > :nth-child(2) > .md-raised')
        //    .click()

        //cy.wait(1500)

        //clicar para aparecer as opções de processo
        cy.get('#select_value_label_4 > .md-select-icon')
            .click()

        cy.wait(1500)
        
        //rolar para o meio das opções de processo
        cy.get('#select_listbox_12')
            .scrollTo('center')

        cy.get('#select_option_9 > .md-text > em')
            .should('contain','Selecione uma opção') //Validando "Selecione uma opção", quando cou escolher um processo

        cy.wait(1500)

        //selecionar processo de venda
        cy.get('#select_option_59 > .md-text').click({force: true})
        
        cy.get('.layout-align-center-center > .carregando')
            .should('contain','Aguarde carregando...') //Validar mensagem de carregamento após escolher processo de venda

        cy.wait(1500)

        cy.get('.click-cliente > .informe-o-cliente > #lblNomeClienteSelecionado')
            .should('contain','INFORME O CLIENTE') //Validando texto dentro do campo para inserir CLIENTE

        //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
        cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
            .wait(2000)
            .type('48976249089 {downArrow}') //Inserindo CPF no campo "INFORME O CLIENTE"
        
        cy.wait(1500)
        
        //clicar na lupa de pesquisa de clientes
        cy.get('.md-block > .ng-binding')
            .click()

        cy.wait(2500)

        cy.get('#dialogContent_91 > .layout-row')
            .should('contain','Digite o nome ou o CPF do cliente para busca') //Validando mensagem do card "clientes"

        cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
            .should('contain','Clientes') //Validando título no card "Clientes"
        
        //após a pesquisa encontrar o cliente, vamos selecionar ele
        cy.get('.md-3-line > div.md-button > .md-no-style')
            .click()

        cy.wait(3000)

        //cy.get('#searchText')
        //    .should('contain','Buscar produtos') //Validando texto na busca por produtos

        //pesquisar pelo produto 1860
        cy.get('#searchText')
            .type('1860')

        cy.get('.layout-align-center-center > .carregando')
            .should('contain','Aguarde carregando...') //Validando mensagem de carregamento, após digitarmos o produto que queremos
       
        cy.wait(4000)

        cy.get('.md-list-item-text > .ng-scope')
            .should('contain','Saldo disponivel') //Validando informação "Saldo disponpivel"
            .and('have.css', 'background-color', 'rgb(92, 184, 92)') // Validando cor do "Saldo disponpivel"

        cy.get('sup')
            .should('contain','R$') //Validando texto "R$"
        
        cy.get('[ng-click="alterarOrdenacaoPorDescricao()"]')
            .should('contain','Produto') //Validando título coluna "PRODUTO", após pesquisar produto

         cy.get('[ng-click="alterarOrdenacaoPorValor()"]')
            .should('contain','Valor') //Validando título coluna "VALOR", após pesquisar produto

        //clicar para selecionar o produto; 
        cy.contains('Cod: 1860')
            .click({ force: true })

        cy.wait(2000)


        // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM


        cy.get('.flex-gt-sm-50 > .md-default')
            .should('contain','Saldo nas Filiais')  //Validando nome do botão "Saldo nas Filiais"

        cy.get('.iconeVoltar > span')
            .should('contain','Voltar') //Validando nome do botão "Voltar"

        

        //cy.get(':nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style')
        //    .should('contain','Filial') //Validando texto
        //    .and('contain','Saldo Local') //Validando texto
        //    .and('contain','Saldo Depósito') //Validando texto
        
        //Selecionar a voltagem do produto
        cy.get(':nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style')
            .click({ force: true })

        cy.get('[ng-click="openModalFilial(itemClicado.grade, false);"]')
            .should('contain','50') //Validando filial 50

        cy.get('.carregando.ng-scope')
            .should('contain','Aguarde carregando...') //Validando mensagem de carregamento, após selecionar a voltagem do produto
        
        cy.wait(1500)

        cy.get('[ng-show="(itemGradeSelecionado && itemGradeSelecionado.valor > 0)"] > :nth-child(1) > ._md > .md-toolbar-tools > h2')
            .should('contain','Opções do produto') //Validando texto "Opções do produto"

        cy.get(':nth-child(5) > .md-accent')
            .should('contain','Intenção de compra') //Validando texto botão "Intenção de compra"

        cy.get('[ng-if="(!itemGradeSelecionado.grade.composicao || itemGradeSelecionado.grade.composicao.length == 0)"] > .md-default')
            .should('contain','Saldo detalhado') //Validando texto botão "Saldo Detalhado"

        cy.get('[style="padding: 0px 5px;"] > .md-primary')
            .should('contain','Adicionar') //Validando texto botão "Adicionar"

        //clicar no botão "ADICIONAR", para adicionar produto
        cy.get('[style="padding: 0px 5px;"] > .md-primary')
            .click()

        cy.wait(4000)

        cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
            .should('contain','Serviços Vinculados') //Validando título do card "Serviços Vinculados"

        cy.get('.ng-scope.flex-100 > .layout-wrap > :nth-child(2) > h2')
            .should('contain', 'O item foi adicionado ao carrinho') //Validando mensagem "O item foi adicionado ao carrinho"

        cy.get('.ng-scope.flex-100 > .layout-wrap > :nth-child(2) > h4')
            .should('contain','Aproveite para adicionar os serviços abaixo') //Validando mensagem "Aproveite para adicionar os serviços abaixo"

        cy.get('[style=""] > [style="font-size:25px;margin:0;padding:0 0 15px 15px"]')
            .should('contain','Garantias') //Validando título "Garantias" no card "Serviços Vinculados"

        cy.get(':nth-child(2) > [style="font-size:25px;margin:0;padding:0 0 15px 15px"]')
            .should('contain','Mão de Obra') //Validando título "Mão de Obra" no card "Serviços Vinculados"

        //Desmarcar garantia - card "Serviços Vinculados"
        cy.get('#checkbox-141-2 > .md-container')
            .click()

        cy.wait(1500)

        //Desmarcar Mão de Obra - card "Serviços Vinculados"
        cy.get('#checkbox-144-2 > .md-container')
            .click()

        cy.wait(1200)

        cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
            .should('contain','Ok')  //Validando texto botão "Ok"
            .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

        cy.wait(1500)


        // Tela de ENTREGA DO PEDIDO - PRODUTOS


        cy.get('.carrinho > .layout-wrap > .md-primary')
            .should('contain','Resumo do Pedido') //Validando texto botão "Resumo do Pedido"

        cy.get('[ng-show="(carrinho.produtos.length > 0)"] > .titulo-toolbar > .md-toolbar-tools > .flex')
            .should('contain','Produtos') //Validando título "Produtos" 

        cy.get('.text-align-center')
            .should('contain','Quantidade') //Validando texto "Quantidade"

        cy.get(':nth-child(2) > .produtos_detalhes > :nth-child(1) > b')
            .should('contain','SKU:') //Validando texto "SKY:"

        cy.get(':nth-child(2) > .produtos_detalhes > :nth-child(2) > b')
            .should('contain','Grade:') //Validando texto "Grade:"

        cy.get(':nth-child(2) > .produtos_detalhes > :nth-child(3) > b')
            .should('contain','Marca:') //Validando texto "Marca:"

        cy.get(':nth-child(2) > .produtos_detalhes > :nth-child(4) > b')
            .should('contain','Local de faturamento:') //Validando texto "Local de faturamento:"

        cy.get(':nth-child(2) > .produtos_detalhes > :nth-child(5) > b')
            .should('contain','Valor unitário:') //Validando texto "Valor unitário:"

        cy.get(':nth-child(2) > .produtos_detalhes > :nth-child(6) > b')
            .should('contain','Vendedor:') //Validando texto "Vendedor:"

        cy.get(':nth-child(4) > p.ng-binding')
            .should('contain','Valor Total:') //Validando texto "Valor Total:"

        cy.get('.produto-nome')
            .should('contain','Previsão de Entrega') //Validando texto "Previsão de Entrega"
            .and('contain','Previsão de Montagem') //Validando texto "Previsão de Montagem"

        cy.get('[ng-show="true"] > .md-list-item-text > p')
            .should('contain','Total de produtos') //Validando texto "Total de produtos"

        cy.get(':nth-child(4) > .md-list-item-text > p')
            .should('contain','Total do pedido') //Validando texto "Total do pedido"

        cy.get('.ng-scope.layout-align-start-center > :nth-child(2) > .layout-align-center-center > .md-raised')
            .should('contain','ADICIONAR SERVIÇO') //Validando texto do botão "ADICIONAR SERVIÇO"

        //rolagem para baixo
        cy.get('.containerSabium')
            .scrollTo("center")

        cy.wait(1000)

        cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
            .should('contain','Retirada / Entrega') //Validar mensagem do botão
            .click() //Clicar para tirar a entrega do pedido

        cy.wait(1500)

        cy.get('[ng-show="itemAtual._permiteMontagem"] > .md-auto-horizontal-margin > .md-label')
            .should('contain','Montagem') //Validar mensagem do botão
            .click() //Clicar para tirar a montagem

        cy.wait(2000)

        cy.get('.flex-gt-sm-50 > .md-primary')
            .should('contain','Avançar') //Validar mensagem do botão
            .click() //Clicar para avançar para a próxima tela

        cy.get('h3')
            .should('contain','Adicionando produtos/serviços...') //Validando mensagem 


        // tela de GERAR PARCELAS


        cy.wait(2500)

        cy.get('.layout-wrap > .md-primary')
            .should('contain','Resumo do Pedido') //Validando texto do botão "Resumo do Pedido"

        cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
            .should('contain','Formas de pagamento na Entrada') //Validando título "Formas de pagamento na Entrada"

        cy.get('.white > :nth-child(1) > md-list.md-default-theme > .padding-0 > .md-list-item-text > p')
            .should('contain','Valor máximo da entrada') //Validando texto "Valor máximo da entrada", em Formas de pagamento na Entrada

        cy.get('.white > .layout-row.flex-100 > .layout-row')
            .should('contain','Valor da entrada') //Validando texto "Valor da entrada", em Formas de pagamento na Entrada

        cy.get('[ng-show="exibeBoxFormasPgtoParcelar()"] > .md-primary > .md-toolbar-tools > .flex')
            .should('contain','Formas de pagamento no Parcelamento') //Validando título "Formas de pagamento no Parcelamento"

        cy.get('[ng-show="carrinho.getValorParcelamento() > 0"] > .btn-rounded > .layout-wrap > :nth-child(1) > md-list.md-default-theme > .padding-0 > .md-list-item-text > p')
            .should('contain','Valor para parcelamento') //Validando texto "Valor para parcelamento", em Formas de pagamento no Parcelamento

        cy.get('[ng-show="carrinho.getValorParcelamento() > 0"] > .btn-rounded > .layout-wrap > :nth-child(1) > md-list.md-default-theme > .padding-0 > .md-secondary-container > div > .ng-binding > sup')
            .should('contain','R$') //Validando texto "R$", em Formas de pagamento no Parcelamento

        cy.get(':nth-child(2) > md-list.md-default-theme > .padding-0 > .md-list-item-text > p')
            .should('contain','Valor da maior parcela') //Validando texto "Valor da maior parcela", em Formas de pagamento no Parcelamento

        cy.get(':nth-child(2) > md-list.md-default-theme > .padding-0 > .md-secondary-container > div > .ng-binding > sup')
            .should('contain','R$') //Validando texto "R$", em Formas de pagamento no Parcelamento

        cy.get('[ng-show="carrinho.getValorParcelamento() > 0"] > .btn-rounded > .layout-wrap')
            .should('contain','Valor máximo da parcela') //Validando texto "Valor máximo da parcela", em Formas de pagamento no Parcelamento

        cy.get('.saldo')
            .should('contain','Saldo:') //Validando texto "Saldo:", em Formas de pagamento no Parcelamento
            .and('contain','R$') //Validando texto "R$", em Formas de pagamento no Parcelamento

        cy.get('.gerar-parcelas > .layout-wrap')
            .should('contain','Valor a parcelar') //Validando texto "Valor a parcelar", em Formas de pagamento no Parcelamento
            .and('contain','1º Vencimento') //Validando texto "1º Vencimento", em Formas de pagamento no Parcelamento

        cy.get(':nth-child(1) > .md-accent')
            .should('contain','Voltar') //Validando texto do botão "VOLTAR"

        cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
            .should('contain','Gerar parcelas') //Validando texto do botão "GERAR PARCELAS"
            .click() //Clicar no botão "GERAR PARCELAS", para gerar as parcelas

        cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
            .should('contain','Forma de pagamento') //Validando título "Forma de pagamento"

        cy.get('.carregando')
            .should('contain','Aguarde carregando...') //Validando mensagem de carregamento "Aguarde carregando..." 

        cy.wait(2000)

        cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
            .should('contain','Forma de pagamento') //Validando título do card "Forma de pagamento"

        cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
            .click() //Clicar na forma de pagamento que eu escolher

        cy.wait(2000)

        cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
            .click() //Clicando na quantidade de parcelas que quero utilizar

        cy.get(':nth-child(3) > .ng-binding > b')
            .should('contain','1º Vencimento:') //Validando texto "1º Vencimento:"

        cy.get(':nth-child(5) > .ng-binding > b')
            .should('contain','Valor sem juros:') //Validando texto "Valor sem juros:"

        cy.get(':nth-child(6) > .ng-binding > b')
            .should('contain','Valor da Parcela:') //Validando texto "Valor da Parcela:"

        cy.get(':nth-child(7) > .ng-binding > b')
            .should('contain','Subtotal:') //Validando texto "Subtotal:"

        cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
            .should('contain','Avançar') //Validando texto do botão "AVANÇAR"
            .click()
        
        cy.get('h3')
            .should('contain','Aguarde carregando...') //Validando mensagem de carregamento "Aguarde carregando..." 

        cy.wait(3500)

        // RESUMO DO PEDIDO - ANTES DE FINALIZAR


        cy.get('.layout-wrap > .md-primary')
            .should('contain','Resumo do Pedido') //Validando texto do botão "RESUMO DO PEDIDO", de "Cliente"

        cy.get('.flex-gt-xs-100 > .md-primary > .md-toolbar-tools > .flex')
            .should('contain','Cliente') //Validando título "Cliente", de "Cliente"

        cy.get('.cliente > :nth-child(1) > b')
            .should('contain','Nome:') //Validando texto "Nome:", de "Cliente"

        cy.get('.cliente > :nth-child(2) > b')
            .should('contain','CPF/CNPJ:') //Validando texto "CPF/CNPJ:", de "Cliente"

        cy.get('.cliente > :nth-child(3) > b')
            .should('contain','Tel. fixo:') //Validando texto "Tel. fixo:", de "Cliente"

        cy.get('.cliente > :nth-child(4) > b')
            .should('contain','Tel. celular:') //Validando texto "Tel. celular:", de "Cliente"

        cy.get('.cliente > :nth-child(5) > b')
            .should('contain','E-mail:') //Validando texto "E-mail:", de "Cliente"

        cy.get('.cliente > :nth-child(6) > b')
            .should('contain','E-mail NF-e:') //Validando texto "E-mail NF-e:", de "Cliente"

        cy.get('.padding-10 > :nth-child(1) > .cliente > .md-accent')
            .should('contain','Editar') //Validando texto do botão "EDITAR", de "Cliente"

        cy.get('.md-label')
            .should('contain','Consumidor Final') //Validando texto do botão "Consumidor Final", de "Cliente"

        cy.get(':nth-child(1) > .header-interno > label')
            .should('contain','OBSERVAÇÕES PARA A NOTA FISCAL') //Validando texto "OBSERVAÇÕES PARA A NOTA FISCAL", de "Cliente"

        cy.get(':nth-child(1) > .col-md-12 > .form-group > span')
            .should('contain','Limite de 150 caracteres') //Validando texto "Limite de 150 caracteres", de "Cliente"

        cy.get(':nth-child(2) > .header-interno > label')
            .should('contain','OBSERVAÇÕES PARA USO INTERNO') //Validando texto "OBSERVAÇÕES PARA USO INTERNO", de "Cliente"

        cy.get(':nth-child(2) > .col-md-12 > .form-group > span')
            .should('contain','Limite de 300 caracteres') //Validando texto "Limite de 300 caracteres", de "Cliente"

        //cy.get(':nth-child(1) > .col-md-12 > .form-group > .form-control')
        //    .type('Teste campo OBSERVAÇÕES PARA A NOTA FISCAL {downArrow}') //Preencher campo "OBSERVAÇÕES PARA A NOTA FISCAL", de "Cliente"

        //cy.wait(1500)

        //cy.get(':nth-child(2) > .col-md-12 > .form-group > .form-control')
        //    .type('Teste campo OBSERVAÇÕES PARA USO INTERNO {downArrow}') //Preencher campo "OBSERVAÇÕES PARA USO INTERNO", de "Cliente"

        cy.wait(1500)

        cy.get('.confirmacao-produtos > .md-primary > .md-toolbar-tools > .flex')
            .should('contain','Produtos') //Validando texto "Produtos"

        cy.get('.descricao-pc > :nth-child(1) > b')
            .should('contain','Quantidade:') //Validando texto "Quantidade:", de "Produtos"

        cy.get('.descricao-pc > :nth-child(2) > b')
            .should('contain','Valor unitário:') //Validando texto "Valor unitário:", de "Produtos"

        cy.get('.descricao-pc > :nth-child(3) > b')
            .should('contain','Local de faturamento:') //Validando texto "Local de faturamento:", de "Produtos"

        cy.get(':nth-child(4) > p.ng-binding')
            .should('contain','Valor Total:') //Validando texto "Valor Total:", de "Produtos"

        cy.get(':nth-child(6) > .md-primary > .md-toolbar-tools > .flex')
            .should('contain','Total') //Validando título "Total"

        cy.get(':nth-child(2) > .md-list-item-text > p')
            .should('contain','Total do pedido') //Validando texto "Total do pedido", de "Total"

        cy.get(':nth-child(2) > .md-secondary-container > div > .ng-binding > sup')
            .should('contain','R$') //Validando texto "R$", de "Total"

        cy.get(':nth-child(7) > .btn-rounded > .md-toolbar-tools > .flex')
            .should('contain','Financeiro') //Validando título "Financeiro"

        cy.get('[ng-show="(formasPagamentoParcelar.length > 0)"] > .md-primary > h4')
            .should('contain','Formas de pagamento no Parcelamento') //Validando texto "R$", de "Formas de pagamento no Parcelamento"

        cy.get('.hide-sm > .flex-gt-sm-25 > .list-title > b')
            .should('contain','Código') //Validando texto "Código", de "Financeiro"

        cy.get('[ng-show="(formasPagamentoParcelar.length > 0)"] > .list-container > .hide-sm > :nth-child(2) > .list-title > b')
            .should('contain','1º Vencimento') //Validando texto "1º Vencimento", de "Financeiro"

        cy.get('[ng-show="(formasPagamentoParcelar.length > 0)"] > .list-container > .hide-sm > :nth-child(3) > span > b')
            .should('contain','Valor de entrada') //Validando texto "Valor de entrada", de "Financeiro"

        cy.get('.hide-sm > :nth-child(4) > span > b')
            .should('contain','Valor sem juros') //Validando texto "Valor sem juros", de "Financeiro"

        cy.get('.hide-sm > :nth-child(5) > span > b')
            .should('contain','Valor da Parcela') //Validando texto "Valor da Parcela", de "Financeiro"

        cy.get('.hide-sm > :nth-child(6) > span > b')
            .should('contain','Subtotal') //Validando texto "Subtotal", de "Financeiro"

        cy.get(':nth-child(3) > .ng-binding > sup')
            .should('contain','R$') //Validando texto "R$", de "Financeiro"

        cy.get(':nth-child(4) > .ng-binding > sup')
            .should('contain','R$') //Validando texto "R$", de "Financeiro"

        cy.get(':nth-child(5) > .ng-binding > sup')
            .should('contain','R$') //Validando texto "R$", de "Financeiro"

        cy.get(':nth-child(6) > .ng-binding > sup')
            .should('contain','R$') //Validando texto "R$", de "Financeiro"

        cy.get('h3')
            .should('contain','Total financeiro') //Validando texto "Total financeiro", de "Financeiro"

        cy.get(':nth-child(3) > .md-default-theme > .md-2-line > .md-secondary-container > div > .ng-binding > sup')
            .should('contain','R$') //Validando texto "R$", de "Financeiro"

        cy.get('.layout-align-end-end > :nth-child(1) > .md-accent')
            .should('contain','Voltar') //Validando texto do botão "VOLTAR"

        cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
            .should('contain','Finalizar pedido') //Validando texto do botão "FINALIZAR PEDIDO"
            .click()

        cy.get('.md-content-overflow > :nth-child(1) > .md-toolbar-tools > .flex')
            .should('contain','Pedido Concluído') //Validando título "Pedido Concluído", do card de finalização do pedido

        cy.get('.layout-column > h4')
            .should('contain','Finalizando pedido...') //Validando mensagem "Finalizando pedido...", do card de finalização do pedido

        cy.get('.layout-column > p')
            .should('contain','ATENÇÃO:') //Validando mensagem do card de finalização do pedido
            .and('contain','Não atualize a página enquanto o pedido estiver sendo finalizado.') //Validando mensagem do card de finalização do pedido
        
        cy.get('.md-content-overflow > :nth-child(1) > .md-toolbar-tools > .flex')
            .should('contain','Pedido Concluído') //Validando título do card "Pedido Concluído"

        cy.get('.padding-10 > .layout-wrap > .flex-sm-50 > :nth-child(1)')
            .should('contain','Pedido gerado:') //Validando mensagem "Pedido gerado:", do card "Pedido Concluído"

        cy.get('[ng-show="!editarPedido"]')
            .should('contain','Pedido gravado com sucesso!')  //Validando mensagem "Pedido gravado com sucesso!:", do card "Pedido Concluído"

        cy.get('md-dialog-actions.layout-align-center-center > .md-accent')
            .should('contain','Imprimir') //Validando texto do botão "Imprimir"

        cy.get('md-dialog-actions.layout-align-center-center > .md-primary')
            .should('contain','Ok') //Validando texto do botão "OK", do card "Pedido Concluído"
            .click() //Clicando no botão "OK", do card "Pedido Concluído", após gerarmos o pedido
        


    })
})

