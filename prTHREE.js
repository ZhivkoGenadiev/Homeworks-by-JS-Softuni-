function solve(data) {
    let spices = data.shift();
    let newArra = [];
    let newList = spices.split(", ");
    for(let line of newList){
        newArra.push(line);
    }
    spices = newArra.join(" ")

    for (let line of data) {
        let values = line.split(" ")
        let command = values[0];


        switch (command) {
            case "AddSpice": {
                let spiceNeed = values[1];
                let newArr = [];
                let newList = spices.split(" ");
                for(let line of newList){
                    newArr.push(line);
                }
                spices = newArr.join(" ");
                spices = (`${spices} ${spiceNeed}`);
                // console.log(spices)
                break;
            }

            case "AddManySpices": {
                let index = Number(values[1]);
                let newSpices = values[2].split("|");
                let newArr = [];
                let newList = spices.split(" ");
                for (let i = 0; i < newList.length; i++) {

                    if (index === i) {
                        for (let s of newSpices) {
                            newList.slice(index, newSpices.length);

                            newArr.push(s)
                        }
                    }
                    newArr.push(newList[i])
                }
                spices = newArr.join(" ")
                // console.log(spices)
                break;
            }

            case "SwapSpices": {
                let firstSw = values[1]
                let secSw = values[2];
                let newArr = [];
                let newList = spices.split(" ")
                for (let ss of newList) {
                    if (ss == firstSw) {
                        ss = secSw
                        newArr.push(ss)
                        continue;
                    }
                    if (ss == secSw) {
                        ss = firstSw
                        newArr.push(ss);
                        continue;
                    }
                    newArr.push(ss)

                }
                spices = newArr.join(" ")
                // console.log(spices)
                break;
            }

            case "ThrowAwaySpices": {
                let comm = values[1].split(" ")
                let index = Number(values[2]);
                let spi = comm[0];
                if (spices.includes(spi) && index <= spices.length) {
                    let newList = spices.split(" ");
                    let newArr = []
                    for (let j = 0; j < newList.length; j++) {
                        if (newList[j] === spi) {
                            newList.splice(newList[j], index - 1)
                        } else {
                            newArr.push(newList[j])
                        }
                    }
                    spices = newArr.join(" ")
                    // console.log(spices)
                }
                break;

            }
            case "Arrange": {
                let newArr = [];
                let newList = spices.split(" ")
                for (let line of newList) {
                    newArr.push(line);
                }
                let sortArr = newArr.sort()
                spices = sortArr.join(" ")
                // console.log(spices)
                break;
            }

            case "done": return console.log(spices)


        }
    }
}
solve(['coriander, cloves, paprika, cumin', 
'AddSpice nutmeg', 
'AddSpice anise', 
'AddSpice turmeric', 
'AddSpice cumin', 
'SwapSpices coriander paprika', 
'ThrowAwaySpices cumin 4', 
'done']) 

console.log("**************************")

solve((['coriander, cloves, paprika, allspice, turmeric, anise, cumin', 
'AddSpice nutmeg', 
'ThrowAwaySpices cloves 3', 
'AddManySpices 3 cayenne|cardamom|mace', 
'done']) )

console.log("**************************")

