// Hoisting
//Hoisting refers to the behaviour where JavaScript moves the declarations of variables, functions, and classes to the top of their scope during the compilation phase. This can sometimes lead to surprising results, especially when using var, let, const, or function expressions.
//Hoisting applies to variable and function declarations.
//Initializations are not hoisted, they are only declarations.
//‘var’ variables are hoisted with undefined, while ‘let’ and ‘const’ are hoisted but remain in the Temporal Dead Zone until initialized.

console.log(a); // undefined
var a = 5;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;

greet(); // "Hello, world!"
function greet() {
    console.log("Hello, world!");
}

function test() {
    console.log(x); // ReferenceError: Cannot access 'x' before initialization
    let x = 50;
}
test();