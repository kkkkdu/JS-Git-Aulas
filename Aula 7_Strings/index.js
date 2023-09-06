let aspasString = "Usando uma \"String\" com aspas e escape";



console.log (aspasString);

console.log('Exibindo apenas um termo dentro da string:', aspasString[12]);

console.log("Uma outra forma de exibir as informações da string é o comando \"charAt\" procurando o indice 12:", aspasString.charAt(12));

console.log("Outra forma de utilizar as strings seria com o comando \"concat\" :", aspasString.concat(' e adicionando',' uma ','', 'parte','        ', 'vazia'));

console.log( "Podemos encontrar em que indice se encontra uma palavra com o comando \"indexOF\" buscando a palavra String:", aspasString.indexOf('String'));

console.log("Também existe o \"lastIndexOf\" que busca o contador de trás para frente o que pode influenciar nas buscas: ", aspasString.lastIndexOf('String'));

console.log("Se utilizarmos esse comando começando de uma posição x que após isso não possua a busca necessária irá retornar a mensgaem:", aspasString.lastIndexOf('String', 3));

console.log("Com o comando \"Search\" iremos apontar o local da palavra similar ao indexOf:", aspasString.search('String'));

console.log("Também existe o comando \"Replace\" no qual podemos substituir uma palavra de dentro da string substituindo a palavra aspas:", aspasString.replace(/aspas/, 'Setinhas'));

console.log("Com o comando \"leght\" podemos contar quantos indices possui a variavel ao todo:", aspasString.length);


