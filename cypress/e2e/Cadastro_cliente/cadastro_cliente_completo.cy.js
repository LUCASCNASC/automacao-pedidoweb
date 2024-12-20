//Importando funções 
import { titulopagina } from '../../support/para_todos';
import { iconeMenuOpcoes, opcaoClienteCompleto, preecherDataNascimento, selecionarSexoCliente, preencherNomeCompleto, preencherNomeCNPJ,
         clicarSalvarCliente, clicarAbaEndereco, preencherCPFcliente, preencherCNPJcliente, messEnderecoIncluidoSucesso, 
         preencherNomeFantasiaCNPJ, clicarAdicionarNovoEndereço, modalEnderecoVazioValidar, clicarAbrirTipoEndereco, botaoSalvarDesabilitado,
         messEnderecoIncluidoSucesso, infosEnderecoAdicionado, clicarSalvarClienteCompleto, clicarAbaRota, clicarAdicionarNovaRota,
         modalRotaVazioValidar, escolherTipoEnderecoRota, escolherTipoEndereco, messAlertaEnderecoObrigatorio, clicarSalvarEndereco,
         preencherCampoCEPEndereco, preencherCampoNumeroEndereco, preencherRotaCompleta, messRotaIncluidaSucesso, infosRotaAdicionada,
         clicarAbaTelefone, clicarAdicionarNovoTelefone, modalTelefoneVazioValidar, escolherTipoTelefone, preencherNumeroTelefone,
         preencherRamalTelefone, clicarSalvarTelefone, infosTelefoneAdicionado, modalAguardeCarregando, messRegistroSalvoSucesso } from '../../support/para_cadastro_cliente/para_cliente_completo';


describe('Cadastrar cliente completo', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login(); 
        titulopagina()
    })

    context('Cadastro de cliente completo', () => {

        //REVISAR DATA NASCIMENTO 
        it.skip('Cliente completo CPF', () => {

            iconeMenuOpcoes()
            opcaoClienteCompleto()
            preencherCPFcliente()
            preencherNomeCompleto()
            preecherDataNascimento()
            selecionarSexoCliente()
            clicarSalvarCliente()
            cy.wait(500)
            
            messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            clicarAbaEndereco() //ENDEREÇO
            clicarAdicionarNovoEndereço()
            cy.wait(200)
            escolherTipoEndereco()
            modalEnderecoVazioValidar()
            cy.wait(200)
            clicarAbrirTipoEndereco()
            cy.wait(300)
            escolherTipoEndereco()
            preencherCampoCEPEndereco()
            cy.wait(300)
            preencherCampoNumeroEndereco()

            botaoSalvarDesabilitado()
            clicarSalvarEndereco()
            cy.wait(200)
            infosEnderecoAdicionado()
            messEnderecoIncluidoSucesso()

            clicarAbaRota() //ROTA
            clicarAdicionarNovaRota()
            modalRotaVazioValidar()
            escolherTipoEnderecoRota()
            preencherRotaCompleta()
            messRotaIncluidaSucesso()
            infosRotaAdicionada()

            clicarAbaTelefone() //TELEFONE
            clicarAdicionarNovoTelefone()
            modalTelefoneVazioValidar()
            escolherTipoTelefone()
            preencherNumeroTelefone()
            preencherRamalTelefone()
            clicarSalvarTelefone()
            infosTelefoneAdicionado()
            cy.wait(1000)

            messEnderecoIncluidoSucesso()
            clicarSalvarCliente()
            cy.wait(2000)
            modalAguardeCarregando()
            messRegistroSalvoSucesso()
        })  

        //REVISAR DATA NASCIMENTO
        it.skip('Cliente completo CPF - mensagem de campos obrigatórios', () => {
    
            iconeMenuOpcoes()
            opcaoClienteCompleto()
            clicarSalvarClienteCompleto() //tentar salvar cadastro, mas não deve permitir, pois ainda tem campo obrigatórios
            messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar em adicionar um endereço

            preencherCPFcliente()
            preencherNomeCompleto()
            preecherDataNascimento()
            selecionarSexoCliente()
            cy.wait(500)

            clicarAbaEndereco() //ENDEREÇO
            cy.wait(5000)

            clicarSalvarClienteCompleto() //tentar salvar cadastro, mas não deve permitir, pois ainda tem campo obrigatórios
            messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar em adicionar um endereço

            clicarAdicionarNovoEndereço()
            cardEnderecoVazioValidar()
            cy.wait(200)
            escolherTipoEndereco()
            modalEnderecoVazioValidar()
            cy.wait(200)
            botaoSalvarDesabilitado()
            clicarAbrirTipoEndereco()
            cy.wait(300)
            escolherTipoEndereco()
            preencherCampoCEPEndereco()
            cy.wait(300)
            preencherCampoNumeroEndereco()

            botaoSalvarDesabilitado()
            clicarSalvarEndereco()
            cy.wait(200)
            infosEnderecoAdicionado()
            messEnderecoIncluidoSucesso()

            clicarAbaRota() //ROTA
            clicarAdicionarNovaRota()
            modalRotaVazioValidar()
            escolherTipoEnderecoRota()
            preencherRotaCompleta()
            messRotaIncluidaSucesso()
            infosRotaAdicionada()

            clicarAbaTelefone() //TELEFONE
            clicarAdicionarNovoTelefone()
            modalTelefoneVazioValidar()
            escolherTipoTelefone()
            preencherNumeroTelefone()
            preencherRamalTelefone()
            clicarSalvarTelefone()
            infosTelefoneAdicionado()
            cy.wait(2000)

            messEnderecoIncluidoSucesso()
            clicarSalvarCliente()
            cy.wait(2000)
            modalAguardeCarregando()
            messRegistroSalvoSucesso()
        })  

        it('Cliente completo CNPJ', () => {
    
            iconeMenuOpcoes()
            opcaoClienteCompleto()
            preencherCNPJcliente()
            preencherNomeCNPJ()
            preencherNomeFantasiaCNPJ()

            clicarSalvarClienteCompleto() //tentar salvar cadastro, mas não deve permitir, pois ainda tem campo obrigatórios
            cy.wait(400)
            messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar em adicionar um endereço

            clicarAbaEndereco() //ENDEREÇO
            clicarAdicionarNovoEndereço()
            cy.wait(200)
            escolherTipoEndereco()
            modalEnderecoVazioValidar()
            cy.wait(200)
            botaoSalvarDesabilitado()
            clicarAbrirTipoEndereco()
            cy.wait(300)
            escolherTipoEndereco()
            preencherCampoCEPEndereco()
            cy.wait(300)
            preencherCampoNumeroEndereco()

            botaoSalvarDesabilitado()
            clicarSalvarEndereco()
            cy.wait(200)
            infosEnderecoAdicionado()
            messEnderecoIncluidoSucesso()

            clicarAbaRota() //ROTA
            clicarAdicionarNovaRota()
            modalRotaVazioValidar()
            escolherTipoEnderecoRota()
            preencherRotaCompleta()
            messRotaIncluidaSucesso()
            infosRotaAdicionada()

            clicarAbaTelefone() //TELEFONE
            clicarAdicionarNovoTelefone()
            modalTelefoneVazioValidar()
            escolherTipoTelefone()
            preencherNumeroTelefone()
            preencherRamalTelefone()
            clicarSalvarTelefone()
            infosTelefoneAdicionado()
            cy.wait(2000)

            messEnderecoIncluidoSucesso()
            clicarSalvarCliente()
            cy.wait(2000)
            modalAguardeCarregando()
            messRegistroSalvoSucesso()
        }) 
    })
})