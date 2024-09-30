

describe('/v3/cliente_por_cnpj_cpf_ou_nome/{valor} - Buscar Cliente por CNPJ/CPF ou parte do NOME', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:8000/Cliente/v3_cliente_por_cnpj_cpf_ou_nome',
        body: {
                "cnpj_cpf": "string",
                "nome": "string"
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});