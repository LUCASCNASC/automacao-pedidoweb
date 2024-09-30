

describe('/v3/cliente_simples - Dados do cliente', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:8000/Cliente/v3_cliente_simples_post',
        body: {
                "idcnpj_cpf": 0,
                "cnpj_cpf": "string",
                "nome": "string",
                "atualizarAtributoNaoPreenchido": true,
                "data_criacao": "string",
                "cce_rg": "string",
                "orgao_emissor": "string",
                "data_emissao": "string",
                "orgao_expedicao_cpf": "string",
                "data_expedicao_cpf": "string",
                "email": "string",
                "emailnfe": "string",
                "telefone_ddd": "string",
                "telefone_numero": "string",
                "celular_ddd": "string",
                "celular_numero": "string",
                "fornecedor": false,
                "idtiposexo": 0,
                "endereco": {
                  "idTipoEndereco": 0,
                  "cep": "string",
                  "rua": "string",
                  "numero": "string",
                  "complemento": "string",
                  "cidade": {
                    "cidade_codigo": 0
                  }
                },
                "telefone": [
                  {
                    "idtipotelefone": 0,
                    "ddd": "string",
                    "numero": "string",
                    "ramal": "string"
                  }
                ],
                "rota": {
                  "idrota": 0,
                  "local_entrega": {
                    "codigo": 0,
                    "cidade": {
                      "cidade_codigo": 0,
                      "cidade_nome": "string"
                    }
                  }
                },
                "fiador": {
                  "idcnpj_cpf": 0
                }
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});