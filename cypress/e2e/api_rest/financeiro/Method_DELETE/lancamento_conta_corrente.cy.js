

describe('/v3/lancamento_conta_corrente/{idFilial}/{idLancamentoContaCorrente}', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'DELETE',
        url: 'http://localhost:8000/Financeiro/v3_financeiro_lancamento_conta_corrente_delete',
        body: {
                
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});