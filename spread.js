// ex 1

function sum(a,b,c)
{
    console.log(a+b+c);
}

var arrVal = [5,5,3];
console.log(...arrVal);
sum(...arrVal);


// ex 2
let a = [1,2,3];
let b = [4,5,6];
let c = [7,8,9];

a = [...a,...b,...c];
console.log(a);

// ex 3
let A = [1,2,3];
let C = [6,7,8];
let B = [...A,4,5,...C,9];

console.log(B);
console.log(A);

