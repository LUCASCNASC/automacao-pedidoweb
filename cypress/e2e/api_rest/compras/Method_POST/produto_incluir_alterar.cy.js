

describe('/v3/produto_incluir_alterar - Inclui e Altera Produto', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:8000/Compras/v3_post_produto_incluir_alterar',
        body: {
                "Codigo_Produto": 0,
                "Descricao_Produto": "string",
                "Codigo_Departamento": "string",
                "Codigo_Marca": 0,
                "Codigo_Unidade": 0,
                "Codigo_Situacao_Origem": 0,
                "Codigo_NBM": "string",
                "Tipo_Tamanho_Produto": 0,
                "Peso_Bruto": 0,
                "Peso_Liquido": 0,
                "Meses_Garantia_Fabrica": 0,
                "Possui_Montagem": true,
                "Pedir_Serial_Venda": true,
                "Controlar_Movimento_Serial": true,
                "Pedir_Numero_Celular": true,
                "Altura": 0,
                "Largura": 0,
                "Profundidade": 0,
                "Validar_IMEI": true,
                "Permitir_Entrega": true,
                "Modelo": "string",
                "Produto_Grade": [
                  {
                    "Codigo_Grade_X": 0,
                    "Codigo_Grade_Y": 0,
                    "Codigo_Setor": 0,
                    "Codigo_Situacao_Produto": 0,
                    "Codigo_Frabicante": "string",
                    "Codigo_Barra": "string",
                    "Possui_Volume": true,
                    "Quantidade_Volumes": 0,
                    "Codigo_Tipo_Produto": 0
                  }
                ],
                "Produto_GTIN": [
                  {
                    "Codigo_Grade_X": 0,
                    "Codigo_Grade_Y": 0,
                    "Codigo_GTIN": "string",
                    "GTIN_Padrao": true
                  }
                ],
                "Produto_Fornecedor": [
                  {
                    "Codigo_Grade_X": 0,
                    "Codigo_Grade_Y": 0,
                    "CNPJ_Fornecedor": "string",
                    "Codigo_Produto_Fornecedor": "string"
                  }
                ]
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});