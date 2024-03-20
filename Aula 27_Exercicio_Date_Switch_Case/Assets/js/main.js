let datas = new Date();
let diaSemanal = datas.getDay();

function diaDeFeira(feira){
   
    return feira >= 7 ? feira: `${feira} -feira` ;

}

function dataCorreta(){
    const dia = diaDeFeira(datas.getDate());
    const mes = datas.getMonth() + 1;
    const ano = datas.getFullYear();
    const hora = datas.getHours();
    const minuto = datas.getMinutes();
    const segundo = datas.getSeconds();
    


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
    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}` ;
}
const dataCerta = dataCorreta();

console.log(dataCerta);