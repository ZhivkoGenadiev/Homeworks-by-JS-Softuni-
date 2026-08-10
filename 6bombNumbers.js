function solve(sequence, bombNumber) {
    let specialBombNumber = bombNumber[0];
    let occurence = bombNumber[1];
   
    while (sequence.indexOf(specialBombNumber) !== -1) {
        let indexOfBombNumber = sequence.indexOf(specialBombNumber);
        let bombPower = (occurence * 2) + 1;
        let startIndex = indexOfBombNumber - occurence;
 
        if(startIndex < 0) {
            bombPower += startIndex;
            startIndex = 0;  
        }
           sequence.splice(startIndex, bombPower);
        
    }
    return sequence.reduce((sum, element) => sum += element , 0);
}
