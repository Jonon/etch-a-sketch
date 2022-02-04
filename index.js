const container = document.querySelector(".wrapper");

let gridSize = document.querySelector(".grid-size");

let createGridSquares = (size) => {
  // Create Grid
  let grid = document.createElement("div");
  grid.classList.add("grid");
  container.appendChild(grid);

  for (let i = 1; i <= size; i++) {
    // Create squares
    let square = document.createElement("div");
    square.setAttribute("opacity", 0.1);
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

  let randomColor = () => {
    function randomnumber() {
      // Get a randnom number between 0 and 256
      let randomNumber = Math.floor(Math.random() * 256);
      return randomNumber;
    }
    let squareColor = `rgb(${randomnumber()}, ${randomnumber()}, ${randomnumber()})`;
    return squareColor;
  };

  let setOpacitySquareBackground = (e) => {
    let opacityNumber = Number(e.target.getAttribute("opacity"));
    e.target.style.backgroundColor = `rgba(0, 0, 0, ${opacityNumber})`;
    let incrementOpacity = (e) => {
      if (opacityNumber <= 0.9) {
        opacityNumber += 0.1;
        let opacity = opacityNumber.toFixed(1);
        return opacity;
      } else {
        return 0.1;
      }
    };

    let shade = incrementOpacity();
    e.target.setAttribute("opacity", shade);
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
      setOpacitySquareBackground(e);
    }
  };

  selectGridSquares.forEach((square) => {
    square.addEventListener("click", setColortoStandard);
    square.addEventListener("click", setColortoChosenColor);
    square.addEventListener("click", setColortoRainbow);
    square.addEventListener("click", setColortoShade);
  });
};

let setGridSize = () => {
  // Get grid Number
  squareNumber = gridSize.value;

  let gridSizeNumber = document.querySelector(".grid-size-number");
  // Change gridSizeNumber acordingly
  gridSizeNumber.textContent = squareNumber;

  // Set gridNumber in gloabal css variable
  document.documentElement.style.setProperty("--square-number", squareNumber);

  // Calculate total squares
  squareNumber = squareNumber * squareNumber;

  createGridSquares(squareNumber);
};

// Start with a default grid
setGridSize();

let removeGrid = () => {
  let grid = document.querySelector(".grid");
  grid.remove();
};

gridSize.addEventListener("change", setGridSize);
gridSize.addEventListener("click", removeGrid);
