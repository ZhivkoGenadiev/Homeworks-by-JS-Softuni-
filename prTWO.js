function solve(arr) {
    let targets = arr.shift().split('|').map(Number);
 
    let index = 0;
    let info = arr[index];
    index++
    let points = 0;
    while (info !== 'Game over') {
       
        
 
        info = info.split(' ');
        
        let position = info[1];
        if(position[0] === 'Reverse') {
            targets = targets.reverse();
            console.log(targets);
            continue;
        }
        position = position.split('@');
        if (position[0] === 'Left') {
            let startIndex = Number(position[1]);
            let length = Number(position[2]);
            let index = 0;
            if (startIndex >= 0 || startIndex < targets.length) {
 
                if ((startIndex - length) < 0) {
                    index = targets.length - length;
                } else {
                    index = startIndex - length;
                }
                points += 5
                if (targets[index] < 5) {
                    targets[index] = 0
                } else {
                    targets[index] -= 5;
                }
            }
        } else if (position[0] === 'Right') {
            let startIndex = Number(position[1]);
            let length = Number(position[2]);
            let index = 0;
            if (startIndex >= 0 || startIndex < targets.length) {
 
                if ((startIndex + length) > targets.length) {
                    index = (0 + length) - 1;
                } else {
                    index = startIndex + length;
                }
            }
            points += 5
            if (targets[index] < 5) {
                targets[index] = 0
            } else {
                targets[index] -= 5;
            }
 
        } 
        
        info = arr[index];
        index++
    console.log(targets.join(' - '));

    }
}

solve(["10|10|10|10|10",
"Shoot Left@0@2",
"Shoot Right@4@5",
"Shoot Right@6@5",
"Reverse",
"Game over"])