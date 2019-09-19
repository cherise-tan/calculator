// Create an empty equation array - this will contain the equation to date
var equation = [];

// Create an empty display string - this is what will display on the calculator screen
var display = "";

// Select all elements called 'button'
var buttons = document.getElementsByClassName("btn");

// Define screen element
var screen = document.getElementById("screen");

// Add an event handler to the buttons, listening for click
for (var button of buttons) {
    // Specify an event handler function to:
    button.addEventListener("click", function () {

        // first define a variable and assign it to the value of the button's text
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

        // next need to handle the multiply symbol - i.e. if value is 'x'
        else if (value === "x") {
            // first push the current display string to the equation array
            equation.push(display);
            // then push * to the equation array
            equation.push("*");
            // then refresh the display string to be an empty string (i.e. reset for a new value)
            display = ""
        }
        // repeat the above step for the divide symbol
        else if (value === "÷") {
            // i.e. ÷ should push / to the equation array
            equation.push(display)
            equation.push("/");
            display = "";
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
                } else if (symbol === "*") {
                    current *= nextValue;
                } else if (symbol === "/") {
                    current /= nextValue;
                }

                i++;
            }
            screen.value = current;
            equation = [];
            display = "";
        }


    })
}