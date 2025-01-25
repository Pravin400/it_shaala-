
// outerlopp is a name given as a label to the external loop


// outerloop:for(let i = 1;i<=5;i++){
//     console.log("from Outer loop 1")
//     for(let j = 1;j<=5;j++){
//        if(i  == 3){
//             break outerloop;
//         } 
//         console.log(j)
        
//     }
// }


// let i= 1;
// while(i <= 100){
    
//     if(i % 2==0){
//         console.log(i)
//     }
//     i++;
// }


let i = 0
while(i <= 10){
    console.log(i);
    i += 2;

}

// do while loop 

let j = 1;
do{
    console.log("the numder is " + j)
    j ++;
}
while(j <10)

//  math 
for(i = 0;i < 10;i++){
    let key = (Math.random()*100);
// math.randon generates the randon value between 0-1(not exact 0 or not exact 1)
    console.log(Math.floor(key)) 
// mathfloor makes roundup of the value 
}
