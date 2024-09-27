

describe('/v3/excluir_dados_coletados_nota_transferida/{idFilialOrigem}/{idRegistroNotaOrigem}', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'DELETE',
        url: 'http://localhost:8000/Logística/v3_delete_excluir_dado_coletado_nota_transferida',
        body: {
                
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});