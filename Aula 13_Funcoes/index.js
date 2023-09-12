function salve(nome) {
    return `Bom dia, ${nome}!`;


}
const recebe = salve('Carlos');
console.log(recebe);

function soma(x, y){
    const resultado = x +y;
    return resultado;
}
console.log(soma(4, 6));

const raiz = function (n) {
    return n ** 0.5;

};

console.log(raiz(9));

const raizSimplifi = (n) => n **0.5;
console.log(raizSimplifi(4));
