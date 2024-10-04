//Função para gerar CNPJ
// cypress/support/gerarCnpj.js

function gerarCNPJ() {
    const randomNumber = () => Math.floor(Math.random() * 10);

    // Gera a base do CNPJ (12 primeiros dígitos)
    const cnpjBase = `${randomNumber()}${randomNumber()}${randomNumber()}${randomNumber()}${randomNumber()}${randomNumber()}` +
                     `${randomNumber()}${randomNumber()}${randomNumber()}${randomNumber()}`;

    const calcularDigito = (cnpj, peso) => {
        let soma = 0;
        for (let i = 0; i < cnpj.length; i++) {
            soma += cnpj[i] * peso;
            peso--;
            if (peso < 2) {
                peso = 9;
            }
        }
        const resto = soma % 11;
        return resto < 2 ? 0 : 11 - resto;
    };

    const primeiroDigito = calcularDigito(cnpjBase, 5);
    const segundoDigito = calcularDigito(cnpjBase + primeiroDigito, 6);

    // Monta o CNPJ completo
    const cnpjCompleto = `${cnpjBase}${primeiroDigito}${segundoDigito}0001`;
    
    // Formata o CNPJ no padrão XX.XXX.XXX/0001-XX
    return `${cnpjCompleto.slice(0, 2)}.${cnpjCompleto.slice(2, 5)}.${cnpjCompleto.slice(5, 8)}/0001-${cnpjCompleto.slice(8, 14)}`;
}


export default gerarCNPJ;