function carregar(){
    var msg=document.getElementById('msg')
    var imagem=document.getElementById('imagem')
    var sec=document.getElementById('sec')

    var hora=new Date().getHours()
    msg.innerHTML=`São ${hora} horas.`
    
    
    
    
    if(hora>5 && hora<12){
        imagem.innerHTML = '<img src="imgs/manha.png" alt="imagem">'
        document.body.style.backgroundColor='#FFDA56'
        sec.style.color='#FFDA56'

    }else if(hora>11 && hora<18){
        imagem.innerHTML = '<img src="imgs/tarde.png" alt="imagem">'
        document.body.style.backgroundColor='#FB5B03'
        sec.style.color='#FB5B03'

    }else{
        imagem.innerHTML = '<img src="imgs/noite.png" alt="imagem">'
        document.body.style.backgroundColor='#0749A5'
        sec.style.color='#0749A5'

    }
    
}