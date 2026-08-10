function solve(text, words){
    while(text.includes(words)){
    text = text.replace(words, '*'.repeat(words.length));
    }
    console.log(text)
}
solve('A small sentence with some words','small')
solve('Find the hidden word', 'hidden')