

describe('/api/swagger - Swagger', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:8000/API/api_swagger',
        body: {
                "versaoREST": "string",
                "versaoBanco": "string"
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});