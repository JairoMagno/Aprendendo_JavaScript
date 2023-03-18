import modificador from './modificador.js'
import ingredientes from './ingredientes.js'
import saladas from './saladas.js'

//var ingredientes = ['mel', 'água', 'sal', 'mostarda']
console.log(ingredientes)
modificador.capitalizar(ingredientes, 'nome') //O ponto permite acesso ás propriedades do objeto
modificador.ordenar(ingredientes, 'nome')
modificador.caixaAlta(ingredientes, 'nome')

//Normalmente os dados que são utilizados vem através de um banco de dados. Isto é, quando vem de lá, já chegam numa base muito parecida com os objetos literais que utilizamos. Normalmente eles chegam no formato json (JavaScript Object Notation).