function solve(data) {

    class Plant {

        constructor(pName, plantRarity, plantRait, counter) {
            this.name = pName;
            this.rarity = Number(plantRarity);
            this.rait = Number(plantRait);
            this.counter = Number(counter);
        }

        rate(pName, rait, counter) {
            if (pName.includes(this.name)) {
                this.rait += rait;
                this.counter++;
            } else {
                console.log("error");
            }
        }
        update(pName, rarity) {
            if (pName.includes(this.name)) {
                this.rarity = Number(rarity);
            } else {
                console.log("error");
            }
        }
        reset(pName) {
            if (pName.includes(this.name)) {
                this.rait = 0;
            } else {
                console.log("error")
            }
        }
        toString() {
            console.log(`- ${this.name}; Rarity: ${this.rarity}; Rating: ${(this.rait / this.counter).toFixed(2)}`)
        }
    }

    let numOfPlants = Number(data.shift());

    let map = {};

    for (let i = 0; i < numOfPlants; i++) {
        let tokens = data[i].split("<->");
        let pName = tokens[0];
        let plantRarity = tokens[1];
        let plantRait = 0;
        let counter = 0
        let plant = new Plant(pName, plantRarity, plantRait, counter);
        map[pName] = plant;
    }
    let commands = data.splice(numOfPlants, data.length - 1);

    for (let i = 0; i < commands.length; i++) {
        let command = commands[i].split(": ");
        let comm = command[0];
        let counter = 0;

        if (comm === "Exhibition") {
            console.log(`Plants for the exhibition:`)

            for (let name in map) {
                map[name].toString();
            }

        } else if (comm === "Reset") {
            let pName = command[1];
            let plant = map[pName];
            plant.reset(pName);

        } else {

            let tokens = command[1].split(" - ")
            let pName = tokens[0];
            let values = Number(tokens[1])

            switch (comm) {

                case "Rate": {

                    if (map.hasOwnProperty(pName)) {
                        let plant = map[pName];
                        let rait = Number(values);
                        
                        plant.rate(pName, rait, counter);
                        break;

                    } else {
                        console.log("error");
                        continue;
                    }
                }

                case "Update": {
                    let plant = map[pName];
                    let rarity = Number(values);
                    plant.update(pName, rarity);
                    break;
                }
            }
        }
    }
}
solve((["Blocked: Amy",
"Comment: Amy",
"New follower: Amy",
"Like: Tom: 5",
"Like: Ellie: 5",
"Log out"]))