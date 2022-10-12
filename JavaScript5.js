"use strict";

//obtener nodos botones y input y párrafos
const btnAgrandar = document.querySelector("#agrandar");
const btnReducir = document.querySelector("#reducir");
const btnOriginal = document.querySelector("#original");
const input = document.querySelector("#idParrafo");
const parrafo1 = document.querySelector("#parrafo1");
const parrafo2 = document.querySelector("#parrafo2");
const parrafo3 = document.querySelector("#parrafo3");
const parrafo4 = document.querySelector("#parrafo4");

//Aqui se obtiene el valor de font-size
let originalSize = parseFloat(
  window.getComputedStyle(parrafo1, null).getPropertyValue("font-size")
);
let maxSize = originalSize * 2;
let minSize = originalSize * 0.9;
console.log(maxSize);
console.log(minSize);

//Comportamiento al pulsar sobre el botón agrandar
btnAgrandar.addEventListener(
  "click",
  function () {
    //returnPárrafo -> retorna el parrafo a modificar. Si no es uno de los existentes retorna null
    let parrafo = returnParrafo(input.value);

    if (parrafo != null) {
      agrandar(parrafo);
    } else {
      //continue
    }
  },
  false
);
//Comportamiento del botón reducir
btnReducir.addEventListener(
  "click",
  function () {
    //returnPárrafo -> retorna el parrafo a modificar. Si no es uno de los existentes retorna null
    let parrafo = returnParrafo(input.value);
    if (parrafo != null) {
      reducir(parrafo);
    } else {
      //continue
    }
  },
  false
);

//Comportamiento del botón original
btnOriginal.addEventListener(
  "click",
  function () {
    //returnPárrafo -> retorna el parrafo a modificar. Si no es uno de los existentes retorna null
    let parrafo = returnParrafo(input.value);

    if (parrafo != null) {
      original(parrafo);
    } else {
      //continue
    }
  },
  false
);

//Le llega el valor del input y si es correcto retorna el parrafo a modificar si no avisa y retorna null
function returnParrafo(inputValue) {
  let inputValueUpper = inputValue.toUpperCase();
  if (/^\s*$/.test(inputValue)) {
    alert("El campo del id está vacío");
    return null;
  } else if (inputValueUpper == "PARRAFO1") {
    return parrafo1;
  } else if (inputValueUpper == "PARRAFO2") {
    return parrafo2;
  } else if (inputValueUpper == "PARRAFO3") {
    return parrafo3;
  } else if (inputValueUpper == "PARRAFO4") {
    return parrafo4;
  } else {
    alert("El campo id: " + inputValue + " no existe");
    return null;
  }
}

function agrandar(parrafo) {
  //Obtener el tamaño de fuente en el momento de pulsar
  let size = parseFloat(
    window.getComputedStyle(parrafo, null).getPropertyValue("font-size")
  );
  //Cada vez se agrandará un 30% el tamaño de la letra
  let nextSize = size + size * 0.05 + "px";
  //si no se ha llegado al máximo tamaño estipulado aumentara si no alerta
  if (size <= maxSize) {
    parrafo.style.fontSize = nextSize;
  } else {
    alert("Se ha llegado al tamaño máximo de fuente");
  }
}

function reducir(parrafo) {
  //Obtener el tamaño de fuente en el momento de pulsar
  let size = parseFloat(
    window.getComputedStyle(parrafo, null).getPropertyValue("font-size")
  );
  //Cada vez se reduce un 30% el tamaño de la letra
  let nextSize = size - size * 0.05 + "px";
  if (size >= minSize) {
    parrafo.style.fontSize = nextSize;
  } else {
    alert("Se ha llegado al tamaño mínimo de fuente");
  }
}
function original(parrafo) {
  parrafo.style.fontSize = originalSize + "px";
}
