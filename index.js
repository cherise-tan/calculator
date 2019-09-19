// Create an empty equation array - this will contain the equation to date
var equation = [];

// Create an empty display string - this is what will display on the calculator screen
var display = "";

// Select all elements called 'button'
var buttons = document.getElementsByClassName("btn");

// Add an event handler to the buttons, listening for click
for (var button of buttons) {
    // Specify an event handler function to:
    button.addEventListener("click", function () {
        // first define a variable and assign it to the value of the button's text
        var value = this.innerText;

        // next need to check if the value is a number or a '.'
        if (!isNaN(value) || value === ".") {
            console.log("im a number");
        }
        else {
            console.log("not a number");
        }
        // if so, append this value to the display string
        // then set the value of the calculator screen html element to the value of the display string
        // might want to consider truncating the string if the user attempts to enter too many digits
        // if the value is 'AC'
        // need to reset both the equation array and the display string
        // then need to display the new empty display string on the calculator screen
        // if the value is 'CE'
        // need to clear the display screen (aka delete last entry) but leave the equation array intact
        // then display new empty display string on the calculator screen
        // next need to handle the multiply symbol - i.e. if value is 'x'
        // first push the current display string to the equation array
        // then push * to the equation array
        // then refresh the display string to be an empty string (i.e. reset for a new value)
        // repeat the above step for the divide symbol
        // i.e. ÷ should push / to the equation array
        // if the value is '=', perform the calculation
        // push the current display string to the equation array

        // set a variable to equal the first value in the equation array (i.e. current value)
        // loop through the rest of the array
        // the second value of the array will be the symbol (i.e. =/- etc)
        // the third value of the array will be the number that the first number is interacting with
        // then need to handle wha happens based on what the sumbol is
        // ie if symbol is '+', need to set the current value to be equal the current + next value
        // repeat for all equations
        // if the end current value is negative, need to make it display correctly
        // i.e. set current value equal to absolute value + '-'
        // then need to set the value of the calculator display to be equal to the current value
        // also then need to clear the equation array and display string
        // otherwise (aka if value is + or -)
        // push the current display string to the array
        // push the current value to the array
        // reset the display string


    })
}