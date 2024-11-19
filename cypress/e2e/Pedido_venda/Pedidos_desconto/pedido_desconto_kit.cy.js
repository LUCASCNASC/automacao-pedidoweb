import { titulopagina } from '../../../support/para_todos';
import { saldodisponivel, escolherClientePedido, pedidoGerado, botaoFinalizarPedido, processoVendaPrincipal, finalizandoPedido,
         modalServicosVinculados, okServicosVinculados, escolherProdutoPesquisa, escolherVoltagemProduto, avancarFinal,
         clicarAdicionarProduto, botaoGerarParcelas, carregandoFormaPagamento, tirarEntrega, escolherFormaPagamentoPrincipal,
         escolherDuasParcelaPagamento, avancarParaParcelas } from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoKitPrimeiro} from '../../../support/para_pedidos/produtos_pedidos';
import { clicarBotaoDesconto, validarModalSubSobre, aplicarDescontoValorFixo } from '../../../support/para_pedidos/para_pedido_desconto';

describe('Gerar pedido de venda Kit com desconto', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login(); 
        titulopagina()
        processoVendaPrincipal()
        escolherClientePedido()
        cy.wait(500)
    })
  
    context('Sem frete/ processo 9862 - caminho feliz', () => {
        
        it('Pedido de venda: kit 1862 0 0 com desconto Sub (-) / VALOR FIXO', () => {
    
            produtoKitPrimeiro()
            saldodisponivel()
            escolherProdutoPesquisa()
    
            cy.wait(200)
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
                      
            escolherVoltagemProduto()
            clicarAdicionarProduto()
    
            cy.wait(500)
    
            modalServicosVinculados()
            okServicosVinculados()

            clicarBotaoDesconto()
            validarModalSubSobre()
            aplicarDescontoValorFixo()
    
            tirarEntrega()
    
            cy.wait(400)
    
            avancarParaParcelas()
    
            // tela de GERAR PARCELAS
    
            cy.wait(6500)
    
            botaoGerarParcelas()
            carregandoFormaPagamento()
    
            cy.wait(6000)
    
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
    
            cy.wait(400)
    
            avancarFinal()
    
            cy.wait(6000)
        })
    })

    afterEach(() => {
        // RESUMO DO PEDIDO - ANTES DE FINALIZAR
        botaoFinalizarPedido()
        finalizandoPedido()
        cy.wait(9000)
        pedidoGerado()
      });
})