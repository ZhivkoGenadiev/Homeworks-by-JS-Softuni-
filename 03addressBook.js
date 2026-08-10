function solve(input) {
    let dict = {};
    for (let line of input) {
        let [namee, address] = line.split(':');
        dict[namee] = address;
    }
    let sorted = Object.entries(dict);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (let el of sorted) {


        console.log(`${el[0]} -> ${el[1]} `)
    }
}


solve(['Tim:Doe Crossing',

    'Bill:Nelson Place',

    'Peter:Carlyle Ave',

    'Bill:Ornery Rd'])