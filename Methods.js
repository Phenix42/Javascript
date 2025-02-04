const array = [10,11,30,18,22,16,100,-42];
const array2 = ["Apple","ball","cat","dog"]

console.log(array);

//To String:- Returns a string with aray values seprated by commas
console.log(array2.toString());

//Joins:- Returns a new strings by concatenting all of the lements in an array
console.log( array2.join());
console.log( array2.join(" & "));

//pop(): Removes all the last methods
console.log(array.pop());


//push(): Adds new items in the end of the array
console.log(array.push("array2"))
console.log(array);


//Shift(): Removes first elements and returns it.
console.log(array2.shift());


//unshift(): Adds elements to begning and return new array length
console.log(array.unshift(30,18))
console.log(array)

//Delete(operator)- delete the item in that index item
 delete array[3];


 //splice() adds and/or removes array elements. This metho overwrites the orginal array
 //  array.splice(index,howmany,item1,item2,.......,item X);
array.splice()


 //Slice() slice out piece from an array.It creates new array
//array.slice(Start,end);
console.log(array.slice(2,3));

