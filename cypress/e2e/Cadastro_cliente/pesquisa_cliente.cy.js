import { titulopagina } from '../../support/para_todos';
import { mensagemAguardeCarregando, clicarLupaPesquisaCliente, botaoXCardCliente, tituloCardClientes, textoInformativoClienteBusca, 
         botaoCadastrarNovoCliente, botaoComandoVoz, campoDigitarCliente, numeroDescricaoCPFpesquisado, numeroDescricaoCNPJpesquisado,
         clicarCPFPesquisado, clicarCNPJPesquisado } from '../../support/para_cadastro_cliente/para_pesquisa_cliente';

const numeroCPF = "117.415.410-18"
const numeroCNPJ = "24468163000161"
const descricaoCPF = "CPF AUTOMAÇÃO SABIUM - LUCAS CAMARGO"
const descricaoCNPJ = "CNPJ AUTOMAÇÃO SABIUM - LUCAS CAMARGO"
describe('Cadastrar cliente', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        titulopagina() //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
    })

    context('Pesquisa cliente por número', () => {

        it('Pesquisa por número CPF', () => {
    
            //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
            cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
                .wait(800)
                .type(numeroCPF,'{downArrow}')

            cy.wait(800)

            clicarLupaPesquisaCliente()
            cy.wait(2000)

            tituloCardClientes()
            botaoXCardCliente()
            textoInformativoClienteBusca()
            botaoCadastrarNovoCliente()
            botaoComandoVoz()
            campoDigitarCliente()

            //Card de clientes - campo para digitar cliente
            cy.get('#txtBuscaClienteModal')
                .clear()
                .wait(100)
                .should('have.value','')
                .wait(100)
                .type(numeroCPF)

            clicarCPFPesquisado()
            mensagemAguardeCarregando()
            cy.wait(2500)

            numeroDescricaoCPFpesquisado()
        }) 

        it('Pesquisa por número CNPJ', () => {
    
            //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
            cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
                .wait(800)
                .type(numeroCNPJ,'{downArrow}')

            cy.wait(800)

            clicarLupaPesquisaCliente()
            cy.wait(2000)

            tituloCardClientes()
            botaoXCardCliente()
            textoInformativoClienteBusca()
            botaoCadastrarNovoCliente()
            botaoComandoVoz()
            campoDigitarCliente()

            //Card de clientes - campo para digitar cliente
            cy.get('#txtBuscaClienteModal')
                .clear()
                .wait(100)
                .should('have.value','')
                .wait(100)
                .type(numeroCNPJ)

            clicarCNPJPesquisado()
            mensagemAguardeCarregando()
            cy.wait(2500)

            numeroDescricaoCNPJpesquisado()
        }) 
    })

    context('Pesquisa cliente por descrição', () => {

        it('Pesquisa por descrição CPF', () => {
    
            //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
            cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
                .click()

            //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
            cy.get('#txtBuscaCliente')
                .wait(500)
                .type(descricaoCPF,'{downArrow}')

            cy.wait(800)

            clicarLupaPesquisaCliente()
            cy.wait(2000)

            tituloCardClientes()
            botaoXCardCliente()
            textoInformativoClienteBusca()
            botaoCadastrarNovoCliente()
            botaoComandoVoz()
            campoDigitarCliente()

            //Card de clientes - campo para digitar cliente
            cy.get('#txtBuscaClienteModal')
                .clear()
                .wait(100)
                .should('have.value','')
                .wait(100)
                .type(descricaoCPF)

            clicarCPFPesquisado()
            mensagemAguardeCarregando()
            cy.wait(2500)

            numeroDescricaoCPFpesquisado()
        }) 

        it('Pesquisa por descrição CNPJ', () => {
    
            //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
            cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
                .click()

            //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
            cy.get('#txtBuscaCliente')
                .wait(500)
                .type(descricaoCNPJ,'{downArrow}')

            cy.wait(800)

            clicarLupaPesquisaCliente()
            cy.wait(2000)

            tituloCardClientes()
            botaoXCardCliente()
            textoInformativoClienteBusca()
            botaoCadastrarNovoCliente()
            botaoComandoVoz()
            campoDigitarCliente()

            //Card de clientes - campo para digitar cliente
            cy.get('#txtBuscaClienteModal')
                .clear()
                .wait(100)
                .should('have.value','')
                .wait(100)
                .type(descricaoCNPJ)

            clicarCNPJPesquisado()
            mensagemAguardeCarregando()
            cy.wait(2500)

            numeroDescricaoCNPJpesquisado()
        }) 
    })
})