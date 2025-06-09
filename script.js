"use strict";

let color = "";
const container = document.querySelector(".container");

const button = document.querySelector("button");

function colorSquare() {
  this.style.backgroundColor = color;
}

function changeColor(choice) {
  color = choice;
}

button.addEventListener("click", () => {
  let square = container.querySelectorAll("div");
  square.forEach((div) => div.remove());
  const answer = prompt("Write the number of cubes", "");
  if (answer <= 100) {
    for (let i = 0; i < +answer * +answer; i++) {
      const square = document.createElement("div");
      square.setAttribute("class", "square");
      square.setAttribute(
        "style",
        `width: ${400 / +answer}px; height: ${400 / +answer}px`
      );
      container.appendChild(square);
      square.addEventListener("mouseover", colorSquare);
    }
  } else alert("ERROR! Number too big");
});
