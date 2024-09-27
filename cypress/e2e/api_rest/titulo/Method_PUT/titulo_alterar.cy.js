

describe('/v3/titulo_alterar', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'PUT',
        url: 'http://localhost:8000/Titulo/v3_put_titulo_alterar',
        body: {
                
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});