let num1 = prompt('Digite um número');
let num2 = prompt('Digite outro número');


num1 = Number(num1);
num2 = Number(num2);

const resultado = num1 + num2;

alert(`Este é o Resultado: ${resultado}`);
console.log(`Poderiamos realizar a conta eliminando a const "resultado" com o comando $ {}: ${num1+num2}`)