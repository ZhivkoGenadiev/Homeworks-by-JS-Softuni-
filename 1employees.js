function solve(data) {
    let obj = {}
    for (let name of data) {
        obj[name] = name.length
    }
    for (let key of Object.keys(obj)) {
        console.log(`Name: ${key} -- Personal Number: ${obj[key]}`)
    }
}
solve([

    'Silas Butler',

    'Adnaan Buckley',

    'Juan Peterson',

    'Brendan Villarreal'

])