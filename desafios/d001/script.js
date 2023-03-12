agora = new Date()
hora = agora.getHours() // + ':' + agora.getMinutes()
corDeFundo = document.querySelector('body')
comprimento = document.querySelector('p#hora')
imagem = document.querySelector('img')

if (hora >= 6 && hora < 12) {

    comprimento.innerHTML = `${hora} horas.`
    imagem.src = 'imagens/manhã.jpg'
    corDeFundo.style.background = '#F9D487'

} else if (hora >= 12 && hora < 18) {

    comprimento.innerHTML = `${hora} horas.`
    imagem.src = 'imagens/tarde.jpg'
    corDeFundo.style.background ='#FCBEA4'

} else if (hora >= 18 && hora <= 23) {

    comprimento.innerHTML = `${hora} horas.`
    imagem.src = 'imagens/noite.jpg'
    corDeFundo.style.background = '#25485C'

} else {

    comprimento.innerHTML = `${hora} horas.`
    imagem.src = 'imagens/madrugada.jpg'
    corDeFundo.style.background = '#2C6C8B'

}
