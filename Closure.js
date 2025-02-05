//Closer
//A closure is a function that has access to its own scope, the outer function’s variables, and global variables, even after the outer function has finished executing. This enables functions to “remember” their environment.
//A closure allows a function to access variables from its outer (enclosing) function even after that function has finished executing.


function outer(){
    var outervar="I am outer variable";
    function inner(){
        console.log(outervar+ " in inner function");
    }
    return inner();
}
outer()