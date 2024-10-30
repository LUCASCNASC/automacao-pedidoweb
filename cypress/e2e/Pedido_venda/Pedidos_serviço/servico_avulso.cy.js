import { titulopagina } from '../../../support/para_todos';
import {processoVendaServicoAvulso, escolherClientePedido, iconeMenuOpcoes, clicarPedidosPendentesMenu } from '../../../support/para_pedidos/para_servicos_avulsos';
import { produtoNormalPrimeiro, produtoNormalSegundo } from '../../../support/para_pedidos/produtos_pedidos';

const numero_pedido = '7708'

describe('Gerar pedido normal', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
        titulopagina() //Validar título da aba carregada
    })

    context('Sem frete/ processo 9860 - caminho feliz', () => {

        it.only('Pedido de venda: produto 1860 0 0', () => {
            
            processoVendaServicoAvulso() 
            
            escolherClientePedido()

            iconeMenuOpcoes()

            clicarPedidosPendentesMenu()

            //Campo Cliente ou pedido - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="input_96"]')
                .should('have.text', 'Cliente ou pedido')     

            //Campo Cliente ou pedido
            cy.get('#input_96')
                .should('exist')
                .and('be.visible')
                .and('have.value','')
                .type(numero_pedido, {force: true})


        })
    })
})