

describe('/v3/referenciabancaria', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'PUT',
        url: 'http://localhost:8000/Financeiro/v3_financeiro_referencia_bancaria2',
        body: {
                
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});