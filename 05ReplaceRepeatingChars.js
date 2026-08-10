function solve(text) {
    let res = []
    for (let i = 0; i < text.length; i++) {
        if (text[i] === text[i + 1]) {
            continue;
        } else {
            res.push(text[i])
        }
    }
    console.log(res.join(""))
}
solve('qqqwerqwecccwd')
solve('aaaaabbbbbcdddeeeedssaa')