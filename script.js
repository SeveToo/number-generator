const number__value = document.querySelector(
  ".number__value"
);
const randomize = document.querySelector(".randomize");

const explanation = document.querySelector(".explanation");
const sum__value = document.querySelector(".sum__value");

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function showRandomNumber() {
  explanation.innerHTML = "";
  let number = "";
  let sum = 0;
  for (let i = 9; i >= 0; i--) {
    let currentNumber = rand(0, 1);
    let step = document.createElement("div");
    step.innerHTML =
      currentNumber +
      ` * ${Math.pow(2, i)} = ${
        currentNumber * Math.pow(2, i)
      }`;
    explanation.appendChild(step);
    number += currentNumber;
    sum += currentNumber * Math.pow(2, i);
  }
  number__value.innerText = number;
  sum__value.innerText = `Sum is = ${sum}`;
}

randomize.addEventListener("click", showRandomNumber);
