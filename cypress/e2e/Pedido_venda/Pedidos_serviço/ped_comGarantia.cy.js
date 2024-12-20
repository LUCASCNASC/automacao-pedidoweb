import { titulopagina } from '../../../support/para_todos';
import { escolherTransportadora, saldodisponivel, escolherRota, escolherClientePedido, pedidoGerado, botaoFinalizarPedido,
         processoVendaPrincipal, avancarParaParcelas, avancarParaTransportadora, avancarParcelasEntrega, modalServicosVinculados,
         okServicosVinculados, escolherProdutoPesquisa, escolherVoltagemProduto, clicarAdicionarProduto, tirarEntrega, tirarEntregaSegundo,
         botaoGerarParcelas, avancarFinal, finalizandoPedido, modalInconsRotaTransp, carregandoFormaPagamento, escolherFormaPagamentoPrincipal, 
         escolherDuasParcelaPagamento } from '../../../support/para_pedidos/gerais_pedidos';
import { produtoNormalPrimeiro, produtoNormalSegundo } from '../../../support/para_pedidos/produtos_pedidos';
import { garantiaNaoSepara, garantiaSeparaMesmoProcesso, garantiaSeparaTituloProcessoDiferente } from '../../../support/para_pedidos/apenas_servicos';

describe('Gerar pedidos com Garantia', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login(); 
        titulopagina() 
        processoVendaPrincipal()
        escolherClientePedido()
        cy.wait(500)
        produtoNormalPrimeiro()
        saldodisponivel()
        escolherProdutoPesquisa()
        cy.wait(200)
        escolherVoltagemProduto() //PRODUTO
        clicarAdicionarProduto()
        cy.wait(500)
        modalServicosVinculados()
    })   

    context('Sem entrega/processo 9860 - caminho feliz', () => {

        it('1-Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo)', () => {
    
            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas(); cy.wait(8500)
        })

        it('2-Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {
    
            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            cy.wait(400)
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            cy.wait(800)
            escolherProdutoPesquisa()
            cy.wait(800)
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(1000)
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            cy.wait(400)
            avancarParaParcelas(); cy.wait(10000)
        })
    
        it('3-Pedido de venda: produto 1860 0 0 (com Garantia que não separa título)', () => {
    
            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas(); cy.wait(7500)
        })

        it('4-Pedido de venda: produto 1860 0 0 (com Garantia que não separa título) e produto 1870 0 0 (sem serviço)', () => {
    
            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            cy.wait(800)
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            cy.wait(800)
            escolherProdutoPesquisa()
            cy.wait(800)
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(1000)
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            cy.wait(400)
            avancarParaParcelas(); cy.wait(8500)
        })
    
        it('5-Pedido de venda: produto 1860 0 0 (com Garantia que separa título em um processo diferente)', () => {
    
            garantiaSeparaTituloProcessoDiferente() //Marcar Garantia separa titulo em um processo diferente
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas(); cy.wait(8500)
        })

        it('6-Pedido de venda: produto 1860 0 0 (com Garantia que separa título em um processo diferente) e produto 1870 0 0 (sem serviço)', () => {
    
            garantiaSeparaTituloProcessoDiferente() //Marcar Garantia separa titulo em um processo diferente
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            cy.wait(800)
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            cy.wait(800)
            escolherProdutoPesquisa()
            cy.wait(800)
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(1000)
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            cy.wait(400)
            avancarParaParcelas(); cy.wait(8500)
        })
    })

    context('Com entrega/processo 9860 - caminho feliz', () => {

        it('7-Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo)', () => {
    
            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            okServicosVinculados() //SERVIÇOS
            cy.wait(400)
            avancarParaTransportadora()
            cy.wait(14000)
            modalInconsRotaTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            escolherRota()
            avancarParcelasEntrega(); cy.wait(7500)
        })

        it('8-Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {
    
            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            okServicosVinculados() //SERVIÇOS
            cy.wait(800)
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            cy.wait(800)
            escolherProdutoPesquisa()
            cy.wait(800)
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(1000)
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados()
            cy.wait(400)
            avancarParaTransportadora()
            cy.wait(14000)
            modalInconsRotaTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            escolherRota()
            avancarParcelasEntrega(); cy.wait(9000)
        })

        it('9-Pedido de venda: produto 1860 0 0 (com Garantia que não separa título)', () => {
    
            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            okServicosVinculados() //SERVIÇOS
            cy.wait(400)
            avancarParaTransportadora()
            cy.wait(14000)
            modalInconsRotaTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            escolherRota()
            avancarParcelasEntrega(); cy.wait(9000)
        })

        it('10-Pedido de venda: produto 1860 0 0 (com Garantia que não separa título) e produto 1870 0 0 (sem serviço)', () => {
    
            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            okServicosVinculados() //SERVIÇOS
            cy.wait(800)
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            cy.wait(800)
            escolherProdutoPesquisa()
            cy.wait(800)
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(1000)
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados()
            cy.wait(400)
            avancarParaTransportadora()
            cy.wait(14000)
            modalInconsRotaTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            escolherRota()
            avancarParcelasEntrega(); cy.wait(10000)
        })

        it('11-Pedido de venda: produto 1860 0 0 (com Garantia que separa título em um processo diferente)', () => {
    
            garantiaSeparaTituloProcessoDiferente() //Marcar Garantia separa titulo em um processo diferente
            okServicosVinculados() //SERVIÇOS
            cy.wait(400)
            avancarParaTransportadora()
            cy.wait(14000)
            modalInconsRotaTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            escolherRota()
            avancarParcelasEntrega(); cy.wait(10000)
        })

        it('12-Pedido de venda: produto 1860 0 0 (com Garantia que separa título em um processo diferente) e produto 1870 0 0 (sem serviço)', () => {
    
            garantiaSeparaTituloProcessoDiferente() //Marcar Garantia separa titulo em um processo diferente
            okServicosVinculados() //SERVIÇOS
            cy.wait(800)
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            cy.wait(800)
            escolherProdutoPesquisa()
            cy.wait(800)
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(1000)
            okServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            cy.wait(400)
            avancarParaTransportadora()
            cy.wait(16000)
            modalInconsRotaTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            escolherRota()
            avancarParcelasEntrega(); cy.wait(10000)
        })
    })

    afterEach(() => {
        botaoGerarParcelas() //GERAR PARCELAS
        carregandoFormaPagamento()
        cy.wait(7500)
        escolherFormaPagamentoPrincipal()
        escolherDuasParcelaPagamento()
        cy.wait(400)
        avancarFinal(); cy.wait(9000)
        botaoFinalizarPedido() //RESUMO
        finalizandoPedido(); cy.wait(9000)
        pedidoGerado()
      });
})