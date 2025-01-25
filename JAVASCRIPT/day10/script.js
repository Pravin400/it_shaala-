let prime = 5;
// console.log(prime)
let isprime = true;

for(let i = 2;i<prime;i++){
        if(prime%i == 0){
            isprime = false;
            break;
            // console.log("It is not prime number")
        }
}
// if(isprime == true){
//             console.log(prime,"is prime number ")
// }
// else{
//     console.log(prime," is not prime number")
// }
isprime ? console.log(prime,'is prime number ') :console.log(prime," is not prime number")
     


let num = 100;
let ans = true;
for(let i = 2;i<num;i++){
    ans = true;
    for(let j = 0;j < i/2;j++ ){
        if(num % j == 0){
            ans = false;
            
        }

    //     if(ans = true){
    //     console.log(num)
    // }
    }
    
    
}

