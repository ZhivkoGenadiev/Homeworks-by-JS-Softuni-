function solve(data) {
    let totalWhitoutTaxes = 0;
    let specialCustomer = 0.10;
    let taxes = 0.20;
    let totalTaxes = 0;
    let totalTotal = 0
    for (let i = 0; i < data.length; i++) {
        if (data[i] === "special") {

            totalTaxes = totalWhitoutTaxes * taxes
            totalTotal = (totalWhitoutTaxes + totalTaxes) - ((totalWhitoutTaxes + totalTaxes) * specialCustomer);
            break;
        }
        if (data[i] === "regular") {

            totalTaxes = totalWhitoutTaxes * taxes
            totalTotal = totalWhitoutTaxes + totalTaxes;
            break;
        }
        let price = Number(data[i]);


        if (price < 0) {
            console.log("Invalid price!")
            continue;
        }
        totalWhitoutTaxes += price

    }
    if (totalWhitoutTaxes === 0) {
        return "Invalid order!"
    } else {
        console.log(`Congratulations you've just bought a new computer!\n` +
            `Price without taxes: ${totalWhitoutTaxes}$\n` +
            `Taxes: ${totalTaxes.toFixed(2)}$\n` +
            `-----------\n` +
            `Total price: ${totalTotal.toFixed(2)}$`)
    }



    //  console.log(totalWhitoutTaxes);
    //  console.log(totalTaxes.toFixed(2))
    //  console.log(totalTotal.toFixed(2));

}
solve(([

    '1050',

    '200',

    '450',

    '2',

    '18.50',

    '16.86',

    'special'

]))
console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
solve(([

    '1023',

    '15',

    '-20',

    '-5.50',

    '450',

    '20',

    '17.66',

    '19.30',

    'regular'

]))