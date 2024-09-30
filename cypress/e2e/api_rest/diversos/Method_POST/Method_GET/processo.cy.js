

describe('/v3/processo - Processos Mobile', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:8000/Diversos/v2_diversos_processo',
        body: {
                "codigo": 0,
                "descricao": "string",
                "diasamaismontagem": 0,
                "rotaobrigatoria": true,
                "aceitavendasemsaldo_local": true,
                "aceitavendasemsaldo_remota": true,
                "tipoupdatesaldoprodutolocal": 0,
                "tipoupdatesaldoprodutoremoto": 0,
                "alteranomepessoavenda": true,
                "solicitafiador": true,
                "solicitartransportadora": true,
                "imprimiraoconfirmar": true,
                "avisaestoquenegativo": true,
                "vendersomentepromocao": true,
                "permitirdescontopromocao": 0,
                "somenteservico": true,
                "visualizarrentabilidadeemarkup": true,
                "visualizarcomissao": true,
                "trialvendasemsaldo": 0,
                "locaisdesaldo": 0,
                "formaspagamentoavista": [
                  {
                    "codigo": 0,
                    "descricao": "string",
                    "vencimentoem": 0
                  }
                ],
                "servicosautomaticos": [
                  {
                    "codigo": 0,
                    "nome": "string",
                    "valor": 0,
                    "processoisentojuros": [
                      {
                        "idprocesso": 0,
                        "descricaoprocesso": "string"
                      }
                    ]
                  }
                ],
                "servicofrete": [
                  {
                    "codigo": 0,
                    "descricao": "string",
                    "valor_fixo": 0,
                    "valor_minimo": 0,
                    "valor_maximo": 0,
                    "percentual_fixo": 0,
                    "obrigatorio_cobrar": true,
                    "permite_alterar": true
                  }
                ]
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});