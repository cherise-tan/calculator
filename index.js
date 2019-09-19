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

        // Define variable representing the button value
        var value = this.innerText;

        // next need to check if the value is a number or a '.'
        if (!isNaN(value) || value === ".") {
    

            // if so, append this value to the display string
            display += value;
            // then set the value of the calculator screen html element to the value of the display string
            // might want to consider truncating the string if the user attempts to enter too many digits
            screen.value = display;
        }

        // if the value is 'AC'
        else if (value === "AC") {
            // need to reset both the equation array and the display string
            equation = [];
            display = "";
            // then need to display the new empty display string on the calculator screen
            screen.value = display;
        }

        // if the value is 'CE'
        else if (value === "CE") {
            // need to clear the display screen (aka delete last entry) but leave the equation array intact
            display = "";
            // then display new empty display string on the calculator screen
            screen.value = display;
        }

        // if the value is '=', perform the calculation
        else if (value === "=") {
            // push the current display string to the equation array
            equation.push(display);

            // set a variable to equal the first value in the equation array (i.e. current value)
            var current = Number(equation[0]);

            // loop through the rest of the array
            for (let i = 1; i < equation.length; i++) {
                // the second value of the array will be the symbol (i.e. =/- etc)
                var symbol = equation[i];
                // the third value of the array will be the number that the first number is interacting with
                var nextValue = Number(equation[i + 1]);

                // then need to handle wha happens based on what the sumbol is                
                // ie if symbol is '+', need to set the current value to be equal the current + next value
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
            screen.value = current;
            equation = [];
            display = "";
        }

        else {
            // push the current display string to the array
            equation.push(display);
            // push the current value to the array
            equation.push(value);
            // reset the display string
            display = "";
        }
    })
}

// function updateScreen(value) {
//     // Append current value to the display string
//     display += value;
//     // Set screen value to be equal to the display string
//     screen.value = display;
// }