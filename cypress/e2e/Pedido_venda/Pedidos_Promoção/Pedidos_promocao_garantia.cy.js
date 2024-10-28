import { titulopagina } from '../../../support/para_todos';
import { escolherTransportadora, escolherRota, escolherClientePedido, pedidoGerado, botaoFinalizarPedido, finalizandoPedido, botãoAdicionar, tirarEntrega, tirarMontagem,
         avancarFinal, botaoGerarParcelas, processoVendaPrincipal, tirarMontagemSegundo, tirarEntregaSegundo, avancarParaParcelas,
         avancarParaTransportadora, avancarParcelasEntrega, modalServicosVinculados, okServicosVinculados, saldodisponivel} from '../../../support/para_pedidos/gerais_pedidos'
import { produtoNormalSegundo, produtoPromoPartida, produtoPromoPrazoEntrada, produtoPromoPrazoParcelado } from '../../../support/para_pedidos/produtos_pedidos';

describe('Gerar pedidos com promoção', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
        titulopagina() //Validar título da aba carregada
    })
  
    context('Sem entrega/ com promoção/ processo 9860 - caminho feliz', () => {

        
    })

    context('Sem entrega/ com promoção e sem promoção/ processo 9860 - caminho feliz', () => {

        
    })

    context('Com entrega /com promoção/ processo 9860 - caminho feliz', () => {

        
    }) 

    context('Com entrega/ com promoção e sem promoção/ processo 9860 - caminho feliz', () => {

        
    })
})