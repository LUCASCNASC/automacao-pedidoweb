// cypress/e2e/api_login_spec.js

describe('Authenticated API Testing', () => {

    const baseUrl = 'http://localhost:8000/sabium'; // URL base da sua API
    let authToken;
  
    // Hook para login e obtenção do token antes dos testes
    before(() => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/v2/sessao/login`, // Endpoint de login
        body: {
          login: 'lucas.camargo', // Substitua pelo nome de usuário correto
          senha: '@Lcn1998', // Substitua pela senha correta
        },
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        expect(response.status).to.eq(200); // Verifica se o login foi bem-sucedido
        expect(response.body).to.have.property('token'); // Verifica se o token está presente
        authToken = response.body.token; // Armazena o token para uso posterior
      });
    });
  
    // Teste para um endpoint protegido usando o token de autenticação
    it.skip('should fetch some protected data', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/protected-endpoint`, // Substitua pelo endpoint protegido que você deseja testar
        headers: {
          'Authorization': `Bearer ${authToken}`, // Usa o token de autenticação
        },
      }).should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('data'); // Verifica a estrutura da resposta
      });
    });
  
  });
  