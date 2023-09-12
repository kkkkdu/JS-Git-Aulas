const array = [1,2,3];
array.push(4,5,6);

console.log (array);

const criaPersona = function(nome, sobrenome, idade){
    return{
        nome: nome,
        sobrenome, sobrenome,
        idade, idade
    };
};

const persona1 = criaPersona('Morgana', 'Ann', 7);

const persona2 = criaPersona('Orpheus', 'kbu', 19)

console.log(persona1, persona2);