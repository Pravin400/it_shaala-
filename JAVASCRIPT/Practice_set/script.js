// // question 1
// // Create a variable of type string and try to add a number to it
// console.log("Practice one")
// let str = "Harry ";
// let num = 6 ; 
// console.log(str + num)

// // question 2
// //use typeof operator to find the datatype of the string in last question 

// console.log(typeof str)
// console.log(typeof (str+num))

// // question 3
// // Create a constant object in javascript. Can you change it to hold a number letter
// const obj = {
//     name : "nanu",
//     age : 35,
//     address : "PMC"

// }
// //  obj = 20; not able to change it so it is not possible
// console.log(obj)


// // question 4
// //Try to add a new.row to the const object in a problem three where you able to do it.

// obj.pincode = 411033;
// // we able to replace/update the name 
// obj['name'] = "Ganesh"  ;
// console.log(obj)

// // question 5
// // Write a javascript program to create a word meaning directory of five words.

// const dictionary = {
//     appreciate:" recognize the full worth of. " ,
//     ataraxta : "a state of freedom from emotional disturbance and anxiety" ,
//     yakka: "work, especially hard work. "
// }
// console.log(dictionary.appreciate)
// console.log(dictionary['yakka'])


// practice 2

console.log("Practice 2")
let age = prompt("Enter the your Age : ")
let answer = "";
if (age >= 18){
    answer = "You are eligible to drive the vehicle.";
}
else{
    answer = "You are not-eligible to drive the vehicle.";
   
}

document.getElementById("result").textContent = answer;
