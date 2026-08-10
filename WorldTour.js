function solve(data) {
    let stops = data.shift()
    while (data[0] !== "Travel") {
        let commands = data.shift().split(":")
        let command = commands[0]
        let values = commands.slice(1)

        if (command === "Add Stop") {
            let index = values[0];
            let ch = values[1];
            if (index >= 0 && index <= stops.length) {
                let leftSide = stops.substring(0, index);
                let rightSide = stops.substring(index);
                stops = leftSide + ch + rightSide;
            }
            console.log(stops);

        } if (command === "Remove Stop") {
            let indexOne = +values[0];
            let indexTwo = +values[1];
            if (indexOne >= 0 && indexOne < stops.length && indexTwo >= 0 && indexTwo < stops.length && indexOne <= indexTwo) {
                let leftSide = stops.substring(0, indexOne);
                let rightSide = stops.substring(indexTwo + 1);
                stops = leftSide + rightSide;
            }
            console.log(stops);

        } if (command === "Switch") {
            let firstRepl = values[0];
            let secRepl = values[1];
            if (stops.includes(firstRepl)) {
                stops = stops.replace(firstRepl, secRepl);
                console.log(stops)
            } else {
                console.log(stops)

            }
        }
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`)
}


solve((["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]))