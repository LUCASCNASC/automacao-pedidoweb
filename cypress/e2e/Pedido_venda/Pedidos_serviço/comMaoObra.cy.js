import { titulopagina } from '../../../support/para_todos';
import { escolherTransportadora, saldodisponivel, escolherRota, escolherClientePedido, pedidoGerado, botaoFinalizarPedido, finalizandoPedido,
         clicarAdicionarProduto, tirarEntrega, tirarEntregaSegundo, botaoGerarParcelas, processoVendaPrincipal, avancarParaParcelas,
         avancarParaTransportadora, avancarParcelasEntrega, modalServicosVinculados, okServicosVinculados, escolherProdutoPesquisa,
         escolherVoltagemProduto, avancarFinal, modalInconsRotaTransp, carregandoFormaPagamento, escolherFormaPagamentoPrincipal, 
         escolherDuasParcelaPagamento } from '../../../support/para_pedidos/gerais_pedidos';
import { produtoNormalPrimeiro, produtoNormalSegundo } from '../../../support/para_pedidos/produtos_pedidos';
import { maoObraDestacaNãoSepara, maoObraNaoDestacaSeparaMesmoProcesso, maoObraNaoDestacaSeparaProcessoDiferente } from '../../../support/para_pedidos/apenas_servicos';

