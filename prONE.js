function swimmingChamp(input) {
    let daysOfChamp = Number(input.shift());
    let pointsNeed = Number(input.shift());
    let countSwimmers = Number(input.shift());
    let roomPrice = Number(input.shift());
    let partipiticationFeeForSwimmer = Number(input.shift());


    let totalPoint = 0;
    // let addtochki = totalPoint * 0.05

    for (let i = 0; i < input.length; i++) {
        totalPoint += Number(input[i])
    }
    let addtochki = totalPoint * 0.05
    let taxesForEveryone = roomPrice * countSwimmers * daysOfChamp;
    let taxesForAllSwimmers = partipiticationFeeForSwimmer * countSwimmers;
  
    let totalAll = taxesForAllSwimmers + taxesForEveryone;

    if ((totalPoint + addtochki) >=  pointsNeed) {
        totalAll = totalAll - (totalAll * 0.25);
        console.log(`Money left to pay: ${totalAll.toFixed(2)} BGN.`);
        console.log(`The championship was successful!`)

    } else {
        totalAll = totalAll - (totalAll * 0.10);
        console.log(`Money left to pay: ${totalAll.toFixed(2)} BGN.`);
        console.log(`The championship was not successful.`)
    }




}
swimmingChamp
((["3",
"400",
"5",
"70.6",
"15.0",
"100.6",
"300.59",
"250.9"]))
console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
swimmingChamp((["2",
"600",
"3",
"100.8",
"50.5",
"100.68",
"80.1"]))
console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")

swimmingChamp((["3",
    "500",
    "5",
    "100.9",
    "50.1",
    "100.5",
    "301.0",
    "80.0"]))