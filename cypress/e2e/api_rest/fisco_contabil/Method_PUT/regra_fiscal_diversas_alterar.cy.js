

describe('/v3/regra_fiscal_diversas_alterar', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'PUT',
        url: 'http://localhost:8000/Fisco/Contabil/v3_regra_fiscal_diversas_put',
        body: {
                
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});