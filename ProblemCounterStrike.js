function solve(arr) {
    let hp = Number(arr.shift());
    let countRunds = 0;
    let endMsg = "End of battle";
    let noEnergy = false;
   
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === endMsg) {
        break;
      }
      let buff = Number(arr[i]);
      hp -= buff;
   
      if (hp < 0) {
        hp += buff;
        noEnergy = true;
        break;
      } else {
        countRunds++;
      }
   
      if (countRunds % 3 === 0) {
        hp += countRunds;
      }
    }
    if (noEnergy) {
      console.log(
        `Not enough energy! Game ends with ${countRunds} won battles and ${hp} energy`);
    } else {
      console.log(`Won battles: ${countRunds}. Energy left: ${hp}`);
    }
  }


// The initial energy is 100. The first distance is 10, 
// so we subtract 10 from 100, and we consider this a won battle. 
// We are left with 90 energy. Next distance – 10, and 80 energy left.
// Next distance – 10, 3 won battles and 70 energy, 
// but since we have 3 won battles, 
// we increase the energy with the current count of won battles, 
// in this case – 3, and it becomes 73.
// The last distance we receive – 10 is unreachable since we have 0 energy, 
// so we print the appropriate message, and the program ends.

solve((["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"]))

solve((["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"]))
