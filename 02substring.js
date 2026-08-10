function solve(text, startIndex, count) {
    let endIndex = startIndex + count;
    let result = text.substring(startIndex, endIndex);
    console.log(result)
}
solve('ASentence', 1, 8)