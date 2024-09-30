

describe('/v3/cliente_anexo/{idcnpj_cpf} - Lista de anexos do cliente', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:8000/Cliente/v3_cliente_anexo',
        body: {
                "idcnpj_cpf": 0,
                "anexo": [
                  {
                    "idtipoanexo": 0,
                    "idpessoaanexo": "string",
                    "descricao": "string",
                    "arquivo": 0,
                    "datamovimento": "string"
                  }
                ]
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});