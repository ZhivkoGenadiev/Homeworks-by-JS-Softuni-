function solve(arr) {
    let bul = true;
    if (arr.length <= 1) {
        console.log('0');
    } else {
        let sum1 = Number(arr[0]);
        for (let i = 1; i < arr.length; i++) {
            sum1 += Number(arr[i]);
            let sum2 = 0;

            for (let j = i + 2; j < arr.length; j++) {
                sum2 += Number(arr[j]);
                if (sum1 === sum2) {
                    bul = false;
                    console.log(i + 1);
                    break;
                }
            }
            if (bul === false) {
                break;
            }
        }
        if (bul) {
            console.log('no');
        }
    }
}
solve([1, 2, 3, 3])
solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])