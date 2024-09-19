describe('Tentar logar no pedido web - esqueceu a senha?', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
    })
  
    it.skip('Tentar logar no pedido web - esqueceu a senha? - sem email cadastrado.', () => {
        
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
        
        

        const usupreenchido = "sabium.automacao" //Variável para o login do usuário
        //Passando login do usuário
        cy.get('#txtusername')
            .should('have.attr', 'placeholder', 'Informe seu usuário') //Validando texto "Informe seu usuário" dentro do campo Usuário
            .type(usupreenchido) //Passando usuário dentro do campo "Informe seu usuário"
            .should('have.value', 'sabium.automacao') //Validando se o usuário inserido é o mesmo exibido no campo
            .and('contain.value', 'sabium.automacao') //Validando se o texto foi realmente inserido
            .clear() //Limpando o campo
            .should('have.value', '') //Validando se o campo foi realmente limpo
            .type(usupreenchido) //Inserindo o usuário correto novamente


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


        cy.wait(1500)

        
        //Botão "Esqueceu a senha?"
        cy.contains('div', 'Esqueceu a senha?')
            .should('exist') //Verificar se o elemento existe
            .and('have.css', 'color', 'rgb(63, 81, 181)')//Verificar a cor do elemento
            .and('have.attr', 'role', 'button') //Verificar o role do elemento
            .and('have.attr', 'tabindex', '0') //Verificar o tabindex do elemento
            .and('be.visible') //Verificar se o elemento está visível
            .click() //Clicar no botão "Esqueceu a senha?"


        cy.wait(1500)
            
        
        //CARD de RECUPERAÇÃO DE ACESSO

        //Validando texto "Recuperação de Acesso"
        cy.get('p')
            .should('exist') //Verificar se o elemento existe
            .and('be.visible') //Verificar se o elemento está visível
            .and('have.text', 'Recuperação de Acesso') //Verificar se é exatamente aquele texto

        
        //Validando ícone
        cy.get('#dialogContent_9 > .md-icon-float > .name')
            .should('exist') //Validando de ícone existe
            .and('be.visible') //Validando se ícone está visível

        
        //Campo do usuário
        cy.get('#input_8')
            .should('exist') //Validando se o campo existe
            .and('be.visible') //Validando se campo está visível
            .and('not.have.value', '') //Validando se o campo não está vazio
            .invoke('val') // Obtém o valor do campo 
            .should('equal', usupreenchido); // Compara com o valor esperado
            

        //Botão "Fechar"
        cy.get('a')
            .should('exist') //Validando se o campo existe
            .and('be.visible') //Validando se campo está visível
            .and('have.text','Fechar') //Validando se é o texto exato "Fechar"


        //Botão "Confirmar"
        cy.get(':nth-child(3) > .md-raised')
            .should('exist') //Validando se o campo existe
            .and('be.visible') //Validando se campo está visível
            .and('have.text','Confirmar') //Validando se é o texto exato "Confirmar"
            .invoke('css', 'background-color') // Obtém a cor de fundo do botão
            .should('equal', 'rgb(63, 81, 181)'); // Compara com o valor esperado em RGB
        

        cy.wait(1500)


        cy.get(':nth-child(3) > .md-raised')
        .click() //Clicar no botão "CONFIRMAR"
        
        
        //Ícone de erro ao clicar em "CONFIRMAR"
        cy.get('md-icon.md-theme-theme')
            .should('exist') //Validando se o ícone existe
            .and('be.visible') //Validando se ícone está visível


        //Validando mensagem de erro ao clicar em "CONFIRMAR"
        cy.get('p.ng-binding')
            .should('exist') //Validando se o elemento e existe
            .and('contain','Seu Usuário não possui um e-mail cadastrado: você não pode receber a nova Senha gerada.')
            .and('contain','Entre em contato com um Administrador para trocar sua Senha.')
            .and('be.visible') //Validando se o elemento está visível

    })

    it.skip('Tentar logar no pedido web - esqueceu a senha? - com email cadastrado.', () => {
        
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
        
        

        const usupreenchido = "sabium.automacao" //Variável para o login do usuário
        //Passando login do usuário
        cy.get('#txtusername')
            .should('have.attr', 'placeholder', 'Informe seu usuário') //Validando texto "Informe seu usuário" dentro do campo Usuário
            .type(usupreenchido) //Passando usuário dentro do campo "Informe seu usuário"
            .should('have.value', 'sabium.automacao') //Validando se o usuário inserido é o mesmo exibido no campo
            .and('contain.value', 'sabium.automacao') //Validando se o texto foi realmente inserido
            .clear() //Limpando o campo
            .should('have.value', '') //Validando se o campo foi realmente limpo
            .type(usupreenchido) //Inserindo o usuário correto novamente


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


        cy.wait(1500)

        
        //Botão "Esqueceu a senha?"
        cy.contains('div', 'Esqueceu a senha?')
            .should('exist') //Verificar se o elemento existe
            .and('have.css', 'color', 'rgb(63, 81, 181)')//Verificar a cor do elemento
            .and('have.attr', 'role', 'button') //Verificar o role do elemento
            .and('have.attr', 'tabindex', '0') //Verificar o tabindex do elemento
            .and('be.visible') //Verificar se o elemento está visível
            .click() //Clicar no botão "Esqueceu a senha?"


        cy.wait(1500)
            
        
        //CARD de RECUPERAÇÃO DE ACESSO

        //Validando texto "Recuperação de Acesso"
        cy.get('p')
            .should('exist') //Verificar se o elemento existe
            .and('be.visible') //Verificar se o elemento está visível
            .and('have.text', 'Recuperação de Acesso') //Verificar se é exatamente aquele texto

        
        //Validando ícone
        cy.get('#dialogContent_9 > .md-icon-float > .name')
            .should('exist') //Validando de ícone existe
            .and('be.visible') //Validando se ícone está visível

        
        //Campo do usuário
        cy.get('#input_8')
            .should('exist') //Validando se o campo existe
            .and('be.visible') //Validando se campo está visível
            .and('not.have.value', '') //Validando se o campo não está vazio
            .invoke('val') // Obtém o valor do campo 
            .should('equal', usupreenchido); // Compara com o valor esperado
            

        //Botão "Fechar"
        cy.get('a')
            .should('exist') //Validando se o campo existe
            .and('be.visible') //Validando se campo está visível
            .and('have.text','Fechar') //Validando se é o texto exato "Fechar"


        //Botão "Confirmar"
        cy.get(':nth-child(3) > .md-raised')
            .should('exist') //Validando se o campo existe
            .and('be.visible') //Validando se campo está visível
            .and('have.text','Confirmar') //Validando se é o texto exato "Confirmar"
            .invoke('css', 'background-color') // Obtém a cor de fundo do botão
            .should('equal', 'rgb(63, 81, 181)'); // Compara com o valor esperado em RGB
        

        cy.wait(1500)


        cy.get(':nth-child(3) > .md-raised')
        .click() //Clicar no botão "CONFIRMAR"
        
        
        //Ícone de erro ao clicar em "CONFIRMAR"
        cy.get('md-icon.md-theme-theme')
            .should('exist') //Validando se o ícone existe
            .and('be.visible') //Validando se ícone está visível


        //Validando mensagem de erro ao clicar em "CONFIRMAR"
        cy.get('p.ng-binding')
            .should('exist') //Validando se o elemento e existe
            .and('contain','Seu Usuário não possui um e-mail cadastrado: você não pode receber a nova Senha gerada.')
            .and('contain','Entre em contato com um Administrador para trocar sua Senha.')
            .and('be.visible') //Validando se o elemento está visível

    })

})