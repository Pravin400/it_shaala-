// alert("Hello Battchoo")
console.log("Increment Decrement Operator")
console.log("Pre-Increment Operator")

let a = 10;
console.log(++a);
console.log(a);

console.log("Post-Increment Operator")

let b = 10;
console.log(b++);
console.log(b);

console.log("Pre-Decrement Operator")

let c = 10;
console.log(++c);
console.log(c);

console.log("Post-Decrement Operator")

let d = 10;
console.log(b++);
console.log(b);

console.log("constant variable cannot be reassign")
const g = 10;
console.log("console.log(g++)")

// INCREMENT BY C IF WE WRITE THIS IS IN THAT FORMAT
console.log("+=,-=,*=,/=,%=,**=")
let num = 10;
num **= 2;
console.log(num)

// ternary operator

console.log("Ternary operator")

const num1 = 100;
const num2 = 20;
num1<num2
? console.log("num1 is less than num2")
: console.log("num1 is not-less than num2");

console.log("Conversion of data type")

let x = "10";
x = +x;
console.log(x)

console.log("checkinng the given numbe is greater than 100 or not")
let m = 10;
m >=100 
? console.log("number is greater than 100")
: console.log("number is not-greater than 100");

let no = 34;
no % 3 === 0 
? console.log("number is divisible by 3")
: console.log("number is not-divisible by 3");

let even = 10;
even % 2 === 0 
? console.log("number is even")
: console.log("number is odd ");

if(even % 2 == 0){
    console.log("number is even ")
}
else{
    console.log("number is less")

}

// prompt is use to give input from page 
let num5 = prompt("Enter your number");

num5 % 2 == 0 ? console.log("Number is even") : console.log("number is odd");
