function solve(arr) {
    let answer = [];
    let counter = 1;
    let maxCounter = 0;
    let longestNum = 0;

    for (let i = 1; i < arr.length; i++) {
        let num1 = Number(arr[i]);
        let num2 = Number(arr[i - 1]);
        if (num1 != num2) {
            counter = 0;
        }
        counter++

        if (counter > maxCounter) {
            maxCounter = counter;
            longestNum = Number(arr[i]);
            continue;
        }
    }
    for (let j = maxCounter; j > 0; j--) {
        answer.push(longestNum)
    }
    console.log(answer.join(" "));
}
solve([1, 1, 1, 2, 3, 1, 3, 3])
solve([0, 1, 1, 5, 2, 2, 6, 3, 3])