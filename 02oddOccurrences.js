function oddOccurrences(data) {
    let words = new Map();
 
    let wordsArr = data.toLowerCase().split(" ");
 
    for (let word of wordsArr) {
        if (words.has(word)) {
            words.set(word, words.get(word) + 1)
        } else {
            words.set(word, 1)
        }
    }
 
    let res = "";
    for (let [word, times] of words.entries()) {
        if (times % 2 !== 0) {
            res += word + " ";
        }
    }
 
    console.log(res);
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')