function solve(n, k) {
    let sum = 0;
    let newArr = [];
    newArr.push(1);

    for (let i = 0; i < n - 1; i++) {
        if (i >= k - 1) {
            sum = 0;
            for (let j = newArr.length - k; j < newArr.length; j++) {
                sum += newArr[j];
            }
            newArr.push(sum);
        } else {
            sum += newArr[i];
            newArr.push(sum);
        }
    }

    console.log(newArr.join(" "))

}
solve(6, 3)
solve(8, 2)