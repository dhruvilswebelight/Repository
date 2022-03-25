// ex 1

const language = ['js','php','pythone','java','c'];
let [top1,top2,top3,top4,top5] = language;
console.log("my fav lang is " + top1);

// ex 2

const X = ['js','php','pythone','java','c'];
console.log(X.length);
let [topp1,,,,toplast] = X;
console.log(`my fav lang is ${topp1} and my least fav is ${toplast}`);

// ex 3

const x = ['js','php','pythone','java','c'];
let y,z;
[y,z] = x;
console.log(`my fav lang is ${y} and my least fav is ${z}`);

