function solve(password) {
    let hasValidLength = validateLength(password);
    let hasValidSpecialChar = validateNonSpecialChar(password);
    let hasValidDigit = checkForContainsTwoNumbers(password);
    printResult(hasValidLength, hasValidSpecialChar, hasValidDigit);

    function validateLength(password) {
        return password.length >= 6 && password.length <= 10;
    }


    function validateNonSpecialChar(text) {
        for (let char of text) {
            let num = char.charCodeAt(0);
            let isLowerChar = checkCharForLowerCase(num);
            let isUpperChar = checkCharForUpperCase(num);
            let isNumber = checkContainNumbers(num);
            if (!isLowerChar && !isUpperChar && !isNumber) {
                return false
            }
        }
        return true;
    }


    function checkContainNumbers(num) {
        return num >= 48 && num <= 57;
    }


    function checkCharForUpperCase(num) {
        return num >= 65 && num <= 90;
    }


    function checkCharForLowerCase(num) {
        return num >= 97 && num <= 122;
    }


    function checkForContainsTwoNumbers(password) {
        let counter = 0;
        for (let ch of password) {
            let isNumber = checkContainNumbers(ch.charCodeAt(0));
            if (isNumber) {
                counter++;
            }
        }
        return counter >= 2
    }


    function printResult(validLength, validSymbol, validDigit) {
        if (!validLength) {
            console.log("Password must be between 6 and 10 characters");
        }
        if (!validSymbol) {
            console.log("Password must consist only of letters and digits");
        }
        if (!validDigit) {
            console.log("Password must have at least 2 digits");
        }
        if (validLength && validSymbol && validDigit) {
            console.log("Password is valid")
        }
    }
}
solve('Pa$s$s')