function printFibonacciSeries(terms) {
    let num1 = 0, num2 = 1, nextTerm;
    let series = "Fibonacci Series: ";

    for (let i = 1; i <= terms; ++i) {
        series += num1 + " ";
        nextTerm = num1 + num2;
        num1 = num2;
        num2 = nextTerm;
    }

    return series;
}

function generateFibonacci() {
    const termsInput = document.getElementById('terms');
    const outputDiv = document.getElementById('output');
   

    const terms = parseInt(termsInput.value);

    if (!Number.isInteger(terms) || terms < 1 || terms >= 100) {
        outputDiv.textContent = "Invalid input. Please enter a positive integer less than 100.";
        
        return;
    }

    const fibonacciSeries = printFibonacciSeries(terms);
    outputDiv.textContent = fibonacciSeries;
}
