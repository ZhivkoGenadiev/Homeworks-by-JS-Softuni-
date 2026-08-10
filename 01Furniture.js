function solve(data) {
    let regex = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>[0-9.]+)!(?<quantity>\d+)/;
    let totalMoney = 0;
    console.log("Bought furniture:");
    for (let line of data) {
        if (line === "Purchase") {
            break;
        }
        if (regex.test(line)) {
            let product = regex.exec(line);
            let price = Number(product.groups.price) * Number(product.groups.quantity);
            console.log(product.groups.name);
            totalMoney += price;
        }
    }
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`)
}
solve(['>>Sofa<<312.23!3',

    '>>TV<<300!5',

    '>Invalid<<!5',

    'Purchase'])