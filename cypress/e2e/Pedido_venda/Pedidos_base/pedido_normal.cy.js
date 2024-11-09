import { titulopagina } from '../../../support/para_todos';
import { escolherTransportadora, saldodisponivel, escolherRota, escolherClientePedido, pedidoGerado, botaoFinalizarPedido, finalizandoPedido,
         botãoAdicionar, tirarEntrega, tirarMontagem, tirarEntregaSegundo, tirarMontagemSegundo, botaoGerarParcelas, processoVendaPrincipal,
         avancarParaParcelas, avancarParaTransportadora, avancarParcelasEntrega, modalServicosVinculados, okServicosVinculados,
         escolherProdutoPesquisa, escolherVoltagemProduto, avancarFinal, modalInconsRotaTransp, carregaAddProdutosServicos,
         carregandoFormaPagamento, escolherFormaPagamentoPrincipal, escolherDuasParcelaPagamento} from '../../../support/para_pedidos/gerais_pedidos';
import { produtoNormalPrimeiro, produtoNormalSegundo} from '../../../support/para_pedidos/produtos_pedidos';

describe('Gerar pedido normal', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
        titulopagina() //Validar título da aba carregada
    })

    context('Sem frete/ processo 9860 - caminho feliz', () => {

        it('Pedido de venda: produto 1860 0 0 - (Venda local de produto com saldo - sem entrega)', () => {
            
            processoVendaPrincipal()
    
            escolherClientePedido()
    
            cy.wait(500)
    
            //Pesquisando produto
            produtoNormalPrimeiro()
    
            saldodisponivel()
    
            escolherProdutoPesquisa()
    
            cy.wait(200)
    
            // // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM

            escolherVoltagemProduto()
         
            //clicar no botão "ADICIONAR", para adicionar produto
            botãoAdicionar()
    
            cy.wait(500)

            modalServicosVinculados()

            okServicosVinculados()
    
            tirarEntrega()
    
            tirarMontagem()
    
            cy.wait(400)

            avancarParaParcelas()
    
            // tela de GERAR PARCELAS
    
            cy.wait(5500)

            botaoGerarParcelas()

            carregandoFormaPagamento()
    
            cy.wait(5000)
    
            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)
    
            //Botão "AVANÇAR"
            avancarFinal()
    
            cy.wait(6000)
        })

        it('Pedido de venda: produtos 1860 0 0 e 1870 0 0', () => {
    
            processoVendaPrincipal()
    
            escolherClientePedido()
    
            cy.wait(500)
    
            //Pesquisando produto
            produtoNormalPrimeiro()
    
            saldodisponivel()
    
            escolherProdutoPesquisa()

            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM

            cy.wait(200)
                      
            escolherVoltagemProduto()
            
            //clicar no botão "ADICIONAR", para adicionar produto
            botãoAdicionar()
    
            cy.wait(500)

            modalServicosVinculados()

            okServicosVinculados()
    
            tirarEntrega()
    
            tirarMontagem()

            cy.wait(800)
    
            //Pesquisando segundo produto
            produtoNormalSegundo()
    
            saldodisponivel()

            cy.wait(800)
    
            escolherProdutoPesquisa()
    
            cy.wait(800)
    
            escolherVoltagemProduto()
    
            //clicar no botão "ADICIONAR", para adicionar produto
            botãoAdicionar()

            cy.wait(500)
    
            modalServicosVinculados()

            okServicosVinculados()
    
            tirarEntregaSegundo()
    
            tirarMontagemSegundo()
    
            cy.wait(400)
    
            avancarParaParcelas()
    
            // tela de GERAR PARCELAS
    
            cy.wait(5500)
    
            botaoGerarParcelas()

            carregandoFormaPagamento()
    
            cy.wait(5000)
    
            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()
    
            cy.wait(400)
    
            //Botão "AVANÇAR"
            avancarFinal()
    
            cy.wait(7000)
        })
    })

    context('Com frete/ processo 9860 - caminho feliz', () => {

        it('Pedido de venda: produto 1860 0 0 - (Venda local de produto com saldo - com entrega)', () => {
    
            processoVendaPrincipal()
    
            escolherClientePedido()
    
            cy.wait(500)
    
            //Pesquisando produto
            produtoNormalPrimeiro()

            saldodisponivel()
    
            escolherProdutoPesquisa()
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
    
            cy.wait(200)
                      
            escolherVoltagemProduto()
            
            //clicar no botão "ADICIONAR", para adicionar produto
            botãoAdicionar()
    
            cy.wait(500)

            modalServicosVinculados()

            okServicosVinculados()
    
            tirarMontagem()
    
            cy.wait(400)
    
            avancarParaTransportadora()
    
            // tela para ESCOLHER TRANSPORTADORA

            cy.wait(11000)

            modalInconsRotaTransp()
    
            escolherTransportadora()
        
            escolherRota()

            avancarParcelasEntrega()
        
            cy.wait(6500)

            // tela de GERAR PARCELAS

            botaoGerarParcelas()

            carregandoFormaPagamento()

            cy.wait(5500)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            //Botão "AVANÇAR"
            avancarFinal()

            cy.wait(7000)
        })

        it('Pedido de venda: produtos 1860 0 0 e 1870 0 0', () => {
    
            processoVendaPrincipal()
    
            escolherClientePedido()
    
            cy.wait(500)
    
            //Pesquisando produto
            produtoNormalPrimeiro()

            saldodisponivel()
    
            escolherProdutoPesquisa()
    
            // PRODUTO PESQUISADO - HORA DE ESCOLHER A VOLTAGEM
    
            cy.wait(200)
                      
            escolherVoltagemProduto()
            
            //clicar no botão "ADICIONAR", para adicionar produto
            botãoAdicionar()
    
            cy.wait(500)

            modalServicosVinculados()

            okServicosVinculados()
    
            cy.wait(400)
    
            //Pesquisando segundo produto
            produtoNormalSegundo()
    
            saldodisponivel()

            cy.wait(800)
    
            escolherProdutoPesquisa()
    
            cy.wait(800)
    
            escolherVoltagemProduto()
    
            //clicar no botão "ADICIONAR", para adicionar produto
            botãoAdicionar()
    
            cy.wait(500)
    
            modalServicosVinculados()

            okServicosVinculados()
    
            cy.wait(1000)
    
            avancarParaTransportadora()
    
            // tela para ESCOLHER TRANSPORTADORA

            cy.wait(12000)

            modalInconsRotaTransp()
    
            escolherTransportadora()
        
            escolherRota()

            avancarParcelasEntrega()
        
            cy.wait(7000)

            // tela de GERAR PARCELAS

            botaoGerarParcelas()

            carregandoFormaPagamento()

            cy.wait(6000)

            escolherFormaPagamentoPrincipal()

            escolherDuasParcelaPagamento()

            cy.wait(400)

            //Botão "AVANÇAR"
            avancarFinal()

            cy.wait(8000)
        })
    })

    afterEach(() => {
        // RESUMO DO PEDIDO - ANTES DE FINALIZAR
        botaoFinalizarPedido()
        finalizandoPedido()
        cy.wait(8000)
        pedidoGerado()
      });
})