function solve(str, num){
    let result = copySolve(str, num);
    return result;

    function copySolve(str, num){
        return str.repeat(num);
    }
}
console.log(solve('abc' , 3))