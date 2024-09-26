

describe('/v3/parametro_percentual_desconto_recebimento_titulo/{idFilial}', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:8000/Financeiro/v3_financeiro_parametro_percentual_desconto_recebimento_titulo',
        body: {
                
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});