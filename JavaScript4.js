"use strict";

//Comportamiento botón añadir
let btnAnyadir = document.querySelector("#anyadir"); //obtener nodo con el atributo class

btnAnyadir.addEventListener("click", function () {
  let texto = prompt("¿Que desea añadir?"); //obtener texto

  if (texto === null) {
    //continue
  } else if ((/^\s*$/).test(texto)) {
    alert("No se puede añadir un texto vacío");
  } else {
    let etiqueta = document.createElement("li"); //Crear nodo elemento
    let contenido = document.createTextNode(texto); //Crear nodo texto
    etiqueta.appendChild(contenido); //Establecer nodo texto hijo de nodo elemento
    document.querySelector("ol").appendChild(etiqueta); //Insertar nodo al final de la lista
  }
});

//Comportamiento del botón borrar
let btnEliminar = document.querySelector("#eliminar");

btnEliminar.addEventListener("click", function () {
  //obtener todos los elementos
  let elementos = document.querySelectorAll("#ejer4 li");
  //Si solo hay un elemento salgo
  if (elementos.length == 1) {
    alert("Se ha alcanzado el número mínimo de elementos");
    return;
  }
  //eliminar el ultimo elemento de la lista
  document.querySelector("ol").removeChild(elementos[elementos.length - 1]);
});
