let f=function fator(n){
    if(n==1){
        return n
    }else{
        return n*fator(n-1)
    }
}

console.log(f(10))