

describe('/v3/vendedor - Vendedor', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:8000/Diversos/v2_diversos_vendedor',
        body: {
                "count": 0,
                "data": [
                  {
                    "idvendedor": 0,
                    "nome": "string"
                  }
                ]
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});