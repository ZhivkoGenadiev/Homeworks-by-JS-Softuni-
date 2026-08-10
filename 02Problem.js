function solve(data) {
    let countTry = Number(data.shift());

    let regex = /(.+)>(?<one>[0-9]{3})\|(?<two>[a-z]{3})\|(?<three>[A-Z]{3})\|(?<four>[^><]{3})<\1/

    for (let i = 0; i < countTry; i++) {
        let index = data[i];

        let match = regex.exec(index);
        if (match !== null) {
            let one = match.groups.one;
            let two = match.groups.two;
            let three = match.groups.three;
            let four = match.groups.four;
            let pass = one + two + three + four
            console.log(`Password: ${pass}`)
        } else {

            console.log("Try another password!")
        }
    }
}



solve((["5",
    "aa>111|mqu|BAU|mqu<aa",
    "()>111!aaa!AAA!^&*<()",
    "o>088|abc|AAA|***<o",
    "asd>asd|asd|ASD|asd<asd",
    "*>088|zzzz|ZzZ|123<*"]))