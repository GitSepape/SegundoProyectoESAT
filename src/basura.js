const desactivado = 'desactivado';
const precio = document.getElementById('precio');
const iva = document.getElementById('iva');
const total = document.getElementById('total');
// const añadir = document.querySelector('.').classList.add('desactivado');

function basura1() {
    var element = document.getElementById("borrar");
    element.classList.add('desactivado');
    document.getElementById('1').classList.add('desactivado');
    document.getElementById('1-1').classList.add('desactivado');
    precio.innerHTML = "8,94€";
    iva.innerHTML = "1,05€";
    document.getElementById('total').innerHTML = "9,99€";
}

function basura2() {
    var element = document.getElementById("borrar");
    element.classList.add('desactivado');
    document.getElementById('2').classList.add('desactivado');
    document.getElementById('2-2').classList.add('desactivado');
    precio.innerHTML = "-- €";
    iva.innerHTML = "-- €";
    total.innerHTML = "-- €";
}