
var adic=[]

var form=document.getElementById('slc')
var box=document.getElementById('box')

function add(){
    var num=Number(box.value)

    if(box.value.length==0){
        window.alert('Digite um número para que ele possa ser adicionado.')
    }else if(num<1||num>100){
        window.alert('Digite um número entre 1 e 100')
    }else{
        

        var op=document.createElement('option')
        op.innerHTML=`O número ${num} foi adicionado.`
        form.appendChild(op)

        adic.push(num)
        box.value=''

        limparRes()

    } 
}

function limpar(){
    form.innerHTML=''
    box.value=''
    adic=[]

    limparRes()

    
}

function limparRes(){
    p1.innerHTML=''
    p2.innerHTML=''
    p3.innerHTML=''
    p4.innerHTML=''
    p5.innerHTML=''
    box.focus()
}

function final(){
    if(form.innerHTML==''){
        window.alert('Adicione algum número antes de finalizar.')
    }else{
        let p1=document.getElementById('p1')
        let p2=document.getElementById('p2')
        let p3=document.getElementById('p3')
        let p4=document.getElementById('p4')
        let p5=document.getElementById('p5')

        p1.innerHTML=`Ao todo temos ${adic.length} números cadastrados.`
        //maior
        
        adic.sort((a,b)=>a-b)
        p2.innerHTML=`O maior número adicionado foi ${adic[adic.length-1]}`
        //menor
        p3.innerHTML=`O menor número adicionado foi ${adic[0]}`
        //soma
        p4.innerHTML=`A soma de todos os números é ${soma(adic)}`
        //media
        p5.innerHTML=`A média de todos os números adicionados é ${media(adic)}`

        box.focus()

    }
    
}


function soma(list){
    res=0
    t=0
    while(t<=(list.length)-1){
        res+=list[t]
        t++
    }
    return res
}

function media(list){
    l=soma(list)
    res=l/list.length
    return res
}