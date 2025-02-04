// to print the array one by ione 
// const number = [10,20,30,40,50,60]
// for(let i = 0;i<number.length;i++){
//     console.log(number[i])
// }

// to print the sum of the array elemets 
const number = [10,20,30,40,50,60]
let num = 0;
console.log("Array elements are : ")
for(let i = 0;i<number.length;i++){
    
    console.log(number[i])
    num += number[i]
   
}
console.log("The sum of array elements are : ",num)// average
console.log("The sum of array elements are :",num/number.length)


// console.log(num)

// select from array as a random variable 

let random = [10,20,30,40,50,60]
let random1 = Math.floor(Math.random() * random.length);
console.log(random[random1])


//rock paper scissorr game make 