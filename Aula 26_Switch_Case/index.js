function getdiaTexto(diaSemana){
    let diaTexto;


switch(diaSemana){
    case 0:
        diaTexto = 'Domingo';
        return diaTexto;
    case 1:
        diaTexto = 'Segunda';
        return diaTexto;
    case 2:
        diaTexto = 'Terça';
        return diaTexto;
    case 3:
        diaTexto = 'Quarta';
        return diaTexto;
    case 4:
        diaTexto = 'Quinta';
        return diaTexto;
    case 5:
        diaTexto = 'Sexta'
        return diaTexto;
    case 6:
        diaTexto = 'Sábado';
        return diaTexto;
    default:
        diaTexto = 'Não é um dia válido';
        return diaTexto;
}
}

const data = new Date('2000-06-23 20:00:00');
const diaSemana = data.getDay();
let diaTexto = getdiaTexto(diaSemana);
console.log(diaSemana, diaTexto);