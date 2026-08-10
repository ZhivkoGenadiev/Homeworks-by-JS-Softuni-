function solve(data) {
    let word = data.shift();
    for (let comm of data) {

        if (comm === "Abjuration") {
            word = word.toUpperCase()
            console.log(word);
        }
        if (comm === "Necromancy") {
            word = word.toLowerCase();
            console.log(word)
        }


        if (comm != "Abjuration" && comm != "Necromancy" && comm != "Abracadabra") {
            let commands = comm.split(" ");
            let command = commands[0];
            if (command != "Illusion" && command != "Alteration" && command != "Divination") {
                console.log("The spell did not work!");
            }
            switch (command) {
                case "Illusion": {
                    let ch = commands[2];
                    let index = Number(commands[1]);
                    if (word.length >= index) {
                        word = word.replace(word[index], ch);
                        console.log("Done!")
                    } else {
                        console.log("The spell was too weak.")
                    }
                    break;
                }
                case "Alteration": {
                    let substr = commands[1];
                    if (word.includes(substr)) {
                        let newWord = word.replace(substr, '')
                        console.log(newWord);
                    }else{
                        break;
                    };

                    break;
                }
                case "Divination": {
                    let firstStr = commands[1];
                    let secondStr = commands[2];
                    if (word.includes(firstStr)) {
                        let newWord = word.replace(firstStr, secondStr);
                        console.log(newWord)
                    }
                    break;
                }
            }
        } else if (comm === "Abracadabra") {
            return;
        }
    }
}


solve((["SwordMaster",
"Target Target Target",
"Abjuration",
"Necromancy",
"Alteration master",
"Abracadabra"]))