import { titulopagina } from '../../../support/para_todos';
import {processoVendaServicoAvulso, escolherClientePedido, iconeMenuOpcoes, clienteCompletoOpcaoMenu, clicarMenuClienteCompleto,
        clicarOpcaoServicos, aguardeCarregandoServico, botaoAddMaoObra, botaoAddGarantias, clicarAddGarantias, clicarAddMaoObra, 
        modalGarantiasServicosVinculados, modalMaoObraServicosVinculados, okServicosVinculados, messServicoAdicionadoSucesso, 
        botaoSalvarServico, messAguardeCarregando, messRegistroSalvoSucesso, messGarantiaJaAdicionada, clicarCarrinhoCompras, 
        botaoAvancarPedido } from '../../../support/para_pedidos/para_servicos_avulsos';
import { botaoGerarParcelas, avancarFinal, botaoFinalizarPedido, finalizandoPedido, pedidoGerado } from '../../../support/para_pedidos/gerais_pedidos';

//o valor deve ser alterado para o is do produto que fechamos e baixamos.
const numero_pedido = '7708'

describe('Venda de serviço avulso, com pedido do produto já baixado', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
        titulopagina() //Validar título da aba carregada
    })

    context('Processo 9888 - caminho feliz', () => {

        it.skip('Venda de garantia - 139 (T.A. Garantia Separa Mesmo Processo)', () => {
            
            processoVendaServicoAvulso() 
            
            escolherClientePedido()

            iconeMenuOpcoes()

            clienteCompletoOpcaoMenu()

            clicarMenuClienteCompleto()

            clicarOpcaoServicos()

            aguardeCarregandoServico()

            //Validando campo
            cy.get('form.ng-pristine > .ng-pristine')
                .should('exist')
                .and('be.visible')
                .and('have.text', '')

            //Inserindo número do pedido no campo 
            cy.get('form.ng-pristine > .ng-pristine')
                .type(numero_pedido, {force:true})

            //Validando número do pedido
            cy.get('[ng-show="filtroShow(pedidoAtual)"][aria-hidden="false"] > .md-list-item-text > h3 > .ng-binding')
                .should('have.text', numero_pedido)

            botaoAddMaoObra()

            botaoAddGarantias()

            clicarAddGarantias()

            modalGarantiasServicosVinculados()

            //clicar na primeira garantia - Garantia Separa Mesmo Processo
            cy.get('#checkbox-139-0 > .md-container')
                .click({force:true})

            okServicosVinculados()

            messServicoAdicionadoSucesso()

            botaoSalvarServico()

            messAguardeCarregando()

            messRegistroSalvoSucesso()

            //Clicando novamente para validar que não deixa adicionar mais grantias
            clicarAddGarantias()

            //Mensagem de "O Serviço Garantias já foi adicionado à esse produto.", quando tentamos adicionar novamente
            messGarantiaJaAdicionada()

            clicarCarrinhoCompras()

            botaoAvancarPedido()

            cy.wait(3000)

            botaoGerarParcelas()

            cy.wait(2000)
    
            //Selecionando forma de pagamento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
                .click()
    
            //Selecionando parcela na forma de pagamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
                .click()

            cy.wait(400)

            avancarFinal()

            cy.wait(4000)
        })
    })

    afterEach(() => {
        // RESUMO DO PEDIDO - ANTES DE FINALIZAR
        botaoFinalizarPedido()
        finalizandoPedido()
        cy.wait(4000)
        pedidoGerado()
      });
})