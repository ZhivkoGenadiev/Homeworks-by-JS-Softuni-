function solve(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let el = Number(arr[i]);
        if (el < 0) {
            res.unshift(el);
        } else {
            res.push(el);
        }
    }
    console.log(res.join('\n'))
}
solve(['7', '-2', '8', '9'])