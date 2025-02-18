//https://medium.com/@mandeepkaur1/creating-objects-in-javascript-a896e6cfa6eb

// 1. Object Literals.
// program to create JavaScript object using object literal
const person1 = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function() {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
};

console.log(typeof person1); // object

// accessing the object value
console.log(person1.name);
console.log(person1.hobbies[0]);
person.greet();
console.log(person1.score.maths);






// 2. Constructor Functions.
// program to create JavaScript object using instance of an object

function Person() {
    this.name = 'John',
    this.age = 20,
    this.hobbies = ['reading', 'games', 'coding'],
    this.greet = function() {
        console.log('Hello everyone.');
    },
    this.score = {
        maths: 90,
        science: 80
    }

}

const person2 = new Person();

console.log(typeof person2); // object

// accessing the object value
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);




// program to create JavaScript object using instance of an object
const person = new Object ( { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function() {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
});

console.log(typeof person); // object

// accessing the object value
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);



// 4. Object.create Method.
let Student = {
    name: "Lisa",
    age: 24,
    marks: 78.9,
    display() {
      console.log("Name:", this.name);
    }
  };
  
  // create object from Student prototype
  let std1 = Object.create(Student);
  
  std1.name = "Sheeran";
  std1.display();
  
  // Output: Name: Sheeran