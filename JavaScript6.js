"use strict";
//Obtener nodo del botón
let btnCheckados = document.querySelector("#botonComprueba");


btnCheckados.addEventListener("click", function () {
  //Obtener array de checkbox chechados
  let checkados = Array.from(
    document.querySelectorAll('input[name="preguntas"]:checked')
  ).map((input) => input);
  //Obtener nodo de el resultado
  let resultado = document.querySelector("#resultado");
  //Obtener nodo de el solución
  let solucion = document.querySelector("#solucion");

  //Dependiendo del numero de checkados...
  if (checkados.length < 5) {
    resultado.innerText =
      "Resultado: En principio no tienes nada de que preocuparte.";
    solucion.innerText = "Consejo: No tienes nada de que preocuparte.";
  } else if (checkados.length == 5) {
    resultado.innerText =
      "Resultado: Empiezas a tener signos de dependencia del móvil.";
    solucion.innerText =
      "Consejo: Puedes utilizar técnicas como apagar el móvil cuando no lo necesitas, cuando duermes, etc.";
  } else if (checkados.length >= 6 && checkados.length <= 8) {
    resultado.innerText = "Resultado: Tienes una gran dependencia del móvil";
    solucion.innerText =
      "Consejo: Deberías seguir un plan de desintoxicación del móvil como por ejemplo dejar el móvil en casa cuando vas a comprar, apagarlo durante la noche, apagarlo durante horas de clase o trabajo, etc";
  } else if (checkados.length > 8) {
    resultado.innerText =
      "Resultado: Tus síntomas de dependencia son muy preocupantes.";
    solucion.innerText =
      "Consejo: Además de todas las técnicas de los apartados anteriores deberías plantearte un plan de desintoxicación del móvil que consista en estar una o dos semanas sin utilizarlo. Si ves que no puedes hacerlo por ti mismo, pide ayuda a un profesional.";
  }
  //para hacer scroll hasta solucion y se vea al pulsar sobre el botón
  solucion.scrollIntoView();
});
