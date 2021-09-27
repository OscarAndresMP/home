let menu = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let cont = 0;

menu.addEventListener("click", () => {
    if(cont === 0){
        enlaces.className = ("enlaces dos");
        cont = 1;


        
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


    }
    else{
        enlaces.classList.remove("dos");
        enlaces.className = ("enlaces uno");
        cont = 0;
        
    }
});