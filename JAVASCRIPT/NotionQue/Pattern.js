/*
*
**
***
****
*****
*/
// let pattern = 5
// // console.log(pattern)


// for(let i = 0;i<pattern;i++){

//     // need to make empty string

//     let pattern1 = " ";
//     for(let j = 0;j<i;j++){
        
//         pattern1 += "*";
//     }
//     console.log(pattern1)
// }

// instead of printing star print number with increment 
// let a = 1
// for(let i = 0;i<5;i++){

//     // need to make empty string
    
//     let pattern1 = "  ";
    
//     for(let j = 0;j<i;j++){
        
//         pattern1 += a;
//         a++;
//     }
//     console.log(pattern1)
// }

// PRINT NUMBER ACCORDING TO THE ROW SECUENCE 1 ROW 1ST NUMBER ,2ND ROE 2ND NUMBER

// let b = 0;
// for(let i = 0;i<6;i++){

//     // need to make empty string
    
//     let pattern1 = "  ";
    
//     for(let j = 0;j<i;j++){
        
//         pattern1 += b;
        
//     }
    
//     console.log(pattern1)
//     b++;
// }

// PRINT PYRAMID PATTERN

/*
    1
   222
  33333
 4444444
*/
let print = 5;
let num  = print;
let star = "* "
let pattern = " "; 
let no; 
// for * number of times
for(let i = 1;i<=num;i++){ 
    no = 1;
    if(i == num){
       
        for(let j = 0;j<=no;j++){
            if(no <= print){
                pattern += star;
            }
            else{
                break 
            }
            ++no;
        }
        
        console.log(pattern)
        --num;
    }
    
}

