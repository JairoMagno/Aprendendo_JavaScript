let numero = document.getElementById('iadicionar')
let mostrar = document.getElementById('valTel')
var tela = document.getElementById('resultado')
let valores = []


function analisador() {

    if (Number(numero.value) < 1 || Number(numero.value) > 100 || valores.includes(Number(numero.value)) == true) {

        window.alert('Dado já adicionado ou inválido')
    } else {

        tela.innerHTML = ''
        let dado = Number(numero.value)
        valores.push(dado)

        let item = document.createElement('option')
        item.innerHTML += `<p>Valor ${dado} adicionado.</p>`
        mostrar.appendChild(item)
    }

    numero.value = ''
    numero.focus() //Toda vez que eu digito e dou submit, o número sair da caixa de input. Assim o usuário n precisa sempre ficar apagando
}

function finalizar() {

    if (valores.length == 0){

        window.alert('Digite algum valor para fazer  verificação')
    } else {

        let maior = Math.max.apply(null , valores) //pode ser feito com um for também
        let menor = Math.min.apply(null, valores)
        let tamanho = valores.length
        let soma = 0

        for(let indice in valores) {
            soma += valores[indice]
        }

        /*Achando o maximo valor por 
        
        let maior = 0
        let menor = 0

        for (let indice in valores) {
            if (indice == 0) {
                maior = menor = valores[indice]
            } else {
                if (valores[indice] > maior) {
                    maior = valores[indice]
                } else if (valores[indice] < menor) {
                    menor = valores[indice]
                }
            }
        }
        */

        let media = soma / tamanho

        tela.innerHTML = ''
        tela.innerHTML += `<p>Ao todos, temos <strong>${tamanho}</strong> números cadastrados.</p> <br>`
        tela.innerHTML += `<p>Somando todos os valores cadastrados, temos: <strong>${soma}</strong></p> <br>`
        tela.innerHTML += `<p>O valor máximo registrado foi o número: <strong>${maior}</strong></p> <br>`
        tela.innerHTML += `<p>O valor mínimo registrado foi o número: <strong>${menor}</strong></p> <br>`
        tela.innerHTML += `<p>A média dos valores registrados foi: <strong>${media}</strong></p>`
    }
}
