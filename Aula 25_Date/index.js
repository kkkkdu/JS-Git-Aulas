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
function zeroAEsquerda (num){

  return num >=10 ? num : `0${num}`; 
}

function formataData (datados) {
     const dia = zeroAEsquerda(datados.getDate());
     const mes = zeroAEsquerda(datados.getMonth() + 1);
     const ano = zeroAEsquerda(datados.getFullYear());
     const hora = zeroAEsquerda(datados.getHours());
     const minuto = zeroAEsquerda(datados.getMinutes());
     const segundo = zeroAEsquerda(datados.getSeconds());
          

   return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`
 }
const datados = new Date();
const dataLocal = formataData(datados);
console.log(dataLocal);
