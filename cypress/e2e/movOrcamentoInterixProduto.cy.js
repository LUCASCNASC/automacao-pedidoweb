describe('Orçamento Interix', () => {

    beforeEach(() => {
      cy.login()
    })
  
    it('Devemos conseguir criar um orçamento corretamente, colocando uma empresa válida, um cliente válido, um tipo de orçamento válido, envolvidos válidos, condição de pagamento válida, observações válidas, observações internas válidas, produtos válidos, entregas válidas e salvar', () => {
      cy.get('[data-testid="Orçamento (INTERIX)"] > .menu-text').click();
      cy.get('#checkbox-pedvendapresencial').click();
      cy.get('#checkbox-pedvendapresencial').click();
      cy.get('[name="lja_codigo"]').type('1 {downArrow}');
      cy.get('[name="cad_codigo"]').type('1234 {downArrow}');
      //cy.get('[name="omtvid"]').type('1 {downArrow}');
      cy.get('#ped_obs').type('testando campo de observação {downArrow}');
      cy.get('#ped_obsinterna').type('testando campo de observação interna {downArrow}');
      cy.get('[data-testid="Pessoas"]').click();
      cy.get('.f > .btn-secondary').click();
      cy.get('.css-1tkqo8y > .MuiButton-textPrimary').click();
      cy.get('.ncsBtn').click();
      cy.get('.css-1vew9lj > .ncsInput').type('Ambiente A {downArrow}');
      cy.get('.css-165pqnl').click();
      cy.get('.flex > .MuiButtonBase-root').click();
      cy.get('.aside-arrow').click();
      cy.get('.css-yrpa8v > .gap-100 > :nth-child(1)').click();
      cy.get('#inputSearch').type('escada {enter}');
      cy.get('[data-id="1"] > [data-field="quantidade"] > .f > :nth-child(3)').click();
      cy.get('[data-id="1"] > [data-field="quantidade"] > .f > :nth-child(3)').click();
      cy.get('[data-id="1"] > [data-field="quantidade"] > .f > :nth-child(3)').click();
      cy.get('[data-id="2"] > [data-field="quantidade"] > .f > .quantidade').type('10 {enter}');
      cy.get('[data-id="3"] > [data-field="quantidade"] > .f > :nth-child(3)').click();
      cy.get('[data-id="3"] > [data-field="quantidade"] > .f > :nth-child(3)').click();
      cy.get('[data-id="3"] > [data-field="quantidade"] > .f > :nth-child(3)').click();
      cy.get('[data-id="3"] > [data-field="quantidade"] > .f > :nth-child(3)').click();
      cy.get('[data-id="3"] > [data-field="quantidade"] > .f > :nth-child(3)').click();
      cy.get('[data-id="3"] > [data-field="quantidade"] > .f > :nth-child(3)').click();
      cy.get('[data-id="2"] > [data-field="quantidade"] > .f > :nth-child(1)').click();
      cy.get('[data-id="2"] > [data-field="quantidade"] > .f > :nth-child(1)').click();
      cy.get('[data-id="2"] > [data-field="quantidade"] > .f > :nth-child(1)').click();
      cy.get('[data-id="2"] > [data-field="quantidade"] > .f > :nth-child(1)').click();
      cy.get('[data-id="2"] > [data-field="quantidade"] > .f > :nth-child(1)').click();
      cy.get('.pb-0 > .MuiButtonBase-root').click();
      cy.get('#item_pppreco_original').type('10 {downArrow}');
      cy.get('.w-full').select('10');
      cy.get('.MuiDataGrid-row--lastVisible > [data-field="Remover"] > .MuiButtonBase-root').click();
      cy.get('.btn-danger').click();
      cy.get('.even-table > [data-field="Editar"] > .icon-conteiner-edit').click();
      cy.get(':nth-child(1) > .d-flex > .w-full').select('AMBIENTE A');
      cy.get('#form_edit_produto > .gap-100 > .btn-primary').click();
      cy.get('.css-1tkqo8y > .MuiButton-textPrimary').click();
      cy.get('.MuiButtonBase-root > :nth-child(1) > .fa').click();
      cy.get('#form_cria_entrega > .flex > :nth-child(1) > .input-group > .card-select-style').select('ENTREGA');
      cy.get('#form_cria_entrega > .flex > :nth-child(2) > .input-group > .card-select-style').select(0);
      cy.get('.css-gc4gwe > .MuiPaper-root > .css-gt876z > :nth-child(2) > .MuiButton-root').click();
      cy.get('.MuiButtonBase-root > :nth-child(1) > .fa').click();
      cy.get('#form_cria_entrega > .flex > :nth-child(1) > .input-group > .card-select-style').select('ENTREGA ESPECIAL');
      cy.get('.css-gc4gwe > .MuiPaper-root > .css-gt876z > :nth-child(2) > .MuiButton-root').click();
      cy.get('.even-table > .MuiDataGrid-cellCheckbox > .MuiButtonBase-root > .PrivateSwitchBase-input').click();
      cy.get('.gap-100 > .alinhar-centro.spacebtw > .MuiButtonBase-root > :nth-child(1)').click();
      //cy.visit('https://lucasnovo.homologacao.ncs.com.br:2701/consulta/produtos');
      

    })
  })