function solve(input) {

    let newArr = [];
    for (let el of input) {
        if (!newArr.includes(el)) {
            newArr.push(el)
        }
    }
    console.log(newArr.join(' '))
}
solve([7, 8, 9, 7, 2, 3, 4, 1, 2])