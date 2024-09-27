

describe('/v3/pos_venda_Historico/{codigo}', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:8000/Pós-venda/v2_pos_venda_Historico',
        body: {
                
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});