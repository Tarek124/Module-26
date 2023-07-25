const normalPerson = {
    firstName: "Rahim",
    lastName: "uddin",
    getFullName: function () {
        console.log(this.firstName, this.lastName)
    }
}

console.log(normalPerson.getFullName())