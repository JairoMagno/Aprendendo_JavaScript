//Estudando arrays em JS

var pessoas = [['Jairo', 'Mateus', 'Raquel'], ['Carlos', 'Gabriel']]
/*
console.log(`A pessoa escolhida foi ${pessoas[1][0]}.`)

//adicionando elementos no array por ordem
pessoas[1][2] = 'Arthur'
console.log(pessoas)

//adicionando elementos no array de forma explícita

pessoas[0].push('Naruto')
console.log(pessoas)

//Verificando o tamanho de um array

var tamanho = pessoas[0].length
console.log(tamanho)

//Comando para deixar o array em ordem. Funciona tanto para números (forma ascendente), quanto para strings (ordem alfabética).

var ordem = pessoas[0].sort()
console.log(ordem)
*/
//Usando for para printar

for (let pos = 0; pos < pessoas[0].length; pos++){
    console.log(pessoas[0][pos])
}

//Existe outra estrutura mais simples. usa apenas dois parâmetros

for(let indice in pessoas[0]){
    console.log(pessoas[0][indice])
}

//buscando posição de um valor dentro de um vetor

console.log(pessoas[0].indexOf('Raquel'))