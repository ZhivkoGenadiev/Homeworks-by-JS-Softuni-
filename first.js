function solve(arr) {
    let countCity = Number(arr.shift());
    let totalIncome = 0;
    let index = 0;
    let count = 0;

    while (index < arr.length) {

        let nameCity = arr[index];
        index++;
        count++;
        let income = Number(arr[index]);
        index++;
        let expenses = Number(arr[index]);
        index++;

        if (count % 3 === 0 && count % 5 !== 0) {
            expenses = expenses + (expenses * 0.50)
        }
        if (count % 5 === 0) {
            income = income - (income * 0.10)
        }
        let calculate = (income - expenses)
        totalIncome += calculate
        console.log(`In ${nameCity} Burger Bus earned ${calculate.toFixed(2)} leva.`)

    }
    console.log(`Burger Bus total profit: ${totalIncome.toFixed(2)} leva.`)

}

solve((["3",
    "Sofia",
    "895.67",
    "213.50",
    "Plovdiv",
    "2563.20",
    "890.26",
    "Burgas",
    "2360.55",
    "600.00"]))