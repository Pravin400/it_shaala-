console.log(typeof Math) //object 

const maxnum = Math.max(1,2,3,5,8,97,65,5,5)

console.log(maxnum)
const minnum = Math.min(1,2,3,5,8,97,65,5,5)

console.log(minnum)

let rand = Math.random(); 
console.log(rand)

let randnum = Math.random()*10; 
// fleeo gives the decimal number 
console.log( Math.floor(randnum))

console.log("ceil" , randnum)
// ceil gives the next number 
console.log( Math.ceil(randnum))


// console.log("round" , randnum)
// console.log( Math.roundoff(randnum))
// floor gives small number every time according to number line 
let no = -2.9;
console.log( Math.floor(no))
// ceil gives large number every time according to number line 
console.log( Math.ceil(no))
// round gives number is greater than 5 gives of decimal goes up to .5
console.log( Math.round(no))
// generating random number bet ween 0 - 20 

// let number = Math.random()*20;
let number = Math.floor(Math.random()*20);

console.log( number)
// generating random number bet ween 10 - 20 
let row = Math.ceil(Math.random()*10);

console.log( row+10)

let row1 = Math.floor(Math.random()*10000);
// generating random number bet ween 10 - 20 
console.log( row1+1000)

let k1 = 1000;
let k2 = 300;
let k3 = 30;

// let k4 = Math.random()*10;
// let k5 = Math.random()*10;
// let k6 = Math.random()*10;


console.log(Math.max(k1,k2));
// finding greater between 3 numbers
console.log(Math.max(k1,k2,k3));

// without using the mac method 
if (k1 > k2){
    console.log(k1,"Is greater")
}
else{
    console.log(k2,"Is greater")
}

// using the if else 
if(k1>k2){
    if(k1>k3){
        console.log(k1,"Is greater")
    }
}
else if(k2>k3){
    console.log(k2,"Is greater")
}
else{
    console.log(k3,"Is greater")
}

// using operator
if(k1>k2 && k1>k3){
    
        console.log(k1,"Is greater")
    
}
else if(k2>k3){
    console.log(k2,"Is greater")
}
else{
    console.log(k3,"Is greater")
}


// prime number 
// let prime = 11;


for(let prime = 2;prime<100;prime++){
    for( let i = 2; i < prime ;i++){
        if(prime%i === 0){
            console.log(prime , "Is a prime")
        }
        else {
            // console.log(prime , "Is a prime")

        }
    }
}

console.log(typeof(Math))
// const rfloat1 = Math.random() * 9;
// const rnum1 = Math.floor(rfloat1);
// num1 = rnum1 + 1;

// const rfloat2 = Math.random() * 9;
// const rnum2 = Math.floor(rfloat2);
// num2 = rnum2 + 1;

// const rfloat3 = Math.random() * 9;
// const rnum3 = Math.floor(rfloat3);
// num3 = rnum3 + 1;

// const rfloat4 = Math.random() * 9;
// const rnum4 = Math.floor(rfloat4);
// num4 = rnum4 + 1;

// console.log(num1, num2, num3, num4);
