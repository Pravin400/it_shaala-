// let random = 222;
// function mam(){

//     if(true){
//         let num = 20;
//     }
   

// } 
// console.log(num)
// console.log(random)
// confirm("Please verify identity!!")

// let name =prompt("Enter your name : ")
// alert("How are you" + name)

// let user = prompt(name+" Enter your age : ")
// if(user >= 18){
//     alert("Your are eligibe to vote")
// }
// else{
//     alert("Your are not-eligibe to vote")
// }

// let num1 =+prompt("enter number1 ")
// let num2 =+prompt("enter number1 ")
// let sum = num1 + num2 ;
// alert("The addition of number1 and  number2 is : " + sum)

// let num1 =prompt("enter number1 ")
// let num2 =prompt("enter number1 ")
// we can add + sign after the variable for converting string to number
// let sum = +num1 + +num2 ;
// alert("The addition of number1 and  number2 is : " + sum)

// funtion calling by clicking the button 

// function something(){
//     // console.log("DO something")
//     let num1 =+prompt("enter number1 ")
//     let num2 =+prompt("enter number1 ")
//     let sum = num1 + num2 ;
//     alert("The addition of number1 and  number2 is : " + sum)
// }

// function hello(){
//     alert("Good Morning sir")
// }

// let no = 100;
//     let istrue = true 
//     for(let j = 2;j <= no;j++){
//         for(let i = 2;i<=j/2;i++){
//             if(j%i == 0){
//                 istrue = false
//                 break;
//             }
            
//         if(istrue){
//         console.log(j)

function prime(num){
    // let num = + prompt("Enter a number to check prime ")
    let istrue = true 
    for(let i = 2;i<=num/2;i++){
        if(num%i == 0){
            istrue = false
            break;
        }
        
     
    } if(istrue){
        console.log(num)
    }
    
}


for(let j = 2;j <= 100;j++){
    prime(j)
}