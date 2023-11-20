function clearDisplay() {
    document.getElementById('display').value = '0';
}

function deleteLast() {
    let currentValue = document.getElementById('display').value;
    if (currentValue.length > 1) {
        document.getElementById('display').value = currentValue.slice(0, -1);
    } else {
        clearDisplay();
    }
}

function addToDisplay(value) {
    let currentValue = document.getElementById('display').value;
    if (currentValue === '0') {
        document.getElementById('display').value = value;
    } else {
        document.getElementById('display').value += value;
    }
}

function calculate() {
    let expression = document.getElementById('display').value;
    let result = eval(expression);
    document.getElementById('display').value = result;
}
