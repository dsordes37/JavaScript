function contar(){
    var ini=document.getElementById('ini')
    var fim=document.getElementById('fim')
    var pas=document.getElementById('pas')
    
    var res=document.getElementById('res')

    if (ini.value.length==0 || fim.value.length==0 || pas.value.length==0){
        window.alert('[ERRO]-Faltam dados !!')
    }else{
        res.innerHTML='contando...<br>'
        let ni=Number(ini.value)
        let nid=Number(ini.value)
        let nf=Number(fim.value)
        let np=Number(pas.value)
        if(np<=0){
            window.alert('o \"passo\" não pode ser negativo nem igual a 0. O sistema considerará passo=1')
            np=1
            pas.value='1'
        }

        

        let emo='👉'

        if(ni<nf){
            let inter=nf-ni
            while(ni<=nf){
                if(ni==nf-(inter%np)){
                    emo='🚩'
                }
                res.append(` ${ni}${emo}`)
                ni+=np
            }
        }else{
            let inter=ni-nf
            while(ni>=nf){
                if(ni==nf+(inter%np)){
                    emo='🚩'
                }
                res.append(` ${ni}${emo}`)
                ni-=np
            }

        }
    }


    

    



}