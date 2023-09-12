const alunos = ['Luiz', 'Maria', 'Jõao'];

console.log(`Possuimos um Aaray com os seguintes elementos "${alunos}"`);

console.log(`A contagem de inidices em um array equivale um elemento dentro do array, exibindo o segundo indice do array recebemos: ${alunos[2]}`);

alunos[2] = 'Adriana'; 
console.log(`É possivel editar o campo do array redeclarando o valor da váriavel no indice pertencente, no caso o segundo indice agora seria ${alunos[2]}`);

alunos[3] = 'Sora';
console.log(`Da mesma forma que conseguimos alterar, é posssivel adicionar novos indices, sendo agora nosso terceiro indice: ${alunos[3]}`);

alunos.push('sony');
alunos.push('Bindendo');
console.log(`Utilizando "pus" conseguimos inserir elementos ao fim do array:"${alunos}"`);

alunos.unshift('sony');
console.log(`O comando "unshift" adicionamos no inicio do array: ${alunos}`);

alunos.pop();
console.log(`"pop" é o comando utilizado para remover o ultimo elemento do array: ${alunos}`)

alunos.shift();
console.log(`Alterando o comando para "shift" o comando utilizado remove o primeiro elemento do array: ${alunos}`)

delete alunos[0];
console.log(`Removemos registros do array com "delete" retirando o primeiro item temos: ${alunos}`);

console.log(`O comando "slice" é possivel selecionar apenas alguns itens do array:  ${alunos.slice(0,3)}`);

alunos.unshift('Luiz');

console.log(`O comando "slice" é possivel selecionar apenas alguns itens do array:  ${alunos.slice(0, -1)}`);

console.log(`verificamos se a variavel é um array com "instanceOff Array" alunos é um Array? ${alunos instanceof Array}`);





