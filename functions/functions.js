export function graphicSquare(side) {
  let square = "";
  const line = "+ ".repeat(side - 1) + "+" + "\n";
  for (let i = 0; i < side; i++) {
    square += line;
  }
  document.getElementById("squareGraphicOutput").textContent = square;
  //console.log(square);
}

export function graphicSquare2(side) {
  const sidesTopBottom = [];
  for (let i = 0; i < side; i++) {
    sidesTopBottom.push("+");
  }
  for (let i = 0; i < side; i++) {
    document.getElementById("squareGraphicOutput").textContent = sidesTopBottom;
    //console.log(sidesTopBottom);
  }
}
