let btn_1 = document.getElementById('btn-1')
let btn_2 = document.getElementById('btn-2')
let btn_3 = document.getElementById('btn-3')
let btn_4 = document.getElementById('btn-4')
let btn_5 = document.getElementById('btn-5')
let btn_6 = document.getElementById('btn-6')
const botoes = document.getElementsByClassName('botao')


btn_1.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('imagens/tlou-1.jpg')"
})

btn_2.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('imagens/tlou-2.jpg')"
})

btn_3.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('imagens/tlou-3.jpg')"
})

btn_4.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('imagens/tlou-4.jpg')"
})

btn_5.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('imagens/tlou-5.jpg')"
})

btn_6.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('imagens/tlou-6.jpg')"
})

botoes.forEach(botao => {
    botao.addEventListener('click', function(){
        //Definir a cor de fundo do botão clicado atual
        this.style.backGroundColor = '#1d8346'

        //Iterar sobre todos os botões e mudar suas cores
        for (let i = 0; i< botoes.length; i++){
            if (botoes[i] !== this) {
                botoes[i].style.backGroundColor = 'white' //cor padrão
            }
        }
    })
})
