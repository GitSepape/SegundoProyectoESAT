
const desactivado = document.querySelector('desactivado');
const activado = document.querySelector('activado');
const boton = document.getElementById("iniciar-sesion");

document.getElementById("cerrarSesion").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("cerrarSesion").window.location="inicio-sesion.php";;
}