function solve(a, b, operator) {
    let operations = {
        'add': a + b,
        'subtract': a - b,
        'divide': a / b,
        'multiply': a * b,
    }
    console.log(operations[operator])
}
solve(5,
    5,
    'multiply')