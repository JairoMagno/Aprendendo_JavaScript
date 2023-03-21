let btn_1 = document.getElementById('btn-1')
let btn_2 = document.getElementById('btn-2')
let btn_3 = document.getElementById('btn-3')
let btn_4 = document.getElementById('btn-4')
let btn_5 = document.getElementById('btn-5')
let btn_6 = document.getElementById('btn-6')

btn_1.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('imagens/tlou-1.jpg')"
    btn_1.classList.add("selecionado")
})

btn_2.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('imagens/tlou-2.jpg')"
    btn_2.classList.add("selecionado")
})

btn_3.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('imagens/tlou-3.jpg')"
    btn_3.classList.add("selecionado")
})

btn_4.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('imagens/tlou-4.jpg')"
    btn_4.classList.add("selecionado")
})

btn_5.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('imagens/tlou-5.jpg')"
    btn_5.classList.add("selecionado")
})

btn_6.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('imagens/tlou-6.jpg')"
    btn_6.classList.add("selecionado")
})