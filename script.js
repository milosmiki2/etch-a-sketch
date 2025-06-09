"use strict";

const grid = document.querySelector(".grid");
for (let i = 0; i < 16; i++) {
  const div = document.createElement("div");
  // div.setAttribute("class", "square");
  grid.appendChild(div);
}

console.log(grid);
