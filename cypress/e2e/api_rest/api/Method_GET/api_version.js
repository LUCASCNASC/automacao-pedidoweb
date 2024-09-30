

describe('/api/version - Versão', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:8000/API/api_version',
        body: {
                "sessao": "string",
                "tempo": "string",
                "expiraEm": "string"
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta
  
      })
    });  
});