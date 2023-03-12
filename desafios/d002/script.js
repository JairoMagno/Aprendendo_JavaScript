function idade() {

    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoNascimento = document.querySelector('input#iidade')
    var res = document.querySelector('div.res')

    if (anoNascimento.value.length == 0 || Number(anoNascimento.value) > anoAtual) {

        window.alert('Dados incompatíveis. Verique novamente!')

    } else {

        var sexo = document.getElementsByName('sexo')
        idadeAtual = anoAtual - Number(anoNascimento.value)
        var genero = ''
        var img = document.createElement('img') //Cria um elemento HTML através de JavaScript
        img.setAttribute('class', 'foto') //Adiciona um atributo e nomeia ele (id, class, name ...)

        if (sexo[0].checked) {
            //Atributo "radio" checkado em masculino
            genero = 'Homem'

            if (idadeAtual >= 0 && idadeAtual < 15) {
                //criança
                img.setAttribute('src', 'imagens/menino.png')
            } else if (idadeAtual >= 15 && idadeAtual < 21) {
                //jovem
                img.setAttribute('src', 'imagens/homem_jovem.png')
            } else if (idadeAtual >= 21 && idadeAtual <= 50) {
                //adulto
                img.setAttribute('src', 'imagens/homem_adulto.png')
            } else if (idadeAtual > 50) {
                //idoso
                img.setAttribute('src', 'imagens/homem_idoso.png')
            }
        } else {

            genero = 'Mulher'

            if (idadeAtual >= 0 && idadeAtual < 15) {
                //criança
                img.setAttribute('src', 'imagens/menina.png')
            } else if (idadeAtual >= 15 && idadeAtual < 21) {
                //jovem
                img.setAttribute('src', 'imagens/mulher_jovem.png')
            } else if (idadeAtual >= 21 && idadeAtual <= 50) {
                //adulto
                img.setAttribute('src', 'imagens/mulher_adulta.png')
            } else if (idadeAtual > 50) {
                //idoso
                img.setAttribute('src', 'imagens/mulher_idosa.png')
            }
        }
        
        res.innerHTML = `<p>Detectamos <strong>${genero}</strong> com <strong>${idadeAtual}</strong> anos.</p>`
        res.appendChild(img) //Colocando a foto dentro da div "img" criada por JS
        res.style.textAlign = 'center'

    }
}