



function carregar(){
    var mensagem = window.document.getElementById('imensagem')
    var foto = window.document.getElementById('iimagem')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 10
    mensagem.innerHTML = `Agora são ${hora} horas`


    if(hora >= 0 && hora < 12){
        
        document.body.style.backgroundColor = '#e2cd9f'
       // foto.scr = 'fotomanha.jpg'
        
        

    }else if(hora >=12 && hora < 18){
       
        document.body.style.backgroundColor = '#b9846f'
       // foto.scr = 'fototarde.jpg'
    }
    else{
       
        document.body.style.backgroundColor = '#515154'
        //foto.scr =  'fotonoite.jpg'
    
    }

}