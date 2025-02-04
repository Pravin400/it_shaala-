// function Expression
// function declaration you can acces  function only before their declaration
const sample = function doSomething(){
    console.log(" Functon Expression ")
}
// calling method is similar to the normal function 
// but insted of calling function name call thee the variable name 
sample()

let add = function adding( num1 ,num2 ){
    return num1 +num2
}
console.log(add(10,20))

// arrow functions --> ES6
// function declaration you can acces  function only before their declaration

const name = (num1 ,num2 ) =>{
    return num1 +num2

}
console.log(name(100,20))


// simpler syntac to write the arroww function

// when your function is directly the return function so instead of writng the retuen we write directly in this way 
const name1 = (num1 ,num2 ) => num1 +num2
console.log(name1(100,20))

// when we take only a sinlgle parameter we not need to write parenthisis
const name2 = num => num+2
console.log(name2(100))


//IN NORMAL FUNCTION DELCARATION 
// function declaration you can acces  function  before and after  their declaration

// we can pass multiple function as a parameter 