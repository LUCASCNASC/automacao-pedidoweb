

describe('/v3/cnae - CNAE', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:8000/Diversos/v2_diversos_cnae',
        body: {
                "count": 0,
                "data": [
                  {
                    "idcnae": 0,
                    "descricao": "string"
                  }
                ]
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});