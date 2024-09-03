describe('Pedido produto sem saldo', () => {

    beforeEach(() => {
        cy.visit('http://10.7.0.42:2800/');
        cy.clearAllSessionStorage();
    })
  
    it('Tentar gerar pedido com produto sem saldo; processo 9860, produto 1869 0 0', () => {

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

        //pesquisar pelo produto 1869
        cy.get('#searchText')
            .type('1869')

        cy.get('.layout-align-center-center > .carregando')
            .should('contain','Aguarde carregando...') //Validando mensagem de carregamento, após digitarmos o produto que queremos
       
        cy.wait(4000)

        cy.get('.md-list-item-text > .ng-scope')
            .should('contain','Saldo indisponivel') //Validando informação "Saldo indisponpivel"
            .and('have.css', 'background-color', 'rgb(217, 83, 79)') // Validando cor do "Saldo disponpivel"

        cy.get('sup')
            .should('contain','R$') //Validando texto "R$"
        
        cy.get('[ng-click="alterarOrdenacaoPorDescricao()"]')
            .should('contain','Produto') //Validando título coluna "PRODUTO", após pesquisar produto

         cy.get('[ng-click="alterarOrdenacaoPorValor()"]')
            .should('contain','Valor') //Validando título coluna "VALOR", após pesquisar produto

        
        


    })
})

