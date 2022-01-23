let body = document.querySelector("body");

let grid = document.createElement("div");
grid.classList.add("grid");

function createSquare(maxSquares, grid) {
  let appendSquareToGrid;

  for (let i = 1; i <= maxSquares; i++) {
    square = document.createElement("div");
    square.setAttribute("index", i);
    square.classList.add("square");

    appendSquareToGrid += grid.appendChild(square);
  }
}

createSquare(16 * 16, grid);

body.appendChild(grid);
