function clearoutput() {
    document.getElementById('output').value = '';
}

function getval(value) {
    document.getElementById('output').value += value;
}

function calculate() {
    let result = eval(document.getElementById('output').value);
    document.getElementById('output').value = result;
}