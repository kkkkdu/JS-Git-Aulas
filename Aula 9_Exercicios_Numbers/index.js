let num1 = 1;
let num2 = 2.5;
let num3 = 46.65367;
let num4 = 10;


console.log(`Podemos utilizar váriaveis numéricas como strings com o comando "toString" em uma váriavel no caso utilizamos o valor de ${num1} e outra ${num2} resultando em: ` + num1.toString() + num2);

console.log(`utilizando os tipos puros das váriaveis ${num1} e ${num2} em uma soma recebemo os valor de: ` + (num1+num2));

console.log(`Com o comando "toFixed" consigo limitar as casas decimais de um número por exemploe ${num3} somado ao ${num1} exibindo apenas duas casas: ` + (num3+num1).toFixed(1))

console.log(`Ùsando o "isInteger" podemos verificar se o retorno de uma dado é inteiro ou não de forma booleana verificando se ${num3} é inteiro: ` + Number.isInteger(num3))
