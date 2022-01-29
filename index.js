let body = document.querySelector("body");
let wrapper = document.createElement("div");
wrapper.classList.add("wrapper-center");
let grid = document.createElement("div");
grid.classList.add("grid");

let title = document.createElement("h1");
title.textContent = "Etch-A-Sketch";
title.classList.add("title");
body.appendChild(title);

// Create slider to change grid Size
let settings = document.createElement("div");
settings.classList.add("settings");

let colorPicker = document.createElement("input");
colorPicker.setAttribute("type", "color");
colorPicker.classList.add("color-picker");

let rainbowButton = document.createElement("button");
rainbowButton.textContent = "Rainbow";
rainbowButton.classList.add("btn");

let ShadeButton = document.createElement("button");
ShadeButton.textContent = "Shade";
ShadeButton.classList.add("btn");

let controller = document.createElement("div");
controller.classList.add("controller");

let sliderGridSize = document.createElement("input");
sliderGridSize.setAttribute("type", "range");
sliderGridSize.setAttribute("min", "1");
sliderGridSize.setAttribute("max", "64");
sliderGridSize.setAttribute("value", 32);

let sliderHeader = document.createElement("p");
sliderHeader.classList.add("grid-number");
sliderHeader.textContent = sliderGridSize.value;
controller.appendChild(sliderHeader);
controller.appendChild(sliderGridSize);
settings.appendChild(colorPicker);
settings.appendChild(rainbowButton);
settings.appendChild(ShadeButton);
settings.appendChild(controller);
wrapper.appendChild(settings);

let handleSliderValue = () => {
  let number = sliderGridSize.value;
  return number;
};

let clearGrid = (squaresToremove) => {
  squaresToremove.forEach((element) => {
    element.remove();
  });
};

function createGridNumber() {
  let gridSize = handleSliderValue();
  sliderHeader.textContent = gridSize;

  let number = gridSize;
  number = Number(number);
  // Set gridNumber in gloabal css variable
  document.documentElement.style.setProperty("--square-number", number);
  // Caclulate number
  number = number * number;
  return number;
}

sliderGridSizeChangeHandler = () => {
  //Select all squares
  let selectSquares = document.querySelectorAll(".square");
  // Clear grid
  clearGrid(selectSquares);
  // chose new grid number
  let gridNumber = createGridNumber();
  // CreateSquares
  let squares = createSquare(gridNumber, grid);
  return squares;
};

function newGrid() {
  sliderGridSize.addEventListener("change", sliderGridSizeChangeHandler);
  // Defaultt grid
  let squares = createSquare(256, grid);
  return squares;
}

newGrid();

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
  // Get color value
  let getColorValue = () => {
    return (squareColor = colorPicker.value);
  };

  // Target square div
  const handleSquareClick = (e) => {
    getColorValue();
    e.target.style.backgroundColor = squareColor;
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

wrapper.appendChild(grid);
body.appendChild(wrapper);
