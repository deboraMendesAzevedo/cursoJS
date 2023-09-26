let num = []

console.log(num)
/*-------------------------------*/

num =[5,8,4]

console.log(num)

console.log(`Nosso vetor é o ${num}`)
/*-------------------------------*/
num[3] = 6
console.log(num)
/*-------------------------------*/
num.push(7)

console.log(num)
/*-------------------------------*/

num.length
console.log(`O vetor tem ${num.length} posições`)
/*-------------------------------*/

num.sort()
console.log(`O veto em ordem ${num.sort()}`)

/*-------------------------------*/
num.push(1)
num.sort()
console.log(`Incluindo o número 1 e colocando em ordem ${num}`)
/*-------------------------------*/
num.push(2)
console.log(`nova ordem ${num}, pois 2 fica no final `)

/*-------------------------------*/
console.log(num[0])
console.log(num[1])
console.log(num[2])

/*-------------------------------*/
console.log(`Usando o for com o vetor`)
for(var i = 0; i <= num.length; i++){
    console.log(`A posição ${i}  tem o valor ${num[i]}`)
}
/*-------------------------------*/
console.log(`Usando o for de forma simplificada com vetor`)
for(var i in num){
    console.log(`A posição ${i}  tem o valor ${num[i]}`)
}
/*-------------------------------*/
console.log('Buscando a posição de um número')
var posicao = num.indexOf(7)

console.log(`Mostrar a posição do número 7, e a posição é  ${posicao}`)
/*-------------------------------*/

num.push(10)
console.log(num)
var posicao = num.indexOf(2)
console.log('Colocando o sort e depois buscando a posição de um número')
num.sort()
console.log(`Mostrar a posição do número 10, e a posição é  ${posicao}`)
/*-------------------------------*/

console.log(`quando a posição for igual a -1, significa que não encontrou o valor`)
var posicao = num.indexOf(9)
console.log(`${posicao}`)
/*-------------------------------*/
var posicao = num.indexOf(9)
console.log(`${posicao}`)
if(posicao == -1){
    console.log(`o valor não foi encontrado`)
}else{
    console.log(`Mostrar a posição do número 9, e a posição é  ${posicao}`)
}

/*-------------------------------*/


/*-------------------------------*/

