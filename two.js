function solve(data) {
    let num = data.shift();

    let regex = /([*]|[@])(?<tag>[A-Z]{1}[a-z]{2,})\1[:]\s{1}\[(?<chOne>[A-z|a-z]{1})\][|]\[(?<chTwo>[A-Z|a-z]{1})\][|]\[(?<chThree>[A-Z|a-z]{1})\][|]$/m

    for (let i = 0; i < num; i++) {
        let match = regex.exec(data[i]);
        if (match != null) {
            let tag = match.groups.tag;
            let chOne = match.groups.chOne;
            let chTwo = match.groups.chTwo;
            let chThree = match.groups.chThree;
            console.log(`${tag}: ${chOne.charCodeAt(0)} ${chTwo.charCodeAt(0)} ${chThree.charCodeAt(0)}`)

        } else {
            console.log(`Valid message not found!`)
        }
    }
}
solve((["3",
    "*Request*: [I]|[s]|[i]|",
    "*Taggy@: [73]|[73]|[73]|",
    "Should be valid @Taggy@: [v]|[a]|[l]|"]))


console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")

solve((["3",
    "@Taggy@: [i]|[n]|[v]|[a]|[l]|[i]|[d]| this shouldn't be valid",
    "*tAGged*: [i][i][i]|",
    "Should be invalid @Taggy@: [v]|[a]|[l]|[l]|[l]|"]))