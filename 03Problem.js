function solve(data) {

    class Flowers {
        constructor(username, likes, comment, countUsers) {
            this.username = username;
            this.likes = Number(likes);
            this.comment = Number(comment);
            this.countUsers = Number(countUsers);
        }

        newFollower(username) {
            if (username.includes(this.username)) {
                this.username = username;
            }
        }

        like(username, count) {
            if (username.includes(this.username)) {
                this.likes += count;
            } else {
                this.username = username;
                this.likes += count
            }
        }

        comments(username, count) {
            if (username.includes(this.username)) {
                this.comment += count;
            }
        }

        block(username) {
            if (username.includes(this.username)) {
                this.likes = 0;
                this.comment = 0;
            } else {
                console.log(`${username} doesn't exist.`)
            }

        }

    }
    let map = {};
    for (let line of data) {
        let command = line.split(": ");
        let comm = command[0];
        // console.log(command)

        let username = command[1];
        let likes = 0;
        let comment = 0;

        let count = 0
        let flower = new Flowers(username, likes, comment, count);
        map[username] = flower;



        if (comm == "Like") {
            let username = command[1];
            let flower = map[username];
            let count = Number(command[2]);
            flower.like(username, count)
        }


        if (comm === "New follower") {
            let username = command[1];
            let flower = map[username];
            flower.newFollower(username)
        }

        if (comm == "Comment") {
            let count = 0;
            let username = command[1];
            count++;
            flower.comments(username, count);

        }

        if (comm == "Blocked") {
            let username = command[1];
            flower.block(username);
        }

        if (comm === "Log out") {

        }


    }

}








solve((["Blocked: Amy",
    "Comment: Amy",
    "New follower: Amy",
    "Like: Tom: 5",
    "Like: Ellie: 5",
    "Log out"]))