//Importando funções 
import { titulopagina } from '../../support/uiUtils';

const filial = " 050 - PR - EMISSÃO NFe/NFCe "
const descricaoUsuario = "T.A. USUÁRIO AUTOMAÇÃO"
const versaoPW = "4.6.0.0"
const versaoREST = "16.45.1.11"

describe('Validações de layout - menu opções', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage(); 
    })

    context('Menu opções - validar as opções que o menu traz, mas sem entrar nas telas', () => {

        it.only('Menu opções - validar as opções que o menu traz, mas sem entrar nas telas', () => {

            cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
    
            //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
            titulopagina()

            //Topo da página - parte colorida
            cy.get('.topo > .md-toolbar-tools')
                .should('exist')
                .and('be.visible')

            //Ícone menu de opções
            cy.get('[aria-label="Menu de opções"] > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')
                //.and('have.class', 'ng-binding ng-scope material-icons md-default-theme') - aparecendo como undefined

            //Clica no ícone menu de opções
            cy.get('[aria-label="Menu de opções"] > .ng-binding')
                .click({force:true})

            //Validando imagem no início ndo modal menu
            cy.get('.md-primary > .logo > .md-default-theme > img')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //ícone Início 
            cy.get('md-icon[md-svg-src="images/icons/home.svg"]')
                .scrollIntoView()
                .should('exist')

            //Opção Início no menu de opções
            cy.get('a[aria-label="Início"]')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Opção Início no menu de opções
            cy.get('a[aria-label="Início"]')
                .should('have.attr', 'aria-label', 'Início')

            cy.wait(200)

            //ícone Departamentos 
            cy.get('md-icon[md-svg-src="images/icons/departamentos.svg"]')
                .scrollIntoView()
                .should('exist')

            //Opção Departamentos no menu de opções
            cy.get('a[aria-label="Departamentos"]')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Opção Departamentos no menu de opções
            cy.get('a[aria-label="Departamentos"]')
                .should('have.attr', 'aria-label', 'Departamentos')

            cy.wait(200)

            //ícone Serviços 
            cy.get('md-icon[md-svg-src="images/icons/services.svg"]')
                .scrollIntoView()
                .should('exist')

            //Opção Serviços no menu de opções
            cy.get('a[aria-label="Serviços"]')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Opção Serviços no menu de opções
            cy.get('a[aria-label="Serviços"]')
                .should('have.attr', 'aria-label', 'Serviços')

            cy.wait(200)

            //ícone Pedidos pendentes 
            cy.get('md-icon[md-svg-src="images/icons/pedido.svg"]')
                .scrollIntoView()
                .should('exist')

            //Opção Pedidos pendentes no menu de opções
            cy.get('a[aria-label="Pedidos pendentes"]')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Opção Pedidos pendentes no menu de opções
            cy.get('a[aria-label="Pedidos pendentes"]')
                .should('have.attr', 'aria-label', 'Pedidos pendentes')

            cy.wait(200)

            //ícone Cliente
            cy.get('md-icon[md-svg-src="images/icons/cliente.svg"]')
                .scrollIntoView()
                .should('exist')

            //Opção Cliente no menu de opções
            cy.get('a[aria-label="Cliente"]')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Opção Cliente no menu de opções
            cy.get('a[aria-label="Cliente"]')
                .should('have.attr', 'aria-label', 'Cliente')

            cy.wait(200)

            //ícone Cliente completo
            cy.get('md-icon[md-svg-src="images/icons/cliente_completo.svg"]')
                .scrollIntoView()
                .should('exist')

            //Opção Cliente completo no menu de opções
            cy.get('a[aria-label="Cliente completo"]')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Opção Cliente completo no menu de opções
            cy.get('a[aria-label="Cliente completo"]')
                .should('have.attr', 'aria-label', 'Cliente completo')

            cy.wait(200)

            //ícone Pós-venda 
            cy.get('md-icon[md-svg-src="images/icons/pos-venda.svg"]')
                .scrollIntoView()
                .should('exist')

            //Opção Pós-venda no menu de opções
            cy.get('a[aria-label="Pós-venda"]')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Opção Pós-venda no menu de opções
            cy.get('a[aria-label="Pós-venda"]')
                .should('have.attr', 'aria-label', 'Pós-venda')

            cy.wait(200)

            //ícone Intenção de compra 
            cy.get('md-icon[md-svg-src="images/icons/intencao.svg"]')
                .scrollIntoView()
                .should('exist')

            //Opção Intenção de compra no menu de opções
            cy.get('button[aria-label="Intenção de compra"]')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Opção Intenção de compra no menu de opções
            cy.get('button[aria-label="Intenção de compra"]')
                .should('have.attr', 'aria-label', 'Intenção de compra')

            cy.wait(200)

            //ícone Proposta de crédito 
            cy.get('md-icon[md-svg-src="images/icons/aprovacao_credito.svg"]')
                .scrollIntoView()
                .should('exist')

            //Opção Proposta de crédito no menu de opções
            cy.get('a[aria-label="Proposta de crédito"]')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Opção Proposta de crédito no menu de opções
            cy.get('a[aria-label="Proposta de crédito"]')
                .should('have.attr', 'aria-label', 'Proposta de crédito')

            cy.wait(200)

            //ícone Configurações
            cy.get('md-icon[md-svg-src="images/icons/settings.svg"]')
                .scrollIntoView()
                .should('exist')

            //Opção Configurações no menu de opções
            cy.get('a[aria-label="Configurações"]')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Opção Configurações no menu de opções
            cy.get('a[aria-label="Configurações"]')
                .should('have.attr', 'aria-label', 'Configurações')

            cy.wait(200)

            //ícone Minha performance
            cy.get('md-icon[md-svg-src="images/icons/performance.svg"]')
                .scrollIntoView()
                .should('exist')

            //Opção Minha performance no menu de opções
            cy.get('a[aria-label="Minha performance"]')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Opção Minha performance no menu de opções
            cy.get('a[aria-label="Minha performance"]')
                .should('have.attr', 'aria-label', 'Minha performance')

            cy.wait(200)

            //Validando descrição do usuário logado
            cy.get('.usuario > :nth-child(1)')
                .should('exist')
                .and('be.visible')
                .and('have.text', descricaoUsuario)

            //Validando filial
            cy.get('.usuario > div > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('have.text', filial)

            //Validando botão Sair
            cy.get('button[aria-label="Sair"]')
                .should('have.attr', 'aria-label', 'Sair')

            //Validando botão Sair
            cy.get('button[aria-label="Sair"]')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Validando mensagem de Pedido de Venda - final do modal
            cy.get('p.ng-binding')
                .should('exist')
                .and('be.visible')
                .and('contain', 'Pedido de Venda')
                .and('contain', '- ERP')

            //Validando mensagem de Pedido de Venda - final do modal - versão Pedido Web
            cy.get('#pvProjeto')
                .should('exist')
                .and('be.visible')
                .and('have.text', versaoPW)

            //Validando mensagem de Pedido de Venda - final do modal - versão REST
            cy.get('#pvERP')
                .should('exist')
                .and('be.visible')
                .and('have.text', versaoREST)

            //Clicaer na mensagem de Pedido de Venda - final do modal - versão Pedido Web
            cy.get('#pvProjeto')
                .click({force:true})

            cy.wait(200)

            //Primeiro alerta - card
            cy.get('#toast-container > :nth-child(1)')


            //Primeiro alerta - ALERTA
            cy.get(':nth-child(1) > .toast-title')


            //Primeiro alerta - mensagem do card
            cy.get(':nth-child(1) > .toast-message')



            //Primeiro alerta - botão X
            cy.get(':nth-child(1) > .toast-close-button')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Segundo alerta - card
            cy.get('#toast-container > :nth-child(2)')


            //Segundo alerta - ALERTA
            cy.get(':nth-child(2) > .toast-title')


            //Segundo alerta - mensagem do card
            cy.get(':nth-child(2) > .toast-message')



            //Segundo alerta - botão X
            cy.get(':nth-child(2) > .toast-close-button')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Terceiro alerta - card
            cy.get('#toast-container > :nth-child(3)')


            //Terceiro alerta - ALERTA
            cy.get(':nth-child(3) > .toast-title')


            //Terceiro alerta - mensagem do card
            cy.get(':nth-child(3) > .toast-message')


            //Terceiro alerta - botão X
            cy.get(':nth-child(3) > .toast-close-button')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

        })

    })  
})