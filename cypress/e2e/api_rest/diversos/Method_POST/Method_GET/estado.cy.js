

describe('/v3/estado - Estados', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:8000/Diversos/v2_diversos_estado',
        body: {
                "uf_codigo": "string",
                "uf_nome": "string"
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});