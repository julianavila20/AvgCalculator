//to create a funtion that returns the AVG of any array
function avg(arr) {
    let total = 0;
    for (let num of arr) {
        total += num;
    }
    let res = total / arr.length;
    return res;
}
// this is another wat to complete the tastk using a more basic. for loop//
function average(arry) {
    let sum = 0;
    for (let i = 0; i < arry.length; i++){
        sum+=arry[i]
    }
    solution = sum / arry.length;
    return solution;
}

