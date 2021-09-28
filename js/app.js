$.AutumnLeafStart({
	leavesfolder: "Music/",
	howmanyimgsare: 4,
	initialleaves: 5,
	maxyposition: -10,
	multiplyclick: true,
	multiplynumber: 2,
	infinite: true,
	fallingsequence: 2000
});


(function() {
    Galleria.loadTheme('Galleria/themes/folio/galleria.folio.min.js');
    Galleria.run('.galleria');
}());




let titutloAnimado = $("#videos");
const mensajesCarrusel = ['Galeria', 'Trabajos Realizados', 'La Musica es Vida', 'Servicios'];
let contador = 0;
titutloAnimado.text( mensajesCarrusel[0] );
//titutloAnimado.shuffleLetters();

setInterval(() => {
    contador++;
    if( contador >= mensajesCarrusel.length )
    {
        contador = 0;
    }
    titutloAnimado.shuffleLetters({
        "text": mensajesCarrusel[ contador]
    });

}, 4000);
/* titutloAnimado.shuffleLetters(); */
