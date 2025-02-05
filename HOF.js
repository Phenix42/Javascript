//HOFs can accept functions as arguments and even return functions as results. 
//Higher order functions (HOFs) in JavaScript are functions that can do at least one of the following:

//Accept other functions as arguments.
//Return a function as a result.
const radius =[10,20,30,40,50];
const area =(radius)=>{
return Math.PI * radius ** 2;
}

const curcum =(radius) =>{
    return 2*Math.PI *radius;
}
const cal = (radius,logic)=>{
const output=[];
for(let i=0;i< radius.length;i++){
    output.push(logic(radius[i]));
}
return output;
}
console.log(cal(radius,area));
console.log(cal(radius,curcum));
