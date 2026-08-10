function solve(arr) {
    let currentArr = arr;
    while (currentArr.length > 1) {
        let newArr = [];
        for (let i = 0; i < currentArr.length - 1; i++) {
            let first = currentArr[i];
            let second = currentArr[i + 1];
            newArr.push(first + second)
        }
        currentArr = newArr;
    }
    console.log(currentArr[0])
}
solve([2, 10, 3])