function solve(data) {
    let some = {};
    let someArrInput = data.shift().split(", ");
    let regexName = /[A-Za-z]/g;
    let regexDist = /[0-9]/g;
    for (let somet of someArrInput) {
        some[somet] = 0
    }
    for (let line of data) {
        if (line === "end of race") {
            break;
        }
        let name = line.match(regexName).join("");
        let dist = line.match(regexDist);
        let tempDest = 0;
        for (let el of dist) {
            tempDest += Number(el)
        }
        if (some.hasOwnProperty(name)) {
            some[name] += tempDest
        }
    }
    let sortArr = Object.entries(some).sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${sortArr[0][0]}`)
    console.log(`2nd place: ${sortArr[1][0]}`)
    console.log(`3rd place: ${sortArr[2][0]}`)
}
solve(['George, Peter, Bill, Tom',

    'G4e@55or%6g6!68e!!@ ',

    'R1@!3a$y4456@',

    'B5@i@#123ll',

    'G@e54o$r6ge#',

    '7P%et^#e5346r',

    'T$o553m&6',

    'end of race'])