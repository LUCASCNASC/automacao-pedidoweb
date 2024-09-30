

describe('/v3/local_entrega_por_cep - Local de entrega por CEP', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:8000/Diversos/v3_diversos_local_entrega_por_cep',
        body: {
                "idgruporota": 0,
                "idrota": 0,
                "descricaorota": "string",
                "codigo": 0,
                "descricaoentrega": "string",
                "cidade": {
                  "cidade_codigo": 0,
                  "cidade_nome": "string"
                },
                "estado": {
                  "uf_codigo": "string",
                  "uf_nome": "string"
                }
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});