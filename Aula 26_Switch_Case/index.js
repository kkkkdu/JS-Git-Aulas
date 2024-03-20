const data = new Date('2000-06-23 20:00:00');
const diaSemana = data.getDay();

switch(diaSemana){
    case 0:
        diaTexto = 'Domingo';
        break;
    case 1:
        diaTexto = 'Segunda';
        break;
    case 2:
        diaTexto = 'Terça';
        break;
    case 3:
        diaTexto = 'Quarta';
        break;
    case 4:
        diaTexto = 'Quinta';
        break;
    case 5:
        diaTexto = 'Sexta'
        break;
    case 6:
        diaTexto = 'Sábado';
        break; 
    default:
        diaTexto = 'Não é um dia válido';
}

// if (diaSemana === 0){
//     diaTexto = 'Domingo';
// }else if (diaSemana === 1){
//     diaTexto = 'Segunda'
// }else if (diaSemana === 2){
//     diaTexto = 'Terça'
// }else if (diaSemana === 3){
//     diaTexto = 'Quarta'
// }else if (diaSemana === 4){
//     diaTexto = 'Quinta'
// }else if (diaSemana === 5){
//     diaTexto = 'Sexta'
// }else if (diaSemana === 6){
//     diaTexto = 'Sábado'
// }
// else {
//     diaTexto = 'Não é um dia da Semana'
// }

console.log(diaSemana, diaTexto);