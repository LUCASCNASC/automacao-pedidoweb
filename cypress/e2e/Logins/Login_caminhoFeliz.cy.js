describe('Validar tela de login', () => {

    beforeEach(() => {
        cy.visit('http://10.7.0.42:2800/');
        cy.clearAllSessionStorage();
    })
  
    it('Tentar logar no pedido web - caminho feliz (deve entrar sem problemas).', () => {
        
        cy.title()
            .should('eq', 'Sabium Mobile') //Validando título da página

            
        cy.get('[ng-click="clienteStatsOpen()"] > .ng-binding') //ícone do computador
            .should('be.visible') //Validando se o ícone está aparecendo
            .click() //Clicando no ícone do Computador

        cy.wait(2300)

        cy.get(':nth-child(4) > .ico') //ícone Windows
            .should('be.visible') //Validando se o ícone está aparecendo


        cy.get(':nth-child(6) > .ico') //ícone do navegador
            .should('be.visible') //Validando se o ícone está aparecendo


        cy.get('[style="color:#333;font-size:110%;margin:0"]')
            .should('contain.text','Resolução Disponível') // Validando se o texto "Resolução Disponível" está sendo exibido
            .and('have.text', 'Resolução Disponível') //Validando se é exatamente o texto "Resolução Disponível"


        cy.get('#dialogContent_4 > :nth-child(3)')
            .should('contain.text','Sistema Operacional') //Validando texto "Sistema Operacional"
            .and('have.text', 'Sistema Operacional') //Validando se é exatamente o texto "Sistema Operacional"


        cy.get('#dialogContent_4 > :nth-child(5)')
            .should('contain.text','Navegador') //Validando texto "Navegador"
            .and('have.text', 'Navegador') //Validando se é exatamente o texto "Navegador"


        cy.get('#dialogContent_4 > :nth-child(8)')
            .should('contain.text','Acesso ao Serviço REST') //Validando texto "Acesso ao Serviço REST"
            .and('have.text', 'Acesso ao Serviço REST') //Validando se é exatamente o texto "Acesso ao Serviço REST"


        cy.get('#dialogContent_4 > .layout-align-center-center > .md-raised')
            .should('contain','Ok') //Validando texto do botão "OK"
            .and('be.visible') //Validando se botão está visível
            .and('not.be.disabled') //Validando se botão está habilitado
            .click() //Clicando no botão "Ok"


        cy.get('.ng-pristine.flex-100 > .layout-column')
            .should('contain','Usuário') //Validando texto "Usuário"
            .and('contain','Senha') //Validando texto "Senha"
            .and('contain','Esqueceu a senha?') //Validando texto "Esqueceu a senha?"


        //Validar botão antes de inserir usuário e senha: deve estar desabilitado
        cy.get('.test_btnSalvarCliente')
            .should('be.visible') //Validando se botão está visível
            .and('contain','Entrar') //Validando texto do botão
            .and('be.disabled') //Validando se botão está desabilitado
        
        
        //Passando login do usuário
        cy.get('#txtusername')
            .should('have.attr', 'placeholder', 'Informe seu usuário') //Validando texto "Informe seu usuário" dentro do campo Usuário
            .type('sabium.automacao') //Passando usuário dentro do campo "Informe seu usuário"
            .should('have.value', 'sabium.automacao') //Validando se o usuário inserido é o mesmo exibido no campo
            .and('contain.value', 'sabium.automacao') //Validando se o texto foi realmente inserido
            .clear() //Limpando o campo
            .should('have.value', '') //Validando se o campo foi realmente limpo
            .type('sabium.automacao') //Inserindo o usuário correto novamente


        cy.wait(2000)


        //Validar botão antes de inserir senha: deve estar desabilitado
        cy.get('.test_btnSalvarCliente')
            .should('be.visible') //Validando se botão está visível
            .and('contain','Entrar') //Validando texto do botão
            .and('be.disabled') //Validando se botão está desabilitado


        //Passando senha do usuário
        cy.get('#txtpassword')
            .should('have.attr', 'placeholder', 'Informe sua senha') //Validando texto "Informe sua senha" dentro do campo Senha
            .type('123.automacao') //Passando senha dentro do campo "Informe sua senha"
            .should('have.value', '123.automacao') //Validando se o usuário inserido é o mesmo exibido no campo
            .and('contain.value', '123.automacao') //Validando se o texto foi realmente inserido
            .clear() //Limpando o campo
            .should('have.value', '') //Validando se o campo foi realmente limpo
            .type('123.automacao') //Inserindo o usuário correto novamente


        cy.wait(1500)


        cy.get('.md-icon-right > .md-primary') 
            .should('be.visible')//Validando a existencia do botão
            .click() //Clicando no botão para visualizar a senha
            .wait(1500)
            .click() //Clicando no botão para parar de visualizar a senha


        cy.wait(2000)


        cy.get('.test_btnSalvarCliente')
            .should('be.visible') //Validando se botão está visível
            .and('contain','Entrar') //Validando texto do botão
            .and('not.be.disabled') //Validando se botão está habilitado
            .click() //Clicando para entrar no sistema


        cy.get('.ng-scope > .ng-binding')
            .should('contain.text','Entrando no sistema') //Validando mensagem "Entrando no sistema" logo após clicarmos no botão Entrar
            .and('be.visible') //Verificar se mensagem está visível


        cy.wait(6000)


        cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
            .should('contain','Cliente') //Validando algum elemento de dentro, para validar se realmente entrou
    })

})