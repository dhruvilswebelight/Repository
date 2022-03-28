// ex 1 map
// const numbers = [1, 2, 3, 4];
// const newArr = numbers.map(myFunction)

// function myFunction(num) {
//   return num * 10;
// }
// console.log(newArr);

// ex  map

// const numbers = [1, 2, 3, 4];

// const s = numbers.map(function(x){
//      return x==3;
// });
// console.log(s.includes());


// ex 2 filter

// const numbers = [1, 2, 3, 4];
// const newArr = numbers.filter(myFunction)

// function myFunction(num) {
//      if(num==3){
//           return true;
//      }else{
//           return false;
//      }

// }
// console.log(newArr);



// ex 3 forEach

// let k = 0;
// const numbers = [1, 2, 3, 4];
// numbers.forEach(myFunction);

// function myFunction(item) 
// {
//   k += item;
// }
// console.log(k);

// ex 4 forEach

// const number = [1, 2, 3, 4];
// const newAr = number.forEach(myFunction)

// function myFunction(num) 
// {
//   return num * 10;
// }
// console.log(newAr);

// ex 5 reduce left

// const numbers = [1, 2, 3, 4];
// const newArr = numbers.reduce(myFunction);
// function myFunction(total,num)
//  {
//     return total - num;
//   }
//   console.log(newArr);

// ex 6 reduceRight

// const numbers = [1, 2, 3, 4];
// const newArr = numbers.reduceRight(myFunction);
// function myFunction(total,num)
//  {
//     return total - num;
//   }
//   console.log(newArr);

// ex 7 sorting

// const numbers = [3, 10, 4, 2];
// const newArr = numbers.sort(compareFunction);
// function compareFunction(a,b)
// {
//      return a - b;
// }

//   console.log(newArr);

// ex 8 sorting

// let animals = [
//     'cat', 'dog', 'elephant', 'bee', 'ant'
// ];
// animals.sort();

// console.log(animals);

// ex 9 promise

// let myPromise = new Promise(function(myResolve, myReject){
//      setTimeout(function() { myResolve(" my name is dhruvil "); }, 2000);
// });
   
//    myPromise.then(function(value)
//     {
//      console.log(value);
//    });

// ex 10 promise

// let pro = new Promise((resolve,reject) => 
// {
//         let a = 4;
//         if(a == 4)
//         {
//              resolve('success')
//         }
//          else{
//                reject('failed')
//              }
//  });

// pro.then((message) => 
// {
// console.log('ok ' + message)
// })
// .catch((message) =>
//  {
//      console.log('ok ' + message)
// });


// const myArray = [1,2,3,4,5,6,7,8]
// if(myArray.includes(2)){console.log("true")}
// else{console.log("False")}


const myArray = [1,2,3,4,5,6,7,8];
let value = "False";
myArray.map(Number => Number === 7 ? value = "True" : value == "True" ? value : value = "False")
console.log(value);



     


   