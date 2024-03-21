let datas = new Date();
let diaSemanal = datas.getDay();
let diaFeira = diaDeFeira(diaSemanal)

function diaDeFeira(feira){
   
    return feira >= 7 ? feira: `${feira}-feira` ;

}

function dataCorreta(){
    let dia = datas.getDate();
    let mes = datas.getMonth() + 1;
    let ano = datas.getFullYear();
    let hora = datas.getHours();
    let minuto = datas.getMinutes();
    
    


    switch(diaSemanal){
        case 0:
        diaSemanal = 'Domingo';
        break;
        case 1:
            diaSemanal = 'Segunda'
            break;
        case 2: 
            diaSemanal = 'Terça';
            break;
        case 3:
            diaSemanal = 'Quarta'
            break;
        case 4:
            diaSemanal = 'Quinta';
            break;
        case 5:
            diaSemanal = 'Sexta';
            break;
        case 6:
            diaSemanal = 'Sábado';
            break;

        
    }
    switch(mes){
        case 1:
            mes = 'Janeiro';
            break;
        case 2:
            mes = 'Fevereiro';
            break;
        case 3:
            mes = 'Março';
            break;
        case 4:
            mes = 'Abril';
            break;
        case 5:
            mes = 'Maio';
            break;
        case 6:
            mes = 'junho';
            break;
        case 7:
            mes = 'julho';
            break;
        case 8:
            mes = 'Fevereiro';
            break;
        case 9:
            mes = 'Fevereiro';
            break;
        case 10:
            mes = 'Fevereiro';
            break;
        case 11:
            mes = 'Fevereiro';
            break;
        case 12:
            mes = 'Fevereiro';
            break;
            }
    return `${diaDeFeira(diaSemanal)} ${dia} de ${mes} de ${ano} ${hora}:${minuto}` ;
}
const dataCerta = dataCorreta();

console.log(dataCerta);




