import { titulopagina } from '../../../support/para_todos';
import { escolherTransportadora, saldodisponivel, escolherRota, escolherClientePedido, pedidoGerado, botaoFinalizarPedido, finalizandoPedido,
         clicarAdicionarProduto, tirarEntrega, tirarEntregaSegundo, botaoGerarParcelas, processoVendaPrincipal, avancarParaParcelas,
         avancarParaTransportadora, avancarParcelasEntrega, modalServicosVinculados, okServicosVinculados, escolherProdutoPesquisa,
         escolherVoltagemProduto, avancarFinal, modalInconsRotaTransp, carregandoFormaPagamento, escolherFormaPagamentoPrincipal, 
         escolherDuasParcelaPagamento } from '../../../support/para_pedidos/gerais_pedidos';
import { produtoNormalPrimeiro, produtoNormalSegundo } from '../../../support/para_pedidos/produtos_pedidos';
import { garantiaNaoSepara, garantiaSeparaMesmoProcesso, garantiaSeparaTituloProcessoDiferente, maoObraDestacaNãoSepara, 
         maoObraNaoDestacaSeparaMesmoProcesso, maoObraNaoDestacaSeparaProcessoDiferente } from '../../../support/para_pedidos/apenas_servicos';

describe('Gerar pedidos com Garantia e Mão de Obra', () => {

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

    context('Sem frete/processo 9860 - caminho feliz', () => {
    
        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra que destaca e não separa)', () => {
            
            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.wait(300)
            maoObraDestacaNãoSepara() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            okServicosVinculados()
            tirarEntrega()
            cy.wait(400)

            avancarParaParcelas()
            cy.wait(8000)

            // tela de GERAR PARCELAS
            botaoGerarParcelas()
            carregandoFormaPagamento()
            cy.wait(9000)
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)

            avancarFinal()
            cy.wait(8000)
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.wait(300)
            maoObraDestacaNãoSepara() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
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

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa no mesmo processo)', () => {

            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.wait(300)
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            okServicosVinculados()
            tirarEntrega()
            cy.wait(400)

            avancarParaParcelas()
            cy.wait(9000)

            // tela de GERAR PARCELAS
            botaoGerarParcelas()
            carregandoFormaPagamento()
            cy.wait(9000)
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)

            avancarFinal()
            cy.wait(8000)
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.wait(300)
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            okServicosVinculados()
            tirarEntrega()
            cy.wait(800)

            produtoNormalSegundo()
            saldodisponivel()
            cy.wait(800)
            escolherProdutoPesquisa()
            cy.wait(800)
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(1000)
    
            okServicosVinculados()
    
            tirarEntregaSegundo()
            cy.wait(400)

            avancarParaParcelas()
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

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa em outro processo)', () => {

            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.wait(300)
            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            okServicosVinculados()
            tirarEntrega()
            cy.wait(400)

            avancarParaParcelas()
            cy.wait(9000)

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

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.wait(300)
            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
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
    
            okServicosVinculados()
    
            tirarEntregaSegundo()
            cy.wait(400)

            avancarParaParcelas()
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

        it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra que destaca e não separa)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            cy.wait(300)
            maoObraDestacaNãoSepara()//Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            okServicosVinculados()
            tirarEntrega()
            cy.wait(400)

            avancarParaParcelas()
            cy.wait(9000)

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

        it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            cy.wait(300)
            maoObraDestacaNãoSepara()//Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            okServicosVinculados()
            tirarEntrega()
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
    
            tirarEntregaSegundo()
            cy.wait(400)

            avancarParaParcelas()
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

        it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa no mesmo processo)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            cy.wait(300)
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            okServicosVinculados()
            tirarEntrega()
            cy.wait(400)

            avancarParaParcelas()
            cy.wait(9000)

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

        it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            cy.wait(300)
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            okServicosVinculados()
            tirarEntrega()
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
    
            tirarEntregaSegundo()
            cy.wait(400)

            avancarParaParcelas()
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

        it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa em outro processo)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            cy.wait(300)
            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            okServicosVinculados()
            tirarEntrega()
            cy.wait(400)

            avancarParaParcelas()
            cy.wait(9000)

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

        it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            cy.wait(300)
            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            okServicosVinculados()
            tirarEntrega()
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
    
            tirarEntregaSegundo()
            cy.wait(400)

            avancarParaParcelas()
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

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra que destaca e não separa)', () => {

            garantiaSeparaTituloProcessoDiferente() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            cy.wait(300)
            maoObraDestacaNãoSepara() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            okServicosVinculados()
            tirarEntrega()
            cy.wait(400)

            avancarParaParcelas()
            cy.wait(9000)

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

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaTituloProcessoDiferente() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            cy.wait(300)
            maoObraDestacaNãoSepara() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
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

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa no mesmo processo)', () => {

            garantiaSeparaTituloProcessoDiferente() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            cy.wait(300)
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            okServicosVinculados()
            tirarEntrega()
            cy.wait(400)

            avancarParaParcelas()
            cy.wait(8000)

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

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaTituloProcessoDiferente() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            cy.wait(300)
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

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa em outro processo)', () => {

            garantiaSeparaTituloProcessoDiferente//Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            cy.wait(300)
            maoObraNaoDestacaSeparaProcessoDiferente()
            okServicosVinculados()
            tirarEntrega()
            cy.wait(400)

            avancarParaParcelas()
            cy.wait(9000)

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

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaTituloProcessoDiferente//Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            cy.wait(300)
            maoObraNaoDestacaSeparaProcessoDiferente()
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
    })

    context('Com entrega/processo 9860 - caminho feliz', () => {

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra que destaca e não separa)', () => {

            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.wait(300)
            maoObraDestacaNãoSepara() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
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

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.wait(300)
            maoObraDestacaNãoSepara() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
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
            cy.wait(10000)
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa no mesmo processo)', () => {

            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.wait(300)
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
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

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.wait(300)
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

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa em outro processo)', () => {

            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.wait(300)
            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
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

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.wait(300)
            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
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

        it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra que destaca e não separa)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            cy.wait(300)
            maoObraDestacaNãoSepara()//Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
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

        it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            cy.wait(300)
            maoObraDestacaNãoSepara()//Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
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

        it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa no mesmo processo)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            cy.wait(300)
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
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

        it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            cy.wait(300)
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

        it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa em outro processo)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            cy.wait(300)
            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
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

        it('Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            cy.wait(300)
            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
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

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra que destaca e não separa)', () => {

            garantiaSeparaTituloProcessoDiferente() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            cy.wait(300)
            maoObraDestacaNãoSepara() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
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

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaTituloProcessoDiferente() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            cy.wait(300)
            maoObraDestacaNãoSepara() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
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

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa no mesmo processo)', () => {

            garantiaSeparaTituloProcessoDiferente() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            cy.wait(300)
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
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

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaTituloProcessoDiferente() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            cy.wait(300)
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
            cy.wait(800)

            avancarFinal()
            cy.wait(9000)
        })

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa em outro processo)', () => {

            garantiaSeparaTituloProcessoDiferente //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            cy.wait(300)
            maoObraNaoDestacaSeparaProcessoDiferente()
            okServicosVinculados()
            cy.wait(800)

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
            cy.wait(10000)
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)

            avancarFinal()
            cy.wait(10000)
        })  

        it('Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaTituloProcessoDiferente//Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            cy.wait(300)
            maoObraNaoDestacaSeparaProcessoDiferente()
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
    })

    afterEach(() => {
        // RESUMO DO PEDIDO - ANTES DE FINALIZAR
        botaoFinalizarPedido()
        finalizandoPedido()
        cy.wait(9000)
        pedidoGerado()
      });
})