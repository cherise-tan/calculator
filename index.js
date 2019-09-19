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
    })
}

function resetCalculator() {
    equation = [];
    display = "";
}

function calculate(equation) {
    // set a variable to equal the first value in the equation array (i.e. current value)
    var current = Number(equation[0]);

    for (let i = 1; i < equation.length; i++) {
        // the second value of the array will be the symbol (i.e. =/- etc)
        var symbol = equation[i];
        // the third value of the array will be the number that the first number is interacting with
        var nextValue = Number(equation[i + 1]);

        // Handle equations based on symbol value     
        if (symbol === "+") {
            current += nextValue;
        } else if (symbol === "-") {
            current -= nextValue;
        } else if (symbol === "x") {
            current *= nextValue;
        } else if (symbol === "÷") {
            current /= nextValue;
        }

        i++;
    }

    return current;
}