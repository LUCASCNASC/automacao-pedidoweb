

describe('/v3/grupo - Grupos', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:8000/Diversos/v3_diversos_grupo',
        body: {
                "idgrupo": 0,
                "idalias": "string",
                "descricao": "string",
                "tipogrupo": [
                  {
                    "codigo": 0,
                    "descricao": "string"
                  }
                ]
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});