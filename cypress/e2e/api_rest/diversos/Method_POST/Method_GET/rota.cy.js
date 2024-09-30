

describe('/v3/rota - Rotas', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:8000/Diversos/v3_diversos_rota',
        body: {
                "idgruporota": 0,
                "idrota": 0,
                "descricao": "string",
                "local_entrega": [
                  {
                    "codigo": 0,
                    "descricao": "string",
                    "cep": "string",
                    "cidade": {
                      "cidade_codigo": 0,
                      "cidade_nome": "string"
                    },
                    "estado": {
                      "uf_codigo": "string",
                      "uf_nome": "string"
                    }
                  }
                ]
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});