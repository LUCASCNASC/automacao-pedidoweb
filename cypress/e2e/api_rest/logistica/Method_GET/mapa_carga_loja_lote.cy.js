

describe('/v3/mapa_carga_loja_lote/{idFilial}/{idMapaCargaLojaInicial}/{idMapaCargaLojaFinal}', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:8000/Logística/v3_get_logistica_lista_mapa_carga_loja_lote',
        body: {
                
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});