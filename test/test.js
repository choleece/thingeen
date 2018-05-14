const test = (a) => (b, c) => {
    console.log(`a: ${a}; b: ${b}; c: ${c}`)
};

test(1)(2, 3);

const test1 = (b, c) => {
    console.log(`b: ${b}; c: ${c}`)
};

test1(2, 3);

let a = [1, 2, 4].reduce((total, num) => {return total + num}, 0);
console.log(a)