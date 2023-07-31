const age = 9;

var type = (age >= 18) ? "youre adult" : (age <= 10) ? "youre child" : 'youre young now'; //[ with Ternary operator ]

console.log(type);


// if (age >= 18) {                   // [// with out ternary operator]
//     type = "youre Adult now"
// }
// else if (age <= 10) {
//     type = "you're child now "
// } else {
//     type = "you're young now"
// }