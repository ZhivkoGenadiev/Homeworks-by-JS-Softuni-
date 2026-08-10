function battleManager (input){
    let person = {}
    for (let i = 0; i < input.length; i++){
        let tokens = input[i].split(":");
        let command = tokens[0];
        if (command === "Results"){
            break;
        }else if(command === "Add"){
            let personName = tokens[1];
            let health = Number (tokens[2]);
            let energy = Number(tokens[3]);
            person[personName] = {
                health:health,
                energy:energy,
            }
            if(person[personName] === true){
                person[personName].health += health
            }
            
        }else if (command === "Attack"){
            let attackerName =  tokens[1];
            let defenderName = tokens[2];
            let damage = Number(tokens[3]);
            if (person[defenderName]  && person[attackerName] ){
                person[defenderName].health -= damage;
                person[attackerName].energy -= 1;
                
            }else{
                continue;
            }
            if(person[defenderName].health <= 0 ){
                delete person[defenderName];
                console.log(`${defenderName} was disqualified!`);
            }else if (person[attackerName].energy <= 0){
                delete person[attackerName]
                console.log(`${attackerName} was disqualified!`);
            }
        }else if(command === "Delete"){
            let deletedName = tokens[1];
            if (deletedName === "All"){
                delete person
            }else{
                delete person[deletedName];
            }
        }else{
            continue;
        }
    }


    console.log(`People count: ${Object.keys(person).length}`);

    for(let personName in person){
        console.log(`${personName} - ${person[personName].health} - ${person[personName].energy}`)
    }

    
}

battleManager((["Add:Bonnie:3000:5",
"Add:Kent:10000:10",
"Add:Johny:4000:10",
"Attack:Johny:Bonnie:400",
"Add:Johny:3000:5",
"Add:Peter:7000:1",
"Delete:Kent",
"Results"]))

