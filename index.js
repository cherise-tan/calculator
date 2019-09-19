var equation = []; // This will contain the equation to date
var display = ""; // This is what will display on the calculator screen

// Define html elements
var buttons = document.getElementsByClassName("btn");
var screen = document.getElementById("screen");

// Add event handlers to the buttons
for (var button of buttons) {
    button.addEventListener("click", function () {

        var value = this.innerText; // This represents the button's value

        if (!isNaN(value) || value === ".") {
            screen.value = display += value;

        } else if (value === "AC") { // Need to refresh the display screen and equation array
            resetCalculator();
            screen.value = display;

        } else if (value === "=") {
            equation.push(display);
            screen.value = calculate(equation);
            resetCalculator();

        } else { // aka if value is 'x' '÷' '-' or '+'
            equation.push(display, value);
            display = "";
        }
        console.log(equation);
    })

}

function resetCalculator() {
    equation = [];
    display = "";
}

function calculate(equation) {
    var current = Number(equation[0]); // Represents the first (i.e. current) number in the array

    for (let i = 1; i < equation.length; i += 2) {
        var symbol = equation[i]; // Represents the next symbol in the array
        var nextValue = Number(equation[i + 1]); // Represents the next number in the array

        if (symbol === "+") {
            current += nextValue;
        } else if (symbol === "-") {
            current -= nextValue;
        } else if (symbol === "x") {
            current *= nextValue;
        } else if (symbol === "÷") {
            current /= nextValue;
        }
    }

    return current;
}