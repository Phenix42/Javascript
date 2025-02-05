//A callback is a function passed as an argument to another function, allowing the latter to execute the callback function at a specific time, often after completing an operation. 


function x(y){
 console.log("This is function x")
    y()
}

function z(){
console.log("This is function called  in function x")
}

x(z)