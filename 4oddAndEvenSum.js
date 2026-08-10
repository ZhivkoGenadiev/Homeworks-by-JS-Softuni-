function solve(num) {
    num = String(num)
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < num.length; i++) {
        for (let el of num[i]) {
            let el = Number(num[i])

            if (el % 2 === 0) {
                sumEven += el
            } else {
                sumOdd += el
            }
        }
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`)
}
solve(3495892137259234)