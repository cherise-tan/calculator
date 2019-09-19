// Create an empty equation array - this will contain the equation to date
var equation = [];

// Create an empty display string - this is what will display on the calculator screen
var display = "";

// Define html elements
var buttons = document.getElementsByClassName("btn");
var screen = document.getElementById("screen");

// Add event handlers to the buttons
for (var button of buttons) {
    button.addEventListener("click", function () {

        var value = this.innerText; // This represents the button's value

        if (!isNaN(value) || value === ".") {
            display += value;
            screen.value = display;

        } else if (value === "AC") {
            // Need to refresh the display screen and equation array
            equation = [];
            display = "";
            screen.value = display;

        } else if (value === "CE") {
            // Need to clear the display screen (aka delete last entry) but leave the equation array intact
            display = "";
            screen.value = display;

        } else if (value === "=") {
            // Push the current display string to the equation array
            equation.push(display);

            var answer = calculate(equation);

            screen.value = answer;
            equation = [];
            display = "";

        } else { // aka if value is 'x' '÷' '-' or '+'
            equation.push(display);
            equation.push(value);
            display = "";
        }
    })
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