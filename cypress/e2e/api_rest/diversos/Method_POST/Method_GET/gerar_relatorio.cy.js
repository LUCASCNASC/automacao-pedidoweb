

describe('/v3/gerar_relatorio - Relatório', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:8000/Diversos/v2_diversos_gerar_relatorio',
        body: {
                "idContexto": 0,
                "idmodelorelatorio": 0,
                "filtros": [
                  {
                    "nome": "string",
                    "valor": "string"
                  }
                ]
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});