function solve(arr){

    class Cat{
        constructor(name, age){
            this.name = name,
            this.age = age
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let info of arr){
        let [name, age] = info.split(" ");
        let newInfo = new Cat(name, age);
        newInfo.meow()
    }
}
solve(['Mellow 2', 'Tom 5'])