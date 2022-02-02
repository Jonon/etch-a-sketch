const container = document.querySelector(".wrapper");

// Create Grid
let grid = document.createElement("div");
grid.classList.add("grid");

container.appendChild(grid);
for (let i = 1; i <= 256; i++) {
  let square = document.createElement("div");
  square.classList.add("square");
  grid.appendChild(square);
}

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
    e.target.style.backgroundColor = "grey";
  }
};

selectGridSquares.forEach((square) => {
  square.addEventListener("click", setColortoStandard);
  square.addEventListener("click", setColortoChosenColor);
  square.addEventListener("click", setColortoRainbow);
  square.addEventListener("click", setColortoShade);
});

/* let test = document.createElement("div");
container.appendChild(test);

let wrapper = document.createElement("div");
wrapper.classList.add("wrapper-center");
let grid = document.createElement("div");
grid.classList.add("grid");

// Create title
let title = document.createElement("h1");
title.textContent = "Etch-A-Sketch";
title.classList.add("title");
body.appendChild(title);

// Create settings Panel
let settings = document.createElement("div");
settings.classList.add("settings");

// Create colorPicker
let colorPicker = document.createElement("input");
colorPicker.setAttribute("type", "color");
colorPicker.setAttribute("mode", "colorPicker");
colorPicker.classList.add("color-picker");

// CreaterainbowButton
let rainbowButton = document.createElement("button");
rainbowButton.textContent = "Rainbow";
rainbowButton.setAttribute("mode", "rainbow");
rainbowButton.classList.add("btn");

// Create ShaderButton
let ShadeButton = document.createElement("button");
ShadeButton.textContent = "Shade";
ShadeButton.setAttribute("mode", "shade");
ShadeButton.classList.add("btn");

// Create slidercontainer
let sliderContainer = document.createElement("div");
sliderContainer.classList.add("sliderContainer");

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

sliderContainer.appendChild(sliderHeader);
sliderContainer.appendChild(sliderGridSize);
settings.appendChild(colorPicker);
settings.appendChild(rainbowButton);
settings.appendChild(ShadeButton);
settings.appendChild(sliderContainer);
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



let getColorPickerValue = () => {
  let squareColor = colorPicker.value;
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

let countSteps = () => {
  let timesclicked = 0;
  let returnCount = () => {
    timesclicked = timesclicked + 0.1;
    console.log(timesclicked.toFixed(1));
    return timesclicked.toFixed(1);
  };
  let shade = () => {
    let test = returnCount();
    let squareColor = `rgba(0, 0, 0, ${test})`;
    console.log(squareColor);
    return squareColor;
  };
  return shade;
};

let shadeValue = countSteps();

let colorMode = "normal";

let getColorMode = (e) => {
  mode = e.target.getAttribute("mode");
  colorMode = mode;
  setColorMode(colorMode);
};

let setColorMode = (mode) => {
  colorMode = mode;
};

colorPicker.addEventListener("change", getColorMode);
rainbowButton.addEventListener("click", getColorMode);
ShadeButton.addEventListener("click", getColorMode);

function handleSquareStyle(arrayOfSquares) {
  // Target square div
  const handleSquareClick = (e) => {
    if (colorMode === "normal") {
      e.target.style.backgroundColor = "black";
    } else if (colorMode === "colorPicker") {
      e.target.style.backgroundColor = getColorPickerValue();
    } else if (colorMode === "rainbow") {
      e.target.style.backgroundColor = randomColor();
    } else if (colorMode === "shade") {
      e.target.style.backgroundColor = "grey";
    }
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
 */
