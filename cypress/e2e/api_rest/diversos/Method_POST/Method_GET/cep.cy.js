

describe('/v3/cep/{cep} - CEP', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:8000/Diversos/v2_diversos_cep',
        body: {
                "rua": "string",
                "bairro": "string",
                "estado": {
                  "uf_codigo": "string",
                  "uf_nome": "string"
                },
                "cidade": {
                  "cidade_codigo": "string",
                  "cidade_nome": "string"
                }
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});