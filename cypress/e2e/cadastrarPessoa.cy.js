describe('Cadastro de Pessoa', () => {

    beforeEach(() => {
      cy.login()
    })
  
    it('Conseguir cadastrar pessoa com todos os campos preechidos', () => {
      cy.findByTestId('Pessoa').click();
      cy.get('[name="cad_razao"]').type('lucas camargo {downArrow}');
      cy.get('.css-69sh87 > :nth-child(2) > .form-control').type('133563733 {downArrow}');
      cy.get('[placeholder="xxxxxxxxxx"]').type('12345678910 {downArrow}');
      cy.get('#mui-1').type('30/09/1998 {downArrow}');
      cy.get('[name="cad_fonecel"]').type('4498444-8484 {downArrow}');
      cy.get('[name="cad_fonecom"]').type('4498444-8484 {downArrow}');
      cy.get('[name="cad_foneresid"]').type('4498444-8484 {downArrow}');
      cy.get('[name="cad_email"]').type('nascimentocamargolucas@gmail.com');
      cy.get('.css-1tkqo8y > .MuiButton-textPrimary').click();
      cy.get('.css-1jkh5ew').click();
      cy.get('#form_editar_endereco_entrega > .w-full').select('3');
      cy.get('[name="cendcep"]').type('87065300 {downArrow}');
      cy.get('.mb-2 > .form-control').type('66 {downArrow}');
      cy.get('[name="cendcontato"]').type('4498444-8484 {downArrow}');
      cy.get('#form_editar_endereco_entrega > .col-12 > [rows="1"]').type('Chegar, bater palma e gritar até alguém atender. {downArrow}');
      cy.get('.MuiButtonBase-root.mt-4').click();
      cy.get('.css-1jkh5ew').click();
      cy.get('#form_editar_endereco_entrega > .w-full').select('1');
      cy.get('[name="cendcep"]').type('87065300 {downArrow}');
      cy.get('.mb-2 > .form-control').type('66 {downArrow}');
      cy.get('[name="cendcontato"]').type('4498444-8484 {downArrow}');
      cy.get('#form_editar_endereco_entrega > .col-12 > [rows="1"]').type('Chegar, bater palma e gritar até alguém atender. {enter}');
      cy.get('.MuiButtonBase-root.mt-4').click();
      cy.get('.css-1tkqo8y > .MuiButton-textPrimary').click();
      cy.get(':nth-child(1) > :nth-child(1) > .form-control').type('Lucas {downArrow}');
      cy.get('[style="display: grid; gap: 1rem; grid-template-columns: auto 1fr; margin: 2rem 0px;"] > :nth-child(1) > :nth-child(2) > .form-control').type('(44)98444-5734 {downArrow}');
      cy.get('[style="display: grid; gap: 1rem; grid-template-columns: auto 1fr; margin: 2rem 0px;"] > :nth-child(1) > :nth-child(3) > .form-control').type('(44)98444-5734 {downArrow}');
      cy.get(':nth-child(4) > .form-control').type('Maringá {downArrow}');
      cy.get('#cre_obs').type('Testando cadastro de pessoa (campo observação) {downArrow}');
      cy.get('#form_referencia > .MuiButtonBase-root').click();
      cy.get('.css-1tkqo8y > .MuiButton-textPrimary').click();
      cy.get('[name="ptid"]').select('1');
      cy.get('[name="cad_condpagto"]').select('1');
      cy.get('[name="cad_tpdocto"]').select('10');
      cy.get('.css-1tkqo8y > .MuiButton-textPrimary').click();
      cy.get('.css-mg7oh > .MuiButtonBase-root').click();

    })
  })