describe('Gerar pedidos com Mão de obra', () => {

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
        // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
        escolherVoltagemProduto()
        clicarAdicionarProduto()
        cy.wait(500)
        modalServicosVinculados()
    })
  
    context('Sem entrega/processo 9860 - caminho feliz', () => {

        it('Pedido de venda: produto 1860 0 0 (com Mão de Obra que Destaca e Não separa título', () => {
    
            maoObraDestacaNãoSepara() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            okServicosVinculados()

            tirarEntrega()
            cy.wait(400)
    
            avancarParaParcelas()
            cy.wait(8000)
    
            // tela de GERAR PARCELAS
            botaoGerarParcelas()
            carregandoFormaPagamento()
            cy.wait(7000)
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)
    
            avancarFinal()
            cy.wait(6000)
        })

        it('Pedido de venda: produto 1860 0 0 (com Mão de Obra que Destaca e Não separa título) e produto 1870 0 0 (sem serviço)', () => {

            maoObraDestacaNãoSepara()  //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            okServicosVinculados()
            tirarEntrega()
            cy.wait(400)

            produtoNormalSegundo()
            saldodisponivel()
            cy.wait(800)
            escolherProdutoPesquisa()
            cy.wait(800)
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(1000)
    
            modalServicosVinculados()
            okServicosVinculados()
            tirarEntregaSegundo()
            cy.wait(400)
    
            avancarParaParcelas()
            cy.wait(8000)
    
            // tela de GERAR PARCELAS
            botaoGerarParcelas()
            carregandoFormaPagamento()
            cy.wait(7000)
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)
    
            avancarFinal()
            cy.wait(8000)
        })
    
        it('Pedido de venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título no Mesmo processo)', () => {
    
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            okServicosVinculados()
            tirarEntrega()
            cy.wait(400)
    
            avancarParaParcelas()
            cy.wait(8500)
    
            // tela de GERAR PARCELAS
            botaoGerarParcelas()
            carregandoFormaPagamento()
            cy.wait(7500)
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)

            avancarFinal()
            cy.wait(8500)
        })

        it('Pedido de venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título no Mesmo processo) e produto 1870 0 0 (sem serviço)', () => {
    
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            okServicosVinculados()
            tirarEntrega()
            cy.wait(400)

            produtoNormalSegundo()
            saldodisponivel()
            cy.wait(800)
            escolherProdutoPesquisa()
            cy.wait(800)
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(1000)
    
            modalServicosVinculados()
            okServicosVinculados()
            tirarEntregaSegundo()
            cy.wait(400)
    
            avancarParaParcelas()
            cy.wait(8500)
    
            // tela de GERAR PARCELAS
            botaoGerarParcelas()
            carregandoFormaPagamento()
            cy.wait(7500)
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)

            avancarFinal()
            cy.wait(8500)
        })
    
        it('Pedido de venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título em processo Diferente)', () => {

            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de obra que não destaca e separa título em processo diferente
            okServicosVinculados()
            tirarEntrega()
            cy.wait(400)
    
            avancarParaParcelas()
            cy.wait(8500)
    
            // tela de GERAR PARCELAS
            botaoGerarParcelas()
            carregandoFormaPagamento()
            cy.wait(7500)
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)

            avancarFinal()
            cy.wait(8500)
        })

        it('Pedido de venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título em processo Diferente) e produto 1870 0 0 (sem serviço)', () => {

            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de obra que não destaca e separa título em processo diferente
            okServicosVinculados()
            tirarEntrega()
            cy.wait(400)

            produtoNormalSegundo()
            saldodisponivel()
            cy.wait(800)
            escolherProdutoPesquisa()
            cy.wait(800)
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(1000)

            modalServicosVinculados()
            okServicosVinculados()
            tirarEntregaSegundo()
            cy.wait(400)
    
            avancarParaParcelas()
            cy.wait(8500)
    
            // tela de GERAR PARCELAS
            botaoGerarParcelas()
            carregandoFormaPagamento()
            cy.wait(7500)
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)
    
            avancarFinal()
            cy.wait(8500)
        })
    })

    context('Com entrega/processo 9860 - caminho feliz', () => {

        it('Pedido de venda: produto 1860 0 0 (com Mão de Obra que Destaca e Não separa título)', () => {
    
            maoObraDestacaNãoSepara()  //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            okServicosVinculados()
            cy.wait(400)
    
            avancarParaTransportadora()
            cy.wait(14000)

            // tela para ESCOLHER TRANSPORTADORA
            modalInconsRotaTransp()
            cy.wait(1000)
            escolherTransportadora()
            escolherRota()
            avancarParcelasEntrega()
            cy.wait(10000)

            // tela de GERAR PARCELAS
            botaoGerarParcelas()
            carregandoFormaPagamento()
            cy.wait(8000)
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)
    
            avancarFinal()
            cy.wait(9000)
        })
        
        it('Pedido de venda: produto 1860 0 0 (com Mão de Obra que Destaca e Não separa título) e produto 1870 0 0 (sem serviço)', () => {
    
            maoObraDestacaNãoSepara()  //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            okServicosVinculados()
            cy.wait(800)

            produtoNormalSegundo()
            saldodisponivel()
            cy.wait(800)
            escolherProdutoPesquisa()
            cy.wait(800)
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(1000)

            modalServicosVinculados()
            okServicosVinculados()
            cy.wait(400)
    
            avancarParaTransportadora()
            cy.wait(18000)

            // tela para ESCOLHER TRANSPORTADORA
            modalInconsRotaTransp()
            escolherTransportadora()
            escolherRota()
            avancarParcelasEntrega()
            cy.wait(10000)

            // tela de GERAR PARCELAS
            botaoGerarParcelas()
            carregandoFormaPagamento()
            cy.wait(9500)
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)
    
            avancarFinal()
            cy.wait(10500)
        })

        it('Pedido de venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título no Mesmo processo)', () => {
    
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            okServicosVinculados()
            cy.wait(400)
    
            avancarParaTransportadora()
            cy.wait(17000)

            // tela para ESCOLHER TRANSPORTADORA
            modalInconsRotaTransp()
            escolherTransportadora()
            escolherRota()
            avancarParcelasEntrega()
            cy.wait(10000)
    
            // tela de GERAR PARCELAS
            botaoGerarParcelas()
            carregandoFormaPagamento()
            cy.wait(9000)
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)
    
            avancarFinal()
            cy.wait(10500)
        })

        it('Pedido de venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título no Mesmo processo) e produto 1870 0 0 (sem serviço)', () => {
    
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            okServicosVinculados()
            cy.wait(800)

            produtoNormalSegundo()
            saldodisponivel()
            cy.wait(800)
            escolherProdutoPesquisa()
            cy.wait(800)
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(1000)

            modalServicosVinculados()
            okServicosVinculados()
            cy.wait(400)
    
            avancarParaTransportadora()
            cy.wait(15000)

            // tela para ESCOLHER TRANSPORTADORA
            modalInconsRotaTransp()
            escolherTransportadora()
            escolherRota()
            avancarParcelasEntrega()
            cy.wait(11000)

            // tela de GERAR PARCELAS
            botaoGerarParcelas()
            carregandoFormaPagamento()
            cy.wait(10000)
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)
    
            avancarFinal()
            cy.wait(13000)
        })

        it('Pedido de venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título em processo Diferente)', () => {
    
            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de obra que não destaca e separa título em processo diferente
            okServicosVinculados()
            cy.wait(400)
    
            avancarParaTransportadora()
            cy.wait(14000)
                
            // tela para ESCOLHER TRANSPORTADORA
            modalInconsRotaTransp()
            escolherTransportadora()
            escolherRota()
            avancarParcelasEntrega()
            cy.wait(10000)
    
            // tela de GERAR PARCELAS
            botaoGerarParcelas()
            carregandoFormaPagamento()
            cy.wait(9000)
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)
    
            avancarFinal()
            cy.wait(9000)
        })   

        it('Pedido de venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título em processo Diferente) e produto 1870 0 0 (sem serviço)', () => {
    
            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de obra que não destaca e separa título em processo diferente
            okServicosVinculados()
            cy.wait(800)

            produtoNormalSegundo()
            saldodisponivel()
            cy.wait(800)
            escolherProdutoPesquisa()
            cy.wait(800)
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(1000)

            modalServicosVinculados()
            okServicosVinculados()
            cy.wait(400)
    
            avancarParaTransportadora()
            cy.wait(15000)

            // tela para ESCOLHER TRANSPORTADORA
            modalInconsRotaTransp()
            escolherTransportadora()
            escolherRota()
            avancarParcelasEntrega()
            cy.wait(10000)

            // tela de GERAR PARCELAS
            botaoGerarParcelas()
            carregandoFormaPagamento()
            cy.wait(8000)
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)

            avancarFinal()
            cy.wait(9000)
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