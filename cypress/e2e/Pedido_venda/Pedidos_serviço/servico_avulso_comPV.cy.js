import { titulopagina } from '../../../support/para_todos';
import { processoVendaServicoAvulso, escolherClientePedido, iconeMenuOpcoes, clienteCompletoOpcaoMenu, clicarMenuClienteCompleto,
         clicarOpcaoServicos, aguardeCarregandoServico, botaoAddMaoObra, botaoAddGarantias, clicarAddGarantias,
         modalGarantiasServicosVinculados, okServicosVinculados, messServicoAdicionadoSucesso, botaoSalvarServico, messAguardeCarregando,
         messRegistroSalvoSucesso, messGarantiaJaAdicionada, clicarCarrinhoCompras, botaoAvancarPedido } from '../../../support/para_pedidos/para_servicos_avulsos';
import { botaoGerarParcelas, avancarFinal, botaoFinalizarPedido, finalizandoPedido, pedidoGerado, carregandoFormaPagamento, 
         escolherFormaPagamentoPrincipal, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/gerais_pedidos';


describe('Venda de serviço avulso, com pedido do produto já baixado', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login(); 
        titulopagina() 
    })

    context('Processo 9888 - caminho feliz', () => {

        it('Venda de garantia - 139 (T.A. Garantia Separa Mesmo Processo)', () => {
            
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

            //Clicando novamente para validar que não deixa adicionar mais garantias
            clicarAddGarantias()

            //Mensagem de "O Serviço Garantias já foi adicionado à esse produto.", quando tentamos adicionar novamente
            messGarantiaJaAdicionada()

            clicarCarrinhoCompras()

            botaoAvancarPedido()

            cy.wait(3000)

            botaoGerarParcelas()

            carregandoFormaPagamento()

            cy.wait(2000)
    
            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

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