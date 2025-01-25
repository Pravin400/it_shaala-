
// in if bolock contains " ",0-0,undefined,null,NaN is consider as a falsey statement
let x;
let y = null;
if(y){
    console.log("hello")
}
else{
    console.log("byee")
}

// switch block

let date =  2;
switch(date){
    case 1 : 
        console.log("Monday")
        break
    case 2 : 
        console.log("Tuesday")
        break
    case 3 : 
        console.log("Wednesday")
        break
    case 4 : 
        console.log("Thursday")
        break
    case 5 : 
        console.log("Friday")
        break
    case 6 : 
        console.log("Saturday")
        break
    case 7 : 
        console.log("Sunday")
        break
   default :
        console.log("!! Invalid Input !!")
}


