let name = "salman";
const length = name.length;
console.log("start")
for(let i = 0; i< length; i++){
    
    console.log(name.at(i))
    console.log(name[i]);
}
console.log("End")
// to find the length of array and string yse 
// .length()
console.log(name.at(-1));

//.endswith() 
// check the string endswith correct character or not if 
// return true if endswith correct value 
console.log(name.endsWith("man"));
// return true if endswith correct value
console.log(name.endsWith("ma"));
// includes 
// it use in the search bar to check the each letters first word is same or not  it also returnes true false 
console.log(name.includes("a"))
// replace the name 
console.log(name.replaceAll("a","e"))
console.log(name.toUpperCase());
console.log(name.toLowerCase());
let userchoice ="                  name            "
console.log(userchoice);
console.log(userchoice.trim());

console.log(name.substring(1,3));//if write 2 to 5 goes to less then 5 
// start = start ||  end < end end value exclude 
let sp = " roll the intro "
console.log(sp.split(" "));
console.log(sp.split("t"));

