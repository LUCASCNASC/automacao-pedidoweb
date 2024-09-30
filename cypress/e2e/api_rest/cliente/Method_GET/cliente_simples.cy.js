

describe('/v3/cliente_simples/{cliente} - Dados do cliente', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:8000/Cliente/v2_cliente_simples_get',
        body: {
                "idcnpj_cpf": 0,
                "cnpj_cpf": "string",
                "nome": "string",
                "data_criacao": "string",
                "cce_rg": "string",
                "orgao_emissor": "string",
                "data_emissao": "string",
                "email": "string",
                "emailnfe": "string",
                "telefone_ddd": "string",
                "telefone_numero": "string",
                "celular_ddd": "string",
                "celular_numero": "string",
                "endereco": [
                  {
                    "rua": "string",
                    "numero": "string",
                    "complemento": "string",
                    "bairro": "string",
                    "cep": "string",
                    "idtipoendereco": 0,
                    "cidade": {
                      "cidade_codigo": 0,
                      "cidade_nome": "string"
                    }
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
                "fiador": [
                  {
                    "idcnpj_cpf": 0,
                    "cnpj_cpf": "string",
                    "nome": "string"
                  }
                ],
                "cartaofidelidade": [
                  {
                    "numerocarcao": "string",
                    "datavalidade": "string",
                    "tipocartao": 0
                  }
                ]
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});