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

function number(val) {
  currentInput += val;

  document.getElementById("calculator_text").innerHTML = currentInput;
}


function removeCalculation() {
    document.getElementById("calculator_text").innerHTML = 0;
    currentInput = "";
}

function calculate() {
        // Evaluate the expression
        let result = eval(currentInput);

        // Update the display with the result
        document.getElementById("calculator_text").innerHTML = result;

        // Reset the currentInput to the result for further calculations
        currentInput = result;
}