

describe('/v3/cliente_simples_estatisticas/{idpessoa} - Dados do cliente', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:8000/Cliente/v2_cliente_simples_estatisticas',
        body: {
                "cnpj_cpf": 0,
                "nome": "string",
                "data_ultima_compra": "string",
                "ticket_medio": 0,
                "media_atraso": 0,
                "total_em_aberto": 0,
                "numero_vezes": 0,
                "formas_pagamento_mais_usadas": [
                  {
                    "idtipocarteiratitulo": 0,
                    "descricao": 0,
                    "percentual": 0
                  }
                ],
                "ultimas_compras": [
                  {
                    "data_compra": "string",
                    "codigo_produto": 0,
                    "descricao_produto": "string",
                    "quantidade": 0
                  }
                ],
                "cartao_fidelidade": {
                  "idtipocartaofidelidade": 0,
                  "descricao": "string",
                  "numerocartao": "string",
                  "diapagamento": 0,
                  "diascarencia": 0,
                  "emitecartao": true,
                  "dataemissao": "string",
                  "dataentrega": "string",
                  "datavalidade": "string",
                  "datacontato": "string"
                },
                "titulo_renegociado": true,
                "limite_credito": 0,
                "disponivel": 0,
                "receber_em_aberto": 0,
                "titulo_em_atraso": 0,
                "pedidos_nao_faturados": 0,
                "titulos_transf_pendente": 0,
                "titulos_pre_pago": 0,
                "titulos_abertos": 0
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});