// Regular function 

// var user = {
//     name: 'Richard',
//     location: "fayetteville",
//     sayMessage: function () {
//         console.log(`${this.name} lives in ${this.location}`);
//         var that = this;
//         var fullName = function () {
//             console.log(`Full name is ${this.name} Parkar`);
//             console.log(`Full name is ${that.name} Parkar`);
//         };
//         fullName();
//     }
// };

// user.sayMessage();
// user.sayMessage.fullName(); // user.sayMessage.fullName is not a function


// ES6 

const user1 = {
    name: 'Richard',
    location: 'Fayetteville',
    sayMessage: function () {
        console.log(`${this.name} lives in ${this.location}`);
        const fullName = () => {
            console.log(`Full name is ${this.name} Parkar`);
        };
        fullName();
    }
};

user1.sayMessage();

console.log("Hi");