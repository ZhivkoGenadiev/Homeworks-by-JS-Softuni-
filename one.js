function registration(data) {

    let userName = data.shift();

    for (let line of data) {
        let tokens = line.split(" ");
        let command = tokens[0];

        if (command === "Letters") {
            if (tokens[1] === "Lower") {
                userName = userName.toLowerCase();
                console.log(userName)
            }
            if (tokens[1] === "Upper") {
                userName = userName.toUpperCase();
                console.log(userName)
            }
        }

        if (command === "Substring") {
            if (userName.includes(tokens[1])) {
                let newUserName = userName.replace(tokens[1], "");
                console.log(newUserName)

            } else {
                console.log(`The username ${userName} doesn't contain ${tokens[1]}.`);
            }
        }

        if (command === "IsValid") {
            if (userName.includes(tokens[1])) {
                console.log("Valid username.")
            } else {
                console.log(`${tokens[1]} must be contained in your username.`)
            }
        }

        if (command === "Reverse") {
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            if (userName.length > endIndex && startIndex >= 0) {
                let arr = [];
                for (let i = startIndex; i <= endIndex ; i++) {
                    arr.push(userName[i])

                }
                arr.reverse()
                console.log(arr.join(""))
            } else {
                continue;
            }
        }

        if (command === "Replace") {
            if (userName.includes(tokens[1])) {
                let repl = "-"
                userName = userName.replace(tokens[1], repl);
                console.log(userName)
            } 
        }

        if (command === "Registration") {
            return;
        }


        // console.log(command)
    }

}
registration((["ThisIsSoftUni",
    "Reverse 1 3",
    "Replace S",
    "Substring hi",
    "Registration"]))


    registration(["John",
    "Letters Lower",
    "Substring SA",
    "IsValid @",
    "Reverse 0 3",
    "Registration"])