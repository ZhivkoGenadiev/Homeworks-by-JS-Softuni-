function solve(num1, num2, num3) {

    let sign = 'Positive';
    let isNum1Negative = num1 < 0;
    sign = checkAndChange(sign, isNum1Negative);
    let isNum2Negative = num2 < 0;
    sign = checkAndChange(sign, isNum2Negative);
    let isNum3Negative = num3 < 0;
    sign = checkAndChange(sign, isNum3Negative);
    return sign;

    function checkAndChange(sign, shouldChange) {
        if (shouldChange === false) {
            return sign
        }
        if (sign === 'Positive') {
            sign = 'Negative';
        } else {
            sign = 'Positive';
        }
        return sign;
    }
}
console.log(solve(5,-12,-15))