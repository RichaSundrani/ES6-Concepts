// regular function 

// function sum(a, b) {
//     return a + b;
// }

// function isPositive(number) {
//     return number >= 0;
// }
// function randomNumber(number) {
//     return number >= 0;
// }


function myFunction() {
    console.log(this);
}

// Simple invocation
// myFunction(); // logs global object (window)

const myObject = {
    method() {
        console.log(this);
    }
};
// Method invocation
// myObject.method(); // logs myObject

function myFunction() {
    console.log(this);
}

const myContext = { value: 'A' };

// myFunction.call(myContext);  // logs { value: 'A' }
// myFunction.apply(myContext); // logs { value: 'A' }

function MyFunction() {
    console.log(this);
}

// new MyFunction(); // logs an instance of MyFunction

// Arrow functions 

const myObject1 = {
    myMethod(items) {
        console.log(this); // logs myObject1
        const callback = () => {
            console.log(this); // logs myObject1
        };
        items.forEach(callback);
    }
};

// myObject1.myMethod([1, 2, 3]);


// function Car(color) {
//     this.color = color;
// }

// const redCar = new Car('red');
// redCar instanceof Car; // => true
// console.log(redCar instanceof Car);

// const Car = (color) => {
//     this.color = color;
// };

// const redCar = new Car('red'); // TypeError: Car is not a constructor 


// ----------------- 3. arguments object -----------------------
// function myFunction() {
//     console.log(arguments);
// }

// myFunction('a', 'b'); // logs { 0: 'a', 1: 'b'}

// function myRegularFunction() {
//     const myArrowFunction = () => {
//         console.log(arguments);
//     }

//     myArrowFunction('c', 'd');
// }

// myRegularFunction('a', 'b'); // logs { 0: 'a', 1: 'b' }


// function myRegularFunction() {
//     const myArrowFunction = (...args) => {
//         console.log(args);
//     }

//     myArrowFunction('c', 'd');
// }

// myRegularFunction('a', 'b'); // logs ['c', 'd']


console.log(this);