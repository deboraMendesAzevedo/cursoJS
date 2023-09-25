function verificar(){
    
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('inascimento')
    var resposta = document.getElementById('iresposta')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Erro')
    }
    else{
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (sexo[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade >= 10){
                //document.body.style.borderBlockColor = ''
                // criança
                //window.alert('crianca')
                //img.setAttribute('src' , 'menino.jpg')
                

            }else if(idade < 21){
                // jovem

            }else if(idade < 60){
                // adulto

            }else{
                // idoso

            }

        }
        else if (sexo[1].checked){
            genero = 'Feminino'
        }
        if(idade == 0 && idade <10){
            // criança

        }else if(idade < 21){
            // jovem

        }else if( idade < 60){
            // adulto

        }else{
            // idoso

        }
        resposta.style.textAlign = 'center'
        resposta.innerHTML = `Idade calculada ${idade} anos , genero ${genero}`
    }
}