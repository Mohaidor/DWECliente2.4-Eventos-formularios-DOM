"use strict";

//Obtener nodos de los párrafos
let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");
let p3 = document.querySelector("#p3");

//EventListener al entrar en parrafo1 con el ratón
p1.addEventListener(
  "mouseover",
  function () {
    cambiaColor("p1");
  },
  false
);
//EventListener al salir del parrafo1
p1.addEventListener(
  "mouseleave",
  function () {
    p1.style.background = "";
  },
  false
);
//EventListener al entrar en parrafo2 con el ratón
p2.addEventListener(
  "mouseover",
  function () {
    cambiaColor("p2");
  },
  false
);
//EventListener al salir del parrafo2
p2.addEventListener(
  "mouseleave",
  function () {
    p2.style.color = "";
  },
  false
);
//EventListener al entrar en parrafo3 con el ratón
p3.addEventListener(
  "mouseover",
  function () {
    cambiaColor("p3");
  },
  false
);
//EventListener al salir del parrafo3
p3.addEventListener(
  "mouseleave",
  function () {
    p3.style.background = "";
    p3.style.color = "";

  },
  false
);
function cambiaColor(parrafo) {
    //Obtener tres números random para el color en rgb

  let random = Math.floor(Math.random() * 256);
  let random2 = Math.floor(Math.random() * 256);
  let random3 = Math.floor(Math.random() * 256);

  //dependiendo del párrafo cambio el color de fondo o letra
  if (parrafo == "p1") {
    p1.style.background =
      "rgb(" + random + ", " + random2 + ", " + random3 + ")";
  } else if (parrafo == "p2") {
    p2.style.color = "rgb(" + random + ", " + random2 + ", " + random3 + ")";
  } else {
    p3.style.background =
      "rgb(" + random + ", " + random2 + ", " + random3 + ")";
    p3.style.color = "rgb(" + random3 + ", " + random2 + ", " + random + ")";
  }
}
