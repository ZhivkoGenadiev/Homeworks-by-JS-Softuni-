function solve(data) {
    let regex = /([=]|[\/])(?<name>[A-Z][A-Za-z]{2,})\1/gm
    let match = regex.exec(data);
    let points = 0;
    let bff = [];
    while (match) {
        let name = match.groups.name;
        points += name.length
        match = regex.exec(data)
        bff.push(name)

    }
    console.log(`Destinations: ${bff.join(", ")}`)

    console.log(`Travel Points: ${points}`)
}
solve(("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i="))