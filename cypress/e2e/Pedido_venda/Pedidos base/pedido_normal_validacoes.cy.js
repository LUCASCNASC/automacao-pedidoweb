//Importando funções 
import { msgaguardecarregando, detalhevenda, detalhevendaclicar, titulopagina, saldodisponivel } from '../../../support/uiUtils';

describe('Gerar pedido normal', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
    })
  
    it('Gerar pedido de venda normal, processo 9860; um produto, produto 1860 0 0 - caminho feliz', () => {

        cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login

        //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
        titulopagina()
        
        cy.wait(4000);

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

        //clicar para aparecer as opções de processo
        cy.get('#select_value_label_4 > .md-select-icon')
            .click()

        cy.wait(1000)
        
        //rolar para o meio das opções de processo
        cy.get('#select_listbox_12')
            .scrollTo('center')

        cy.get('#select_option_9 > .md-text > em')
            .should('contain','Selecione uma opção') //Validando "Selecione uma opção", quando vou escolher um processo
            .and('exist') //Validando se a opção existe
            //.and('be.visible') //Verifica se o elemento está visível

        cy.wait(1000)

        //selecionar processo de venda "9860"
        cy.get('#select_option_59 > .md-text')
            .click({force: true})
        
        //Mensagem de carregamento após selecionar o processo
        msgaguardecarregando() //função

        cy.wait(1000)

        cy.get('.click-cliente > .informe-o-cliente > #lblNomeClienteSelecionado')
            .should('contain','INFORME O CLIENTE') //Validando texto dentro do campo para inserir CLIENTE
            .and('exist') //Validando se a mensagem existe
            .and('be.visible') //Verifica se o elemento está visível

        //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
        cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
            .wait(1500)
            .type('48976249089 {downArrow}') //Inserindo CPF no campo "INFORME O CLIENTE"
        
        cy.wait(1000)
        
        //clicar na lupa de pesquisa de clientes
        cy.get('.md-block > .ng-binding')
            .should('exist') //Validando se a lupa existe
            .and('be.visible')//Validando se a lupa está visível
            .click()

        cy.wait(2000)

        //mensagem do card "clientes"
        cy.get('#dialogContent_91 > .layout-row')
            .should('exist') //Validando se a mensagem do card "clientes" existe
            .and('be.visible')//Validando se a mensagem do card "clientes" está visível
            .and('contain','Digite o nome ou o CPF do cliente para busca') //Validando mensagem do card "clientes"

        //título do card "Clientes"
        cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
            .should('contain','Clientes') //Validando título no card "Clientes"
            .and('exist') //Validando se a lupa existe
            .and('be.visible')//Validando se a lupa está visível
        
        //após a pesquisa encontrar o cliente, vamos selecionar ele
        cy.get('.md-3-line > div.md-button > .md-no-style')
            .should('exist') //Validando se o cliente existe
            .and('be.visible')//Validando se o cliente está visível
            .click()

        cy.wait(5500)

        //Campo "Buscar produtos"
        cy.contains('label', 'Buscar produtos'); // Seleciona o label com o texto Buscar produtos

        cy.get('#searchText')
            .should('have.value', '') //Validando se o campo foi realmente limpo
            .wait(1500)
            .type('1860')

       //Mensagem de carregamento após selecionar o processo
        msgaguardecarregando() //função
       
        cy.wait(3500)

        //Elemento "Saldo disponivel"
        cy.get('.md-list-item-text > .ng-scope')
            .should('contain','Saldo disponivel') //Validando informação "Saldo disponivel"
            .and('exist') //Validando se o texto existe
            .and('be.visible')//Validando se o texto está visível
            .and('have.css', 'background-color', 'rgb(92, 184, 92)') // Validando cor do "Saldo disponivel"

        //Elemento Cifrão
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

        //Elemento "Exibindo x de um total de x registros"
        cy.get('#lblResultadoBusca')
            .should('exist') //Validando se o elemento "Exibindo x de um total de x registros" existe
            .and('be.visible')//Validando se o elemento "Exibindo x de um total de x registros" está visível

        //Elemento Mostrar
        cy.get('.limite-busca > :nth-child(1)')
            .should('exist') //Validando se o elemento "Mostrar" existe
            .and('be.visible')//Validando se o elemento "Mostrar" está visível
            .and('contain','Mostrar') //Validando texto "Mostrar"

        //elemento registros existentes
        cy.get('#select_value_label_31')
            .should('exist') //Validando se o elemento registros existentes
            .and('be.visible')//Validando se o elemento registros está visível

        //elemento "por página"
        cy.get('.limite-busca > :nth-child(3)')
            .should('exist') //Validando se o elemento "por página" existe
            .and('be.visible')//Validando se o elemento "por página" está visível
            .and('contain','por página') //Validando texto "por página"

        //elemento modo card
        cy.get('[ng-click="exibirResultadosComoGrade()"] > .ng-binding')
            .should('exist') //Validando se o elemento modo card existe
            .and('be.visible')//Validando se o elemento modo card está visível

        //elemento listar
        cy.get('[ng-click="exibirResultadosComoLista()"]')
            .should('exist') //Validando se o elemento listar existe
            .and('be.visible')//Validando se o elemento listar está visível

        //elemento filtro
        cy.get('[ng-click="openFiltro()"] > .ng-binding')
            .should('exist') //Validando se o elemento filtro existe
            .and('be.visible')//Validando se o elemento filtro está visível

        cy.wait(500)

        //Validando campo de pesquisa de produtos
        cy.get('#searchText')
            .should('exist') //Validando a existencia do campo
            .and('be.visible') //Validando se o campo está visível

        //Preenchendo campo para pesquisar produto
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

        cy.wait(1500)

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

        //Função para validar o botão PDF, que baixa o PDF
        detalhevenda()
        
        //Função criada para clicar no botão detalher venda, que baixa o PDF
        detalhevendaclicar()

        //Mensagem "Selecione a cor, a voltagem e o local de saldo "
        cy.get('md-list.md-default-theme > .md-no-sticky > .md-subheader-inner > .md-subheader-content')
            .should('exist') //Validando a existencia do texto
            .and('be.visible') //Validando se o texto está visível
            .and('contain','Selecione a cor, a voltagem e o local de saldo ') //Validando nome do botão "Voltar"

        cy.wait(1000)
        
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

        //Mensagem de carregamento após selecionar o processo
        msgaguardecarregando() //função
        
        cy.wait(1000)

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

        cy.wait(3500)

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

        cy.wait(1000)

        //Desmarcar Mão de Obra - card "Serviços Vinculados"
        cy.get('#checkbox-144-2 > .md-container')
            .click()

        cy.wait(800)

        //Botão "OK" - Serviços Vinculados
        cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
            .should('contain','Ok')  //Validando texto botão "Ok"
            .and('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('not.have.attr', 'disabled') //Validando se o botão está habilitado 

        //Botão "OK" - Serviços Vinculados
        cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
        .click() //Clicar no botão "OK" (card "Serviços Vinculados"), para avançar

        cy.wait(1500)


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

        //Função para validar o botão PDF, que baixa o PDF
        detalhevenda()
 
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
            .should('contain','Valor Total:') //Validando texto
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

        //Botão SERVIÇOS VINCULADOS
        cy.get(':nth-child(4) > :nth-child(1) > .md-default')
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

        cy.wait(800)

        //Botão "OK" - Serviços Vinculados
        cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
            .should('contain','Ok')  //Validando texto botão "Ok"
            .and('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('not.have.attr', 'disabled') //Validando se o botão está habilitado
           
        //Botão "OK" - Serviços Vinculados
        cy.get('[style="position: absolute; bottom: 10px; right: 10px"] > .md-raised')
            .click()

        cy.wait(800)

        //Botão LOCAIS DE SALDO
        cy.get('.hide-sm > .md-default')
            .should('exist') //Validando se o botão existe
            .and('be.visible') //Validando que o botão está visível
            .and('contain','Locais de Saldo') //Validando texto dentro do botão
            .and('not.have.attr', 'disabled') //Validando se o botão está habilitado

        //Botão LOCAIS DE SALDO
        cy.get('.hide-sm > .md-default')
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

        //Botão "X" de sair
        cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button > .ng-binding')
            .click()

        cy.wait(800)

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

        cy.wait(800)

        //Botão de arrastar Retirada / Entrega
        cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain','Retirada / Entrega') //Validar mensagem do botão
            .click() //Clicar para tirar a entrega do pedido

        cy.wait(1000)

        //Botão de arrastar Montagem
        cy.get('[ng-show="itemAtual._permiteMontagem"] > .md-auto-horizontal-margin > .md-label')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain','Montagem') //Validar mensagem do botão
            .click() //Clicar para tirar a montagem

        cy.wait(500)

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
            .and('not.have.attr', 'disabled') //Validando se o botão está habilitado
            //cor

        //Botão "ADICIONAR SERVIÇO"
        cy.get('.ng-scope.layout-align-start-center > :nth-child(2) > .layout-align-center-center > .md-raised')
            .click()

        cy.wait(2500)

        //Card Serviços
        cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .flex')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('have.text','Serviços') //Validando texto exato
            //cor

        //Texto "Foram encontrados ... serviços"
        cy.get('#lblResultadoBusca')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain','Foram encontrados') //Validando texto do botão "ADICIONAR SERVIÇO"
            .and('contain','serviços') //Validando texto do botão "ADICIONAR SERVIÇO"

        //Título da coluna "SERVIÇO"
        cy.get('[ng-click="alterarOrdenacaoPorDescricao()"]')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain','Serviço') //Validando texto

        //Seta para cima para ordenar coluna SERVIÇO
        cy.get('[ng-show="(descTitulo == false)"]')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível   

        cy.wait(400)

        //Seta para cima para ordenar coluna SERVIÇO
        cy.get('[ng-show="(descTitulo == false)"]')
            .click() //Clicar para ordenar

        cy.wait(400)

         //Título da coluna "VALOR"
         cy.get('[ng-click="alterarOrdenacaoPorValor()"]')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain','Valor') //Validando texto

        //Seta para cima para ordenar coluna VALOR
        cy.get('[ng-show="(descValor == false)"]')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível   

        cy.wait(400)

        //Seta para cima para ordenar coluna VALOR
        cy.get('[ng-show="(descValor == false)"]')
            .click() //Clicar para ordenar

        cy.wait(400)

        //Validar existencia do primeiro serviço
        cy.get('[style=""] > div.md-button > .md-no-style')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //Cifrão do primeiro serviço
        cy.get('[style=""] > div.md-button > .md-secondary-container > .acoes-busca > .valor-busca > sup')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('have.text','R$') //Validando se é exatamente o elemento que queremos

        //Botão "X" de sair do card
        cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('not.have.attr', 'disabled') //Validando se o botão está habilitado
            
        cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')    
            .scrollIntoView()
            .wait(500)

        //Botão "X" de sair do card
        cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')    
            .click() //Clicando para sair do card

        cy.wait(1200)

        //Botão "AVANÇAR"
        cy.get('.flex-gt-sm-50 > .md-primary')
            .should('contain','Avançar') //Validar mensagem do botão
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .click() //Clicar para avançar para a próxima tela

        //Mensagem "Adicionando produtos/serviços..."
        cy.get('h3')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain','Adicionando produtos/serviços...') //Validando mensagem 


        // tela de GERAR PARCELAS


        cy.wait(11000)

        //Função para validar o botão PDF, que baixa o PDF
        detalhevenda()

        cy.wait(800)

        //Clicar no botão detalhe venda, que baixa o PDF- não está indo
        cy.get('.iconeBuscaDetalheVenda')
            .click({ force: true }) 

        cy.wait(800)

        //Botão RESUMO DO PEDIDO
        cy.get('.layout-wrap > .md-primary')
            .scrollIntoView()
            .wait(500)
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain','Resumo do Pedido') //Validando texto do botão "Resumo do Pedido"
            .and('not.have.attr', 'disabled') //Validando se o botão está habilitado

        //Clicar no botão RESUMO DO PEDIDO
        cy.get('.layout-wrap > .md-primary')
            .click({ force: true }) 

        //Mensagem de carregamento
        msgaguardecarregando() //função

        //Título do car "Resumo do pedido"
        cy.get('.md-dialog-resumo-pedido > .md-primary > .md-toolbar-tools > h2')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('have.text','Resumo do pedido') //Validando texto do botão "Resumo do Pedido"

        cy.wait(800)
 
        // Validando pequenos cards dentro do Resumo do pedido 


       /*  //Pequeno card "Valor total"
        cy.get(':nth-child(1) > ._md > [style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(0% + 0px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(0% + 0px);"] > figure')
            .should('exist') //Validando que elemento existe (card todo)
            .and('be.visible') //Validando que elemento está visível (card todo)

        cy.get('h3.ng-scope')
            .should('exist') //Validando que elemento existe (título do pequeno título)
            .and('be.visible') //Validando que elemento está visível (título do pequeno título)
            .contains('Valor total') //Validando texto do botão "Valor total" (título do pequeno título)

        cy.get(':nth-child(1) > ._md > [style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(0% + 0px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(0% + 0px);"] > figure > div.ng-scope > p > sup')
            .should('exist') //Validando que elemento existe (cifrão do pequeno título)
            .and('be.visible') //Validando que elemento está visível (cifrão do pequeno título)
            .and('have.text','R$') //Validando texto do botão "R$" (cifrão do pequeno título)

        cy.get(':nth-child(1) > ._md > [style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(0% + 0px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(0% + 0px);"] > figure > div.ng-scope > p > .ng-binding')
            .should('exist') //Validando que elemento existe (valor do pequeno card)
            .and('be.visible') //Validando que elemento está visível (valor do pequeno card)

        //Pequeno card "Valor total à vista"
        cy.get(':nth-child(1) > ._md > [style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(20% + 1px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(0% + 0px);"] > figure')
            .should('exist') //Validando que elemento existe (card todo)
            .and('be.visible') //Validando que elemento está visível (card todo)

        cy.get('h3.ng-scope')
            .should('exist') //Validando que elemento existe (título do pequeno título)
            .and('be.visible') //Validando que elemento está visível (título do pequeno título)
            .contains('Valor total à vista') //Validando texto do botão "Valor total à vista" (título do pequeno título)

        cy.get(':nth-child(1) > ._md > [style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(20% + 1px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(0% + 0px);"] > figure > div.ng-scope > p > sup')
            .should('exist') //Validando que elemento existe (cifrão do pequeno título)
            .and('be.visible') //Validando que elemento está visível (cifrão do pequeno título)
            .and('have.text','R$') //Validando texto do botão "R$" (cifrão do pequeno título)

        cy.get(':nth-child(1) > ._md > [style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(40% + 2px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(0% + 0px);"] > figure > div.ng-scope > p > .ng-binding')
            .should('exist') //Validando que elemento existe (valor do pequeno card)
            .and('be.visible') //Validando que elemento está visível (valor do pequeno card)

        //Pequeno card "Valor total entrada"
        cy.get(':nth-child(1) > ._md > [style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(40% + 2px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(0% + 0px);"] > figure')
            .should('exist') //Validando que elemento existe (card todo)
            .and('be.visible') //Validando que elemento está visível (card todo)

        cy.get('h3.ng-scope')
            .should('exist') //Validando que elemento existe (título do pequeno título)
            .and('be.visible') //Validando que elemento está visível (título do pequeno título)
            .contains('Valor total entrada') //Validando texto do botão "Valor total entrada" (título do pequeno título)

        cy.get(':nth-child(1) > ._md > [style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(40% + 2px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(0% + 0px);"] > figure > div.ng-scope > p > sup')
            .should('exist') //Validando que elemento existe (cifrão do pequeno título)
            .and('be.visible') //Validando que elemento está visível (cifrão do pequeno título)
            .and('have.text','R$') //Validando texto do botão "R$" (cifrão do pequeno título)

        cy.get(':nth-child(1) > ._md > [style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(40% + 2px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(0% + 0px);"] > figure > div.ng-scope > p > .ng-binding')
            .should('exist') //Validando que elemento existe (valor do pequeno card)
            .and('be.visible') //Validando que elemento está visível (valor do pequeno card)

        //Pequeno card "Valor total parcelado"
        cy.get(':nth-child(1) > ._md > [style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(60% + 3px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(0% + 0px);"] > figure')
            .should('exist') //Validando que elemento existe (card todo)
            .and('be.visible') //Validando que elemento está visível (card todo)

        cy.get('h3.ng-scope')
            .should('exist') //Validando que elemento existe (título do pequeno título)
            .and('be.visible') //Validando que elemento está visível (título do pequeno título)
            .contains('Valor total parcelado') //Validando texto do botão "Valor total parcelado" (título do pequeno título)

        cy.get('[style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(60% + 3px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(0% + 0px);"] > figure > div.ng-scope > p > sup')
            .should('exist') //Validando que elemento existe (cifrão do pequeno título)
            .and('be.visible') //Validando que elemento está visível (cifrão do pequeno título)
            .and('have.text','R$') //Validando texto do botão "R$" (cifrão do pequeno título)

        cy.get(':nth-child(1) > ._md > [style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(60% + 3px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(0% + 0px);"] > figure > div.ng-scope > p > .ng-binding')
            .should('exist') //Validando que elemento existe (valor do pequeno card)
            .and('be.visible') //Validando que elemento está visível (valor do pequeno card)

        //Pequeno card "Rentabilidade"
        cy.get(':nth-child(1) > ._md > [style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(80% + 4px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(0% + 0px);"] > figure')
            .should('exist') //Validando que elemento existe (card todo)
            .and('be.visible') //Validando que elemento está visível (card todo)

        cy.get('h3.ng-scope')
            .should('exist') //Validando que elemento existe (título do pequeno título)
            .and('be.visible') //Validando que elemento está visível (título do pequeno título)
            .contains('Rentabilidade') //Validando texto do botão "Rentabilidade" (título do pequeno título)

        cy.get(':nth-child(1) > ._md > [style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(80% + 4px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(0% + 0px);"] > figure > div.ng-scope > p > .ng-binding')
            .should('exist') //Validando que elemento existe (valor do pequeno card)
            .and('be.visible') //Validando que elemento está visível (valor do pequeno card)

        //Pequeno card "Valor da comissão"
        cy.get(':nth-child(1) > ._md > [style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(0% + 0px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(15% + 1.5px);"] > figure')
            .should('exist') //Validando que elemento existe (card todo)
            .and('be.visible') //Validando que elemento está visível (card todo)

        cy.get('h3.ng-scope')
            .should('exist') //Validando que elemento existe (título do pequeno título)
            .and('be.visible') //Validando que elemento está visível (título do pequeno título)
            .contains('Valor da comissão') //Validando texto do botão "Valor da comissão" (título do pequeno título)

        cy.get('[style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(0% + 0px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(15% + 1.5px);"] > figure > div.ng-scope > p > sup')
            .should('exist') //Validando que elemento existe (cifrão do pequeno título)
            .and('be.visible') //Validando que elemento está visível (cifrão do pequeno título)
            .and('have.text','R$') //Validando texto do botão "R$" (cifrão do pequeno título)

        cy.get(':nth-child(1) > ._md > [style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(0% + 0px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(15% + 1.5px);"] > figure > div.ng-scope > p > .ng-binding')
            .should('exist') //Validando que elemento existe (valor do pequeno card)
            .and('be.visible') //Validando que elemento está visível (valor do pequeno card)

        //Pequeno card "Valor total de sub/sobre"
        cy.get(':nth-child(1) > ._md > [style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(20% + 1px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(15% + 1.5px);"] > figure')
            .should('exist') //Validando que elemento existe (card todo)
            .and('be.visible') //Validando que elemento está visível (card todo)

        cy.get('h3.ng-scope')
            .should('exist') //Validando que elemento existe (título do pequeno título)
            .and('be.visible') //Validando que elemento está visível (título do pequeno título)
            .contains('Valor total de sub/sobre') //Validando texto do botão "Valor total de sub/sobre" (título do pequeno título)

        cy.get(':nth-child(1) > ._md > [style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(20% + 1px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(15% + 1.5px);"] > figure > div.ng-scope > p > sup')
            .should('exist') //Validando que elemento existe (cifrão do pequeno título)
            .and('be.visible') //Validando que elemento está visível (cifrão do pequeno título)
            .and('have.text','R$') //Validando texto do botão "R$" (cifrão do pequeno título)

        cy.get(':nth-child(1) > ._md > [style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(20% + 1px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(15% + 1.5px);"] > figure > div.ng-scope > p > .ng-binding')
            .should('exist') //Validando que elemento existe (valor do pequeno card)
            .and('be.visible') //Validando que elemento está visível (valor do pequeno card)

        //Pequeno card "Markup do pedido"
        cy.get(':nth-child(1) > ._md > [style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(40% + 2px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(15% + 1.5px);"] > figure')
            .should('exist') //Validando que elemento existe (card todo)
            .and('be.visible') //Validando que elemento está visível (card todo)

        cy.get('h3.ng-scope')
            .should('exist') //Validando que elemento existe (título do pequeno título)
            .and('be.visible') //Validando que elemento está visível (título do pequeno título)
            .contains('Markup do pedido') //Validando texto do botão "Markup do pedido" (título do pequeno título)

        cy.get(':nth-child(1) > ._md > [style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(40% + 2px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(15% + 1.5px);"] > figure > div.ng-scope > p > .ng-binding')
            .should('exist') //Validando que elemento existe (valor do pequeno card)
            .and('be.visible') //Validando que elemento está visível (valor do pequeno card)

        //Pequeno card "MGC"
        cy.get('[style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(60% + 3px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(15% + 1.5px);"] > figure')
            .should('exist') //Validando que elemento existe (card todo)
            .and('be.visible') //Validando que elemento está visível (card todo)

        cy.get('h3.ng-scope')
            .should('exist') //Validando que elemento existe (título do pequeno título)
            .and('be.visible') //Validando que elemento está visível (título do pequeno título)
            .contains('MGC') //Validando texto do botão "MGC" (título do pequeno título)

        cy.get('[style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(60% + 3px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(15% + 1.5px);"] > figure > div.ng-scope > p > .ng-binding')
            .should('exist') //Validando que elemento existe (valor do pequeno card)
            .and('be.visible') //Validando que elemento está visível (valor do pequeno card)

        //Pequeno card "Valor total do produto"
        cy.get('[style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(80% + 4px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(15% + 1.5px);"] > figure')
            .should('exist') //Validando que elemento existe (card todo)
            .and('be.visible') //Validando que elemento está visível (card todo)

        cy.get('h3.ng-scope')
            .should('exist') //Validando que elemento existe (título do pequeno título)
            .and('be.visible') //Validando que elemento está visível (título do pequeno título)
            .contains('Valor total do produto') //Validando texto do botão "Valor total do produto" (título do pequeno título)

        cy.get('[style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(80% + 4px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(15% + 1.5px);"] > figure > div.ng-scope > p > sup')
            .should('exist') //Validando que elemento existe (cifrão do pequeno título)
            .and('be.visible') //Validando que elemento está visível (cifrão do pequeno título)
            .and('have.text','R$') //Validando texto do botão "R$" (cifrão do pequeno título)

        cy.get('[style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(80% + 4px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(15% + 1.5px);"] > figure > div.ng-scope > p > .ng-binding')
            .should('exist') //Validando que elemento existe (valor do pequeno card)
            .and('be.visible') //Validando que elemento está visível (valor do pequeno card)

        //Pequeno card "Valor total do produto à vista"
        cy.get('[style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(0% + 0px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(30% + 3px);"] > figure')
            .should('exist') //Validando que elemento existe (card todo)
            .and('be.visible') //Validando que elemento está visível (card todo)

        cy.get('h3.ng-scope')
            .should('exist') //Validando que elemento existe (título do pequeno título)
            .and('be.visible') //Validando que elemento está visível (título do pequeno título)
            .contains('Valor total do produto à vista') //Validando texto do botão "Valor total do produto à vista" (título do pequeno título)

        cy.get('[style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(0% + 0px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(30% + 3px);"] > figure > div.ng-scope > p > sup')
            .should('exist') //Validando que elemento existe (cifrão do pequeno título)
            .and('be.visible') //Validando que elemento está visível (cifrão do pequeno título)
            .and('have.text','R$') //Validando texto do botão "R$" (cifrão do pequeno título)

        cy.get('[style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(0% + 0px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(30% + 3px);"] > figure > div.ng-scope > p > .ng-binding')
            .should('exist') //Validando que elemento existe (valor do pequeno card)
            .and('be.visible') //Validando que elemento está visível (valor do pequeno card)

        //Pequeno card "Valor total do serviço"
        cy.get('[style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(20% + 1px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(30% + 3px);"] > figure')
            .should('exist') //Validando que elemento existe (card todo)
            .and('be.visible') //Validando que elemento está visível (card todo)

        cy.get('h3.ng-scope')
            .should('exist') //Validando que elemento existe (título do pequeno título)
            .and('be.visible') //Validando que elemento está visível (título do pequeno título)
            .contains('Valor total do serviço') //Validando texto do botão "Valor total do serviço" (título do pequeno título)

        cy.get('[style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(20% + 1px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(30% + 3px);"] > figure > div.ng-scope > p > sup')
            .should('exist') //Validando que elemento existe (cifrão do pequeno título)
            .and('be.visible') //Validando que elemento está visível (cifrão do pequeno título)
            .and('have.text','R$') //Validando texto do botão "R$" (cifrão do pequeno título)

        cy.get('[style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(20% + 1px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(30% + 3px);"] > figure > div.ng-scope > p > .ng-binding')
            .should('exist') //Validando que elemento existe (valor do pequeno card)
            .and('be.visible') //Validando que elemento está visível (valor do pequeno card)

        //Pequeno card "Valor total do serviço à vista"
        cy.get('[style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(40% + 2px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(30% + 3px);"] > figure')
            .should('exist') //Validando que elemento existe (card todo)
            .and('be.visible') //Validando que elemento está visível (card todo)

        cy.get('h3.ng-scope')
            .should('exist') //Validando que elemento existe (título do pequeno título)
            .and('be.visible') //Validando que elemento está visível (título do pequeno título)
            .contains('Valor total do serviço à vista') //Validando texto do botão "Valor total do serviço à vista" (título do pequeno título)

        cy.get('[style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(40% + 2px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(30% + 3px);"] > figure > div.ng-scope > p > sup')
            .should('exist') //Validando que elemento existe (cifrão do pequeno título)
            .and('be.visible') //Validando que elemento está visível (cifrão do pequeno título)
            .and('have.text','R$') //Validando texto do botão "R$" (cifrão do pequeno título)

        cy.get('[style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(40% + 2px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(30% + 3px);"] > figure > div.ng-scope > p > .ng-binding')
            .should('exist') //Validando que elemento existe (valor do pequeno card)
            .and('be.visible') //Validando que elemento está visível (valor do pequeno card) */


        //Texto "PRODUTOS" dentro do card Resumo por pedido
        cy.get('[ng-show="(dados.pedido.produto.length > 0)"] > .texto-produto')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('have.text','Produtos') //Validando se é exatamente o texto que queremos 

        //Nome do produto dentro do card Resumo por pedido
        cy.get('.titulo-produto')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            //.and('have.text','Produtos') //Validando se é exatamente o texto que queremos (pode variar de acordo com o produto)

        //Código do produto dentro do card Resumo por pedido
        cy.get('.layout-align-center-center > p.ng-binding')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            //.and('have.text','Produtos') //Validando se é exatamente o texto que queremos (pode variar de acordo com o produto)

        // Validando pequenos cards do produto dentro do Resumo do pedido 



        /* //Pequeno card "Valor total"
        cy.get('.itens > .layout-wrap > .padding-5 > ._md > [style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(0% + 0px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(0% + 0px);"] > figure')
            .should('exist') //Validando que elemento existe (card todo)
            .and('be.visible') //Validando que elemento está visível (card todo)

        cy.get('h3.ng-scope')
            .should('exist') //Validando que elemento existe (título do pequeno título)
            .and('be.visible') //Validando que elemento está visível (título do pequeno título)
            .contains('Valor total') //Validando texto do botão "Valor total" (título do pequeno título)

        cy.get('.itens > .layout-wrap > .padding-5 > ._md > [style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(0% + 0px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(0% + 0px);"] > figure > div.ng-scope > p > sup')
            .should('exist') //Validando que elemento existe (cifrão do pequeno título)
            .and('be.visible') //Validando que elemento está visível (cifrão do pequeno título)
            .and('have.text','R$') //Validando texto do botão "R$" (cifrão do pequeno título)

        cy.get('.itens > .layout-wrap > .padding-5 > ._md > [style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(0% + 0px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(0% + 0px);"] > figure > div.ng-scope > p > .ng-binding')
            .should('exist') //Validando que elemento existe (valor do pequeno card)
            .and('be.visible') //Validando que elemento está visível (valor do pequeno card)

        //Pequeno card "Valor total à vista"
        cy.get('.itens > .layout-wrap > .padding-5 > ._md > [style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(0% + 0px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(0% + 0px);"] > figure')
            .should('exist') //Validando que elemento existe (card todo)
            .and('be.visible') //Validando que elemento está visível (card todo)

        cy.get('h3.ng-scope')
            .should('exist') //Validando que elemento existe (título do pequeno título)
            .and('be.visible') //Validando que elemento está visível (título do pequeno título)
            .contains('Valor total à vista') //Validando texto do botão "Valor total à vista" (título do pequeno título)

        cy.get('.itens > .layout-wrap > .padding-5 > ._md > [style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(20% + 1px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(0% + 0px);"] > figure > div.ng-scope > p > sup')
            .should('exist') //Validando que elemento existe (cifrão do pequeno título)
            .and('be.visible') //Validando que elemento está visível (cifrão do pequeno título)
            .and('have.text','R$') //Validando texto do botão "R$" (cifrão do pequeno título)

        cy.get('.itens > .layout-wrap > .padding-5 > ._md > [style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(20% + 1px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(0% + 0px);"] > figure > div.ng-scope > p > .ng-binding')
            .should('exist') //Validando que elemento existe (valor do pequeno card)
            .and('be.visible') //Validando que elemento está visível (valor do pequeno card)

        //Pequeno card "Valor total de sub/sobre"
        cy.get('.itens > .layout-wrap > .padding-5 > ._md > [style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(40% + 2px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(0% + 0px);"] > figure')
            .should('exist') //Validando que elemento existe (card todo)
            .and('be.visible') //Validando que elemento está visível (card todo)

        cy.get('h3.ng-scope')
            .should('exist') //Validando que elemento existe (título do pequeno título)
            .and('be.visible') //Validando que elemento está visível (título do pequeno título)
            .contains('Valor total de sub/sobre') //Validando texto do botão "Valor total de sub/sobre" (título do pequeno título)

        cy.get('.itens > .layout-wrap > .padding-5 > ._md > [style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(40% + 2px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(0% + 0px);"] > figure > div.ng-scope > p > sup')
            .should('exist') //Validando que elemento existe (cifrão do pequeno título)
            .and('be.visible') //Validando que elemento está visível (cifrão do pequeno título)
            .and('have.text','R$') //Validando texto do botão "R$" (cifrão do pequeno título)

        cy.get('.itens > .layout-wrap > .padding-5 > ._md > [style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(40% + 2px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(0% + 0px);"] > figure > div.ng-scope > p > .ng-binding')
            .should('exist') //Validando que elemento existe (valor do pequeno card)
            .and('be.visible') //Validando que elemento está visível (valor do pequeno card)
        
        //Pequeno card "Percentual de sub/sobre"
        cy.get('.itens > .layout-wrap > .padding-5 > ._md > [style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(60% + 3px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(0% + 0px);"] > figure')
            .should('exist') //Validando que elemento existe (card todo)
            .and('be.visible') //Validando que elemento está visível (card todo)

        cy.get('h3.ng-scope')
            .should('exist') //Validando que elemento existe (título do pequeno título)
            .and('be.visible') //Validando que elemento está visível (título do pequeno título)
            .contains('Percentual de sub/sobre') //Validando texto do botão "Percentual de sub/sobre" (título do pequeno título)

        cy.get('.itens > .layout-wrap > .padding-5 > ._md > [style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(60% + 3px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(0% + 0px);"] > figure > div.ng-scope > p > .ng-binding')
            .should('exist') //Validando que elemento existe (valor do pequeno card)
            .and('be.visible') //Validando que elemento está visível (valor do pequeno card)

        //Pequeno card "Rentabilidade"
        cy.get('.itens > .layout-wrap > .padding-5 > ._md > [style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(80% + 4px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(0% + 0px);"] > figure')
            .should('exist') //Validando que elemento existe (card todo)
            .and('be.visible') //Validando que elemento está visível (card todo)

        cy.get('h3.ng-scope')
            .should('exist') //Validando que elemento existe (título do pequeno título)
            .and('be.visible') //Validando que elemento está visível (título do pequeno título)
            .contains('Rentabilidade') //Validando texto do botão "Rentabilidade" (título do pequeno título)

        cy.get('.itens > .layout-wrap > .padding-5 > ._md > [style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(80% + 4px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(0% + 0px);"] > figure > div.ng-scope > p > .ng-binding')
            .should('exist') //Validando que elemento existe (valor do pequeno card)
            .and('be.visible') //Validando que elemento está visível (valor do pequeno card)

        //Pequeno card "Markup"

        cy.get('.itens > .layout-wrap > .padding-5 > ._md > [style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(0% + 0px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(15% + 1.5px);"] > figure')
            .scrollIntoView()    
            .should('exist') //Validando que elemento existe (card todo)
            .and('be.visible') //Validando que elemento está visível (card todo)

        cy.get('h3.ng-scope')
            .should('exist') //Validando que elemento existe (título do pequeno título)
            .and('be.visible') //Validando que elemento está visível (título do pequeno título)
            .contains('Markup') //Validando texto do botão "Markup" (título do pequeno título)

        cy.get('.itens > .layout-wrap > .padding-5 > ._md > [style="background: rgb(33, 137, 70); color: rgba(255, 255, 255, 0.87); left: calc(0% + 0px); width: calc(20% - 4px); padding-top: calc(15% - 3.5px); margin-top: calc(15% + 1.5px);"] > figure > div.ng-scope > p > .ng-binding')
            .should('exist') //Validando que elemento existe (valor do pequeno card)
            .and('be.visible') //Validando que elemento está visível (valor do pequeno card) */

        cy.wait(500)

        //Botão "X" para sair do card "Resumo do pedido"
        cy.get('.md-dialog-resumo-pedido > .md-primary > .md-toolbar-tools > .md-icon-button > .ng-binding')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('not.have.attr', 'disabled') //Validando se o botão está habilitado
            
        //Clicar no botão "X" para sair do card "Resumo do pedido"
        cy.get('.md-dialog-resumo-pedido > .md-primary > .md-toolbar-tools > .md-icon-button > .ng-binding')
            .click({force:true})

        //Fim dos testes de pequenos cards do Resumo do pedido


        //Título "Formas de pagamento na Entrada"
        cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
            .scrollIntoView()
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('have.text','Formas de pagamento na Entrada') //Validando se é exatamente aquele título

        //Texto "Valor máximo da entrada", em Formas de pagamento na Entrada
        cy.get('.white > :nth-child(1) > md-list.md-default-theme > .padding-0 > .md-list-item-text > p')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('have.text','Valor máximo da entrada') //Validando se é exatamente aquele título

        //Símbolo de cifrão "R$"
        cy.get('.white > :nth-child(1) > md-list.md-default-theme > .padding-0 > .md-secondary-container > div > .ng-binding > sup')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('have.text','R$') //Validando se é exatamente aquele texto

        //Valor após o cifrão 
        cy.get('.white > :nth-child(1) > md-list.md-default-theme > .padding-0 > .md-secondary-container > div > .ng-binding')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //Texto "Valor da entrada"
        cy.get('.white > .layout-row.flex-100 > .layout-row')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain','Valor da entrada') //Validando texto "Valor da entrada", em Formas de pagamento na Entrada

        //Campo de valor
        cy.get('#input_208')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('have.value', '0,00') //Validando valor padrão que o campo traz
            .and('be.enabled') //validando se o campo está habilitado

        //Botão de cifrão "$"
        cy.get('.layout-row.flex-100 > :nth-child(1) > .md-fab')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('not.have.attr', 'disabled') //Validando se o botão está habilitado
            
        //Botão de cifrão "$"
        cy.get('.layout-row.flex-100 > :nth-child(1) > .md-fab')
            .click()

        //Campo de selecionar no campo "forma de pagamento"
        cy.get('#select_211')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain','Forma de pagamento') //Validando texto "Forma de pagamento"

        //Texto Entrada nesta forma de pagamento
        cy.get('label[for="input_214"]')
            .should('exist') // Verifica se o elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain.text', 'Entrada nesta forma de pagamento'); // Verifica se o texto está presente

        //Campo de valor
        cy.get('#input_214')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('be.enabled') //validando se o campo está habilitado

        //Botão "GERAR PAGAMENTO"
        cy.get('.white > .layout-align-center-center > .md-primary')
            .should('exist') // Verifica se o elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('have.text', 'Gerar pagamento'); // Verifica se o texto está presente
            
        cy.wait(500)
            
        //Botão "X"
        cy.get(':nth-child(3) > .md-fab')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('not.have.attr', 'disabled') //Validando se o botão está habilitado
            
        //Botão "X"
        cy.get(':nth-child(3) > .md-fab')
            .click()

        //Título "Formas de pagamento no Parcelamento"
        cy.get('[ng-show="exibeBoxFormasPgtoParcelar()"] > .md-primary > .md-toolbar-tools > .flex')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .should('have.text','Formas de pagamento no Parcelamento') //Validando título "Formas de pagamento no Parcelamento"

        //Texto "Valor para parcelamento", em Formas de pagamento no Parcelamento
        cy.get('[style="border-radius: 10px; border: 2px solid rgb(229, 229, 229); margin: 20px 10px;"] > .btn-rounded > .layout-wrap > :nth-child(1) > md-list.md-default-theme > .padding-0 > .md-list-item-text > p')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('have.text','Valor para parcelamento') //Validando texto "Valor para parcelamento"

        //Texto "R$", em Formas de pagamento no Parcelamento
        cy.get('[ng-show="carrinho.getValorParcelamento() > 0"] > .btn-rounded > .layout-wrap > :nth-child(1) > md-list.md-default-theme > .padding-0 > .md-secondary-container > div > .ng-binding > sup')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain','R$') //Validando texto "R$", em Formas de pagamento no Parcelamento

        //Valor do valor para parcelamento
        cy.get('[style="border-radius: 10px; border: 2px solid rgb(229, 229, 229); margin: 20px 10px;"] > .btn-rounded > .layout-wrap > :nth-child(1) > md-list.md-default-theme > .padding-0 > .md-secondary-container > div > .ng-binding')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //Texto "Valor da maior parcela", em Formas de pagamento no Parcelamento
        cy.get(':nth-child(2) > md-list.md-default-theme > .padding-0 > .md-list-item-text > p')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('have.text','Valor da maior parcela') //Validando texto "Valor da maior parcela", em Formas de pagamento no Parcelamento

        //Texto "R$", em Formas de pagamento no Parcelamento
        cy.get(':nth-child(2) > md-list.md-default-theme > .padding-0 > .md-secondary-container > div > .ng-binding > sup')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain','R$') //Validando texto "R$"

        //Valor do valor para parcelamento
        cy.get(':nth-child(2) > md-list.md-default-theme > .padding-0 > .md-secondary-container > div > .ng-binding')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //Texto "Valor máximo da parcela"
        cy.get('[style="border-radius: 10px; border: 2px solid rgb(229, 229, 229); margin: 20px 10px;"] > .btn-rounded > .layout-wrap')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain','Valor máximo da parcela') //Validando texto "Valor máximo da parcela"

        //Campo de valor do valor máximo de parcela
        cy.get('#input_215')
            .scrollIntoView()
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('have.value', '0,00') //Validando valor padrão que o campo traz
            .and('be.enabled') //validando se o campo está habilitado

        //Texto "Saldo"
        cy.get('.saldo')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .should('contain','Saldo:') //Validando texto "Saldo:", em Formas de pagamento no Parcelamento

        //Cifrão
        cy.get('.saldo > sup')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain','R$') //Validando texto "R$", em Formas de pagamento no Parcelamento

        //Texto "Valor a parcelar"
        cy.get('label[for="input_216"]')
            .should('exist') // Verifica se o elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain.text', 'Valor a parcelar'); // Verifica se o texto está presente

        //Campo de valor
        cy.get('#input_216')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('be.enabled') //validando se o campo está habilitado

        //Elemento "1º Vencimento"
        cy.get('md-input-container').find('label')
            .should('exist') // Verifica se o elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain.text', '1º Vencimento'); // Verifica se o texto do label está correto
          
        //ícone calendário 
        cy.get('.md-datepicker-button')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('be.enabled') //validando se o campo está habilitado

        //Data di primeiro vencimento 
        cy.get('#input_218')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('be.enabled') //validando se o campo está habilitado

        //Seta para baixo, do calendário 
        //cy.get('.md-datepicker-expand-triangle')
        //    .should('exist') //Validando que elemento existe
        //    .and('be.visible') //Validando que elemento está visível
        //    .and('be.enabled') //validando se o campo está habilitado
            
        //Seta para baixo, do calendário 
        cy.get('.md-datepicker-expand-triangle')
            .click()

        //Elemento calendário
        cy.get('thead > tr > :nth-child(2)')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        cy.wait(800)

        //Clicar fora para sair do calendário
        cy.get('.md-scroll-mask')
            .click()

        //Botão "GERAR PARCELAS"
        cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('have.text', 'Gerar parcelas') //Validando se é realmente aquele texto no botão
            .and('be.enabled') //validando se o campo está habilitado
            //COR   

        //Botão "GERAR PARCELAS"
        cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
            .click()

        cy.wait(7000)

        //Título do card "Forma de pagamento"
        cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('have.text', 'Forma de pagamento') //Validando se é realmente aquele texto no botão

        //Selecionando forma de pagamento
        cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .click()

        //Selecionando parcela na forma de pagamento
        cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .click()

        //Mensagem de carregamento após selecionar o processo
        //msgaguardecarregando() //função

        cy.wait(1000)

        //Código do processo
        cy.get('span.ng-binding > .ng-binding')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //Descrição do processo 
        cy.get('.layout-gt-sm-row > :nth-child(2) > span.ng-binding')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //Texto "1º Vencimento:"
        cy.get(':nth-child(3) > .ng-binding > b')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('have.text','1º Vencimento:') //Validando texto "1º Vencimento:"

        //Data do 1º Vencimento
        cy.get('.layout-gt-sm-row > :nth-child(3) > .ng-binding')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //Texto Valor sem juros:
        cy.get(':nth-child(5) > .ng-binding > b')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível    
            .and('have.text','Valor sem juros:') //Validando texto "Valor sem juros:"

        //Valor do Valor sem juros
        cy.get('.layout-gt-sm-row > :nth-child(5) > .ng-binding')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //Texto Valor da Parcela::
        cy.get(':nth-child(6) > .ng-binding > b')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('have.text','Valor da Parcela:') //Validando texto "Valor da Parcela:"

        //Valor do Valor da Parcela:
        cy.get('.layout-gt-sm-row > :nth-child(6) > .ng-binding')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //Texto Subtotal:
        cy.get(':nth-child(7) > .ng-binding > b')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('have.text','Subtotal:') //Validando texto "Subtotal:"

        //Valor do Subtotal
        cy.get('.layout-gt-sm-row > :nth-child(7) > .ng-binding')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

         //Botão "VOLTAR"
         cy.get(':nth-child(1) > .md-accent')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('be.enabled') //validando se o campo está habilitado
            .and('contain.text','Voltar') //Validando texto do botão "VOLTAR"
            //cor do botão

        //Botão "AVANÇAR"
        cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('be.enabled') //validando se o campo está habilitado
            .and('contain.text','Avançar') //Validando texto do botão "AVANÇAR"
            .click()
        
        //Mensagem de carregamento
        cy.get('h3')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain','Aguarde carregando...') //Validando mensagem de carregamento "Aguarde carregando..." 

        cy.wait(3500)

        // RESUMO DO PEDIDO - ANTES DE FINALIZAR


        //Função para validar o botão PDF, que baixa o PDF
        detalhevenda()

        //Botão "Resumo do Pedido"
        cy.get('.carrinho > .layout-wrap > .md-primary')
            .should('contain','Resumo do Pedido') //Validando texto botão "Resumo do Pedido"
            .and('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('not.have.attr', 'disabled') //Validando se o botão está habilitado

        //Título "Cliente"
        cy.get('.flex-gt-xs-100 > .md-primary > .md-toolbar-tools > .flex')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain.text','Cliente') //Validando título "Cliente", de "Cliente"

        //Texto "Nome:"
        cy.get('.cliente > :nth-child(1) > b')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain','Nome:') //Validando texto "Nome:", de "Cliente"

        //Texto na frente do Nome:
        cy.get('.padding-10 > :nth-child(1) > .cliente > :nth-child(1)')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //Texto "CPF/CNPJ:"
        cy.get('.cliente > :nth-child(2) > b')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain','CPF/CNPJ:') //Validando texto "CPF/CNPJ:", de "Cliente"

        //Texto na frente do CPF/CNPJ:
        cy.get('.padding-10 > :nth-child(1) > .cliente > :nth-child(2)')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //Texto "Tel. fixo:"
        cy.get('.cliente > :nth-child(3) > b')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain','Tel. fixo:') //Validando texto "Tel. fixo:", de "Cliente"

        //Texto na frente do Tel. fixo:
        cy.get('.padding-10 > :nth-child(1) > .cliente > :nth-child(3)')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //Texto "Tel. celular:"
        cy.get('.cliente > :nth-child(4) > b')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain','Tel. celular:') //Validando texto "Tel. celular:", de "Cliente"

        //Texto na frente do Tel. celular:
        cy.get('.cliente > :nth-child(4)')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //Texto "E-mail:"
        cy.get('.cliente > :nth-child(5) > b')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain','E-mail:') //Validando texto "E-mail:", de "Cliente"

        //Texto na frente do E-mail:
        cy.get('.cliente > :nth-child(5)')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //Texto "E-mail NF-e:"
        cy.get('.cliente > :nth-child(6) > b')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain','E-mail NF-e:') //Validando texto "E-mail NF-e:", de "Cliente"

        //Texto na frente do E-mail NF-e:
        cy.get('.cliente > :nth-child(6)')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //Botão "EDITAR"
        cy.get('.padding-10 > :nth-child(1) > .cliente > .md-accent')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('be.enabled') //validando se o campo está habilitado
            .should('contain.text','Editar') //Validando texto do botão "EDITAR", de "Cliente"

        //Botão do Consumidor Final
        cy.get('.md-container')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            //.and('be.enabled') //validando se o campo está habilitado
        
        //Texto "Consumidor Final"
        cy.get('.md-label')
            .scrollIntoView()
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain.text','Consumidor Final') //Validando texto do botão "Consumidor Final"

        //Texto "OBSERVAÇÕES PARA A NOTA FISCAL"
        cy.get(':nth-child(1) > .header-interno > label')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain.text','OBSERVAÇÕES PARA A NOTA FISCAL') //Validando texto "OBSERVAÇÕES PARA A NOTA FISCAL", de "Cliente"

        //Campo "Limite de 150 caracteres"
        cy.get(':nth-child(1) > .col-md-12 > .form-group > .form-control')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('have.value', '') //Validando ausencia de caracteres dentro do campo
            .and('contain.attr', 'maxlength', '150') //Validando quantidade máxima de caracteres permitidos dentro do campo

        //Texto "Limite de 150 caracteres"
        cy.get(':nth-child(1) > .col-md-12 > .form-group > span')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain.text','Limite de 150 caracteres') //Validando texto "Limite de 150 caracteres", de "Cliente"

        //Texto "OBSERVAÇÕES PARA USO INTERNO"
        cy.get(':nth-child(2) > .header-interno > label')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain.text','OBSERVAÇÕES PARA USO INTERNO') //Validando texto "OBSERVAÇÕES PARA USO INTERNO", de "Cliente"

        //Campo "Limite de 300 caracteres"
        cy.get(':nth-child(2) > .col-md-12 > .form-group > .form-control')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('have.value', '') //Validando ausencia de caracteres dentro do campo
            .and('have.attr', 'maxlength', '300') //Validando quantidade máxima de caracteres permitidos dentro do campo
        
        //Texto "Limite de 300 caracteres"
        cy.get(':nth-child(2) > .col-md-12 > .form-group > span')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain.text','Limite de 300 caracteres') //Validando texto "Limite de 300 caracteres", de "Cliente"

        cy.wait(1000)


        //PRODUTOS 

        //Título "Produtos"
        cy.get('.confirmacao-produtos > .md-primary > .md-toolbar-tools > .flex')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain.text','Produtos') //Validando texto "Produtos"

         //Imagem do produto
         cy.get('.produto-item-img > .full-width')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //Nome do produto
        cy.get('.titulo > .ng-binding')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //Texto "Quantidade:"
        cy.get('.descricao-pc > :nth-child(1) > b')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain.text','Quantidade:') //Validando texto "Quantidade:", de "Produtos"

        //Informação após "Quantidade:"
        cy.get('.descricao-pc > :nth-child(1)')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //Texto "Valor unitário:"
        cy.get('.descricao-pc > :nth-child(2) > b')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain.text','Valor unitário:') //Validando texto "Valor unitário:", de "Produtos"

        //Informação após "Valor unitário:"
        cy.get('.descricao-pc > :nth-child(2)')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //Texto "Local de faturamento:"
        cy.get('.descricao-pc > :nth-child(3) > b')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain.text','Local de faturamento:') //Validando texto "Local de faturamento:", de "Produtos"

        //Informação após "Local de faturamento:"
        cy.get('.descricao-pc > :nth-child(3)')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //Texto "Valor Total:"
        cy.get(':nth-child(4) > p.ng-binding')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain.text','Valor Total:') //Validando texto "Valor Total:", de "Produtos"

        //Cifrão após "Valor total:"
        cy.get(':nth-child(4) > p.ng-binding > .ng-binding > sup')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain','R$') //Validando texto "Valor Total:", de "Produtos"

        //Valor a frente do cifrão
        cy.get(':nth-child(4) > p.ng-binding > .ng-binding')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //TOTAL

        //Título "Total"
        cy.get(':nth-child(6) > .md-primary > .md-toolbar-tools > .flex')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain.text','Total') //Validando título "Total"

        //Texto "Total do pedido"
        cy.get(':nth-child(2) > .md-list-item-text > p')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain.text','Total do pedido') //Validando texto "Total do pedido", de "Total"

        //Cifrão
        cy.get(':nth-child(2) > .md-secondary-container > div > .ng-binding > sup')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain.text','R$') //Validando texto "R$", de "Total"

        //Quantidade a frente do cifrão
        cy.get(':nth-child(2) > .md-secondary-container > div > .ng-binding')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível


        //FINANCEIRO

        //Título "Financeiro"
        cy.get(':nth-child(7) > .btn-rounded > .md-toolbar-tools > .flex')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain.text','Financeiro') //Validando título "Financeiro"

        //Texto "Formas de pagamento no Parcelamento"
        cy.get('[ng-show="(formasPagamentoParcelar.length > 0)"] > .md-primary > h4')
            .scrollIntoView()
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain','Formas de pagamento no Parcelamento') //Validando texto 

        //Texto "Código"
        cy.get('.hide-sm > .flex-gt-sm-25 > .list-title > b')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain.text','Código') //Validando texto "Código", de "Financeiro"

        //Informação abaixo de "Código"
        cy.get('#item-index-0 > .flex-gt-sm-25 > .list-title')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
    
        //Texto "1º Vencimento"
        cy.get('[ng-show="(formasPagamentoParcelar.length > 0)"] > .list-container > .hide-sm > :nth-child(2) > .list-title > b')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain.text','1º Vencimento') //Validando texto "1º Vencimento", de "Financeiro"

        //Informação abaixo de "1º Vencimento"
        cy.get('#item-index-0 > :nth-child(2) > .list-title')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //Texto "Valor de entrada"
        cy.get('[ng-show="(formasPagamentoParcelar.length > 0)"] > .list-container > .hide-sm > :nth-child(3) > span > b')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain.text','Valor de entrada') //Validando texto "Valor de entrada", de "Financeiro"

        //Informação abaixo de "Valor de entrada"
        cy.get('#item-index-0 > :nth-child(3) > .ng-binding')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //Texto "Valor sem juros"
        cy.get('.hide-sm > :nth-child(4) > span > b')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain.text','Valor sem juros') //Validando texto "Valor sem juros", de "Financeiro"

        //Informação abaixo de "Valor sem juros"
        cy.get('#item-index-0 > :nth-child(4) > .ng-binding')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //Texto "Valor da Parcela"
        cy.get('.hide-sm > :nth-child(5) > span > b')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain.text','Valor da Parcela') //Validando texto "Valor da Parcela", de "Financeiro"

        //Informação abaixo de "Valor da Parcela"
        cy.get('#item-index-0 > :nth-child(5) > .ng-binding')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //Texto "Subtotal"
        cy.get('.hide-sm > :nth-child(6) > span > b')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain.text','Subtotal') //Validando texto "Subtotal", de "Financeiro"

        //Informação abaixo de "Subtotal"
        cy.get('#item-index-0 > :nth-child(6) > .ng-binding')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //Texto "Total financeiro"
        cy.get('h3')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain.text','Total financeiro') //Validando texto "Total financeiro", de "Financeiro"

        //Cifrão do "Total financeiro"
        cy.get(':nth-child(3) > .md-default-theme > .md-2-line > .md-secondary-container > div > .ng-binding > sup')
            .scrollIntoView()
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain.text','R$') //Validando texto "R$", de "Financeiro"

        //Informação de valor após o cifrão
        cy.get(':nth-child(3) > .md-default-theme > .md-2-line > .md-secondary-container > div > .ng-binding')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //Botão "VOLTAR"
        cy.get('.layout-align-end-end > :nth-child(1) > .md-accent')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain','Voltar') //Validando texto do botão 
            .and('be.enabled') //validando se o campo está habilitado

        //Botão "FINALIZAR PEDIDO"
        cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain','Finalizar pedido') //Validando texto do botão
            .and('be.enabled') //validando se o campo está habilitado
            .click()

        //Carregando a finalização do pedido
            

        //Título do card "Pedido Concluído"
        cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain.text','Finalizar pedido') //Validando texto do botão

        //"X" do car "Pedido Concluído"
        cy.get('.md-transition-in-add > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //ícone de carregamento do car "Pedido Concluído"
        cy.get('.layout-column > .md-accent')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //Texto "Finalizando pedido..." do car "Pedido Concluído"
        cy.get('.layout-column > h4')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain.text','Finalizando pedido...') //Validando texto do botão

        //Texto "Não atualize a página enquanto o pedido estiver sendo finalizado." do car "Pedido Concluído"
        cy.get('.layout-column > p')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain.text','ATENÇÃO:') //Validando texto do botão
            .and('contain.text','Não atualize a página enquanto o pedido estiver sendo finalizado.') //Validando texto do botão

        //Após gerar pedido


        //Título do card "Pedido Concluído"
        cy.get('.md-content-overflow > :nth-child(1) > .md-toolbar-tools > .flex')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain.text','Finalizar pedido') //Validando texto do botão

        //"X" do car "Pedido Concluído"
        cy.get('.md-content-overflow > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //Ícone verde de concluído
        cy.get('.icon')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //Elemento "Pedido gerado:"
        cy.get('.padding-10 > .layout-wrap > .flex-sm-50 > :nth-child(1)')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain.text','Pedido gerado:') //Validando texto do botão

        //Nuúmero do Pedido Gerado
        cy.get('#pedido-numero')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível

        //Elemento "Pedido gravado com sucesso!"
        cy.get('[ng-show="!editarPedido"]')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain.text','Pedido gravado com sucesso!') //Validando texto do botão

        //Botão "IMPRIMIR"
        cy.get('md-dialog-actions.layout-align-center-center > .md-accent')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain.text', 'Imprimir') //Validando se é realmente aquele texto no botão
            .and('be.enabled') //validando se o campo está habilitado

        //Botão "OK"
        cy.get('md-dialog-actions.layout-align-center-center > .md-primary')
            .should('exist') //Validando que elemento existe
            .and('be.visible') //Validando que elemento está visível
            .and('contain.text', 'Ok') //Validando se é realmente aquele texto no botão
            .and('be.enabled') //validando se o campo está habilitado
            .click()
        


    })
})

