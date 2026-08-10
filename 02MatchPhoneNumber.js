function solve(phones) {
    let regex = /\+359([ -])2\1(?:\d{3})\1(?:\d{4})\b/gm;
    let res = [];
    for (let i = 0; i < phones.length; i++) {
        let text = phones[i];
        let match = text.match(regex);
        res = res.concat(match);
    }
    console.log(res.join(", "))
}
solve(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])