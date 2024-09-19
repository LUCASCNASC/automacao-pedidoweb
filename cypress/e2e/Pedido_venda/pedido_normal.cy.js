describe('Gerar pedido normal', () => {

    beforeEach(() => {
        cy.visit('http://10.7.0.42:2800/');
        cy.clearAllSessionStorage();
    })
  
    it('Gerar pedido de venda normal, processo 9860; um produto, produto 1860 0 0 - caminho feliz', () => {

        
        cy.title()
            .should('eq', 'Sabium Mobile') //Validando título da página

        cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login

        cy.wait(10000);


         //Botão "INICIAR ATENDIMENTO"
         cy.get('.hide-sm > :nth-child(2) > .md-raised')
            .should('exist') // Verifica se o elemento existe
            .and('be.visible'); //Verifica se o elemento está visível

         //Botão "INICIAR ATENDIMENTO"
         cy.get('.hide-sm > :nth-child(2) > .md-raised')
            .should('contain','Iniciar Atendimento ') //Validando texto dentro do botão
            .and('not.have.attr', 'disabled') //Validando se o botão está habilitado

        //ícone carrinho de compras
        cy.get('#test_btnCarrinho > .md-icon-button > .ng-binding')
            .should('exist') // Verifica se o elemento existe
            .and('be.visible'); //Verifica se o elemento está visível
            
        //Tres barras do menu
        cy.get('[aria-label="Menu de opções"] > .ng-binding')
            .should('exist') // Verifica se o elemento existe
            .and('be.visible'); //Verifica se o elemento está visível


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
            .and('exist') //Validando se a opção existe
            //.and('be.visible') //Verifica se o elemento está visível

        cy.wait(1500)

        //selecionar processo de venda "9860"
        cy.get('#select_option_59 > .md-text')
            .click({force: true})
        
        cy.get('.layout-align-center-center > .carregando')
            .should('contain','Aguarde carregando...') //Validar mensagem de carregamento após escolher processo de venda
            .and('exist') //Validando se a mensagem existe
            .and('be.visible')//Validando se a mensagem está visível

        cy.wait(1500)

        cy.get('.click-cliente > .informe-o-cliente > #lblNomeClienteSelecionado')
            .should('contain','INFORME O CLIENTE') //Validando texto dentro do campo para inserir CLIENTE
            .and('exist') //Validando se a mensagem existe
            .and('be.visible') //Verifica se o elemento está visível

        //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
        cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
            .wait(2000)
            .type('48976249089 {downArrow}') //Inserindo CPF no campo "INFORME O CLIENTE"
        
        cy.wait(1500)
        
        //clicar na lupa de pesquisa de clientes
        cy.get('.md-block > .ng-binding')
            .should('exist') //Validando se a lupa existe
            .and('be.visible')//Validando se a lupa está visível
            .click()

        cy.wait(2500)

        cy.get('#dialogContent_91 > .layout-row')
            .should('exist') //Validando se a mensagem do card "clientes" existe
            .and('be.visible')//Validando se a mensagem do card "clientes" está visível
            .and('contain','Digite o nome ou o CPF do cliente para busca') //Validando mensagem do card "clientes"

        cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
            .should('contain','Clientes') //Validando título no card "Clientes"
            .and('exist') //Validando se a lupa existe
            .and('be.visible')//Validando se a lupa está visível
        
        //após a pesquisa encontrar o cliente, vamos selecionar ele
        cy.get('.md-3-line > div.md-button > .md-no-style')
            .should('exist') //Validando se o cliente existe
            .and('be.visible')//Validando se o cliente está visível
            .click()

        cy.wait(3000)


        cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos

        cy.get('#searchText')
            .should('have.value', '') //Validando se o campo foi realmente limpo
            .type('1860')


        cy.get('.layout-align-center-center > .carregando')
            .should('exist') //Validando se mensagem existe
            .and('be.visible')//Validando se mensagem está visível
            .and('contain','Aguarde carregando...') //Validando mensagem de carregamento, após digitarmos o produto que queremos
       
        cy.wait(4000)

        cy.get('.md-list-item-text > .ng-scope')
            .should('contain','Saldo disponivel') //Validando informação "Saldo disponivel"
            .and('exist') //Validando se o texto existe
            .and('be.visible')//Validando se o texto está visível
            .and('have.css', 'background-color', 'rgb(92, 184, 92)') // Validando cor do "Saldo disponivel"

        cy.get('sup')
            .should('contain','R$') //Validando texto "R$"
            .and('exist') //Validando se o texto existe
            .and('be.visible')//Validando se o texto está visível
        
        //Coluna produto após pesquisar pelo produto
        cy.get('[ng-click="alterarOrdenacaoPorDescricao()"]')
            .should('contain','Produto') //Validando título coluna "PRODUTO", após pesquisar produto
            .and('exist') //Validando se a coluna existe
            .and('be.visible')//Validando se a coluna está visível

        //Coluna produto após pesquisar pelo produto
         cy.get('[ng-click="alterarOrdenacaoPorValor()"]')
            .should('contain','Valor') //Validando título coluna "VALOR", após pesquisar produto
            .and('exist') //Validando se a coluna existe
            .and('be.visible')//Validando se a coluna está visível

        //ícone camera, após pesquisar pelo produto
        cy.get('[ng-show="!(usarBuscarApenasPeloGTINPorUsuario)"] > div > [ng-click="capturarImagem()"] > .ng-binding')
            .should('exist') //Validando se o ícone da camera existe existe
            .and('be.visible')//Validando se o ícone da camera existe está visível

        //Ícone microfone após pesquisar pelo produto
        cy.get('[ng-click="capturarVoz()"] > .ng-binding')
            .should('exist') //Validando se o ícone da microfone existe existe
            .and('be.visible')//Validando se o ícone da microfone existe está visível

        //ícone percentual após perquisar pelo produto
        cy.get('[ng-click="capturarSomentePromocao()"] > .ng-scope')
            .should('exist') //Validando se o ícone de Somente promoção existe existe
            .and('be.visible')//Validando se o ícone de Somente promoção existe está visível

        //ícone X após perquisar pelo produto
        cy.contains('md-icon', 'highlight_off')
            .should('exist') //Validando se o ícone "X" existe existe
            //.and('be.visible')//Validando se o ícone "X" existe está visível


        cy.get('#lblResultadoBusca')
            .should('exist') //Validando se o elemento "Exibindo x de um total de x registros" existe
            .and('be.visible')//Validando se o elemento "Exibindo x de um total de x registros" está visível


        cy.get('.limite-busca > :nth-child(1)')
            .should('exist') //Validando se o elemento "Mostrar" existe
            .and('be.visible')//Validando se o elemento "Mostrar" está visível
            .and('contain','Mostrar') //Validando texto "Mostrar"


        cy.get('#select_value_label_31')
            .should('exist') //Validando se o elemento registros existe
            .and('be.visible')//Validando se o elemento registros está visível


        cy.get('.limite-busca > :nth-child(3)')
            .should('exist') //Validando se o elemento "por página" existe
            .and('be.visible')//Validando se o elemento "por página" está visível
            .and('contain','por página') //Validando texto "por página"


        cy.get('[ng-click="exibirResultadosComoGrade()"] > .ng-binding')
            .should('exist') //Validando se o elemento modo card existe
            .and('be.visible')//Validando se o elemento modo card está visível


        cy.get('[ng-click="exibirResultadosComoLista()"]')
            .should('exist') //Validando se o elemento listar existe
            .and('be.visible')//Validando se o elemento listar está visível


        cy.get('[ng-click="openFiltro()"] > .ng-binding')
            .should('exist') //Validando se o elemento filtro existe
            .and('be.visible')//Validando se o elemento filtro está visível


        cy.wait(1000)


        //Validando campo de pesquisa de produtos
        cy.get('#searchText')
            .should('exist') //Validando a existencia do campo
            .and('be.visible') //Validando se o campo está visível


        cy.contains('Cod: 1860')


        //Validando informações do produto após pesquisar
        cy.get('.md-list-item-text > .ng-scope')
            .should('exist') //Validando existencia do "Saldo disponível"
            .and('be.visible') //Validando se elemento "Saldo disponível" está visível
            .and('have.text','Saldo disponivel') //Verificando texto
            .invoke('css', 'color') // Obtém a cor do elemento
            .should('equal', 'rgb(255, 255, 255)'); // Verifica a cor (RGB)


        //clicar para selecionar o produto; 
        cy.contains('Cod: 1860')
            .click({ force: true })

        cy.wait(2000)


        // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM


        //Botão "SALDO NAS FILIAIS"
        cy.get('.flex-gt-sm-50 > .md-default')
            .should('exist') //Validando a existencia do elemento
            .and('be.visible') //Validando se o elemento está visível
            .and('have.text','Saldo nas Filiais')  //Validando nome do botão "Saldo nas Filiais"
            .invoke('css', 'color') // Obtém a cor do elemento
            .should('equal', 'rgb(0, 0, 0)'); // Verifica a cor (RGB)


        //Botão "Voltar"
        cy.get('.iconeVoltar > span')
            .should('exist') //Validando a existencia do elemento
            .and('be.visible') //Validando se o elemento está visível
            .and('contain','Voltar') //Validando nome do botão "Voltar"

        
        //Botão para visualizar em PDF
        cy.get('.iconeBuscaDetalheVenda')
            .should('exist') //Validando a existencia do elemento
            .and('be.visible') //Validando se o elemento está visível

        
        //Mensagem "Selecione a cor, a voltagem e o local de saldo "
        cy.get('md-list.md-default-theme > .md-no-sticky > .md-subheader-inner > .md-subheader-content')
            .should('exist') //Validando a existencia do texto
            .and('be.visible') //Validando se o texto está visível
            .and('contain','Selecione a cor, a voltagem e o local de saldo ') //Validando nome do botão "Voltar"

        cy.wait(1500)
        
        //Card de informações de voltagem
        //cy.get(':nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style')
        //    .should('contain','Filial') //Validando texto
        //    .and('contain','Saldo Local') //Validando texto
        //    .and('contain','Saldo Depósito') //Validando texto
        //    .and('contain','Cód. Fabricante:') //Validando texto
            
        
        //Selecionar a voltagem do produto
        cy.get('.padding-5 > :nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style')
            .click({ force: true })

        cy.get('[ng-click="openModalFilial(itemClicado.grade, false);"]')
            .should('contain','50') //Validando filial 50

        //Mensagem de carregamento ao escolher voltagem
        cy.get('.carregando.ng-scope')
            .should('contain','Aguarde carregando...') //Validando mensagem de carregamento, após selecionar a voltagem do produto
            .and('exist') //Validando que a mensagem existe
            //.and('be.visible') //Validando que a mensagem está visível
        
        cy.wait(1500)

        //Validar texto "Opções do produto"
        cy.get('[ng-show="(itemGradeSelecionado && itemGradeSelecionado.valor > 0)"] > :nth-child(1) > ._md > .md-toolbar-tools > h2')
            .should('have.text','Opções do produto') //Validando texto "Opções do produto"
            .and('exist') //Validando que o texto existe
            .and('be.visible') //Validando que o texto está visível
            //.and('equal', 'rgb(26, 70, 203'); // Verifica a cor (RGB)

        //Validar botão "INTENÇÃO DE COMPRA"
        cy.get(':nth-child(5) > .md-accent')
            .should('contain','Intenção de compra') //Validando texto botão "Intenção de compra"
            .and('exist') //Validando que o botão existe
            .and('be.visible') //Validando que o botão está visível
            .and('not.have.attr', 'disabled') //Validando se o botão está habilitado
            //.and('have.css', 'background-color', 'rgb(33, 137, 70)') // Verifica a cor (RGB) do botão

        //Validar botão "SALDO DETALHADO"
        cy.get('[ng-if="(!itemGradeSelecionado.grade.composicao || itemGradeSelecionado.grade.composicao.length == 0)"] > .md-default')
            .should('exist') //Validando que o botão existe
            .and('be.visible') //Validando que o botão está visível
            .and('contain','Saldo detalhado') //Validando texto botão "Saldo Detalhado"
            .and('not.have.attr', 'disabled') //Validando se o botão está habilitado

        //Validar botão "ADICIONAR"
        cy.get('[style="padding: 0px 5px;"] > .md-primary')
            .should('exist') //Validando se o botão existe
            .and('be.visible') //Validando que o botão está visível
            .and('contain','Adicionar') //Validando texto botão "Saldo Detalhado"
            .and('not.have.attr', 'disabled') //Validando se o botão está habilitado
            //.and('have.css', 'background-color', 'rgb(26, 70, 203)') // Verifica a cor (RGB) do botão

        //Validando botão "-"
        cy.contains('md-icon', 'remove_circle_outline')
            .should('be.visible') //Validando que o botão está visível
            .and('exist') //Validando se botão "-" existe
            .and('not.have.attr', 'disabled') //Validando se o botão está habilitado

        //Validando botão "+"
        cy.contains('md-icon', 'add_circle_outline')
            .should('be.visible') //Validando que o botão está visível
            .and('exist') //Validando se botão "+" existe
            .and('not.have.attr', 'disabled') //Validando se o botão está habilitado

        //Validando "Valor:"
        cy.get('.layout-wrap > .ng-binding')
            .should('exist') //Validando se o texto existe
            .and('be.visible') //Validando que o texto está visível
            .and('contain','Valor:') //Validando texto "Valor:" 
            .and('contain','R$') //Validando texto "R$"


        //clicar no botão "ADICIONAR", para adicionar produto
        cy.get('[style="padding: 0px 5px;"] > .md-primary')
            .click()

        cy.wait(4000)

        //Serviços vinculados
        cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
            .should('contain','Serviços Vinculados') //Validando título do card "Serviços Vinculados"
            .and('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //mensagem "O item foi adicionado ao carrinho"
        cy.get('.ng-scope.flex-100 > .layout-wrap > :nth-child(2) > h2')
            .should('contain', 'O item foi adicionado ao carrinho') //Validando mensagem "O item foi adicionado ao carrinho"
            .and('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //mensagem "Aproveite para adicionar os serviços abaixo"
        cy.get('.ng-scope.flex-100 > .layout-wrap > :nth-child(2) > h4')
            .should('contain','Aproveite para adicionar os serviços abaixo') //Validando mensagem "Aproveite para adicionar os serviços abaixo"
            .and('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //título "Garantias" no card "Serviços Vinculados"
        cy.get('[style=""] > [style="font-size:25px;margin:0;padding:0 0 15px 15px"]')
            .should('contain','Garantias') //Validando título "Garantias" no card "Serviços Vinculados"
            .and('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível


        //título "Mão de Obra" no card "Serviços Vinculados"
        cy.get(':nth-child(2) > [style="font-size:25px;margin:0;padding:0 0 15px 15px"]')
            .should('contain','Mão de Obra') //Validando título "Mão de Obra" no card "Serviços Vinculados"
            .and('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //Validando check verde, afirmando que o item foi adicionado
        cy.get('.icon')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível


        //Desmarcar garantia - card "Serviços Vinculados"
        cy.get('#checkbox-141-2 > .md-container')
            .click()

        cy.wait(1500)

        //Desmarcar Mão de Obra - card "Serviços Vinculados"
        cy.get('#checkbox-144-2 > .md-container')
            .click()

        cy.wait(1200)

        //Botão "OK" - Serviços Vinculados
        cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
            .should('contain','Ok')  //Validando texto botão "Ok"
            .and('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('not.have.attr', 'disabled') //Validando se o botão está habilitado
            

        //Botão "OK" - Serviços Vinculados
        cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
        .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

        cy.wait(2000)



        // Tela de ENTREGA DO PEDIDO - PRODUTOS


                //VALIDAR ÍCONES DE CIMA//

        //cy.get('.selected > .icon-step > .md-default-theme')
        

        //cy.get('.ng-scope > .icon-step > [ng-show="msgBtnAvancarEndereco"]')


        //cy.get('[ng-class="{'active': etapaAtual > 3, 'selected': etapaAtual == 3}"] > .icon-step > [ng-show="msgBtnAvancarEndereco"]')


        //cy.get('[ng-class="{'active': etapaAtual > 4, 'selected': etapaAtual == 4}"] > .icon-step > [ng-show="msgBtnAvancarEndereco"]')



        //Botão "Resumo do Pedido"
        cy.get('.carrinho > .layout-wrap > .md-primary')
            .should('contain','Resumo do Pedido') //Validando texto botão "Resumo do Pedido"
            .and('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('not.have.attr', 'disabled') //Validando se o botão está habilitado

        //Botão PDF
        cy.get('.iconeBuscaDetalheVenda')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('not.have.attr', 'disabled') //Validando se o botão está habilitado
        
        //Texto "Produtos"
        cy.get('[ng-show="(carrinho.produtos.length > 0)"] > .titulo-toolbar > .md-toolbar-tools > .flex')
            .should('contain','Produtos') //Validando título "Produtos" 
            .and('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //Texto "Quantidade" no meio dos botões "+" e "-"
        cy.get('.text-align-center')
            .should('contain','Quantidade') //Validando texto "Quantidade"
            .and('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível


        //Validando botão "-"
        cy.contains('md-icon', 'remove_circle_outline')
        .should('be.visible') //Validando que o botão está visível
        .and('exist') //Validando se botão "-" existe
        .and('not.have.attr', 'disabled') //Validando se o botão está habilitado

        //Validando botão "+"
        cy.contains('md-icon', 'add_circle_outline')
        .should('be.visible') //Validando que o botão está visível
        .and('exist') //Validando se botão "+" existe
        .and('not.have.attr', 'disabled') //Validando se o botão está habilitado


        //Informação "SKY:" - Produtos
        cy.get(':nth-child(2) > .produtos_detalhes > :nth-child(1) > b')
            .should('have.text','SKU:') //Validando texto
            .and('exist') //Validando se o elemento existe
            .and('be.visible') //Validando se o elemento está visível

        //Informação "Grade:" - Produtos
        cy.get(':nth-child(2) > .produtos_detalhes > :nth-child(2) > b')
            .should('have.text','Grade:') //Validando texto
            .and('exist') //Validando se o elemento existe
            .and('be.visible') //Validando se o elemento está visível

        //Informação "Marca:" - Produtos
        cy.get(':nth-child(2) > .produtos_detalhes > :nth-child(3) > b')
            .should('have.text','Marca:') //Validando texto
            .and('exist') //Validando se o elemento existe
            .and('be.visible') //Validando se o elemento está visível

        //Informação "Local de faturamento:" - Produtos
        cy.get(':nth-child(2) > .produtos_detalhes > :nth-child(4) > b')
            .should('have.text','Local de faturamento:') //Validando texto
            .and('exist') //Validando se o elemento existe
            .and('be.visible') //Validando se o elemento está visível

        //Informação "Valor unitário:" - Produtos
        cy.get(':nth-child(2) > .produtos_detalhes > :nth-child(5) > b')
            .should('have.text','Valor unitário:') //Validando texto
            .and('exist') //Validando se o elemento existe
            .and('be.visible') //Validando se o elemento está visível

        //Informação "Vendedor:" - Produtos
        cy.get(':nth-child(2) > .produtos_detalhes > :nth-child(6) > b')
            .should('have.text','Vendedor:') //Validando texto
            .and('exist') //Validando se o elemento existe
            .and('be.visible') //Validando se o elemento está visível

        //Informação "Valor Total:" - Produtos
        cy.get(':nth-child(4) > p.ng-binding')
            .should('have.text','Valor Total:') //Validando texto
            .and('exist') //Validando se o elemento existe
            .and('be.visible') //Validando se o elemento está visível

        //Informação "C.V." - Produtos
        cy.get('[style="text-align: center;"] > :nth-child(1)')
            .should('have.text','C.V.') //Validando texto
            .and('exist') //Validando se o elemento existe
            .and('be.visible') //Validando se o elemento está visível

        //Botão Lixeira vermelha
        cy.get('.flex-20 > .md-warn')
            .should('exist') //Validando se o botão existe
            .and('be.visible') //Validando que o botão está visível
            .and('not.have.attr', 'disabled') //Validando se o botão está habilitado
            //.and('have.css', 'background-color', 'rgb(26, 70, 203)') // Verifica a cor (RGB) do botão

        //Ícone Lixeira dentro do botão Lixeira vermelha
        cy.get('.md-warn > .ng-binding')
            .should('exist') //Validando se o elemento existe
            .and('be.visible') //Validando se o elemento está visível

        //Botão cifrão $
        cy.get('[ng-click="abrirModalDescontoProduto($index)"]')
            .should('exist') //Validando se o botão existe
            .and('be.visible') //Validando que o botão está visível
            .and('not.have.attr', 'disabled') //Validando se o botão está habilitado

        //Ícone cifrão $ dentro do botão cifrão $
        cy.get('[ng-click="abrirModalDescontoProduto($index)"] > .ng-scope')
            .should('exist') //Validando se o elemento existe
            .and('be.visible') //Validando se o elemento está visível

        //Botão SERVIÇOS VINCULADOS
        cy.get(':nth-child(4) > :nth-child(1) > .md-default')
            .should('exist') //Validando se o botão existe
            .and('be.visible') //Validando que o botão está visível
            .and('contain','Serviços Vinculados') //Validando texto dentro do botão
            .and('not.have.attr', 'disabled') //Validando se o botão está habilitado
            .click()

        //Serviços vinculados
        cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
            .should('contain','Serviços Vinculados') //Validando título do card "Serviços Vinculados"
            .and('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível


        //título "Garantias" no card "Serviços Vinculados"
        cy.get('[style=""] > [style="font-size:25px;margin:0;padding:0 0 15px 15px"]')
            .should('contain','Garantias') //Validando título "Garantias" no card "Serviços Vinculados"
            .and('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível


        //título "Mão de Obra" no card "Serviços Vinculados"
        cy.get(':nth-child(2) > [style="font-size:25px;margin:0;padding:0 0 15px 15px"]')
            .should('contain','Mão de Obra') //Validando título "Mão de Obra" no card "Serviços Vinculados"
            .and('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível


        cy.wait(1200)

        //Botão "OK" - Serviços Vinculados
        cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
            .should('contain','Ok')  //Validando texto botão "Ok"
            .and('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('not.have.attr', 'disabled') //Validando se o botão está habilitado


        cy.wait(1200)

        //Botão LOCAIS DE SALDO
        cy.get('.hide-sm > .md-default')
            .should('exist') //Validando se o botão existe
            .and('be.visible') //Validando que o botão está visível
            .and('contain','Locais de Saldo') //Validando texto dentro do botão
            .and('not.have.attr', 'disabled') //Validando se o botão está habilitado
            .click()

        //card Locais de Saldo
        cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
            .should('contain','Locais de Saldo') //Validando título do card "Serviços Vinculados"
            .and('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //Texto Local/Saldo dentro do card Locais de Saldo
        cy.get('.white > .md-no-sticky > .md-subheader-inner')
            .should('contain','Local/Saldo') //Validando título do card "Serviços Vinculados"
            .and('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        cy.wait(800)

        //Botão "X" de sair
        cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button > .ng-binding')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .click()

        cy.wait(1000)

        //Textos Previsão de Entrega e Previsão de Montagem abaixo do botão SERVIÇOS VINCULADOS
        cy.get('.produto-nome')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain','Previsão de Entrega') //Validando texto "Previsão de Entrega"
            .and('contain','Previsão de Montagem') //Validando texto "Previsão de Montagem"

        //Ícone de calendário, abaixo de Previsão de entrega
        cy.get('[ng-show="itemAtual._permiteEntrega && itemAtual.habilitarDataEntrega"] > .validaData > .md-datepicker-button')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('not.have.attr', 'disabled') //Validando se o botão está habilitado

        //Campo de data, abaixo de Previsão de entrega
        cy.get('#input_162')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //Botão seta para baixo, para escolhermos a data que queremos
        cy.get('[ng-show="itemAtual._permiteEntrega && itemAtual.habilitarDataEntrega"] > .validaData > .md-datepicker-input-container > .md-datepicker-triangle-button > .md-datepicker-expand-triangle')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('not.have.attr', 'disabled') //Validando se o botão está habilitado


        //Ícone de calendário, abaixo de Previsão de montagem
        cy.get('[ng-show="itemAtual._permiteMontagem && itemAtual.habilitarDataMontagem"] > .validaData > .md-datepicker-button')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('not.have.attr', 'disabled') //Validando se o botão está habilitado

        //Campo de data, abaixo de Previsão de montagem
        cy.get('#input_164')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //Botão seta para baixo, para escolhermos a data que queremos
        cy.get('[ng-show="itemAtual._permiteMontagem && itemAtual.habilitarDataMontagem"] > .validaData > .md-datepicker-input-container > .md-datepicker-triangle-button > .md-datepicker-expand-triangle')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('not.have.attr', 'disabled') //Validando se o botão está habilitado

        cy.wait(1000)

        //Botão de arrastar Retirada / Entrega
        cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain','Retirada / Entrega') //Validar mensagem do botão
            .click() //Clicar para tirar a entrega do pedido

        cy.wait(1500)

        //Botão de arrastar Montagem
        cy.get('[ng-show="itemAtual._permiteMontagem"] > .md-auto-horizontal-margin > .md-label')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain','Montagem') //Validar mensagem do botão
            .click() //Clicar para tirar a montagem

        cy.wait(700)

        //rolagem para baixo
        cy.get('.containerSabium')
            .scrollTo("center")

        cy.wait(500)

        //Texto "Total de produtos"
        cy.get('[ng-show="true"] > .md-list-item-text > p')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('have.text','Total de produtos') //Validando texto "Total de produtos"

        //Cifrão do "Total de produtos" 
        cy.get('[ng-show="true"] > .md-secondary-container > div > .ng-binding > sup')
            .should('contain','R$') //Validando texto
            .and('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
        
        //Validando valor do "Total de produtos" 
        cy.get('[ng-show="true"] > .md-secondary-container > div > .ng-binding')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //Texto "Total do pedido"
        cy.get(':nth-child(4) > .md-list-item-text > p')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('have.text','Total do pedido') //Validando texto "Total do pedido"

         //Cifrão do "Total do pedido" 
        cy.get(':nth-child(4) > .md-secondary-container > div > .ng-binding > sup')
            .should('contain','R$') //Validando texto
            .and('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //Validando valor do "Total do pedido" 
        cy.get(':nth-child(4) > .md-secondary-container > div > .ng-binding')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
        
        //Botão "ADICIONAR SERVIÇO"
        cy.get('.ng-scope.layout-align-start-center > :nth-child(2) > .layout-align-center-center > .md-raised')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('have.text','ADICIONAR SERVIÇO') //Validando texto do botão "ADICIONAR SERVIÇO"
            //cor
            .click()

        cy.wait(3000)

        //Card Servicços
        cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .flex')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível






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


        // PARA MOMENTANEAMENTE PARA FAZER MAIS VALIDAÇÕES

        //cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
        //    .should('contain','Finalizar pedido') //Validando texto do botão "FINALIZAR PEDIDO"
        //    .click()

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

