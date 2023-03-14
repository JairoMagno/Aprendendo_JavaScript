function contagem() {
    let inicio = document.getElementById('iinicio')
    let fim = document.getElementById('ifim')
    let passo = document.getElementById('ipasso')
    let mostrar = document.querySelector('div.tela')


    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 || Number(passo.value) == 0){
        mostrar.innerHTML = 'Impossível contar!'
        window.alert('[ERRO]! verifique seus dados novamente!')
    } else {
        mostrar.innerHTML = 'Contando: <br>'
        let start = Number(inicio.value)
        let end = Number(fim.value)
        let step = Number(passo.value)
        if (start < end){
            //contagem crescente
            for(start; start <= end; start += step){
                mostrar.innerHTML += `${start} \u{1F449} `
            }
        } else {
            //contagem decrescente
            for(start; start >= end; start -= step){
                mostrar.innerHTML += `${start} \u{1F449} `
            }
        }
        mostrar.innerHTML += `\u{1F3C1}`
    }
}