"use strict";

//Obtener nodos de los párrafos
let parrafos = document.querySelectorAll(".parrafos");
//Obtener nodo botón y añadir EventListener
let btn = document.querySelector("#colorea");
btn.addEventListener("click", setBackground, false);

function setBackground() {
  //Obtener tres números random para el color en rgb
  let random = Math.floor(Math.random() * 256);
  let random2 = Math.floor(Math.random() * 256);
  let random3 = Math.floor(Math.random() * 256);

  //Recorro los párrafos y a los pares le establezco un color y a los impares otro color
  for (let i = 0; i < parrafos.length; i++) {
    if (i % 2 == 0) {
      parrafos[i].style.background =
        "rgb(" + random + ", " + random2 + ", " + random3 + ")";
    } else {
      parrafos[i].style.background =
        "rgb(" + random3 + ", " + random2 + ", " + random + ")";
    }
  }
}
