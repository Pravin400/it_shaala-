let arr = ["a","b","c","d"];
let arr1 = ["a","b","c","d"];
// this is spread operator use to merge 
let merge = [...arr,...arr1];
console.log(merge);


//ways of converting srting to array
let str = "hello";
let arr2 = [...str];
let reversearr = "";
console.log(arr2);//
//the converted array will be reversed
console.log(arr2.reverse());
//then again make array to string 
reversearr=arr2.join("")
//print the reverse string
console.log(reversearr)

//this also same method to above 
let str3 = "abc";
let arr3 = str.split(""); 
console.log(arr3); 



//array destructuring

let names = ["ram","sham","bamm"]
let [st1 , st2] = names;
console.log(st1);
console.log(st2);

/*

const arr = [10, 20, 30, 40, 50];

const [, second, , fourth] = arr;

console.log(second, fourth);
//
const nums = [1, 2, 3, 4, 5];

const [first, ...rest] = nums;

console.log(first, rest);
*/


//forEach method 
/*
(method) Array<string>.forEach(ca11backfn: (value:
=> void, thisArg?: any): void
Performs the specified action for each element in an array.
string,
index:
number,
array :
string[])
@param callbackfn — A function that accepts up to three arguments. forEach calls the callbackfn function
one time for each element in the array.
@param thisArg —An object to which the this keyword can refer in the callbackfn function. If thisArg is
omitted, undefined is used as the this value.
*/
let myArray = ["a","b","c","d"]
myArray.forEach((e1)=>{
    console.log(e1)
});

//map 

const newArray = myArray.map( (el) =>{
    return e1.toUpperCase();
});
console. log( newArray) ;

const filteredArray
if (el > e) {
return
true;
} else {
false;
return