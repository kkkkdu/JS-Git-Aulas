let num1 = 9.85746;
let arredondaBaixo = Math.floor(num1);
let arredondaCima = Math.ceil(num1);
let arredondaFrente = Math.round(num1)
let numMinimo = Math.min(1,4,5,6,7,8,343453,767,53);
let numMaximo = Math.max(1,4,5,6,7,8,343453,767,53);
let aleatorize = Math.random()
let aleatorizeSelecionado = Math.round(Math.random() * (10 - 1));

console.log(arredondaBaixo, arredondaCima,arredondaFrente, aleatorize, aleatorizeSelecionado);


console.log(`Nossa variável posssui o valor de ${num1}, com a função "Math.floor" Conseguimos arredondar para baixo: ${arredondaBaixo}`);
console.log(`Para arredondar para cima utilizamos a função "Math.ceil": ${arredondaCima}`);
console.log(`A função "round" arredonda baseado no valor atual do dado <5 arredonda para baixo >5 arredonda para cima  ${arredondaFrente}`);
console.log (`Usando o "Math.min" econtramos o menor valor de um array/lista ${numMinimo}, com a função "Math.max" buscamos o maior número da sequencia ${numMaximo}`);
console.log(`Com o comanod "Math.random" conseguimos gerar numéros aleatórios entre 0 e 1: ${aleatorize}, e também podemos selecionar um intervalor para o comando: ${aleatorizeSelecionado}`);



