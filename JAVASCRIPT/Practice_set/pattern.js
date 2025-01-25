// for(let i = 0;i<5;i++){
//     for(let j = 0;j<i;j++){
//         // console.log("*")
//         process.stdout.write("*"); 
//     }
// }

// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < i; j++) {
//         process.stdout.write("*");  // Prints '*' on the same line
//     }
//     console.log();  // Move to the next line after printing the '*'s for this row
// }

for (let i = 0; i < 5; i++) {
    let row = ''; 
    for (let j = 0; j < i; j++) {
        row += "*";  
    }
    console.log(row); 
}