const nome = ' Carlos Sos';
const sobrenome = 'Sant';
const idade = 23;
const peso = 82;
const altura = 1.76;
let imc;
let anoNascimento;

anoNascimento = 2023 - idade ;

imc = peso/ (altura * altura);

console.log(nome, sobrenome, 'tem', idade + ' anos', 'seu imc é de = ' +imc, 'e nasceu no ano de', anoNascimento);


console.log(`${nome} ${sobrenome} tem ${idade} anos, seu imc é de = ${imc}, e nasceu no ano de, ${anoNascimento}`);
