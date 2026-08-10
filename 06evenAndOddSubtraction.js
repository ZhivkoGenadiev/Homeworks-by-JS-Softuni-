function solve(arr) {
    let sumEven = 0;
    let sumOdd = 0;
    let res = 0;

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }
    for (let num of arr) {
        if (num % 2 === 0) {
            sumEven += num;
        } else {
            sumOdd += num
        }
    }
    // if (sumEven > sumOdd){
    res = sumEven - sumOdd;
    // }else if(sumOdd > sumEven){
    //     res = sumOdd - sumEven
    // }
    console.log(res)

}
solve([1, 2, 3, 4, 5, 6])
solve([3, 5, 7, 9])
solve([2, 4, 6, 8, 10])