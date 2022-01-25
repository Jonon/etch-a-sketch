let body = document.querySelector("body");
let grid = document.createElement("div");
grid.classList.add("grid");

let btn = document.createElement("button");
btn.textContent = "Clear Grid";
btn.classList.add("btn");
btn.setAttribute("type", "button");
body.appendChild(btn);

function clearGrid() {
  squares.forEach((element) => {
    element.remove();
  });
}

function createGridNumber() {
  let number = prompt("Chose grid number");
  number = Number(number);
  return number;
}

//let number = createGridNumber();

function newGrid() {
  btn.addEventListener("click", () => {
    // Clear grid
    clearGrid();
    // chose new grid number
    let gridNumber = createGridNumber();
    console.log(gridNumber);
    createSquare(gridNumber, grid);
  });
}

console.log(newGrid());

body.appendChild(btn);

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

// Target square div
const handleSquareClick = (e) => {
  e.target.classList.add("square-color");
};

// Handle hover
const handleSquareMouseEnter = (e) => {
  e.target.classList.add("square-color-hover");
};

// Handle hover
const handleSquareMouseLeave = (e) => {
  e.target.classList.remove("square-color-hover");
};

// Add event listener to clicked square and change color
squares.forEach((element) => {
  element.addEventListener("click", handleSquareClick);
  element.addEventListener("mouseenter", handleSquareMouseEnter);
  element.addEventListener("mouseleave", handleSquareMouseLeave);
});

body.appendChild(grid);
