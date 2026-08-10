function solve(arr1, arr2) {
    let sum = 0;
    let notEqualIndxex = 0;
    let isTrue = false;

    for (let i = 0; i < arr1.length; i++) {
        let num1 = Number(arr1[i]);
        let num2 = Number(arr2[i]);
        if (num1 === num2) {
            sum += num1;
            continue;

        } else {
            notEqualIndxex = i;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isTrue = true;
            break;
        }
    }
    if (!isTrue) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
solve(['10', '20', '30'], ['10', '20', '30'])
solve(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5'])