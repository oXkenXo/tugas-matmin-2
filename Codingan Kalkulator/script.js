const calculator = document.querySelector(".calculator");
const displayInput = document.getElementById("display-input");
const buttonsContainer = document.querySelector(".buttons");
const watermark = document.querySelector(".watermark");

const buttons = [
    "7", "8", "9", "×",
    "4", "5", "6", "÷",
    "1", "2", "3", "+",
    "C", "0", "=", "-"
];

buttons.forEach(buttonText => {
    const button = document.createElement("button");
    button.textContent = buttonText;
    button.addEventListener("click", function() {
        if (buttonText === "=") {
            try {
                const result = eval(displayInput.value);
                displayInput.value = result;
            } catch (error) {
                displayInput.value = "Error";
            }
        } else if (buttonText === "C") {
            displayInput.value = "";
        } else {
            displayInput.value += buttonText;
        }
    });
    buttonsContainer.appendChild(button);
});