//  ARRAYS

// array can be defined using [] (Square Bracket)

let names = ["srushti","salman","Vedant"]
console.log(typeof names)
// using indexing we can print the element according to number 
// array index start with 0 to n 
console.log( names[0])
console.log( names[1])
console.log( names[2])
//when we not write index prints all of the array element 
console.log( names);

// array length

console.log( names.length);

// replacing the specific array element using indexing 

names[1] = "pravin";
// to add the elements in the array 

names[3] = "ganesh";
// using student.length we can add the element into next position 
// otherwise we need to remember or write the last index
names[names.length] = "vhdm";

console.log(names)

// using push we can push the next element into the array
// using allof this adding method we add element at the last of the array

names.push("salman")
console.log(names)

// using the pop we can delete the last array element 
names.pop()
console.log(names)


// unshift is use to add the element at start of the array 
names.unshift("salman")
console.log(names)
// shift is ues to remove the elemet from the start 
names.shift("salman")
console.log(names)

// splice is use to delete the specific index 

// names.splice(startIndex,deleteCount)

names.splice(2,1)
console.log(names)
// index is a start of the delete and count is after start how many want to delete

names.splice(2,2)
console.log(names)
// splice is use to add or delete the element  
names.splice(2,2,"salman",88,"salman")
console.log(names)

// 
// holes can made in that 
names[10] = "good"
console.log(names)

// const we can not able to reassign
// const we can able to change 
// reassignment gives error 
// const num = "salman";
// num = "salman-khan";
// so array we can able to change like 
// const array = ["salman","mangesh"]
// array.push("salman")
// console.log(array)