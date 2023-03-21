import modificador from './modificador.js'
import ingredientes from './ingredientes.js'
import saladas from './saladas.js'

//var ingredientes = ['mel', 'água', 'sal', 'mostarda']

console.log(ingredientes)
var capital = modificador.capitalizar(ingredientes, 'nome') //O ponto permite acesso ás propriedades do objeto
var ordem = modificador.ordenar(ingredientes, 'nome')
//var maiusculas = modificador.caixaAlta(ingredientes, 'nome')
console.log(ordem)

//Normalmente os dados que são utilizados vem através de um banco de dados. Isto é, quando vem de lá, já chegam numa base muito parecida com os objetos literais que utilizamos. Normalmente eles chegam no formato json (JavaScript Object Notation).