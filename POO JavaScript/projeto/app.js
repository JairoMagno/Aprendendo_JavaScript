var ingredientes = ['mel', 'água', 'sal', 'mostarda']

//Capitalizando e deixando em ordem por meio de funções e POO

function capitalizar(ingredientes) {

    var modificado = []

    for (var i = 0; i < ingredientes.length; i++){
        var letraInicial = ingredientes[i].charAt(0).toUpperCase() //Pegando o primeiro elemento da string e pondo em maiúsculas.
        var restoTexto = ingredientes[i].slice(1) //Fatiamento de string. Pegando a partir da segunda letra.
        var resultado = letraInicial + restoTexto
        //console.log(resultado)
    
        modificado.push(resultado) //Novo vetor armazenando a letral inicial capitalizada
    }

    return modificado    
}


function ordenar(ingredientes) {

    var ordenado = ingredientes.sort(function(a,b){
        return a.localeCompare(b) //Os dois parâmetros são textos que se comparam. Com o localeCompare, a região ou linguagem da máquina é utilizada, e assim a acentuação também é.
    })
    return ordenado
}

var resultadoCapitalizado = capitalizar(ingredientes)
var resultadoOrdenado = ordenar(resultadoCapitalizado)

console.log(resultadoOrdenado)