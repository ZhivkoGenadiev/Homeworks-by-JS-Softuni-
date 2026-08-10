function solve(arr, num) {
    let buffArr = [];
    for (let i = 0; i < num; i++) {
        let element = arr[0];
        for (let k = 1; k < arr.length; k++) {
            buffArr.push(arr[k]);
        }
        buffArr.push(element);
        arr = buffArr;
        buffArr = [];
    }
    console.log(arr.join(" "));

}
solve([32, 21, 61, 1], 4)