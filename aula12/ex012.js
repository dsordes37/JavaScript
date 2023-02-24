/*var hora= new Date().getHours()
var min= new Date().getMinutes()
var sec= new Date().getSeconds()

console.log(`São exatamente ${hora} horas, ${min} minutos e ${sec} segundos.`)*/

var data=new Date().getDate()
var mes=new Date().getMonth()
var ano=new Date().getFullYear()
var dia=new Date().getDay()

switch (dia){

    case 0:
        dia='Domingo'
        break

    case 1:
        dia='Segunda-feira'
        break

    case 2:
        dia='Terça-feira'
        break

    case 3:
        dia='Quarta-feira'
        break

    case 4:
        dia='Quinta-feira'
        break

    case 5:
        dia='Sexta-feira'
        break

    case 6:
        dia='Sábado'
        break

}

console.log(`${data}/${mes+1}/${ano}. ${dia}`)


