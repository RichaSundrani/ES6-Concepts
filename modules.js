
export default class User {
    constructor(name, age) {
        this.name = name,
            this.age = age
    }
}

function printName(user) {
    console.log(`users name is ${user.name}`)
};

function printAge(user) {
    console.log(`user is ${user.age} years old`)
        ;
}


module.exports = { printAge, printName };

// all these methods that are exported from this file can be imported and used by any other file in the project 