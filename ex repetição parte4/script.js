

var numero1 = window.document.getElementById('inumero1')
var numero2 = window.document.getElementById('inumero2')
var passo = window.document.getElementById('ipasso')
var resultado = window.document.getElementById('iresposta ')
var numero1 = Number(numero1.value)
var numero2 = Number(numero2.value)
var passo = Number(passo.value)

if(numero1.value.length == 0 || numero2.value.length == 0 || passo.value.length == 0){
    window.alert('erro')
}else{
    resultado.innerHTML = 'Contando : '
    
        for(var i = numero1; i <= numero2; i = i + passo){
            resultado.innerHTML += `${i}`
        }
}

/*
function contar(){
    for(var i = numero1; i <= numero2; i = i + passo){
        resultado.innerHTML += `${i}`
    }
}

*/
