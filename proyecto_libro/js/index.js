//carrusel de la teacher
// Obtenemos los elementos del carrusel
var carrusel = document.querySelector("#slider");
var imagenes = carrusel.querySelectorAll("#imagen");
var indiceImagenActual = 0; // Inicializamos el índice de la imagen actual en 0
// Función para mostrar la imagen actual
function mostrarImagenActual(indice) {
  // Quitamos la clase "visible" de la imagen actual
  if (indice !== indiceImagenActual) {
    imagenes[indiceImagenActual].classList.remove("visible");
    imagenes[indiceImagenActual].classList.add("invisible");
  }
  // Agregamos la clase "visible" a la nueva imagen
  imagenes[indice].classList.remove("invisible");
  imagenes[indice].classList.add("visible");
  // Actualizamos el índice de la imagen actual
  indiceImagenActual = indice;
}
// Evento click del botón "Anterior"
function mostrarAnterior() {
  // Obtenemos el índice de la imagen anterior (o la última si estamos en la primera)
  indice =
    indiceImagenActual === 0 ? imagenes.length - 1 : indiceImagenActual - 1;
  // Mostramos la imagen anterior
  mostrarImagenActual(indice);
}
// Evento click del botón "Siguiente"
function mostrarSiguiente() {
  // Obtenemos el índice de la imagen siguiente (o la primera si estamos en la última)
  indice =
    indiceImagenActual === imagenes.length - 1 ? 0 : indiceImagenActual + 1;
  // Mostramos la imagen siguiente
  mostrarImagenActual(indice);
}
// Mostramos la primera imagen al cargar la página
mostrarImagenActual(indiceImagenActual);
//RELOJ NUMÉRICO (buscando por internet encontré un ejemplo con código para hacer el reloj)
function cargarReloj() {
  // Al parecer en JavaScript existe un objeto Date() con el que se puede obtener la hora del sistema
  var fechahora = new Date();
  var hora = fechahora.getHours();
  var minuto = fechahora.getMinutes();
  var segundo = fechahora.getSeconds();
  // Variable meridiano con el valor 'AM'
  var meridiano = "AM";
  // Si la hora es igual a 0, declaramos la hora con el valor 12
  if (hora == 0) {
    hora = 12;
  }
  // Si la hora es mayor a 12, restamos la hora - 12 y mostramos la variable meridiano con el valor 'PM'
  if (hora > 12) {
    hora = hora - 12;
    // Variable meridiano con el valor 'PM'
    meridiano = "PM";
  }
  // Formateamos los ceros '0' del reloj
  hora = hora < 10 ? "0" + hora : hora;
  minuto = minuto < 10 ? "0" + minuto : minuto;
  segundo = segundo < 10 ? "0" + segundo : segundo;
  // Enviamos la hora a la vista HTML
  var tiempo = hora + ":" + minuto + ":" + segundo + " " + meridiano;
  document.getElementById("relojnumerico").innerText = tiempo;
  document.getElementById("relojnumerico").textContent = tiempo;
  // Cargamos el reloj a los 500 milisegundos
  setTimeout(cargarReloj, 500);
}
// Ejecutamos la función 'CargarReloj'
cargarReloj();

//alertita
alert("Bienvenido/a a mi página es bastante malilla y seguramente con errores pero es humilde");

//cambiar color
const texto = document.querySelector(".texto");
function cambiarColor(color) {
  texto.style.color = color;
}

function cambiarFondo() {
  var element = document.getElementById("fondo");
  element.style.backgroundColor = "#900";
}
//queria hacer un formulario pero no me salía asi que pa llegar a ganar algun puntillo de más puse algunas cosas del examen
//bueno es una pena pero no me sale lo otro y como ya lo entrego con retraso pues mira asi se queda me queda mucho por aprender pero se agradece los apunte de 
//JavaScript que pasaste profe. Lo bueno de no ir de vacaciones en verano que me parece que me la pasare mirando cositas de JS, CSS y Java :p