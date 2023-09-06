let nome = 'Carlos';
let lugar;
const diasDaSemana = 7
const diasTrabalhados = 5;
const diasLivres = diasDaSemana - diasTrabalhados;
console.log(nome, 'começou o uso de váriaveis');
console.log('Carlos, ainda está entendendo como usar as variáveis');
console.log('aparentemente agora sim,', nome, 'aprendeu a usar variáveis')

lugar = 'escola';

console.log('Na', lugar, nome, 'finalmente concluiu o estudo de variáveis');

lugar = 'casa';

console.log('E em sua', lugar + ',', nome, 'entendeu como alterar o valor da váriavel ao longo do código');

console.log('Após passar ' + diasTrabalhados, 'dias trabalhando, poderia agora passar ' + diasLivres, 'dias estudando que ao utilizar const não é possivel alterar o valor declarado');
