//The ‘this keyword’ in JavaScript refers to the object to which it belongs. Its value is determined by how a function is called, making it a dynamic reference. 
const person ={
    name:"Hussain",
    age:25,
    IsGood: true,
    cars:["BMW","AMG","HASS"],
    carCollection(){
        console.log(`${this.name} whoes age is ${this.age} has ${this.cars}`)
    }
}
 
person.carCollection();


/////////////////////////////////////////////////////////////////

function greet() {
    console.log('Hello, my name is ' + this.name);
}

const person2 = {
    name: 'Amit',
    sayHello: greet
};
const anotherPerson = {
    name: 'Jatin'
};

//Driver Code Starts{
greet(); 
person.sayHello(); 
greet.call(anotherPerson);