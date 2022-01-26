let body = document.querySelector("body");
let grid = document.createElement("div");
grid.classList.add("grid");

// Create slider to change grid Size
let sliderGridSize = document.createElement("input");
sliderGridSize.classList.add("btn");
sliderGridSize.setAttribute("type", "range");
sliderGridSize.setAttribute("min", "1");
sliderGridSize.setAttribute("max", "64");
sliderGridSize.setAttribute("value", 32);

body.appendChild(sliderGridSize);

let clearGrid = (squaresToremove) => {
  squaresToremove.forEach((element) => {
    element.remove();
  });
};

function createGridNumber() {
  let number = prompt("Chose grid number");
  number = Number(number);
  // Set gridNumber in gloabal css variable
  document.documentElement.style.setProperty("--square-number", number);
  // Caclulate number
  number = number * number;
  return number;
}

btnClickHandler = () => {
  //Select all squares
  let selectSquares = document.querySelectorAll(".square");
  // Clear grid
  clearGrid(selectSquares);
  // chose new grid number
  let gridNumber = createGridNumber();
  // CreateSquares
  let squares = createSquare(gridNumber, grid);
  handleSquareStyle(squares);
  return squares;
};

function newGrid() {
  sliderGridSize.addEventListener("click", btnClickHandler);
  // Defaultt grid
  let squares = createSquare(256, grid);
  return squares;
}

let squares = newGrid();

function createSquare(maxSquares, grid) {
  let squares = [];

  for (let i = 1; i <= maxSquares; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    grid.appendChild(square);
    // Push all new squares into an array called squares
    squares.push(square);
    handleSquareStyle(squares);
  }
  return squares;
}

function handleSquareStyle(arrayOfSquares) {
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
  arrayOfSquares.forEach((element) => {
    element.addEventListener("click", handleSquareClick);
    element.addEventListener("mouseenter", handleSquareMouseEnter);
    element.addEventListener("mouseleave", handleSquareMouseLeave);
  });
}

handleSquareStyle(squares);

body.appendChild(grid);
