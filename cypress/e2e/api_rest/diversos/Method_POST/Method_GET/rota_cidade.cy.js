

describe('/v3/rota_cidade - Rota Cidade', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:8000/Diversos/v3_diversos_rota_cidade',
        body: {
                "idgruporota": 0,
                "idrota": 0,
                "idrotacidade": 0,
                "bairro": "string",
                "cidade": {
                  "codigo": 0,
                  "descricao": "string"
                }
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});