

describe('/v3/cliente_renovacao/{cliente} - Renovação', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:8000/Cliente/v2_cliente_renovacao',
        body: {
                "idFilial": 0,
                "idPedido": 0,
                "idRegistroNota": 0,
                "idOrigem": 0,
                "codigoOrigem": 0,
                "nomeOrigem": "string",
                "dataVencimento": "string",
                "tipoOrigem": 0,
                "servico": [
                  {
                    "codigo": 0,
                    "nome": "string",
                    "valor": 0
                  }
                ]
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});