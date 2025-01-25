
// Sum of the digit

let num = 3133;
let length = num.toString().length;
// console.log(length )
let samp = 0;

console.log("The given number is ",num )
for(let i = 0;i<length;i++){
    samp += Math.floor(num % 10);
    num = num/10;

}
console.log("the sum of that number is : ",samp )

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
let number = 121
let a = number;
let b = number;
let rad ;
let rad1 ;
let istrue = true;
let length2 = a.toString().length;
let length3 = b.toString().length;

if(length2 != length3){
    istrue = false;
}
else{

    external:for(let i = 0;i<length2;i++){
        rad = Math.floor(a % 10);  
        rad1 = Math.floor(b % 10);
            
        if(rad != rad1){
                istrue = false
                break external;
        }
        a = Math.floor(a/10)
        b = Math.floor(b/10)
        
    }
}
istrue
?console.log("it is palindrome")
:console.log("it is not palindrome")
