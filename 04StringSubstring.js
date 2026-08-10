function solve(word, text) {
    let textL = text.split(" ").map(x => x.toLowerCase());
    let wordL = word.toLowerCase();
    if (textL.includes(wordL)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`)
    }

}
solve('javascript', 'JavaScript is the best programming language')