let body = document.querySelector(".container");

let grid = document.createElement("div");
grid.classList.add("grid");

function createSquare(maxSquares, grid) {
  let squares = [];

  for (let i = 1; i <= maxSquares; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    grid.appendChild(square);
    // Push all new squares into an array called squares
    squares.push(square);
  }
  return squares;
}

let squares = createSquare(256, grid);

body.appendChild(grid);
