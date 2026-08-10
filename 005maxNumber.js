function solve(arr) {
    let buff = [];
    for (let i = 0; i < arr.length; i++) {
        let elA = arr[i];
        for (let j = i + 1; j <= arr.length; j++) {
            let elB = arr[j];
            if (elA > elB) {
                continue
            } else if (j == arr.length) {
                buff.push(elA);
                break;
            } else {
                break;
            }
        }
    }
    console.log(buff.join(" "))
}
solve([1, 4, 3, 2])
solve([14, 24, 3, 19, 15, 17])
solve([27, 19, 42, 2, 13, 45, 48])