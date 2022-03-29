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

//                   // pro.then((message) => 
//                   // {
//                   // console.log('ok ' + message)
//                   // })
//                   // .catch((message) =>
//                   //  {
//                   //      console.log('ok ' + message)
//                   // });
// async function getData()
// {
//     const message = await pro; 
//     console.log(message);
// }
// getData();

//localStorage permanent if browser is close or open

let impArr = ['adrak','pyaz','bhindi'];

localStorage.setItem('Name','dhruvil');
localStorage.setItem('Name2','nirav');
localStorage.setItem('sabji',JSON.stringify(impArr));  // JSON.stringify take object and return string

localStorage.removeItem('Name2');
let valuee = localStorage.getItem('Name');
valuee = JSON.parse(localStorage.getItem('sabji'));  //  JSON.parse take string and return object
console.log(valuee);

// sessionStorage temp / until browser is open

sessionStorage.setItem('sessionName','dhruvil');
sessionStorage.setItem('sessionName2','nirav');
sessionStorage.setItem('sessionsabji',JSON.stringify(impArr)); 


// javascript dates

let now = new Date();
console.log(now.toDateString());

// Conditional (Ternary) Operator

let a1 = 100;
let b1;

b1 = "value is " + (a1 > 101 ? "true" : "false");
console.log(b1);
