

describe('API - teste funcional de inventário', () => {

  it('Deve realizar o inventário corretamente',() => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:8000/v3_post_inventario_incluir',
      body: {
              "CNPJ_Filial": "77941490000589",
              "Codigo_Inventario_PDA": 1,
              "Data_Inventario": "07/12/2023",
              "Dados_Inventario": [
                {
                  "ID_Produto": 100,
                  "ID_Grade_X": 0,
                  "ID_Grade_Y": 0,
                  "ID_Local_Saldo": 1,
                  "Qtde_Saldo_Filial": 1500,
                  "Qtde_Saldo_Inventario": 1000,
                  "ID_Tipo_Divergencia": 3,
                  "ID_Tipo_Inventario": 1
                }
              ]
            }
    }).then((response)=>{
        expect(response.status).to.equal(200); //Verifica status da resposta

    })
  });  
});