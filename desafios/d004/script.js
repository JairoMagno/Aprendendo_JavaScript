function tabuada() {
    let numero = document.getElementById('itabuada')
    let mostrar = document.getElementById('selTab')

    

    if (numero.value.length == 0) {

        window.alert('Digite um número!')
    } else {

        let cont = Number(numero.value)
        let i = 1
        mostrar.innerHTML = ''
        
        for (i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.innerHTML += `<p>${cont} X ${i} = <strong>${cont * i}</strong></p>`
            mostrar.appendChild(item)
        }
    }
}