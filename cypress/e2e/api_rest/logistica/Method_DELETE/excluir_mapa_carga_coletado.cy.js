

describe('/v3/exluir_mapa_carga_coletado/{idFilial}/{idMapaCarga}/{TipoMapaCarga}', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'DELETE',
        url: 'http://localhost:8000/Logística/v3_delete_mapa_carga_coletado',
        body: {
                
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});