function solve(data) {
    let result = {};
    let words = data.shift().split(" ");
    for (let word of words) {
        result[word] = 0
    }
    for (let word of data) {
        if (result.hasOwnProperty(word)) {
            result[word] += 1;
        }
    }
    let sordArr = Object.entries(result).sort((a, b) => b[1] - a[1])
    for (let [key, value] of sordArr) {
        console.log(`${key} - ${value}`)
    }
}
solve([

    'this sentence',

    'In', 'this', 'sentence', 'you', 'have',

    'to', 'count', 'the', 'occurrences', 'of',

    'the', 'words', 'this', 'and', 'sentence',

    'because', 'this', 'is', 'your', 'task'

])