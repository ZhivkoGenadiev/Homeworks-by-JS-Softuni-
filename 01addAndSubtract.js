function solve(arr) {
    let oldSum = 0;
    let newSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let currNum = arr[i];
        oldSum += currNum;
        if (currNum % 2 === 0) {
            currNum += i;
            arr[i] = currNum;
        } else {
            currNum -= i;
            arr[i] = currNum
        }
        newSum += currNum
    }
    console.log(arr)
    console.log(oldSum)
    console.log(newSum)
}
solve([5, 15, 23, 56, 35])