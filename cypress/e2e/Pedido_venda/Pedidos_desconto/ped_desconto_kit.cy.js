import { titulopagina } from '../../../support/para_todos.js';
import { saldodisponivel, escolherClientePedido, pedidoGerado, botaoFinalizarPedido, processoVendaPrincipal, finalizandoPedido,
         modalServicosVinculados, okServicosVinculados, escolherProdutoPesquisa, escolherVoltagemProduto, avancarFinal,
         clicarAdicionarProduto, botaoGerarParcelas, carregandoFormaPagamento, tirarEntrega, escolherFormaPagamentoPrincipal,
         escolherDuasParcelaPagamento, avancarParaParcelas, composicaoDesteKit } from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoKitDesconto} from '../../../support/para_pedidos/produtos_pedidos.js';
import { clicarBotaoDesconto, validarModalSubSobre, aplicarDescontoValorFixo } from '../../../support/para_pedidos/para_pedido_desconto.js';

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
        
        it('1-Pedido de venda: kit 1862 0 0 com desconto Sub (-) / VALOR FIXO', () => {
    
            produtoKitDesconto() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)  
            escolherVoltagemProduto()
            composicaoDesteKit()
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            clicarBotaoDesconto() //DESCONTO
            validarModalSubSobre()
            aplicarDescontoValorFixo()
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(6500)
            botaoGerarParcelas() //GERAR PARCELAS
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
        botaoFinalizarPedido() //RESUMO
        finalizandoPedido()
        cy.wait(9000)
        pedidoGerado()
      });
})