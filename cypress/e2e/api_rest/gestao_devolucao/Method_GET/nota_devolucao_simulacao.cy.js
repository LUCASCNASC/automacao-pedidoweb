

describe('/v3/nota_devolucao_simulacao/{filial}/{solicitacao}', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:8000/Gestão%20Devolução/v2_gestao_devolucao_nota_devolucao_simulacao',
        body: {
                
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});