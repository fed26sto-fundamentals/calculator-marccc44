// Hide calculator on min and cross
const container = document.querySelector("#calculator");
const calculator_removed = document.querySelector("#calculator_removed");

const hideElements = [
  document.querySelector("#cross_action"),
  document.querySelector("#minus_action"),
  document.querySelector("#open_calculator"),
];

hideElements.forEach((element) => {
  element.onclick = () => {
    container.classList.toggle("hide");
    calculator_removed.classList.toggle("hide");
  };
});

// When click on grow increse
const increaseWindow = document.querySelector("#square_action");

increaseWindow.onclick = () => container.classList.toggle("fullWidth");

// Start code for calculator
let currentInput = "";
let resultDisplayed = false;

function number(val) {
  if (resultDisplayed) {
    currentInput = "";
    resultDisplayed = false;
  }

  currentInput += val;

  document.getElementById("calculator_text").innerHTML = currentInput;
}

function removeCalculation() {
  document.getElementById("calculator_text").innerHTML = 0;
  currentInput = "";
}

function calculate() {
  let result = eval(currentInput);
  document.getElementById("calculator_text").innerHTML = result;
  currentInput = result;
  resultDisplayed = true;
}
