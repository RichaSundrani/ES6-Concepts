function add(n1, n2, n3) {
    return n1 + n2 + n3;
};

let nums = [2, 3, 4];

// Spread operator 
console.log(add(...nums));

// Rest operator
function getTotal(...args) {
    return args.reduce((total, arg) => { return total * arg }, 1);
};

console.log(getTotal(2, 3, 4));