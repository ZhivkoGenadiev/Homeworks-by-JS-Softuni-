function solve(data) {
    let word = data.shift();
    for (let line of data) {
        let commands = line.split("|");
        let command = commands[0];
        let values = commands.slice(1)

        switch (command) {
            case "ChangeAll": {
                let substring = values[0];
                let repl = values[1];
                while (word.includes(substring)) {
                    word = word.replace(substring, repl)
                };
                // console.log(word)
                break;
            }
            case "Insert": {
                let index = values[0];
                let ch = values[1];
                let leftSide = word.substring(0, index);
                let rightSide = word.substring(index);
                word = leftSide + ch + rightSide;
                // console.log(word);
                break;
            }
            case "Move": {
                let index = values[0];
                let left = word.substring(0, index);
                let right = word.substring(index);
                word = right + left;
                // console.log(word);
                break;
            }
            case "Decode": console.log(`The decrypted message is: ${word}`); return;
        }
    }
}
solve(

    [
        'owyouh',
        'Move|2',
        'Move|3',
        'Insert|3|are',
        'Insert|9|?',
        'Decode'

    ])