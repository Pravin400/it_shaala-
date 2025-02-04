
// 1. Write a function that takes an integer minutes and converts it to seconds.

// let minutes = 30;
// let conversion = minutes * 60;
// console.log(minutes ,"Minutes Are Converted Into ",conversion,"Seconds.")

//2. Create a function that takes a number as an argument, increments the number by +1 and returns the result.

// function increment (num){
//     num ++;
//     return num*20;
// }
// let num1 = 10;
// let c = increment(num1)
// console.log(c);
// console.log(increment(num1));

// 3. Write a function that takes the base and height of a triangle and return its area.

// let base = 5;
// let height = 10;
// let area = 1/2 * base * height;
// console.log("The Area of the Triangle is ",area);

// 4. Create a function that takes an array and returns the first element.

// let arr1 = [1,2,3,4,5,6]
// function array(arr){
//     return arr[0];
// }
// console.log(array(arr1))

// 5. Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

//  let n1 = 10;
//  let n2 = 50;
// if(n1+n2 < 100){
//     console.log(true )
// }
// else{
//     console.log(false)

// }

// 6. Write a function that checks whether a number is even or odd.

// let num1 = 203;
// if(num1 % 2 == 0){
//     console.log("the given number is even")
// }
// else{
//     console.log("the given number is odd")

// }

// 

// Sum of the digit

// let num = 3133;
// let length = num.toString().length;
// // console.log(length )
// let samp = 0;

// console.log("The given number is ",num )
// for(let i = 0;i<length;i++){
//     samp += Math.floor(num % 10);
//     num = num/10;

// }
// console.log("the sum of that number is : ",samp )


// reversse stream

let num1 = 466;
let length1 = Math.floor(Math.log10(num1)) + 1;
console.log(length1 )
let reverse = "";

for(let i = 0;i<length1;i++){
    let div = Math.floor(num1 % 10);
    reverse += div;
    num1 = num1/10;
}
console.log(reverse)



// palindrome


// let number = 121
// let a = number;
// let b = number;
// let rad ;
// let rad1 ;
// let istrue = true;
// let length2 = a.toString().length;
// let length3 = b.toString().length;

// if(length2 != length3){
//     istrue = false;
// }
// else{

//     external:for(let i = 0;i<length2;i++){
//         rad = Math.floor(a % 10);  
//         rad1 = Math.floor(b % 10);
            
//         if(rad != rad1){
//                 istrue = false
//                 break external;
//         }
//         a = Math.floor(a/10)
//         b = Math.floor(b/10)
        
//     }
// }
// istrue
// ?console.log("it is palindrome")
// :console.log("it is not palindrome")
