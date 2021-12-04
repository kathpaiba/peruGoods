const imagenes = [
	'img/polo.jpg',
	'img/polera.jpg',
	'img/bolso.jpg',
	'img/short.jpg',
];
var i = 0;
function cambiarImagen(){
	var img = document.slider.src = imagenes[i];
	if (i < imagenes.length - 1) {
		i++;
	}
	else{
		i = 0;
	}
	setTimeout("cambiarImagen()", 2300);
}
window.onload = cambiarImagen;