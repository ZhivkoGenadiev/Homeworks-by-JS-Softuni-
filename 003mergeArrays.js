function solve(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        let res1 = arr1[i];
        let res2 = arr2[i];
        if (i % 2 === 0) {
            res1 = Number(res1);
            res2 = Number(res2);
        }
        let currRes = res1 + res2;
        result.push(currRes)
    }
    console.log(result.join(" - "))
}
solve(['5', '15', '23', '56', '35'],

    ['17', '22', '87', '36', '11'])