function solve(names) {
    let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g
    let match = regex.exec(names);
    let res = [];
    while (match != null) {
        res.push(match[0]);
        match = regex.exec(names);
    }
    console.log(res.join(" "))

}
solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov")