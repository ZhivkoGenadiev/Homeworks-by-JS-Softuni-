function solve(charA, charB) {
    let numFromCharA = convFromCharToNum(charA);
    let numFromCharB = convFromCharToNum(charB);

    let startIndex = samllestOfTwoNumbers(numFromCharA, numFromCharB);
    let endIndex = biggestOfTwoNumbers(numFromCharA, numFromCharB);
    let = buff = "";
    for (let i = startIndex + 1; i < endIndex; i++) {
        buff = concatenationString(buff, convFromNumToChar(i));
    }
    console.log(buff);

    function concatenationString(buff, string) {
        buff += string + " "
        return buff;
    }

    function convFromNumToChar(num) {
        return String.fromCharCode(num);
    }

    function convFromCharToNum(char) {
        return char.charCodeAt(0);
    }

    function samllestOfTwoNumbers(a, b) {
        return Math.min(a, b);
    }
    function biggestOfTwoNumbers(a, b) {
        return Math.max(a, b);
    }
}
solve('#',

    ':')