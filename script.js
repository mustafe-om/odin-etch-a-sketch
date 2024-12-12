const container = document.querySelector(".container");
const gridBtn = document.querySelector("#gridBtn");
const colorBtn = document.querySelector("#colorBtn");
const eraseBtn = document.querySelector("#eraseBtn");
const color = ["red", "violet", "yellow", "pink"];

function makeGrid(grid) {
  const width = `${400 - 2 * grid}`;

  // creating grid
  for (let i = 0; i < grid; i++) {
    for (let j = 0; j < grid; j++) {
      const div = document.createElement("div");
      container.appendChild(div);
      container.style.maxWidth = `${400}px`;
      div.style.width = `${width / grid}px`;
      div.style.height = `${width / grid}px`;
      div.classList.add("square");
      // handling drawing on gid
      div.addEventListener("mousedown", (e) => {
        isMouseDown = true;
        if (isMouseDown) {
          e.target.classList.add("highlight");
        }
      });
      div.addEventListener("mousemove", (e) => {
        const randomIndex = Math.floor(Math.random() * 3);
        if (isMouseDown) {
          e.target.style.backgroundColor = `${color[randomIndex]}`;
        }
      });
      div.addEventListener("mouseup", (e) => {
        isMouseDown = false;
      });
      container.addEventListener("mouseleave", (e) => {
        isMouseDown = false;
      });
      // handling buttons
      eraseBtn.addEventListener("click", () => {
        div.style.backgroundColor = "white";
      });

      gridBtn.addEventListener("click", () => {
        container.removeChild(div);
      });
    }
  }
}
gridBtn.addEventListener("click", () => {
  makeGrid(prompt("enter size of the grid from 1 to 100"));
});
makeGrid(16);
