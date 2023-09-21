var hora =1


console.log(`Agora são exatamente ${hora}`)

if(hora >= 6 && hora < 12){
    console.log('Bom Dia!')
}
else if(hora >=12 && hora < 18){
    console.log('Boa Tarde!')
}
else{
    console.log('Boa Noite!')
    if(hora >= 1 && hora <= 6){
        console.log('E boa madrugada!')
    }

}
console.log('Pegando a hora atual')

var agora = new Date
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora}`)

if(hora >= 6 && hora < 12){
    console.log('Bom Dia!')
}
else if(hora >=12 && hora < 18){
    console.log('Boa Tarde!')
}
else{
    console.log('Boa Noite!')
    if(hora >= 1 && hora <= 6){
        console.log('E boa madrugada!')
    }

}