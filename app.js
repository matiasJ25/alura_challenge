// Desafio alura - Amigo invisible

//declaracion de variables
let nombres = [];
let sorteo = 0;

//Funcion para agregar un nombre a la lista

function agregarNombre() {
    let nombre = prompt("Ingrese un nombre");
    nombres.push(nombre);
}

//Funcion para sortear un nombre
function sortearNombre() {
    let indiceSorteo = Math.floor(Math.random() * nombres.length);
    alert("El nombre elegido es: " + nombres[indiceSorteo]);
}
//rama principal de la aplicacion
while (sorteo==0) {
    agregarNombre();
    sorteo = prompt("Para agregar otro nombre presione 0 , sino preciono cualquier tecla");
}

sortearNombre();