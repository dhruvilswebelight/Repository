// ex 1

// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 3 * 100);
// });

// p.then((result) => {
//     console.log(result); // 10
//     return result * 2;
// }).then((result) => {
//     console.log(result); // 20
//     return result * 3;
// }).then((result) => {
//     console.log(result); // 60
//     return result * 4;
// });

// ex 2

// let m = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 3 * 100);
// });

// m.then((result) => {
//     console.log(result); // 10
//     return result * 2;
// })

// m.then((result) => {
//     console.log(result); // 10
//     return result * 3;
// })

// m.then((result) => {
//     console.log(result); // 10
//     return result * 4;
// });


