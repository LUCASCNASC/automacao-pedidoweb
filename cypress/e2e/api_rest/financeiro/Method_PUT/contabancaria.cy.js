

describe('/v3/contabancaria', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'PUT',
        url: 'http://localhost:8000/Financeiro/v3_financeiro_conta_bancaria2',
        body: {
                
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});