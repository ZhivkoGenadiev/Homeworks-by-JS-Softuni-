function solve(input) {
    let routs = input[0].split('||');
    let fuel = Number(input[1]);
    let amunitions = Number(input[2]);
    for (let el of routs) {
        let commands = el.split(' ');
        let command = commands[0];
        let value = Number(commands[1]);
        switch (command) {
            case "Travel":
                if (value <= fuel) {
                    fuel -= value;
                    console.log(`The spaceship travelled ${value} light-years.`);
                } else {
                    console.log(`Mission failed.`);
                    return;
                }
                break;
            case "Enemy":
                if (value <= amunitions) {
                    console.log(`An enemy with ${value} armour is defeated.`);
                    amunitions -= value
                } else {
                    if (fuel <= value * 2) {
                        fuel -= value * 2
                        console.log("Mission failed.")
                        return;
                    }
                    console.log(`An enemy with ${value} armour is outmaneuvered.`);
                }
                break;
            case "Repair":
                console.log(`Ammunitions added: ${value * 2}.`);
                console.log(`Fuel added: ${value}.`);
                break;
            case "Titan":
                console.log(`You have reached Titan, all passengers are safe.`);
                return;
        }
    }
}
solve(['Travel 10||Enemy 30||Repair 15||Titan', '50', '80'])
console.log("---------------------------")
solve(['Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan', '60', '100'])