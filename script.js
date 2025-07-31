import { graphicSquare, graphicSquare2 } from "./functions/functions.js";

console.log("Hello, World!");
const squareSizeInput = document.getElementById("squareSize");
const buttonGraphicSquare = document.getElementById("squareButton");
const h2Anuncio = document.getElementById("anuncioErrorSquare");
const squareGraphicOutputShown = document.getElementById("squareGraphicOutput");
const maximumSquareSide = 20;

buttonGraphicSquare.addEventListener("click", () => {
  const side = parseFloat(squareSizeInput.value);
  if (!Number.isInteger(side) || side <= 0) {
    //console.log("Por favor, ingrese un número entero válido");
    h2Anuncio.textContent = "Por favor, ingrese un número entero válido";
    squareGraphicOutputShown.textContent = "";
    return;
  }
  if (side > maximumSquareSide) {
    h2Anuncio.textContent = "El tamaño del cuadrado excede los límites";
    squareGraphicOutputShown.textContent = "";
    return;
  }
  h2Anuncio.textContent = "";
  //console.log("El tamaño del lado es: ", side);

  graphicSquare(side);
});

squareSizeInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const side = parseFloat(squareSizeInput.value);
    if (!Number.isInteger(side) || side <= 0) {
      //console.log("Por favor, ingrese un número entero válido");
      h2Anuncio.textContent = "Por favor, ingrese un número entero válido";
      squareGraphicOutputShown.textContent = "";
      return;
    }
    if (side > maximumSquareSide) {
      h2Anuncio.textContent = "El tamaño del cuadrado excede los límites";
      squareGraphicOutputShown.textContent = "";
      return;
    }
    h2Anuncio.textContent = "";
    //console.log("El tamaño del lado es: ", side);

    graphicSquare(side);
  }
});
