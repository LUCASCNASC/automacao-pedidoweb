

describe('/v3/regra_fiscal_departamento_listar/{Grupo}/{UF}/{CFOP}/{OrigemProduto}', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:8000/Fisco/Contabil/v3_regra_fiscal_departamento_get',
        body: {
                
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});