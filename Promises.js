//A promise is aobject represents the eventual completetion(or failure) of an Asyn operation and its resulting value.
//Promise can be one oif these states
//Pending:- intial state neither fulflied or rejected
//fulfilled: Operation completed sucesfully
//Rejected: operation failed

const p = new Promise((resolve,reject)=>{
    let val = true;
    if(val==true){
    setTimeout(()=>{
    resolve("resolver");
    },5000)}
    else
    reject("error")
})

p.then((m)=>console.log(m)).catch((m)=>console.log(m));



//Promise Methods
//Promise.all()
//The Promise.all() method accepts an array of promises and when all the promises are resolved then methods will pass the messages returned by promises

const p0=Promise.resolve("done")
const p1=Promise.resolve("fulfilled");
const p2=Promise.reject("abort");
const p3=Promise.resolve(200);

Promise.all([p1,p2,p3]).then((res)=>console.log(res)).catch((er)=>{console.log(er)})


//Promise.allSettled():-When one of the Promises got rejected the method will store the rejected result and cont processing other promises.

Promise.allSettled([p1,p2,p3]).then(res=>console.log(res)).catch(er => console.log(err));

//Promise.any():-returns only single resolve value function first

Promise.any([p0,p1,p2,p3]).then(res=>console.log(res)).catch(err=>console.log(err))

//Promise.race():-
console.log("race")
Promise.race([p1,p2,p3]).then(res=>console.log(res)).catch(err => console.log(err))
