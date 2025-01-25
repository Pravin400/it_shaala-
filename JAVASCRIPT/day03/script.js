// this not allows the 
// "use strict";


// x = 1
// y = 2
// c = x+y
// console.log(c)

let a =9999999999999999999999999999n;
let b =999;
let c =false;
let d = true;

const salmanBhai = "Salman Bhau";
const salman = 'salman';
const salu = `salman`;



// checkes the type of variable
// big int
console.log(typeof a);
// number
console.log(typeof b);
// boolean
console.log(typeof c);
console.log(typeof d);

// string
console.log(typeof salmanBhai);
console.log(typeof salman);
console.log(typeof salu);
let bhau ;
// 
// undefined
console.log(bhau)
console.log(typeof bhau)
// typeof bhau is undefined so it is string 
// and then again type of that undefined is string as a output 
console.log(typeof typeof bhau)

let state=null;
// type of null is object it is a bug/error(when we repair this chances to occur other error )
console.log(typeof state);

// object

let m = { 
    name : "ramesh",
    lastnm: "m",
    address : null,  
    age : 45  
};
console.log(typeof m)
console.log(m)

// symbol 
// it is use for unique value

let y = 10;
let x = 10;
console.log(y == x)

let unique = Symbol("unique value");
let unique1 = Symbol("unique value");
console.log( unique == unique1)






