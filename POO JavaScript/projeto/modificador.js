function fnCapitalizar(colecao, atributo) {
    if (typeof colecao[0] == 'object') {
        
        var resultado = colecao.map(function(obj){
            var letraInicial = obj[atributo].charAt(0).toUpperCase() 
            var restoTexto = obj[atributo].slice(1)

            obj[atributo] = letraInicial + restoTexto
            
            return obj
        })
    } else {

        var resultado = colecao.map(function(posicao){
            var letraInicial = posicao.charAt(0).toUpperCase() //Pegando o primeiro elemento da string e pondo em maiúsculas.
            var restoTexto = posicao.slice(1) //Fatiamento de string. Pegando a partir da segunda letra.

            posicao = letraInicial + restoTexto //Concatenação de strings
            
            return posicao //Retornado novo vetor armazenando a letral inicial capitalizada
        })
    }

    return resultado
}


function fnOrdenar(vetor, atributo) {

    if (typeof vetor[0] == 'object') {

        var ordenado = vetor.sort(function(a,b){
            return a[atributo].localeCompare(b[atributo]) 
        })
    } else {

        var ordenado = vetor.sort(function(a,b){
            return a.localeCompare(b) //Os dois parâmetros são textos que se comparam. Com o localeCompare, a região ou linguagem da máquina é utilizada, e assim a acentuação também é.
        })
    }

    return ordenado
}

function fnCaixaAlta(colecao, atributo) {

    if (typeof colecao[0] == 'object') {
        
        var maiúsculas = colecao.map(function(obj){
            var caixaAlta = obj[atributo].toUpperCase()
            obj[atributo] = caixaAlta

            return obj
        })
    } else {
        var maiúsculas = colecao.map(function(obj){
            var caixaAlta = obj.toUpperCase()
            obj = caixaAlta

            return obj
        })
    }

    return maiúsculas
}

//Só podemos declarar uma exportação padrão (default). Podemos exportar um objeto que encapsula funcionalidades.
export default {
    capitalizar: fnCapitalizar, 
    ordenar: fnOrdenar,
    caixaAlta: fnCaixaAlta
}
