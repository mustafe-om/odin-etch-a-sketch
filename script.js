const container = document.querySelector(".container");
const gridBtn = document.querySelector("#gridBtn");
const colorBtn = document.querySelector("#colorBtn");
const eraseBtn = document.querySelector("#eraseBtn");

let isMouseDown = false;

function createSquare(size) {
  const square = document.createElement("div");
  square.style.width = `${size}px`;
  square.style.height = `${size}px`;
  square.classList.add("square");

  square.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    e.target.style.backgroundColor = createRandomColor();
  });
  square.addEventListener("mouseup", (e) => {
    isMouseDown = false;
  });
  square.addEventListener("mousemove", (e) => {
    if (isMouseDown) {
      e.target.style.backgroundColor = createRandomColor();
    }
  });

  // Touch events
  square.addEventListener("touchstart", (e) => {
    e.preventDefault();
    square.style.backgroundColor = createRandomColor();
  });

  square.addEventListener("touchmove", (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    const target = document.elementFromPoint(touch.clientX, touch.clientY);
    if (target && target.classList.contains("square")) {
      target.style.backgroundColor = createRandomColor();
    }
  });

  return square;
}

function makeGrid(size) {
  container.innerHTML = "";
  const squareSize = (400 - 2 * size) / size;

  for (let i = 0; i < size * size; i++) {
    const square = createSquare(squareSize);
    container.appendChild(square);
  }
}

function createRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

function resetGrid() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => (square.style.backgroundColor = "white"));
}

gridBtn.addEventListener("click", () => {
  console.log("clicked");
  const gridSize = parseInt(prompt("Enter grid size (1 to 100):"), 10);
  if (gridSize >= 1 && gridSize <= 100) {
    makeGrid(gridSize);
  } else {
    alert("Please enter a valid size between 1 and 100.");
  }
});

eraseBtn.addEventListener("click", resetGrid);

makeGrid(16);

// const container = document.querySelector(".container");
// const gridBtn = document.querySelector("#gridBtn");
// const colorBtn = document.querySelector("#colorBtn");
// const eraseBtn = document.querySelector("#eraseBtn");
// const color = ["red", "violet", "yellow", "pink"];

// function makeGrid(grid) {
//   const width = `${400 - 2 * grid}`;

//   // creating grid
//   for (let i = 0; i < grid; i++) {
//     for (let j = 0; j < grid; j++) {
//       const div = document.createElement("div");
//       container.appendChild(div);
//       container.style.maxWidth = `${400}px`;
//       div.style.width = `${width / grid}px`;
//       div.style.height = `${width / grid}px`;
//       div.classList.add("square");
//       // handling drawing on gid
//       div.addEventListener("mousedown", (e) => {
//         isMouseDown = true;
//         if (isMouseDown) {
//           e.target.classList.add("highlight");
//         }
//       });
//       div.addEventListener("mousemove", (e) => {
//         const randomIndex = Math.floor(Math.random() * 3);
//         if (isMouseDown) {
//           e.target.style.backgroundColor = `${color[randomIndex]}`;
//         }
//       });
//       div.addEventListener("mouseup", (e) => {
//         isMouseDown = false;
//       });
//       container.addEventListener("mouseleave", (e) => {
//         isMouseDown = false;
//       });
//       div.addEventListener("touchstart", (e) => {
//         e.preventDefault();
//         isMouseDown = true;
//         div.style.backgroundColor =
//           color[Math.floor(Math.random() * color.length)];
//       });
//       div.addEventListener("touchmove", (e) => {
//         e.preventDefault();
//         const touch = e.touches[0];
//         const target = document.elementFromPoint(touch.clientX, touch.clientY);
//         if (target && target.classList.contains("square")) {
//           target.style.backgroundColor =
//             color[Math.floor(Math.random() * color.length)];
//         }
//       });

//       // handling buttons
//       eraseBtn.addEventListener("click", () => {
//         div.style.backgroundColor = "white";
//       });

//       gridBtn.addEventListener("click", () => {
//         container.removeChild(div);
//       });
//     }
//   }
// }
// gridBtn.addEventListener("click", () => {
//   makeGrid(prompt("enter size of the grid from 1 to 100"));
// });
// makeGrid(16);
