

describe('/v3/cliente_servico_vinculado/{cliente} - Serviço vinculado', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:8000/Cliente/v3_cliente_servico_vinculado',
        body: {
                "idFilial": 0,
                "idPedido": 0,
                "idItemBase": 0,
                "sku": "string",
                "nomeProduto": "string",
                "valor": "Unknown Type: currency",
                "dataVencimento": "string",
                "tipoOrigem": 0,
                "descricaoTipoOrigem": "string"
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});