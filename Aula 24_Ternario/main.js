// O uso do ternário se deve com o comando "?";


const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario>=1000 ? 'Usuario VIP' : 'Usuario Comum';

const corUsuario = 'Azul';
const corPadrao = corUsuario || 'Preta';

// if (pontuacaoUsuario >= 1000){
//     console.log(`Usuário VIP`);
//     } 
// else {
//     console.log('Usuário Comum');
// }

console.log(`Utilizando ternários obtemos o mesmo resultado:'${nivelUsuario}', Utilizando para definir um valor padrão ou o especificado do usuário '${corPadrao}'`);

console.log(corPadrao, nivelUsuario)
