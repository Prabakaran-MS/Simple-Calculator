let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);

    } catch (error) {
        display.value = 'Error';
    }
}

var buttons = document.getElementsByTagName('button');

Array.from(buttons).forEach(button => {
    button.className = "btn btn-primary m-1 w-100";
});