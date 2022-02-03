const container = document.querySelector(".wrapper");

let createGridSquares = () => {
  // Create Grid
  let grid = document.createElement("div");
  grid.classList.add("grid");
  container.appendChild(grid);

  for (let i = 1; i <= 256; i++) {
    // Create squares
    let square = document.createElement("div");
    square.setAttribute("opacity", 0.1);
    square.classList.add("square");
    grid.appendChild(square);
  }
};

createGridSquares();
// Select all element with class square
let selectGridSquares = document.querySelectorAll(".square");

let colorMode = "default";

let setColorMode = (e) => {
  colorMode = e.target.getAttribute("colorMode");
};

let getColorPickerValue = () => {
  let squareColor = colorChoser.value;
  return squareColor;
};

let randomColor = () => {
  function randomnumber() {
    // Get a randnom number between 0 and 256
    let randomNumber = Math.floor(Math.random() * 256);
    return randomNumber;
  }
  let squareColor = `rgb(${randomnumber()}, ${randomnumber()}, ${randomnumber()})`;
  return squareColor;
};

let colorChoser = document.querySelector("#color-choser");
colorChoser.addEventListener("click", setColorMode);
colorChoser.addEventListener("change", getColorPickerValue);

let rainbowButton = document.querySelector("#rainbow");
rainbowButton.addEventListener("click", setColorMode);

let shadeButton = document.querySelector("#shade");
shadeButton.addEventListener("click", setColorMode);

let setColortoStandard = (e) => {
  if (colorMode === "default") {
    e.target.style.backgroundColor = "black";
  }
};

let setColortoChosenColor = (e) => {
  if (colorMode === "color-choser") {
    e.target.style.backgroundColor = getColorPickerValue();
  }
};

let setColortoRainbow = (e) => {
  if (colorMode === "rainbow") {
    e.target.style.backgroundColor = randomColor();
  }
};

let setColortoShade = (e) => {
  if (colorMode === "shade") {
  }
};

selectGridSquares.forEach((square) => {
  square.addEventListener("click", setColortoStandard);
  square.addEventListener("click", setColortoChosenColor);
  square.addEventListener("click", setColortoRainbow);
  square.addEventListener("click", setColortoShade);
});

/* let test = document.createElement("div");

// Create sliderGridSize
let sliderGridSize = document.createElement("input");
sliderGridSize.setAttribute("type", "range");
sliderGridSize.setAttribute("min", "1");
sliderGridSize.setAttribute("max", "64");
sliderGridSize.setAttribute("value", 16);

// Create SliderHeader
let sliderHeader = document.createElement("p");
sliderHeader.classList.add("grid-number");
sliderHeader.textContent = sliderGridSize.value;


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
} */
