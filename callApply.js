const normalPerson = {
    firstName: "Rahim",
    lastName: "uddin",
    getFullName: function () {
        console.log(this.firstName, this.lastName)
    },
    salary: 2200,
    chargeBill: function (amount) {
        this.salary = this.salary - amount
    }
}


// normalPerson.chargeBill(500)
// console.log(normalPerson.salary)

// console.log(normalPerson.getFullName())



const heroPerson = {
    firstName: "Hero",
    lastName: "Balam",
    salary: 25000,
}

const friendlyPerson = {
    firstName: "Hero",
    lastName: "Golam",
    salary: 25000,
}
// normalPerson.chargeBill();

// const heroBillcharge = normalPerson.chargeBill.bind(friendlyPerson)
// heroBillcharge(2000);
// heroBillcharge(5000);

// console.log(friendlyPerson.salary)




// const alom = normalPerson.chargeBill.bind(heroPerson)
// alom(10000);
// console.log(heroPerson.salary)





normalPerson.chargeBill.call(heroPerson, 900);
normalPerson.chargeBill.call(heroPerson, 3100);


console.log(heroPerson.salary)



// যদি অবজেক্ট এর মধ্যে একটি মেথড থাকে সেটি যদি ধার করে অন্য একটি জায়গায় ব্যবহার করতে চায় তাহলে সেখানে { call , apply , blind } ব্যবহার হবে