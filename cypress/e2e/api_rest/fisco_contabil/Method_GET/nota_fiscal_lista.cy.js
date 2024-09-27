

describe('/v3/nota_fiscal_lista/{Filial}/{Registro_Nota}/{Data_Inicial}/{Data_Final}/{CNPJ_CPF}', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:8000/Fisco/Contabil/v3_nota_fiscal_lista',
        body: {
                
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});