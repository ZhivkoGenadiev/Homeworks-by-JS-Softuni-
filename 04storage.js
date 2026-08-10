function solve(input) {
    let dict = new Map();
    for (const el of input) {
        let tokens = el.split(' ');
        let item = tokens[0];
        let quan = Number(tokens[1]);
        if (dict.has(item)) {
            let currentQuan = dict.get(item);
            dict.set(item, currentQuan + quan);
        } else {
            dict.set(item, quan)
        }
    }
    for (const [key, value] of dict) {
        console.log(`${key} -> ${value}`)
    }
}




solve(['apple 50',

    'apple 61',

    'coffee 115',

    'coffee 40'])