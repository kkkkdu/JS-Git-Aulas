let contador = 1;
contador++;
++contador;
let calculo;
const num1 = 'L5';
const num2 = parseInt('7');
console.log('Realizando o primeiro incremento', contador);
console.log('realizando um incremento na exibição do log', ++contador);
console.log('variavel incrementada', contador);
console.log ('Realizar o decremento da váriavel na exibição do log ', --contador);
console.log('Valor após decremento', contador);

calculo = contador =contador + 1;

console.log('Agora realizamos um contador de incremento fixo', calculo);
calculo = contador += 2;

console.log("Contador com incremento abreviado utilizando '+= 2': '", calculo);

calculo = contador *= 2;
console.log ("Contador realizando uma atribuição multiplicativa com o comando '*= 2' :", calculo);

calculo = num1 * contador;
console.log ('Sempre tomar cuidado com o tipo de dado contido na váriavel ao realizar contas exemplo multiplicando uma string com number temos o resultado:',  calculo);

calculo = num2 + contador;
console.log ('Ao tratar o dado utilizando o comando parseInt, podemos realizar a conta com variavéis tipo string contendo apenas valores numéricos:',  calculo);

