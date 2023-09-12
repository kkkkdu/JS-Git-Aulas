let nome = 'Carlos';
nome[0] = 'R';
console.log(nome[0], nome);
let arrei = [1,2,3,4,5];
let arreib = arrei;
// Tipos primitivos não sofrem alteração em seus índices. e quando uma váriavel declara uma outra ela realiza uma cópia dos dados 
let nomeb = nome;
console.log(nome, nomeb); // Se trocarmos o valor da váriavel referencia a anterior continua com seu dado salvo

nome = 'Xarles';
console.log(nome, nomeb);

arrei.push(6)
console.log(arrei, arreib);
//Quando trabalhamos com Array, as duas váriaveis vão apontar para o mesmo dado, quando alterado as duas modificam 
arreib.pop();
console.log(arrei, arreib);

//Podemos pegar apenas o valor da váriavel no primeiro momento e não transferem suas alterações
let arreic = [...arrei];

console.log(arrei, arreib, arreic);

arreic.pop();
arreic.unshift('Novo valor');
arreib.pop();
console.log(arrei, arreib, arreic);
