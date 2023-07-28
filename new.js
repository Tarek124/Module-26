class Person {
    constructor(firstName, lastname, salary) {
        this.firstName = firstName;
        this.lastname = lastname;
        this.salary = salary;
    }
}

const heroPerson = new Person("Hero", "Balam", 42333)
console.log(heroPerson)

const friendlyPerson = new Person("Tarek", "Abdullah", 2324)
const fullName = friendlyPerson.firstName + " " + friendlyPerson.lastname;

function add(a, b) {
    return a + b;
}

console.log(fullName)
console.log(friendlyPerson)
