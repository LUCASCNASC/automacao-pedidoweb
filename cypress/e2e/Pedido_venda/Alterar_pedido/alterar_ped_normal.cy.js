import { titulopagina } from '../../../support/para_todos.js';
import { escolherTransportadora, saldodisponivel, escolherRota, escolherClientePedido, pedidoGerado, botaoFinalizarPedido,
         finalizandoPedido, clicarAdicionarProduto, tirarEntrega, tirarEntregaSegundo, botaoGerarParcelas, processoVendaPrincipal,
         avancarParaParcelas, avancarParaTransportadora, avancarParcelasEntrega, modalServicosVinculados, okServicosVinculados,
         escolherProdutoPesquisa, escolherVoltagemProduto, avancarFinal, modalInconsRotaTransp, carregandoFormaPagamento,
         escolherFormaPagamentoPrincipal, escolherDuasParcelaPagamento, escolherEntradaFormaPagamento, clicarGerarPagamento,
         escolherUmaParcelaPagamento, }  from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoNormalPrimeiro, produtoNormalSegundo } from '../../../support/para_pedidos/produtos_pedidos.js';
import { okPedidoGerado, iconeMenuOpcoesPed, pedidosPendentesOpcaoMenuPed, escolherPedidoPendente, clicarDetalhes, infosPedidoValidarInfos,
         infosPedidoValidarBotoes, clicarEditarPedido, menssCarregarPedAlterar } from '../../../support/para_pedidos/para_alterar_pedido.js';

describe('Gerar pedido normal, entrar alterando, modificar e salvar.', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        titulopagina()
        processoVendaPrincipal()
        escolherClientePedido()
        cy.wait(500)
    })

    context('Sem frete/ processo 9860 - caminho feliz', () => {

        it('Gerar pedido, alterar aumentando quantidade de produto e adicionando outro produto e um kit.', () => {

            produtoNormalPrimeiro() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)
            escolherVoltagemProduto() 
            clicarAdicionarProduto()
            cy.wait(500)

            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
    
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(5500)

            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            cy.wait(5000)
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            cy.wait(6000)
            botaoFinalizarPedido() //RESUMO
            finalizandoPedido()
            cy.wait(6000)
            pedidoGerado()
            okPedidoGerado()
            cy.wait(1500)

            iconeMenuOpcoesPed()
            pedidosPendentesOpcaoMenuPed() //PEDIDOS PENDENTES
            escolherPedidoPendente()
            clicarDetalhes()
            //infosPedidoValidarInfos()
            //infosPedidoValidarBotoes()
            clicarEditarPedido()
            menssCarregarPedAlterar()
            cy.wait(6000)


        })
    })
})