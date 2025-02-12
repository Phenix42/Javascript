//Generators are functions that can be paused and resumed,
//allowing for more flexible control flow.


function* app(){
    console.log("a")
    yield 1;
    console.log("b")
    yield 2;
    console.log("c")
    yield 3;
}

const gen = app();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());