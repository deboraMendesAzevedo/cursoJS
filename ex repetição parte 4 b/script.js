function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.valeu.length == 0 || passo.valeu.length == 0){
        window.alert('Impossível contar')
    }else{
     
        res.innerHTML = 'Contando...'

        let i = Number(ini.value)
        let f = Number(fim.valeu)
        let p = Number(passo.value)

        for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML = `/u{1F3C1}`
    }
}