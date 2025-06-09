"use strict";

const grid = document.querySelector(".grid");

// let div = document.createElement("div");
for (let i = 0; i < 16 * 16; i++) {
  const div = document.createElement("div");
  div.setAttribute("class", "square");
  grid.appendChild(div);
  div.addEventListener("mouseenter", () => {
    div.setAttribute("style", "background-color: black");
  });
}

console.log(grid);
