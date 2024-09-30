

describe('/v3/operacoes_tef - Operacões TEF', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:8000/Diversos/v3_diversos_operacoes_tef',
        body: {
                "idoperacaocomtef": 0,
                "operacao": "string",
                "mensagens": [
                  {
                    "idmensagemtef": 0,
                    "mensagem": "string",
                    "retorno": "string"
                  }
                ]
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});