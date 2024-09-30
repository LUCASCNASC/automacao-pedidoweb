

describe('/v3/cliente/{cliente} - Dados do cliente', () => {

    it('200 - Deve realizar a ação corretamente',() => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:8000/Cliente/v2_cliente_get_delete_get',
        body: {
                "cnpj_cpf": "string",
                "nome": "string",
                "nomefantasia": "string",
                "datacriacao": "string",
                "idtiposexo": 0,
                "idtipocontribuinte": 0,
                "faturamentoanual": 0,
                "pai": "string",
                "mae": "string",
                "nacionalidade": "string",
                "atualizarcadastro": false,
                "idtipoestadocivil": 0,
                "idnivelformacao": 0,
                "idtipoocupacao": 0,
                "empresaatividade": "string",
                "registrojuntacomercial": "string",
                "dataregistrojuntacomercial": "string",
                "idnaturezaretencaofonte": 0,
                "contador": "string",
                "dddcontador": "string",
                "telefonecontador": "string",
                "cce_rg": "string",
                "orgaoexpedicaorg": "string",
                "dataexpedicaorg": "string",
                "numeroconselhoprofissional": "string",
                "aposentado": false,
                "pensionista": false,
                "numerocarteiraprofissional": 0,
                "gerarboleto": false,
                "seriecarteiraprofissional": "string",
                "ufcarteiraprofissional": "string",
                "numerobeneficio": "string",
                "orgaobeneficio": "string",
                "numeroinscricaotrabalhador": "string",
                "numerocarteiraorgaoclasse": "string",
                "renavam": "string",
                "inscricaomunicipal": "string",
                "inscricaosubstitutotributario": [
                  {
                    "uf": "string",
                    "inscricaosubstitutotributario": "string",
                    "exclusivodifal": false
                  }
                ],
                "inscricaosuframa": "string",
                "idtiporesidencia": 0,
                "residentedesde": "string",
                "valoraluguel": 0,
                "maladireta": false,
                "placaveiculo": "string",
                "veiculoquitado": true,
                "valoroutrasrendas": 0,
                "descricaooutrasrendas": "string",
                "email": "string",
                "emailnfe": "string",
                "contato": "string",
                "observacao": "string",
                "expostapoliticamente": false,
                "relacaoexpostapoliticamente": true,
                "emancipado": false,
                "linkdocumento": "string",
                "prolabore": 0,
                "observacaovenda": "string",
                "receberemailmarketing": false,
                "verbarebate": false,
                "cidadenaturalidade": {
                  "cidade_codigo": 0
                },
                "conjuge": {
                  "cnpj_cpf": "string"
                },
                "cnae": {
                  "idcnae": 0
                },
                "endereco": [
                  {
                    "idtipoendereco": 0,
                    "cep": "string",
                    "endereco": "string",
                    "numero": "string",
                    "complemento": "string",
                    "caixapostal": "string",
                    "bairro": "string",
                    "cidade": {
                      "cidade_codigo": 0
                    }
                  }
                ],
                "telefone": [
                  {
                    "idtipotelefone": 0,
                    "ddd": "string",
                    "numero": "string",
                    "ramal": "string"
                  }
                ],
                "referencia": [
                  {
                    "pessoal": [
                      {
                        "idreferenciapessoal": 0,
                        "nome": "string",
                        "ddd": "string",
                        "telefone": "string",
                        "graurelacionamento": "string",
                        "email": "string",
                        "datainclusao": "string"
                      }
                    ],
                    "comercial": [
                      {
                        "idreferenciacomercial": 0,
                        "empresa": "string",
                        "ddd": "string",
                        "telefone": "string",
                        "contato": "string",
                        "observacao": "string",
                        "email": "string"
                      }
                    ],
                    "bancaria": [
                      {
                        "idreferenciabancaria": 0,
                        "agencia": "string",
                        "conta": "string",
                        "dataabertura": "string",
                        "bancoboleto": false,
                        "ddd": "string",
                        "telefone": "string",
                        "gerente": "string",
                        "email": "string",
                        "cnpj_cpf_correntista": "string",
                        "nomecorrentista": "string",
                        "idtipoconta": 0,
                        "operacaobancaria": "string",
                        "idformapagamento": 0,
                        "idtipochavepix": "1 - Telefone, 2 - Email, 3 - CPF CNPJ, 4 - Aleatória",
                        "chavepix": "string",
                        "banco": [
                          {
                            "codigo": 0
                          }
                        ]
                      }
                    ],
                    "financeira": [
                      {
                        "idreferenciafinanceira": 0,
                        "inicioexperienciacredito": "string",
                        "localexperiencia": "string",
                        "planoexperiencia": 0,
                        "possuicartaofinanceira": false,
                        "valorprestacao": 0
                      }
                    ]
                  }
                ],
                "empregaticio": [
                  {
                    "iddadosempregaticio": 0,
                    "empresacnpj": "string",
                    "ddd": "string",
                    "telefone": "string",
                    "empresa": "string",
                    "idramoatividade": 0,
                    "empresacep": "string",
                    "empresaendereco": "string",
                    "empresanumero": "string",
                    "empresabairro": "string",
                    "empresacomplementoendereco": "string",
                    "admissao": "string",
                    "salario": 0,
                    "dtcomprovante": "string",
                    "idtipocomprovante": 0,
                    "empresasetor": "string",
                    "empresacontato": "string",
                    "confirmadopor": "string",
                    "desligamento": "string",
                    "cargo": "string",
                    "empresacidade": {
                      "cidade_codigo": 0
                    },
                    "cbo": {
                      "idcbofamilia": 0,
                      "idcbo": 0
                    }
                  }
                ],
                "dependente": [
                  {
                    "iddependente": 0,
                    "nome": "string",
                    "datanascimento": "string",
                    "idgrauparentesco": 0,
                    "idtiposexo": 0,
                    "deduzirimpostoirpf": false
                  }
                ],
                "infcomplementar": [
                  {
                    "idpessoainformacoes": 0,
                    "descricao": "string",
                    "datamovimento": "string",
                    "idusuario": 0
                  }
                ],
                "rota": {
                  "idrota": 0,
                  "local_entrega": {
                    "codigo": 0,
                    "cidade": {
                      "cidade_codigo": 0,
                      "cidade_nome": "string"
                    }
                  }
                }
              }
      }).then((response)=>{
          expect(response.status).to.equal(200); //Verifica status da resposta

      })
    });  
});