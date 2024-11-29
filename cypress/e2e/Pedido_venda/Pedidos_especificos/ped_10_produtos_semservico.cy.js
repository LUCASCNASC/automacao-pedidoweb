import { titulopagina } from '../../../support/para_todos.js';
import { escolherTransportadora, saldodisponivel, escolherRota, escolherClientePedido, pedidoGerado, botaoFinalizarPedido,
         finalizandoPedido, tirarEntrega, tirarMontagem, tirarEntregaSegundo, tirarMontagemSegundo, botaoGerarParcelas, processoVendaPrincipal, 
         avancarParaTransportadora, avancarParcelasEntrega, modalServicosVinculados, okServicosVinculados, escolherProdutoPesquisa,
         avancarFinal, modalInconsRotaTransp, carregandoFormaPagamento, trocarFilialFaturamento } from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoPrincipal, botãoAdicionarProduto, clicarVoltagem1, clicarVoltagem2, clicarVoltagem3, clicarVoltagem4, clicarVoltagem5,
         clicarVoltagem6, clicarVoltagem7, clicarVoltagem8, clicarVoltagem9, clicarVoltagem10, clicarVoltagem11, clicarVoltagem12,
         clicarVoltagem13, clicarVoltagem14, clicarVoltagem15, clicarVoltagem16, clicarVoltagem17, clicarVoltagem18, clicarVoltagem19, 
         tirarEntregaTerceiro, tirarEntregaQuarto, tirarEntregaQuinto, tirarEntregaSexto, tirarEntregaSetimo, tirarEntregaOitavo,
         tirarEntregaNono, tirarEntregaDecimo} from '../../../support/para_pedidos/para_pedidos_10_produtos_semservico.js';

