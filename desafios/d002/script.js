function idade() {
    anoNascimento = Number(document.querySelector('input#iidade').value)
    sexo = String(document.querySelector(input.sexo).value)
    img = document.querySelector('p')
    y = new Date()
    anoAtual = y.getFullYear()
    idadeAtual = anoAtual - anoNascimento

    if (idadeAtual <= 0) {
        window.alert('Dados incompatíveis. Verique novamente!')
    } else {

        if (idadeAtual < 18 && sexo == 'Masculino') {

        } else if (idadeAtual >= 18 && sexo == 'Masculino') {

        } else if (idadeAtual > 50 && sexo == 'Masculino') {

        } else if (idadeAtual < 18 && sexo == 'Feminino') {

        } else if (idadeAtual >= 18 && sexo == 'Feminino') {

        } else if (idadeAtual > 50 && sexo == 'Feminino') {
        
        }
    }
}