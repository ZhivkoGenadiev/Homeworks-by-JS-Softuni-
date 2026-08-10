function solve(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        let currNum = arr[i];
        for (let k = i + 1; k < arr.length; k++) {
            if (currNum + arr[k] === target) {
                console.log(`${currNum} ${arr[k]}`)
            }
        }
    }
}
solve([14, 20, 60, 13, 7, 19, 8],

    27)