describe('Gerar pedido normal - sem serviço vinculado e tirar a entrega', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        titulopagina()
        processoVendaPrincipal()
        escolherClientePedido()
        cy.wait(700)
    })

    context('Sem frete/ processo 9860 - caminho feliz', () => {

        it.only('Pedido de venda: produto 1860 0 0', () => {

            produtoPrincipal() //primeira pesquisa de produto - 1907 1 1
            cy.wait(1500)
            escolherProdutoPesquisa() //primeira vez escolher produto - 1907 1 1
            cy.wait(500)
            clicarVoltagem1() // primeira escolha de voltagem - 1907 1 1
            botãoAdicionarProduto() //primeira adicionando produto - 1907 1 1
            cy.wait(500)
            tirarEntrega()
            cy.wait(500)

            produtoPrincipal() //segunda pesquisa de produto - 1907 2 2
            cy.wait(1800)
            escolherProdutoPesquisa() //segunda vez escolher produto - 1907 2 2
            cy.wait(700)
            clicarVoltagem2() // segunda escolha de voltagem - 1907 2 2
            botãoAdicionarProduto() //segunda adicionando produto - 1907 2 2
            cy.wait(700)
            tirarEntregaSegundo()
            cy.wait(800)

            produtoPrincipal() //teceira pesquisa de produto - 1907 3 3
            cy.wait(2100)
            escolherProdutoPesquisa() //teceira vez escolher produto - 1907 3 3
            cy.wait(900)
            clicarVoltagem3() // teceira escolha de voltagem - 1907 3 3
            botãoAdicionarProduto() //teceira adicionando produto - 1907 3 3
            cy.wait(900)
            tirarEntregaTerceiro()
            cy.wait(1100)

            produtoPrincipal() //quarta pesquisa de produto - 1907 4 4
            cy.wait(2400)
            escolherProdutoPesquisa() //quarta vez escolher produto - 1907 4 4
            cy.wait(1100)
            clicarVoltagem4() //quarta escolha de voltagem - 1907 4 4
            botãoAdicionarProduto() //quarta adicionando produto - 1907 4 4
            cy.wait(1100)
            tirarEntregaQuarto()
            cy.wait(1400)

            produtoPrincipal() //quinta pesquisa de produto - 1907 5 5
            cy.wait(2700)
            escolherProdutoPesquisa() //quinta vez escolher produto - 1907 5 5
            cy.wait(1300)
            clicarVoltagem5() //quinta escolha de voltagem - 1907 5 5
            botãoAdicionarProduto() //quinta adicionando produto - 1907 5 5
            cy.wait(1300)
            tirarEntregaQuinto()
            cy.wait(1700)

            produtoPrincipal() //sexta pesquisa de produto - 1907 6 6
            cy.wait(3000)
            escolherProdutoPesquisa() //sexta vez escolher produto - 1907 6 6
            cy.wait(1500)
            clicarVoltagem6() //sexta escolha de voltagem - 1907 6 6
            botãoAdicionarProduto() //sexta adicionando produto - 1907 6 6
            cy.wait(1500)
            tirarEntregaSexto()
            cy.wait(2000)

            produtoPrincipal() //sétima pesquisa de produto - 1907 7 7
            cy.wait(3300)
            escolherProdutoPesquisa() //sétima vez escolher produto - 1907 7 7
            cy.wait(1700)
            clicarVoltagem7() //sétima escolha de voltagem - 1907 7 7
            botãoAdicionarProduto() //sétima adicionando produto - 1907 7 7
            cy.wait(1700)
            tirarEntregaSetimo()
            cy.wait(2300)

            produtoPrincipal() //oitava pesquisa de produto - 1907 8 8
            cy.wait(3600)
            escolherProdutoPesquisa() //oitava vez escolher produto - 1907 8 8
            cy.wait(1900)
            clicarVoltagem8() //oitava escolha de voltagem - 1907 8 8
            botãoAdicionarProduto() //oitava adicionando produto - 1907 8 8
            cy.wait(1900)
            tirarEntregaOitavo()
            cy.wait(2600)

            produtoPrincipal() //nona pesquisa de produto - 1907 9 9
            cy.wait(3900)
            escolherProdutoPesquisa() //nona vez escolher produto - 1907 9 9
            cy.wait(2100)
            clicarVoltagem9() //nona escolha de voltagem - 1907 9 9
            botãoAdicionarProduto() //nona adicionando produto - 1907 9 9
            cy.wait(2100)
            tirarEntregaNono()
            cy.wait(2900)

            produtoPrincipal() //décima pesquisa de produto - 1907 10 10
            cy.wait(4200)
            escolherProdutoPesquisa() //décima vez escolher produto - 1907 10 10
            cy.wait(2300)
            clicarVoltagem10() //décima escolha de voltagem - 1907 10 10
            botãoAdicionarProduto() //décima adicionando produto - 1907 10 10
            cy.wait(2300)
            tirarEntregaDecimo()
            cy.wait(3200)

            produtoPrincipal() //onze pesquisa de produto - 1907 11 11
            cy.wait(4500)
            escolherProdutoPesquisa() //onze vez escolher produto - 1907 11 11
            cy.wait(2700)
            clicarVoltagem11() //onze escolha de voltagem - 1907 11 11
            botãoAdicionarProduto() //onze adicionando produto - 1907 11 11
            cy.wait(2700)
            //tirarEntregaOnze()
            cy.wait(3500)

            produtoPrincipal() //doze pesquisa de produto - 1907 12 12
            cy.wait(4800)
            escolherProdutoPesquisa() //doze vez escolher produto - 1907 12 12
            cy.wait(2900)
            clicarVoltagem12() //doze escolha de voltagem - 1907 12 12
            botãoAdicionarProduto() //doze adicionando produto - 1907 12 12
            cy.wait(2900)
            //tirarEntregaDoze()
            cy.wait(3800)

            produtoPrincipal() //treze pesquisa de produto - 1907 13 13
            cy.wait(5100)
            escolherProdutoPesquisa() //treze vez escolher produto - 1907 13 13
            cy.wait(3100)
            clicarVoltagem13() //treze escolha de voltagem - 1907 13 13
            botãoAdicionarProduto() //treze adicionando produto - 1907 13 13
            cy.wait(3100)
            //tirarEntregaTreze()
            cy.wait(4200)

            produtoPrincipal() //quatorze pesquisa de produto - 1907 14 14
            cy.wait(5400)
            escolherProdutoPesquisa() //quatorze vez escolher produto - 1907 14 14
            cy.wait(3300)
            clicarVoltagem13() //quatorze escolha de voltagem - 1907 14 14
            botãoAdicionarProduto() //quatorze adicionando produto - 1907 14 14
            cy.wait(3300)
            //tirarEntregaQuatorze()
            cy.wait(4500)

            
            // ENTREGA TIRADA APENAS ATÉ O PRODUTO 1907 10 10

            
        })
    })

//     afterEach(() => {
//         // RESUMO DO PEDIDO - ANTES DE FINALIZAR
//         botaoFinalizarPedido()
//         finalizandoPedido()
//         cy.wait(10000)
//         pedidoGerado()
//       });
})