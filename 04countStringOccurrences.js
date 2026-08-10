function solve(text, countWord) {

    let count = 0;
    let split = text.split(" ");
    for (let token of split) {
        if (token === countWord) {
            count++
        }
    }
    console.log(count)
}
solve('This is a word and it also is a sentence',

    'is')