

describe('/v3/faturamento_mapa_carga_cliente', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:8000/Logística/v3_post_logistica_faturamentomapacargacliente',
        body: {
                "idFilial": 10050,
                "idMapaCargaCliente": 731,
                "idMotorista": 1,
                "idVeiculo": 9993,
                "idTipoFrete": 0,
                "dataSaida": "30/09/2024",
                "idObservacaoFiscal": 0,
                "serie": "215",
                "faturarSomente": [
                  {
                    "idFilial": 10050,
                    "idItemBase": 15000
                  }
                ]
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});