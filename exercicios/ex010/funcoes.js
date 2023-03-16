//Estudo de funções

function parimp(valor=0) { //Executando a ação
    if (valor % 2 == 0){
        return 'PAR' //Retornando o valor
    } else {
        return'ÍMPAR'
    }
}

var valor = parimp(8) //Chamada da função
console.log(`O valor é ${valor}`)