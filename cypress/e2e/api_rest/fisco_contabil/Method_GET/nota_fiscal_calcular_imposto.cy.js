

describe('/v3/nota_fiscal_calcular_imposto/{Filial}/{RegistroNota}', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:8000/Fisco/Contabil/v3_nota_fiscal_calcular_imposto',
        body: {
                
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});