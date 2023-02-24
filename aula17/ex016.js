function parimp(n){
    if((n%2)==0){
        return('par')
    }else{
        return('impar')
    }
}

function addZero(n){

    res=("0"+n)
    return res
}

var dia=new Date().getDate()
var mes=new Date().getMonth()+1
var ano=new Date().getFullYear()

console.log(`${dia}/${addZero(mes)}/${ano}`)
