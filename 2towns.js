function solve(input) {
    let obj = {};
    for (let lines of input) {
        let line = lines.split(" | ");

        obj.town = line[0];
        obj.latitude = Number(line[1]).toFixed(2);
        obj.longitude = Number(line[2]).toFixed(2);

        console.log(obj)
    }
}
solve(['Sofia | 42.696552 | 23.32601',

    'Beijing | 39.913818 | 116.363625'])