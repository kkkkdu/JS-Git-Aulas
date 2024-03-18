/*
const horaEspecifica = 60 * 60 * 3 *1000; Aqui criamos o contador de 3 horas
const dias = 60 * 60 * 24 * 1000; Neste comando adicionamos o contador de 24 horas
const data = new Date(0); Comando para informar a data de marco 0
const dataCrua = new Date();  Ele ira pegar a data atual exata
*/

// // const dataEspecifica = new Date(2015, 3) ano, mes dia, data, hora, minuto, segundo, ms

// const dataString = new Date('2019-04-20 20:20:59')
// console.log ('Dia', dataString.getDate());
// console.log ('Mês', dataString.getMonth() +1); //Mês começa do zero 0-Janeiro 11-Dezembro
// console.log ('Ano', dataString.getFullYear());
// console.log ('Hora', dataString.getHours());
// console.log ('Min', dataString.getMinutes());
// console.log ('Seg', dataString.getSeconds());
// console.log ('ms', dataString.getMilliseconds());
// console.log ('Dia da semana', dataString.getDay()); // 0 - Domingo 6- Sábado


// console.log(Date.now());
// console.log(dataString.toString());

const datas = new Date();
const dataLocal = formataData(datas);
formataData(dataLocal);

function formataData (datas) {
    console.log('Data função', datas)
     const dia = datas.getDate();
     const mes = datas.getMonth() + 1;
     const ano = datas.getFullYear();
     const hora = datas.getHours();
     const minuto = datas.getMinutes();
     const segundo = datas.getSeconds();
     const milisegundo = datas.getMilliseconds();
     const diaDaSemana = datas.getDay();

   return`${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}:${milisegundo}`
 }