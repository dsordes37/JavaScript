var lista = [89, 16, 98, 2, 30]
console.log(lista)
console.log('=========================================')

lista.sort()
console.log(lista)
console.log('=========================================')

console.log(lista.sort())

console.log('=========================================')

console.log(lista.sort((a, b)=>a-b))