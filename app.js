// Desafio alura - Amigo invisible
nombreAmigo=document.getElementById("amigo");



//declaracion de variables
let nombres = [];





//Funcion para agregar un nombre a la lista
function agregarAmigo() {
    let nombre = nombreAmigo.value;
    if (nombre == "" || nombre == " "){
        alert("El nombre no puede estar vacío");
        return;
    }
    nombres.push(nombre);
    nombreAmigo.value = "";
}




//Funcion para sortear un nombre
function sortearAmigo() {
    let indiceSorteo = Math.floor(Math.random() * nombres.length);
    alert("El nombre elegido es: " + nombres[indiceSorteo]);
}