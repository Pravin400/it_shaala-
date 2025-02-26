// Arrays is collection of data 

// Array

let arr = ["salman","ajay","ganesh","mahesh"];
console.log(arr);//to print all array
let count = arr.length;
for(let i = 0; i < count; i++){
    console.log(arr[i])
}

// string is array of characters 

let string = "Salman"; 
console.log(string[3])
// arr.push(4)
// arr.pop();
// arr.shift()//to delete first 
// arr.pshift()

// console.log(arr);

// to print the array in uppercase in new array

let arr1 = ["salman","ajay","ganesh","mahesh"];
console.log(arr1);//to print all array
let newarr  = []
for(let i = 0; i < arr1.length; i++){
    let uppercase = arr[i].toUpperCase()

    newarr.push(uppercase);
}
console.log("to make array uppercase in differnt array ");
console.log(newarr);

// make uppercase array in same existing array
for(let i = 0; i < arr1.length; i++){
    arr[i] = arr[i].toUpperCase()

    // newarr.push(uppercase);
}

console.log("to make array uppercase in same array ");
console.log(arr);



// to print array one by one 
let names =["nn","nfed","fef","wede","fe"];
let newName = [];
for(let i =0 ; i<names.length;i++){
console.log(names[i]);

newName = names[i].toUpperCase();

console.log(newName);
}

// que2

// to make reverse array and store in diff array
 
let rev = ["name","address","age","postalcode"];
let revrse = [];
let length = rev.length - 1;
for(let i = length;i>=0;i--){
// remenber push when storing the array 
    revrse.push(rev[i]);
}
console.log(revrse)

// without using push

let revrse1 = [];
let length1 = rev.length - 1;

for (let i = length1, j = 0; i >= 0; i--, j++) {   // Need to Assign indexing to reverse when want to store without push
    revrse[j] = rev[i];
}

console.log(revrse);

// to reverse array have reverse() function

let array = ["a","b","c"]
array.reverse();
console.log(array)


// merging the array 

let merge = ["a","b","c"]
let merge1 = ["a","b","c"]
console.log("Before merging")
console.log(merge);
console.log(merge1);

for(let i = 0; i<merge1.length;i++){
    merge.push(merge1[i]);
}

console.log("After merging")
console.log(merge)

// or making the string reverse 