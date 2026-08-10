function solve(data) {
    let regex = /([#]|[|])(?<name>[A-Za-z\s]+)\1(?<date>\d{2}[\/]\d{2}[\/]\d{2})\1(?<calories>[0-9]{1,5})\1/g
    let food = 0;
    let totalCalories = 0;
    let text = data[0];
    let match = regex.exec(text);
    let buff = "";

    while (match) {
        let name = match.groups["name"];
        let date = match.groups["date"];
        let calories = Number(match.groups["calories"]);
        totalCalories += calories;
        buff += `Item: ${name}, Best before: ${date}, Nutrition: ${calories}\n`
        match = regex.exec(text);
    }
    food = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${food} days!`)
    console.log(buff)
}
solve([

    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'

])