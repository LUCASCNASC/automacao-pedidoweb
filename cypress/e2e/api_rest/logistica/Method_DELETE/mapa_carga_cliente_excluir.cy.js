

describe('/v3/mapa_carga_cliente_excluir/{idFilial}/{idMapaCarga}', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'DELETE',
        url: 'http://localhost:8000/Logística/v3_delete_logistica_mapa_carga_cliente',
        body: {
                
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});