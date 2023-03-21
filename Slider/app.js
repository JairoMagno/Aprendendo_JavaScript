import modificador from './modificador.js'
import ingredientes from './ingredientes.js'

let ingredienteCapitalizados = modificador.capitalizar(ingredientes, 'nome')
let ingredientesOrdenados = modificador.ordenar(ingredientes, 'nome')
let swiper = document.querySelector('div.swiper-wrapper')

for(let ingrediente of ingredientesOrdenados){
    let textoHTML = `
        <!-- Slides -->
        <div class="swiper-slide">
            <a href="#" class="thumbTile">
                <img src="img/${ingrediente.img}">
            </a>
        </div>
    `
    swiper.innerHTML += textoHTML
}


  
