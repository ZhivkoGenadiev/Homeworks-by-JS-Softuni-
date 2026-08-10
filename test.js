function solve(data) {
    let num = data.shift();

    let regex = /(U\$)(?<userName>[A-Z]{1}[a-z]{2,})\1(P@\$)(?<pass>[A-Za-z]{5,}\d{1,})\3/
    let count = 0;

    for (let i = 0; i < num; i++) {
        let match = regex.exec(data[i]);
        if (match != null) {
            let userName = match.groups.userName;
            let pass = match.groups.pass;
            count++;
            console.log(`Registration was successful`);
            console.log(`Username: ${userName}, Password: ${pass}`);
            console.log(`Successful registrations: ${count}`)
        } else {
            console.log(`Invlaid username or password`);
            console.log(`Successful registrations: ${count}`);


        }
    }
}
solve()