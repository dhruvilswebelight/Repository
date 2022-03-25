function fun1()
{
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            const error = true;
            if(!error){
                console.log('function: your promise has been resolved')
                resolve();
            }
            else{
                console.log('function: your promise has not been resolved')
                reject('sorry not full-filled');
            }
        },2000);
    })
}
fun1().then(function(){
    console.log("thanks for resolving");
}).catch(function(error) {
    console.log("reason: " + error);
})


