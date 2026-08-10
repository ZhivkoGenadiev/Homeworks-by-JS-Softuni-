function solve(data) {
    let word = data.shift();
    for (let line of data) {
        let commands = line.split(":|:");
        let command = commands[0];
        let values = commands.slice(1)

        switch (command) {
            case "ChangeAll": {
                let substring = values[0];
                let repl = values[1];
                while (word.includes(substring)) {
                    word = word.replace(substring, repl)
                };
                console.log(word)
                break;
            }
            case "Reverse": {
                let substring = values[0];
                if (word.includes(substring)) {
                    word = word.replace(substring, "");
                    let reversed = revverse(substring);
                    word += reversed;
                    console.log(word)
                } else {
                    console.log("error")
                }
                break;
            }
            case "InsertSpace": {
                let index = values[0];
                let leftSide = word.substring(0, index);
                let rightSide = word.substring(index);
                word = leftSide + " " + rightSide;
                console.log(word)
                break;
            }
            case "Reveal": console.log(`You have a new text message: ${word}`); return;
        }
    }
    function revverse(text) {
        return text.split("").reverse().join('')
    }
}
solve([

    'heVVodar!gniV',

    'ChangeAll:|:V:|:l',

    'Reverse:|:!gnil',

    'InsertSpace:|:5',

    'Reveal'

])