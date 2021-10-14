
//titulo cambiante

let tituloAnimado = $("#titulo");
const mensajesCarrusel = ['Galeria', 'Trabajos Realizados', 'La Musica es Vida', 'Servicios'];
let contador = 0;
tituloAnimado.text( mensajesCarrusel[0] );

setInterval(() => {
    contador++;
    if( contador >= mensajesCarrusel.length )
    {
        contador = 0;
    }
    tituloAnimado.shuffleLetters({
        "text": mensajesCarrusel[ contador]
    });

}, 4000);



//Funcionamiento del lightbox(galeria)


const enlaces  = document.querySelectorAll('.ul .a')
const lightbox = document.querySelector('.lightbox')
const grande   = document.querySelector('.grande')
const cerrar   = document.querySelector('.cerrar')

enlaces.forEach(( cadaEnlace , i )=>{
    enlaces[i].addEventListener('click', ( e )=>{
        e.preventDefault()
        let ruta = cadaEnlace.querySelector('.img').src
        console.log( ruta ) 

        lightbox.classList.add('activo')
        grande.setAttribute('src', ruta)

    })
})

cerrar.addEventListener('click', ()=>{
    lightbox.classList.remove('activo')
})


//Funcionamiento de galaria de video


(function() {
    Galleria.loadTheme('Galleria/themes/miniml/galleria.miniml.min.js');
    Galleria.run('.galleria');
}());





