
let count = 0;
let primenum = 100;
for(let i = 2;i<=primenum;i++){
    let isprime = true
    for(let j =2;j<=i/2;j++){
        if(i%j==0){
            isprime = false;
            break;
        }
        

    }
    if(isprime){
                count++;
            }
}
console.log("The Count of 1 to ",primenum,"Numbers Count ",count)
    