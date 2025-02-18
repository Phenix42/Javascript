// Memoization is an optimization technique used to speed up
// function execution by caching the results of expensive function
// calls and returning the cached result when the same inputs
// occur again.

//In programming, memoization is an optimization technique that makes applications more efficient and hence faster. It does this by storing computation results in cache, and retrieving that same information from the cache the next time it's needed instead of computing it again.

const cache ={}
const cal =(a,b,c)=>{
let result=a*b+c*a+b-a*c*b;
console.log(result);
return result;
}

const memo= (a,b,c)=>{

    const key = a+":"+b+":"+c;
    if(!cache[key]){
       const result= cal(a,b,c)
       cache[key]=result;
    }
    else{
        return cache[key]
    }

}

cal(100,200,300)

