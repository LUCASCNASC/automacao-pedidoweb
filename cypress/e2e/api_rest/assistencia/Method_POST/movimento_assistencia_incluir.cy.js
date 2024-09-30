

describe('/v3/movimento_assistencia_incluir/ - Incluir Movimento de Assistencia', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:8000/Assistencia/v3_post_movimento_assistencia_incluir',
        body: {
                "ID_Empresa": 0,
                "Numero_Filial": 0,
                "ID_Processo": 0,
                "ID_Local_Saldo": 0,
                "Para_Da_Filial": 0,
                "CNPJ_CPF": "string",
                "Carregar_Assistencia_Remota": true,
                "NFE_XML_Base64": "string",
                "Gerar_Nota_Entrada": true,
                "Numero_Nota": 0,
                "Serie": "string",
                "Data_Emissao": "string",
                "Data_Saida": "string",
                "ID_Tipo_Documento_Fiscal": 0,
                "ID_Chave_Sefaz": "string",
                "Total_Nota": 0,
                "ID_Motorista": 0,
                "ID_Veiculo": 0,
                "ID_Tipo_Frete": 0,
                "Dados_Adicionais": "string",
                "Assistencia": [
                  {
                    "Filial_Origem": 0,
                    "ID_Assistencia": 0,
                    "Valor_Produto": 0,
                    "Historico": "string",
                    "GTIN": "string",
                    "Numero_Serial": "string"
                  }
                ]
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});