

describe('/v3/corrigir_saldo_medio_produtos', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:8000/Fisco/Contabil/v3_post_corrigir_saldo_medio_produtos',
        body: {
                
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});