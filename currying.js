
//Currying is the technique of converting a function that takes
//multiple arguments into a sequence of functions that each take
//a single argument.



function x(a){
    return function(b){
        return function(c){
            console.log(a+b+c);
        }
    }
}

x(2)(3)(1);