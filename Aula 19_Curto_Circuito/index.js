const nome1 = 'Carlos';
const nome2 = 'Aguiar';
let compara = nome1 && NaN && nome2;
console.log( 'Em Javascript existem valores que podem ser considerados ""Falsos"" sendo eles, 0, " ", null e NaN');

console.log(`realizando um comparativo entre ${nome1}, "Nan" e ${nome2} resulta em: ${compara}, sendo 'Nan' o resultado falso`);
