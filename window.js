var name = "kuddus";  //(Name is Global scope)//
function add(num1, num2) {
    var result = num1 + num2  //(Result is local scope)//
    console.log("Result from inside " + result)
    function double(num) {
        return num * 2
    }
    var total = double(result)
    return total;
}
var sum = add(12, 33);
console.log(sum)
console.log("result from outside " + result)
console.log("result outside " + result)
