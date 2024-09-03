function generateCPF() {
    const generateDigit = (num) => {
      let sum = 0;
      let weight = num === 9 ? 10 : 11;
      for (let i = 0; i < weight - 1; i++) {
        sum += num[i] * weight--;
      }
      const remainder = (sum * 10) % 11;
      return remainder === 10 || remainder === 11 ? 0 : remainder;
    };
  
    const randomNumber = (size) => {
      let num = '';
      for (let i = 0; i < size; i++) {
        num += Math.floor(Math.random() * 10);
      }
      return num;
    };
  
    let base = randomNumber(9);
    const firstDigit = generateDigit(base.split(''));
    base += firstDigit;
    const secondDigit = generateDigit(base.split(''));
    base += secondDigit;
  
    // Format CPF as XXX.XXX.XXX-XX
    return base.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }
  
  module.exports = generateCPF;
  