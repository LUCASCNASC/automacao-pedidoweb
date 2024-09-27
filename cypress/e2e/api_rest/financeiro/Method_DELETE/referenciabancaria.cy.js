

describe('/v3/referenciabancaria/{cnpjCpf}/{idReferenciaBancaria}', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'DELETE',
        url: 'http://localhost:8000/Financeiro/v3_financeiro_referencia_bancaria_delete',
        body: {
                
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});