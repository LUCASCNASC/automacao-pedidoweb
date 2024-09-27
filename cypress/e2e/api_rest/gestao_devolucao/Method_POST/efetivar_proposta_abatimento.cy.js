

describe('/v3/efetivar_proposta_abatimento', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:8000/Gestão%20Devolução/v2_gestao_devolucao_efetivar_proposta_abatimento',
        body: {
                
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});