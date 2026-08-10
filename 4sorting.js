function solve(arr) {

    let sortArr = arr.sort((a, b) => b - a);
    let res = [];
    for (let i = 0; i < sortArr.length / 2; i++) {
        res.push(sortArr[i]);
        if (sortArr.length % 2 === 1 && !((sortArr.length - 1) / 2 === i)) {
            res.push(sortArr[sortArr.length - 1 - i]);
        } else if (sortArr.length % 2 === 0) {
            res.push(sortArr[sortArr.length - 1 - i])
        }
    }
    console.log(res.join(' '))
}
solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])