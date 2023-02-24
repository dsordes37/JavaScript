function tabu(){
    var sel=document.getElementById('sel')
    var box=document.getElementById('box')

    if(box.value.length==0){
        window.alert('[ERRO]-Digite um número !!')
    }else{
        var num=Number(box.value)
        var mult=0
        sel.innerHTML=''
        while(mult<=10){
            var op=document.createElement('option')
            op.innerHTML=`${num} x ${mult} = ${num*mult}`
            sel.appendChild(op)
            mult++
        }
    }

    

    


    
}