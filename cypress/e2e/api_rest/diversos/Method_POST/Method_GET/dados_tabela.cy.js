

describe('/v3/dados_tabela/{tabela} - Tabelas do sistema', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:8000/Diversos/v2_diversos_dados_tabela',
        body: {
                "codigo": 0,
                "descricao": "string"
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});