function solve (arr){

    let newArr = arr.filter((x, i) => i % 2 !== 0).map(x => x * 2).reverse();
        console.log(newArr.join(' '))

}
solve([10, 15, 20, 25])