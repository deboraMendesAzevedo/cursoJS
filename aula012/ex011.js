var idade = 16

if (idade < 18){
    console.log('menor de idade')

}else{
    console.log('Maior de idade')
}




if(idade < 16){
    console.log('Não vota')
}else{
    if(idade >= 16 && idade < 18){
        console.log('Voto Opcional')
    }else{
        console.log('Voto Obrigatório')
    }

}

if(idade < 16){
    console.log('Não vota')
}else{
    if( idade < 18){ // pode simplificar
        console.log('Voto Opcional')
    }else{
        console.log('Voto Obrigatório')
    }

}

console.log('Usando e &&')
console.log(`Sua idade é ${idade} anos`)
if(idade < 16){
    console.log('Não vota')

}
else if (idade >= 18 && idade <= 65){
    console.log('Voto obrigatório')
}   
else{
    console.log('Voto opcional')
}

console.log('Usando ou ||')
console.log(`Sua idade é ${idade} anos`)
if(idade < 16){
    console.log('Não vota')

}
else if (idade >= 18 || idade <= 65){
    console.log('Voto opcional')
}   
else{
    console.log('Voto obrigatório')
}