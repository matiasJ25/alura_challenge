// Desafio alura - Amigo invisible
nombreAmigo = document.getElementById("amigo");
listaNombres = document.getElementById("listaAmigos");
nombreSorteado = document.getElementById("resultado")
//declaracion del array
let nombres = [];



//Funcion para agregar un nombre a la lista
function agregarAmigo() {
    let nombre = nombreAmigo.value;
    //valida que el input no este vacio
    if (nombre.trim() == "") {
        alert("El nombre no puede estar vacío");
        return;
    }
    //valida que el nombre no este repetido en la lista 
    if (nombres.includes(nombre)) {
        alert("Este nombre ya está en la lista");
        return;
    }
    nombres.push(nombre);
    let liNombres = document.createElement("li");
    liNombres.textContent = nombre;
    listaNombres.appendChild(liNombres);
    nombreAmigo.value = "";
}

//Funcion para sortear un nombre
function sortearAmigo() {
    if (nombres.length == 0) {
        alert("No hay nombres para sortear");
        return;
    }
    let indiceSorteo = Math.floor(Math.random() * nombres.length);
    let liGanador = document.createElement("li");
    liGanador.textContent = "El nombre elegido es: " + nombres[indiceSorteo];
    nombreSorteado.appendChild(liGanador);
}