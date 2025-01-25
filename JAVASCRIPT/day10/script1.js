// addition of 1 to 10
// const startTime = Date.now();
// let add = 150000000;
// let ans= 0 ;
// let sum = (add * (add +1))/2;
// // formula for sum between 1-10
// for(let i = 0 ;i <= add ; i++){
    
//     ans = ans + i;
   
// }
// const endTime = Date.now();
//  console.log(sum);
//  console.log(endTime - startTime)


// factorial

// let factorial = 5
// let fact = 1;

// for(let i = 1 ;i <= factorial ; i++){
//     fact = fact * i;
// }
// console.log(fact,"it is factorial of ",factorial);

let num = 6130;
let div = 1;

for (let i = 0;i < 4; i++){
    div = num % 10;
    console.log(div);
    num = Math.floor(num / 10)

}
let givenNum = 1233;
let sumofDigits = 0;
while(givenNum !== 0){
    const digit = givenNum % 10;
    sumofDigits = sumofDigits + digit;
    givenNum = Math.floor(givenNum / 10);
}

console.log(sumofDigits)


// QUESTION TO BE SOLVE 
// calculate number of digit in given number 
let number = 123;
let digit = 100;
let answer = 1;
for (let i = 0;i < 3; i++){
    answer = number % 10;
    
    console.log(answer);
    num = Math.floor(num / 10)

}
// find reverse of given number 