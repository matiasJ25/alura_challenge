// Desafio alura - Amigo invisible
nombreAmigo = document.getElementById("amigo");
listaNombres = document.getElementById("listaAmigos");
nombreSorteado = document.getElementById("resultado")
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
    let liNombres = document.createElement("li");
    li.textContent = nombre;
    listaNombres.appendChild(liNombres);
    nombreAmigo.value = "";
}

//Funcion para sortear un nombre
function sortearAmigo() {
    let indiceSorteo = Math.floor(Math.random() * nombres.length);
    let liGanador = document.createElement("li");
    liGanador.textContent = "El nombre elegido es: " + nombres[indiceSorteo];
    nombreSorteado.appendChild(liGanador);
}