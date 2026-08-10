function solve(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        let firstWord = arr1[i];
        for (let f = 0; f < arr2.length; f++) {
            let secWord = arr2[f];
            if (firstWord === secWord) {
                console.log(firstWord)
            }
        }
    }
}

// function solveTwo(arr1, arr2) {
//     for (let el of arr1) {
//         if (arr2.includes(el)) {
//             console.log(el)
//         }
//     }

solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'])