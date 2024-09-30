

describe('/v3/cliente_anexo - Anexo do cliente', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:8000/Cliente/v3_cliente_anexo_post',
        body: {
                "idcnpj_cpf": "string",
                "idtipoanexo": 0,
                "idpessoaanexo": "string",
                "descricao": "string",
                "arquivo": "string"
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});