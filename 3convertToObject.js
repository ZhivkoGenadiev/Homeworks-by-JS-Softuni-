function solve(string) {
    let person = JSON.parse(string);

    for (let key of Object.keys(person)) {
        console.log(`${key}: ${person[key]}`)
    }


}
solve('{"name": "George", "age": 40, "town": "Sofia"}')