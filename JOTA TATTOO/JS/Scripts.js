
//NO ESTA ACTIVADOS
function modalBienvenida() {
	
	document.getElementById("modalBienvenida").style.display="block";
	document.getElementById("tituloEncabezado").style.animationPlayState ="paused";
	document.getElementById("subTituloEncabezado").style.animationPlayState ="paused";
	document.documentElement.style.overflow="hidden";
	
	

}

function cerrarMBB(){

	document.getElementById("modalBienvenida").style.display="none";
	document.getElementById("tituloEncabezado").style.animationPlayState ="running";
	document.getElementById("subTituloEncabezado").style.animationPlayState ="running";
	document.documentElement.style.overflow="auto";

}
//aqui empieza el codigo del slideshow automatico



var bgCounter =0;
function heroSlideshow() {

	var listaImgBg = [
		"url('MEDIA/FONDOS/Hero01.jpg')",
		"url('MEDIA/FONDOS/Hero02.jpg')",
		"url('MEDIA/FONDOS/Hero03.jpg')"
		];

	bgCounter++;

	if (bgCounter == listaImgBg.length) {
		bgCounter = 0;
	}

	document.getElementById("encabezado").style.backgroundImage ="linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))," + listaImgBg[bgCounter];

}

//aqui empieza el codigo del slideshow automatico con animacion

var counterNext =0;
var listaImgBgAnim = document.getElementsByClassName("fondosHero");

function slideshowAnim() {

	var listaImgBgAnim = document.getElementsByClassName("fondosHero");
	counterNext++;
	counterMain = counterNext-1;

	if(counterNext==listaImgBgAnim.length){
		counterNext=0;
	
	}

	if (counterMain<0) {
		counterMain = listaImgBgAnim.length-1;
	}

	for (var i=0; i<listaImgBgAnim.length; i++) {

		listaImgBgAnim[i].classList.remove("nextSlide");
		listaImgBgAnim[i].classList.remove("mainSlide");
		listaImgBgAnim[i].classList.remove("hiddenSlide");
		
		if (i==counterNext) {
			listaImgBgAnim[i].classList.add("nextSlide");
		}

		else if (i== counterMain) {
			listaImgBgAnim[i].classList.add("mainSlide");
		}

		else {
			listaImgBgAnim[i].classList.add("hiddenSlide");
		}
	}


}




//aqui empiea el modal del formulario

function modalFormulario() {
	document.getElementById("modalFormulario").style.display="block";
	document.documentElement.style.overflow="hidden";

	var nombre = document.getElementById("formNombre").value;
	var correo = document.getElementById("formCorreo").value;
	var pregunta = document.getElementById("formPregunta").value;
	var mensaje


	(function formCheck(){
		if(!document.getElementById("formNombre").checkValidity()){
			mensaje = "Introduce un nombre correcto.";
			document.getElementById("mensajeFormulario").innerHTML = mensaje;
		}

			else if (!document.getElementById("formCorreo").checkValidity()){
				mensaje = "Introduce un correo correcto.";
				document.getElementById("mensajeFormulario").innerHTML = mensaje;
				}
					else if (!document.getElementById("formPregunta").checkValidity()){
					mensaje = "Introduce una pregunta";
					document.getElementById("mensajeFormulario").innerHTML = mensaje;
					}

					else{
					mensaje = "Apreciado/a " + nombre + ", en breve Jota Tatto se pondrá en contacto con usted a través del email: " + correo + ".";
					document.getElementById("mensajeFormulario").innerHTML = mensaje;
		}
	})();
	
}

function cerrarMBR(){

	document.getElementById("modalFormulario").style.display="none";
	document.documentElement.style.overflow="auto";

		document.getElementById("formNombre").value ="";
		document.getElementById("formCorreo").value ="";
		document.getElementById("formPregunta").value ="";
}


// aqui empieza el codigo del menu

var posPreviaScroll = document.documentElement.scrollTop;

window.onscroll = function() {
  esconderMostrarMenu();
};

function esconderMostrarMenu() {
  var posActualScroll = document.documentElement.scrollTop;
  var navbar = document.getElementById("contenedorMenu");

  if (posPreviaScroll > posActualScroll) {
    // Cuando estamos subiendo, mostramos el menú
    navbar.style.top = "0px"; 

    if (posActualScroll>200) {
    	navbar.style.height = "50px";
    	navbar.style.fontSize = "1.75rem";
    	navbar.style.lineHeight ="50px";
    	document.getElementById("submenu").style.top="100px";
    	document.getElementById("logo").style.width="50px";
    	document.getElementById("logo").style.height="50px";
    } else {
    	navbar.style.height = "150px";
    	navbar.style.fontSize = "2.5rem";
    	document.getElementById("submenu").style.top="150px";
    	document.getElementById("logo").style.width="150px";
    	document.getElementById("logo").style.height="150px";
    }

  } else {
    // Cuando estamos bajando, ocultamos el menú
    navbar.style.top = "-150px"; 
  }

  posPreviaScroll = posActualScroll;
}

//aqui empieza el codigo de los estilos de los tatuajes

function marcarPestana(contenedorAMostrar, tabClicada) {
    var listaConPestanas = document.getElementsByClassName("contenedorFotos");
    for (var i = 0; i < listaConPestanas.length; i++) {
        listaConPestanas[i].style.display = "none";
    }
    document.getElementById(contenedorAMostrar).style.display = "block";

    var tabLinks= document.getElementsByClassName("etiquetaPestanas");
    for (var i=0; i<tabLinks.length; i++){
    	tabLinks[i].classList.remove("pestanaActiva");
    }

    document.getElementById(tabClicada).classList.add("pestanaActiva");

    var tattoo= document.getElementsByClassName("tattoo");
    for (var i=0; i<tattoo.length; i++){
    	tattoo[i].classList.remove("tattooAnimado");
    }

    var tattooC = document.getElementById(contenedorAMostrar).children;
    for (var i=0; i<tattooC.length; i++){
    	tattooC[i].classList.add("tattooAnimado");
    }



}
// aqui empieza el codigo de lightbox


//function modalLightboxDis(){
	//document.getElementById("modalLightboxDis").style.display="block";
	//document.documentElement.style.overflow="hidden";

	//var listaImgDis = document.getElementsByClassName("imgDis");
	

	//for (var i=0; i<listaImgDis.length; i++){
		//listaRutaImgDis.push(listaImgDis[i].src);
	//}
	//console.log(listaRutaImgDis);
	//nextImgGal();

	//document.getElementById("imageToShow").innerHTML= "<img class='imageLightbox' src='MEDIA/DISEÑO/DISEÑO1.jpg'>";
//}



	var listaRutaImgDis = [];
	var numeroIMG = 0;

function readyLightbox () {

	var listaImgDis = document.getElementsByClassName("imgDis");

	for (var i=0; i<listaImgDis.length; i++){
		listaRutaImgDis.push(listaImgDis[i].src);
	}

	for (var i=0; i<listaImgDis.length; i++){
		listaImgDis[i].addEventListener('click',openLightbox);
	}

	function openLightbox(){
		var rutaDisClicada = event.currentTarget.src;
		numeroIMG = listaRutaImgDis.indexOf(rutaDisClicada);

		document.getElementById("imageToShow").innerHTML= "<img class='imageLightbox' src=" + listaRutaImgDis[numeroIMG] + ">";
		document.getElementById("modalLightboxDis").style.display="block";
		document.documentElement.style.overflow="hidden";
		closeLightbox();
	}

	function closeLightbox(){

		window.addEventListener("click",function(event) {
			if (!event.target.matches(".imageLightbox")  &&  !event.target.matches(".imgDis") &&  !event.target.matches(".fa-solid") && !event.target.matches(".lbButtons") ){
				document.getElementById("modalLightboxDis").style.display="none";
				document.documentElement.style.overflow="auto";
			}
		});
	}

}


function nextImgGal() {

	numeroIMG++;

	if (numeroIMG >= listaRutaImgDis.length) {
        numeroIMG = 0; // Volver a la primera imagen si llegamos al final de la lista
    }
		document.getElementById("imageToShow").innerHTML= "<img class='imageLightbox' src=" + listaRutaImgDis[numeroIMG] + ">";

}

function prevImgGal() {

	numeroIMG--;

	if (numeroIMG < 0 ) {
        numeroIMG = listaRutaImgDis.length-1; // Volver a la primera imagen si llegamos al final de la lista
    }
		document.getElementById("imageToShow").innerHTML= "<img class='imageLightbox' src=" + listaRutaImgDis[numeroIMG] + ">";

}


