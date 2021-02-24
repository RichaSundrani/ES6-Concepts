let letter = ['a', 'b', 'c', 'd', 'e'];

function* generator1() {
    let i = 0;
    yield letter[i];
    i++;
    yield letter[i];
    i++;
    yield letter[i];
    i++;
    yield letter[i];
    i++;
    yield letter[i];

};

let iter = generator1();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());