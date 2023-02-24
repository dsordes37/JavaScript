function verificar(){
    var box=document.getElementById('nasc')
    

    var ano=new Date().getFullYear()

    if(box.value.length==0||box.value>ano){
        window.alert('[ERRO]-Verifique os dados e tente novamente.')
    }else{
        var sex=document.getElementsByName('sex')
        var idade=(ano-box.value)
        var ret=document.getElementById('ret')
        var genero=''

        var img=document.createElement('img')
        
        if(sex[0].checked){
            genero='homem'
            if(idade<16){
                img.setAttribute('src', 'imgs/criancaH.png')
            }else if(idade<30){
                img.setAttribute('src', 'imgs/jovemH.png')
            }else if(idade<60){
                img.setAttribute('src', 'imgs/homem.png')
            }else{
                img.setAttribute('src', 'imgs/veio.png')
            }
        }else if(sex[1].checked){
            genero='mulher'
            if(idade<16){
                img.setAttribute('src', 'imgs/criancaM.png')
            }else if(idade<30){
                img.setAttribute('src', 'imgs/jovemM.png')
            }else if(idade<60){
                img.setAttribute('src', 'imgs/mulher.png')
            }else{
                img.setAttribute('src', 'imgs/veia.png')
            }
        }
        ret.innerHTML=`${genero} com ${idade} anos de idade.`
        ret.appendChild(img)
    }
    
}