

describe('/v3/pedido_compra_incluir - Incluir Pedido Compra', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:8000/Compras/v3_post_pedido_compra_incluir',
        body: {
                "CNPJ_FilialPedido": "string",
                "CNPJ_CPFFornecedor": "string",
                "CNPJ_Fornecedor_Base_Fiscal": "string",
                "ProcessoCompra": 0,
                "CodigoComprador": 0,
                "PedidoFornecedor": "string",
                "Observacao": "string",
                "SomarFreteBaseIPI": true,
                "PercentualFreteCIF": 0,
                "TotalDescontoIncondicional": 0,
                "ValorTotalPedido": 0,
                "CodigoLocalSaldo": 0,
                "CodigoRepresentante": 0,
                "CodigoTransportadora": 0,
                "CodigoTipoFrete": 0,
                "CodigoTipoRateioFrete": 0,
                "RemarcarPreco": true,
                "Vendor ou Compor": true,
                "PercentualVendor": 0,
                "DiasDataBaseParcela": 0,
                "NumeroFilialReservaAutomatica": 0,
                "ObservacaoVPC": "string",
                "ItensPedido": [
                  {
                    "ItemPedido": 0,
                    "Produto": 0,
                    "GradeX": 0,
                    "GradeY": 0,
                    "Quantidade": 0,
                    "ValorUnitarioItem": 0,
                    "PercentualIPI": 0,
                    "ValorFreteUnitario": 0,
                    "PercentualFreteUnitario": 0,
                    "DataPrevisaoFaturamento": "string",
                    "DataPrevisaoEntrega": "string"
                  }
                ],
                "Parcelas": [
                  {
                    "NumeroParcela": 0,
                    "PrazoDiasVencimento": 0,
                    "ValorParcela": 0
                  }
                ],
                "Filais_Reserva": [
                  {
                    "ItemPedidoCompra": 0,
                    "Numero_Filial": 0,
                    "Quantidade": 0
                  }
                ]
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});