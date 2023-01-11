var boton = document.getElementById("boton");
boton.addEventListener("click", mostrarImagen);

function mostrarImagen() {
  var imagen = document.getElementById("imagen");
  imagen.style.display = "block";
}