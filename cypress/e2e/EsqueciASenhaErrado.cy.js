describe('Esqueci a senha', () => {

    beforeEach(() => {
      cy.login()
    })
  
    it('Colocar senha errada e tentar fazer a recuperação da mesma.', () => {
        cy.get('.btn > .text-dark-100').click();
        cy.get('.navi-footer > .btn').click();
        cy.get('#email').type('TESTE {downArrow}');
        cy.get('#current-password').type('TESTE {downArrow}');
        cy.get('#kt_login_signin_submit').click();
        cy.get('#kt_login_forgot').click();
        cy.get('.form-control').type('teste.ncs@gmail.com {downArrow}');
        cy.get('.btn-primary').click();
        //ainda não está pronto
    })
})